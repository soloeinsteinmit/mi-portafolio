import Image from "next/image";
import { hashString, seeded } from "@/lib/hash";

type Motif = "network" | "field" | "trace" | "contour";
const MOTIFS: Motif[] = ["network", "field", "trace", "contour"];

const W = 480;
const H = 300;

type Node = { x: number; y: number; r: number; hot: boolean };
type Edge = [number, number];
type Lane = { d: string; y: number; hot: boolean };
type Ring = { d: string };

type Art =
  | { kind: "network"; nodes: Node[]; edges: Edge[] }
  | { kind: "field"; segs: { x1: number; y1: number; x2: number; y2: number; hot: boolean }[] }
  | { kind: "trace"; lanes: Lane[] }
  | { kind: "contour"; cx: number; cy: number; rings: Ring[] };

/**
 * Geometry is computed once per seed and cached.
 *
 * This has to be a pure function of the seed rather than a generator threaded
 * through the component tree: a stateful PRNG consumed during render produces
 * different output on a re-render, which shows up as a hydration mismatch.
 */
const cache = new Map<string, Art>();

/**
 * Coordinates are rounded before they reach the DOM. Math.sin/cos may differ in
 * the last bit between the Node build and the browser, and full-precision
 * floats in SVG attributes turn that into a hydration mismatch.
 */
const r2 = (n: number) => Math.round(n * 100) / 100;

