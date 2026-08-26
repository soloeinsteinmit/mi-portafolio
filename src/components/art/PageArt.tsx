"use client";

import { useEffect, useRef } from "react";

export type ArtVariant =
  | "binary" // home — noise resolving into signal
  | "contour" // a field being probed
  | "interference" // research — two sources, one pattern
  | "orbit" // work — systems held in tension
  | "spectrum" // experience — signal resolved over time
  | "radial" // talks — something propagating outward
  | "diffusion" // writing — ink finding its shape
  | "constellation"; // gallery — observations becoming a connected field

/**
 * One canvas engine, six figures.
 *
 * Each page gets its own piece so the header is never twice the same drawing.
 * They share the rules: monochrome plus a single accent, driven by an elapsed
 * clock and the pointer, still for reduced-motion, paused off-screen, and
 * always masked away from the text.
 */
export function PageArt({
  variant,
  className = "",
  intensity = 1,
}: {
  variant: ArtVariant;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = reduced ? 12 : 0;

    const read = () => {
      const cs = getComputedStyle(document.documentElement);
      return {
        line: cs.getPropertyValue("--viz-line").trim() || "#3a3a3a",
        node: cs.getPropertyValue("--viz-node").trim() || "#8a8a8a",
        accent: cs.getPropertyValue("--accent").trim() || "#5cc8ff",
      };
    };
    let c = read();

    const ptr = { x: -9999, y: -9999, tx: -9999, ty: -9999, k: 0, tk: 0 };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      if (w === 0 || h === 0) return;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    /* ---------------------------------------------------------------- figures */

    /**
     * A machine reading itself into order. A lattice of bits sits at low
     * contrast and flickers; a slow diagonal front sweeps through, and inside
     * it the noise resolves — brighter, steadier, occasionally accented. The
     * pointer resolves a patch of its own.
     */
    const CELL = 18;
    let bits: Uint8Array = new Uint8Array(0);
    let jitter: Float32Array = new Float32Array(0);
    let cols = 0;
    let rows = 0;

    const seedBits = () => {
      cols = Math.ceil(w / CELL) + 1;
      rows = Math.ceil(h / CELL) + 1;
      const n = cols * rows;
      if (bits.length !== n) {
        bits = new Uint8Array(n);
        jitter = new Float32Array(n);
        for (let i = 0; i < n; i++) {
          bits[i] = Math.random() < 0.5 ? 0 : 1;
          jitter[i] = Math.random();
        }
      }
    };

    const binary = () => {
      seedBits();
      ctx.font =
        '600 10px ui-monospace, SFMono-Regular, Menlo, "JetBrains Mono", monospace';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      /*
       * The front is deliberately soft and slightly curved.
       *
       * A straight `x + y = k` boundary with a tight falloff draws a hard
       * diagonal, and where that diagonal meets two edges of the canvas it
       * reads as a triangular wedge rather than a passing wave. Widening the
       * falloff, bending the front, and removing the hard colour threshold
       * keeps it a gradient the whole way across.
       */
      const span = w + h;
      const margin = 700;
      const period = span + margin * 2;
      // ~20s per sweep. The clock advances 0.007/frame, so the multiplier has
      // to be large; too small and the "wave" parks on screen as a static
      // bright wedge instead of crossing it.
      const front = ((t * 450) % period) - margin;

      for (let cx = 0; cx < cols; cx++) {
        for (let cy = 0; cy < rows; cy++) {
          const i = cy * cols + cx;
          const x = cx * CELL + CELL / 2;
          const y = cy * CELL + CELL / 2;

          // bend the wavefront so it never reads as a ruled line
          const along = x + y + Math.sin(y * 0.005 + t * 0.35) * 140;
          const dist = Math.abs(along - front);
          const inFront = Math.exp(-((dist / 300) ** 2));

          /*
           * The pointer gets its own brightness term rather than sharing the
           * wave's. They were previously summed into one value and scaled by
           * the same (deliberately low) coefficient, so calming the wave down
           * also dimmed the cursor to near-invisibility.
           */
          const glow =
            Math.exp(-((Math.hypot(x - ptr.x, y - ptr.y) / 170) ** 2)) * ptr.k;
          const resolved = Math.min(1, inFront + glow);

          // flicker fades out with the wave instead of switching off at a line
          if (Math.random() < 0.014 * (1 - resolved)) bits[i] ^= 1;

          const base = 0.055 + jitter[i] * 0.055;
          const alpha = (base + inFront * 0.3 + glow * 1.05) * intensity;
          if (alpha < 0.015) continue;

          // accent cells are chosen once, then simply brighten as the wave
          // passes — no threshold, so no visible colour boundary
          // The pointer only adds light — no tint. Colour stays reserved for
          // the sparse accent cells, exactly as it is under the wave.
          const isAccent = jitter[i] > 0.86;
          ctx.globalAlpha = Math.min(
            1,
            isAccent ? alpha * (0.25 + resolved * 0.75) : alpha
          );
          ctx.fillStyle = isAccent ? c.accent : c.node;
          ctx.fillText(bits[i] ? "1" : "0", x, y);
        }
      }
    };

    const contour = () => {
      const LINES = 26;
      for (let i = 0; i < LINES; i++) {
        const p = i / (LINES - 1);
        const baseY = p * h;
        const hot = i === 10 || i === 16;
        ctx.beginPath();
        for (let x = -16; x <= w + 16; x += 16) {
          const k = x * 0.0042;
          let y =
            baseY +
            Math.sin(k * 1.7 + t * 0.5 + p * 5.4) * (9 + p * 15) +
            Math.sin(k * 3.3 - t * 0.33 + p * 2.6) * 6.5;
          const dx = (x - ptr.x) / 170;
          const dy = (baseY - ptr.y) / 130;
          y -= Math.exp(-(dx * dx + dy * dy)) * 52 * ptr.k;
          if (x === -16) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = hot ? c.accent : c.line;
        ctx.globalAlpha = (hot ? 0.6 : 0.3 + p * 0.22) * intensity;
        ctx.lineWidth = hot ? 1.4 : 1;
        ctx.stroke();
      }
    };

    /** Two-source interference — the classic figure for "how do we know?". */
    const interference = () => {
      const s1 = { x: w * 0.32, y: h * 0.42 };
      const s2 = {
        x: w * 0.62 + Math.sin(t * 0.25) * w * 0.05,
        y: h * 0.6 + Math.cos(t * 0.2) * h * 0.08,
      };
      const step = 22;
      for (let x = step / 2; x < w; x += step) {
        for (let y = step / 2; y < h; y += step) {
          const d1 = Math.hypot(x - s1.x, y - s1.y);
          const d2 = Math.hypot(x - s2.x, y - s2.y);
          const phase = Math.cos((d1 - d2) * 0.055 - t * 0.9);
          const m = Math.abs(phase);
          if (m < 0.18) continue;
          const near = Math.exp(-((Math.hypot(x - ptr.x, y - ptr.y) / 180) ** 2)) * ptr.k;
          const r = (0.7 + m * 2.1) * (1 + near * 1.1);
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = phase > 0 ? c.node : c.line;
          ctx.globalAlpha = (0.12 + m * 0.4 + near * 0.3) * intensity;
          ctx.fill();
        }
      }
      for (const s of [s1, s2]) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2.6, 0, Math.PI * 2);
        ctx.fillStyle = c.accent;
        ctx.globalAlpha = 0.85 * intensity;
        ctx.fill();
      }
    };

    /** Precessing ellipses — bodies held in a system. */
    const orbit = () => {
      const cx = w * 0.62;
      const cy = h * 0.5;
      const RINGS = 9;
      for (let i = 0; i < RINGS; i++) {
        const p = i / (RINGS - 1);
        const rx = (40 + p * Math.min(w, h) * 0.62) * 1.35;
        const ry = 30 + p * Math.min(w, h) * 0.42;
        const rot = t * (0.06 + p * 0.05) + p * 1.4;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, rot, 0, Math.PI * 2);
        ctx.strokeStyle = i === 4 ? c.accent : c.line;
        ctx.globalAlpha = (i === 4 ? 0.5 : 0.26) * intensity;
        ctx.lineWidth = 1;
        ctx.stroke();

        const a = t * (0.5 - p * 0.32) + p * 6.2;
        const bx = cx + Math.cos(a) * rx * Math.cos(rot) - Math.sin(a) * ry * Math.sin(rot);
        const by = cy + Math.cos(a) * rx * Math.sin(rot) + Math.sin(a) * ry * Math.cos(rot);
        ctx.beginPath();
        ctx.arc(bx, by, i === 4 ? 3 : 1.8, 0, Math.PI * 2);
        ctx.fillStyle = i === 4 ? c.accent : c.node;
        ctx.globalAlpha = (i === 4 ? 0.95 : 0.5) * intensity;
        ctx.fill();
      }
    };

    /** A signal resolved into bands — time on one axis, magnitude on the other. */
    const spectrum = () => {
      const BARS = Math.max(28, Math.floor(w / 26));
      for (let i = 0; i < BARS; i++) {
        const p = i / (BARS - 1);
        const x = p * w;
        const env =
          Math.abs(Math.sin(p * 7 + t * 0.5)) * 0.5 +
          Math.abs(Math.sin(p * 17 - t * 0.31)) * 0.32 +
          Math.abs(Math.sin(p * 3 + t * 0.13)) * 0.18;
        const near = Math.exp(-(((x - ptr.x) / 150) ** 2)) * ptr.k;
        const len = (h * 0.16 + env * h * 0.42) * (1 + near * 0.5);
        const hot = Math.abs(p - 0.5 - Math.sin(t * 0.2) * 0.28) < 0.02;
        ctx.beginPath();
        ctx.moveTo(x, h * 0.5 - len / 2);
        ctx.lineTo(x, h * 0.5 + len / 2);
        ctx.strokeStyle = hot ? c.accent : c.line;
        ctx.globalAlpha = (hot ? 0.75 : 0.2 + env * 0.35) * intensity;
        ctx.lineWidth = hot ? 1.6 : 1;
        ctx.stroke();
      }
    };

    /** Wavefronts leaving a point — something said, travelling outward. */
    const radial = () => {
      const cx = w * 0.5;
      const cy = h * 0.55;
      const RINGS = 14;
      for (let i = 0; i < RINGS; i++) {
        const phase = (t * 0.16 + i / RINGS) % 1;
        const r = phase * Math.max(w, h) * 0.72;
        const fade = (1 - phase) * (phase < 0.06 ? phase / 0.06 : 1);
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.13) {
          const wob = 1 + Math.sin(a * 5 + t * 0.6 + i) * 0.035;
          const x = cx + Math.cos(a) * r * 1.5 * wob;
          const y = cy + Math.sin(a) * r * wob;
          if (a === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = i % 5 === 0 ? c.accent : c.line;
        ctx.globalAlpha = fade * (i % 5 === 0 ? 0.45 : 0.3) * intensity;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    /** Particles drifting through a curl field — ink finding its shape. */
    const seeds: { x: number; y: number; a: number }[] = [];
    const diffusion = () => {
      if (!seeds.length) {
        for (let i = 0; i < 90; i++) {
          seeds.push({ x: Math.random() * w, y: Math.random() * h, a: Math.random() });
        }
      }
      for (const s of seeds) {
        const ang =
          Math.sin(s.x * 0.006 + t * 0.2) * 2 + Math.cos(s.y * 0.007 - t * 0.16) * 2;
        s.x += Math.cos(ang) * 0.7;
        s.y += Math.sin(ang) * 0.7;
        if (s.x < -20) s.x = w + 20;
        if (s.x > w + 20) s.x = -20;
        if (s.y < -20) s.y = h + 20;
        if (s.y > h + 20) s.y = -20;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.1 + s.a * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = s.a > 0.92 ? c.accent : c.node;
        ctx.globalAlpha = (0.12 + s.a * 0.3) * intensity;
        ctx.fill();
      }
    };

    /** Drifting observations that briefly resolve into a connected field. */
    const observations: { x: number; y: number; vx: number; vy: number; z: number }[] = [];
    const constellation = () => {
      if (!observations.length) {
        for (let i = 0; i < 48; i++) {
          observations.push({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.16,
            vy: (Math.random() - 0.5) * 0.12,
            z: Math.random(),
          });
        }
      }

      const reach = Math.min(190, w * 0.18);
      for (const p of observations) {
        p.x += p.vx * (0.45 + p.z);
        p.y += p.vy * (0.45 + p.z);

        const pd = Math.hypot(p.x - ptr.x, p.y - ptr.y);
        if (pd < 170 && pd > 1) {
          const pull = (1 - pd / 170) * ptr.k * 0.22;
          p.x += ((ptr.x - p.x) / pd) * pull;
          p.y += ((ptr.y - p.y) / pd) * pull;
        }

        if (p.x < -12) p.x = w + 12;
        if (p.x > w + 12) p.x = -12;
        if (p.y < -12) p.y = h + 12;
        if (p.y > h + 12) p.y = -12;
      }

      for (let i = 0; i < observations.length; i++) {
        const a = observations[i];
        for (let j = i + 1; j < observations.length; j++) {
          const b = observations[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d >= reach) continue;
          const hot = (i * 7 + j * 11) % 29 === 0;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = hot ? c.accent : c.line;
          ctx.globalAlpha = (1 - d / reach) * (hot ? 0.75 : 0.42) * intensity;
          ctx.lineWidth = hot ? 1.2 : 0.8;
          ctx.stroke();
        }
      }

      observations.forEach((p, i) => {
        const hot = i % 13 === 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, hot ? 2.5 : 1 + p.z * 1.25, 0, Math.PI * 2);
        ctx.fillStyle = hot ? c.accent : c.node;
        ctx.globalAlpha = (hot ? 0.85 : 0.32 + p.z * 0.35) * intensity;
        ctx.fill();
      });
    };

    const FIGURES = {
      binary,
      contour,
      interference,
      orbit,
      spectrum,
      radial,
      diffusion,
      constellation,
    };

    const draw = () => {
      if (w === 0 || h === 0) return;
      ctx.clearRect(0, 0, w, h);
      FIGURES[variant]();
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      t += 0.007;
      ptr.x += (ptr.tx - ptr.x) * 0.07;
      ptr.y += (ptr.ty - ptr.y) * 0.07;
      ptr.k += (ptr.tk - ptr.k) * 0.14;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (ptr.x < -1000) {
        ptr.x = x;
        ptr.y = y;
      }
      ptr.tx = x;
      ptr.ty = y;
      ptr.tk = x > -100 && x < r.width + 100 && y > -100 && y < r.height + 100 ? 1 : 0;
    };

    resize();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      if (reduced) draw();
    });
    ro.observe(canvas);

    const themeObs = new MutationObserver(() => {
      c = read();
      if (reduced) draw();
    });
    themeObs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    if (reduced) {
      return () => {
        ro.disconnect();
        themeObs.disconnect();
      };
    }

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !raf) raf = requestAnimationFrame(loop);
      else if (!e.isIntersecting && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    io.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      io.disconnect();
      ro.disconnect();
      themeObs.disconnect();
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [variant, intensity]);

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <canvas ref={ref} className="size-full" />
    </div>
  );
}
