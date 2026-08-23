"use client";

import { useEffect, useState } from "react";

/**
 * A single mono line that cycles through what is actually true right now.
 * Terminal flavour without turning the page into a terminal.
 */
const LINES = [
  "entropy always wins — the trick is choosing where it lands",
  "all models are wrong; some are useful — G. Box, 1976",
  "O(n log n) is usually fast enough to stop arguing about",
  "a system you cannot observe is a system you cannot fix",
  "the map is not the territory; the schema is not the data",
  "nothing in production is deterministic until you prove it",
]

export function StatusLine() {
  const [i, setI] = useState(0);
  const [n, setN] = useState(LINES[0].length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let timer = 0;
    let idx = 0;
    let chars = LINES[0].length;
    let dir: 1 | -1 = -1;

    const step = () => {
      if (cancelled) return;
      chars += dir;
      if (chars <= 0) {
        dir = 1;
        idx = (idx + 1) % LINES.length;
        setI(idx);
      } else if (chars >= LINES[idx].length) {
        dir = -1;
        timer = window.setTimeout(step, 2600);
        setN(chars);
        return;
      }
      setN(Math.max(0, Math.min(chars, LINES[idx].length)));
      timer = window.setTimeout(step, dir === 1 ? 34 : 16);
    };

    timer = window.setTimeout(step, 2600);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <p className="font-mono text-[11.5px] tracking-[0.02em] text-faint">
      <span className="text-accent">$</span>{" "}
      <span className="caret">{LINES[i].slice(0, n)}</span>
    </p>
  );
}