function buildArt(seed: string, forced?: Motif): Art {
  const key = `${seed}::${forced ?? ""}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const h = hashString(seed);
  const rand = seeded(h);
  const kind = forced ?? MOTIFS[h % MOTIFS.length];
  let art: Art;

  if (kind === "network") {
    const cols = 6;
    const rows = 4;
    const nodes: Node[] = [];
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (rand() < 0.18) continue;
        nodes.push({
          x: r2(((c + 0.5) / cols) * W + (rand() - 0.5) * 44),
          y: r2(((r + 0.5) / rows) * H + (rand() - 0.5) * 40),
          r: r2(2 + rand() * 2.6),
          hot: false,
        });
      }
    }
    const edges: Edge[] = [];
    nodes.forEach((n, i) => {
      const count = rand() < 0.4 ? 2 : 1;
      const near = nodes
        .map((m, j) => ({ j, d: Math.hypot(m.x - n.x, m.y - n.y) }))
        .filter((m) => m.j !== i && m.d < 150)
        .sort((a, b) => a.d - b.d)
        .slice(0, count);
      near.forEach((m) => edges.push([i, m.j]));
    });
    for (let k = 0; k < 3 && nodes.length; k++) {
      nodes[Math.floor(rand() * nodes.length)].hot = true;
    }
    art = { kind, nodes, edges };
  } else if (kind === "field") {
    const cols = 16;
    const rows = 10;
    const a = 0.35 + rand() * 0.5;
    const b = 0.28 + rand() * 0.5;
    const phase = rand() * Math.PI * 2;
    const segs = [];
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = ((c + 0.5) / cols) * W;
        const y = ((r + 0.5) / rows) * H;
        const angle = Math.sin(c * a + phase) + Math.cos(r * b - phase) * 0.9;
        const len = 9 + Math.abs(Math.sin(c * 0.4 + r * 0.3)) * 7;
        const dx = Math.cos(angle) * len;
        const dy = Math.sin(angle) * len;
        segs.push({
          x1: r2(x - dx / 2),
          y1: r2(y - dy / 2),
          x2: r2(x + dx / 2),
          y2: r2(y + dy / 2),
          hot: Math.abs(Math.sin(c * a + r * b)) > 0.93,
        });
      }
    }
    art = { kind, segs };
  } else if (kind === "trace") {
    const count = 5;
    const lanes: Lane[] = [];
    for (let i = 0; i < count; i++) {
      const y = ((i + 0.5) / count) * H;
      const amp = 6 + rand() * 16;
      const freq = 1.4 + rand() * 2.2;
      const off = rand() * Math.PI * 2;
      const d = Array.from({ length: 33 }, (_, k) => {
        const x = (k / 32) * W;
        const yy = y + Math.sin((k / 32) * Math.PI * freq + off) * amp;
        return `${k === 0 ? "M" : "L"}${x.toFixed(1)},${yy.toFixed(1)}`;
      }).join(" ");
      lanes.push({ d, y: r2(y), hot: i === Math.floor(count / 2) });
    }
    art = { kind, lanes };
  } else {
    const cx = W * (0.34 + rand() * 0.32);
    const cy = H * 0.5;
    const jitter = Array.from({ length: 12 }, () => 0.78 + rand() * 0.44);
    const rings = Array.from({ length: 8 }, (_, i) => {
      const base = 16 + i * 15;
      const d = jitter
        .map((j, k) => {
          const t = (k / jitter.length) * Math.PI * 2;
          const rr = base * (1 + (j - 1) * (0.25 + i * 0.04));
          return `${k === 0 ? "M" : "L"}${(cx + Math.cos(t) * rr * 1.5).toFixed(1)},${(
            cy +
            Math.sin(t) * rr
          ).toFixed(1)}`;
        })
        .join(" ");
      return { d: `${d} Z` };
    });
    art = { kind: "contour", cx: r2(cx), cy: r2(cy), rings };
  }

  cache.set(key, art);
  return art;
}

/**
 * Deterministic generated artwork, used whenever an entry has no image of its
 * own. The geometry comes from a hash of the entry's slug, so a project always
 * gets the same visual and a card never falls back to an empty grey box.
 */
export function GeneratedThumb({
  seed,
  className,
  motif,
}: {
  seed: string;
  className?: string;
  motif?: Motif;
}) {
  const art = buildArt(seed, motif);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={`tile-art ${className ?? ""}`}
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
    >
      <rect width={W} height={H} fill="var(--surface-2)" />
      <g opacity="0.5">
        {Array.from({ length: 8 }, (_, i) => (
          <line
            key={`gx-${i}`}
            x1={(i + 1) * (W / 9)}
            y1={0}
            x2={(i + 1) * (W / 9)}
            y2={H}
            stroke="var(--border)"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <line
            key={`gy-${i}`}
            x1={0}
            y1={(i + 1) * (H / 6)}
            x2={W}
            y2={(i + 1) * (H / 6)}
            stroke="var(--border)"
            strokeWidth="1"
          />
        ))}
      </g>

      {art.kind === "network" ? (
        <g>
          {art.edges.map(([a, b], i) => (
            <line
              key={i}
              x1={art.nodes[a].x}
              y1={art.nodes[a].y}
              x2={art.nodes[b].x}
              y2={art.nodes[b].y}
              stroke="var(--viz-line)"
              strokeWidth="1"
              opacity="0.9"
            />
          ))}
          {art.nodes.map((n, i) =>
            n.hot ? (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r={n.r * 3.4} fill="var(--accent)" opacity="0.14" />
                <circle className="tile-hot" cx={n.x} cy={n.y} r={n.r + 0.6} fill="var(--accent)" />
              </g>
            ) : (
              <circle key={i} cx={n.x} cy={n.y} r={n.r} fill="var(--viz-node)" opacity="0.85" />
            )
          )}
        </g>
      ) : null}

      {art.kind === "field" ? (
        <g>
          {art.segs.map((s, i) => (
            <line
              key={i}
              x1={s.x1}
              y1={s.y1}
              x2={s.x2}
              y2={s.y2}
              stroke={s.hot ? "var(--accent)" : "var(--viz-node)"}
              strokeWidth={s.hot ? 1.8 : 1.2}
              strokeLinecap="round"
              opacity={s.hot ? 0.95 : 0.6}
            />
          ))}
        </g>
      ) : null}

      {art.kind === "trace" ? (
        <g>
          {art.lanes.map((l, i) => (
            <path
              key={i}
              d={l.d}
              fill="none"
              stroke={l.hot ? "var(--accent)" : "var(--viz-line)"}
              strokeWidth={l.hot ? 2 : 1.25}
              opacity={l.hot ? 1 : 0.9}
              strokeLinecap="round"
            />
          ))}
          {art.lanes.map((l, i) => (
            <circle
              key={`n-${i}`}
              className={l.hot ? "tile-hot" : undefined}
              cx={W * (0.2 + i * 0.15)}
              cy={l.y}
              r={l.hot ? 4 : 2.6}
              fill={l.hot ? "var(--accent)" : "var(--viz-node)"}
            />
          ))}
        </g>
      ) : null}

      {art.kind === "contour" ? (
        <g>
          {art.rings.map((r, i) => (
            <path
              key={i}
              d={r.d}
              fill="none"
              stroke={i === 2 ? "var(--accent)" : "var(--viz-line)"}
              strokeWidth={i === 2 ? 1.8 : 1}
              opacity={i === 2 ? 1 : 0.85 - i * 0.06}
            />
          ))}
          <circle className="tile-hot" cx={art.cx} cy={art.cy} r="3.5" fill="var(--accent)" />
        </g>
      ) : null}
    </svg>
  );
}

/**
 * The one thumbnail entry point. Pass an image if you have one; otherwise the
 * generated visual keeps the layout intact and still looks deliberate.
 */
export function Thumb({
  src,
  alt,
  seed,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  src?: string;
  alt: string;
  seed: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!src) {
    return <GeneratedThumb seed={seed} className={`h-full w-full ${className}`} />;
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
    />
  );
}
