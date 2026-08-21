import { seeded } from "@/lib/hash";

/**
 * The no-WebGL rendering of the hero field. Same visual language, zero JS cost —
 * used for reduced-motion, small screens and low-power devices.
 */
const W = 900;
const H = 620;

const build = () => {
  const rand = seeded(20260821);
  const nodes: { x: number; y: number; r: number; hot: boolean }[] = [];
  const cols = 13;
  const rows = 10;
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      if (rand() < 0.16) continue;
      nodes.push({
        x: (c / (cols - 1)) * W + (rand() - 0.5) * 46,
        y: (r / (rows - 1)) * H + (rand() - 0.5) * 44,
        r: 1.4 + rand() * 1.9,
        hot: rand() < 0.08,
      });
    }
  }
  const max = (W / cols) * 1.5;
  const edges: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    let linked = 0;
    for (let j = i + 1; j < nodes.length && linked < 2; j++) {
      const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (d > max || rand() < 0.45) continue;
      edges.push([i, j]);
      linked++;
    }
  }
  return { nodes, edges };
};

const { nodes, edges } = build();

export function StaticTopology({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="topo-mask" x1="0" x2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="42%" stopColor="white" stopOpacity="0.75" />
          <stop offset="100%" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id="topo-fade">
          <rect width={W} height={H} fill="url(#topo-mask)" />
        </mask>
      </defs>
      <g mask="url(#topo-fade)">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="var(--viz-line)"
            strokeWidth="1"
            opacity="0.55"
          />
        ))}
        {nodes.map((n, i) =>
          n.hot ? (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={n.r * 4} fill="var(--accent)" opacity="0.13" />
              <circle cx={n.x} cy={n.y} r={n.r + 0.7} fill="var(--accent)" />
            </g>
          ) : (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="var(--viz-node)"
              opacity="0.7"
            />
          )
        )}
      </g>
    </svg>
  );
}
