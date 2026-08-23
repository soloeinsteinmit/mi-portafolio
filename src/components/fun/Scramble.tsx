"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#01";

/**
 * Scrambles and re-resolves on hover only.
 *
 * Deliberately not run on mount: this wraps the name, and a visitor should
 * never arrive to find the most important text on the page unreadable while an
 * effect plays out.
 */
export function Scramble({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [out, setOut] = useState(text);
  const frame = useRef(0);
  const raf = useRef(0);
  const reduced = useRef(false);

  const run = useCallback(() => {
    if (reduced.current) return;
    cancelAnimationFrame(raf.current);
    frame.current = 0;
    const total = 20;
    const tick = () => {
      const f = frame.current;
      const progress = f / total;
      setOut(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            const settle = i / text.length;
            if (progress > settle + 0.28) return ch;
            if (progress < settle) return GLYPHS[(i * 7 + f * 3) % GLYPHS.length];
            return GLYPHS[(i * 3 + f * 5) % GLYPHS.length];
          })
          .join("")
      );
      frame.current += 1;
      if (f < total + text.length) raf.current = requestAnimationFrame(tick);
      else setOut(text);
    };
    raf.current = requestAnimationFrame(tick);
  }, [text]);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = raf;
    return () => cancelAnimationFrame(id.current);
  }, []);

  return (
    <span className={className} onPointerEnter={run}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>{out}</span>
    </span>
  );
}
