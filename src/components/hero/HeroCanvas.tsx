"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { StaticTopology } from "./StaticTopology";

const HeroVisual = dynamic(() => import("./HeroVisual"), {
  ssr: false,
  loading: () => <StaticTopology className="size-full" />,
});

type Mode = "static" | "webgl";

/**
 * Decides once, on the client, whether this device should get the live field.
 * Anything uncertain gets the static SVG — the page must never pay for the
 * visual with its own responsiveness.
 */
function decide(): Mode {
  if (typeof window === "undefined") return "static";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "static";
  if (window.innerWidth < 900) return "static";
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8;
  if (cores <= 4 || memory <= 4) return "static";
  if (window.matchMedia("(hover: none)").matches) return "static";
  try {
    const c = document.createElement("canvas");
    if (!c.getContext("webgl2") && !c.getContext("webgl")) return "static";
  } catch {
    return "static";
  }
  return "webgl";
}

export function HeroCanvas() {
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    // Defer past first paint so the headline is never waiting on this.
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => setMode(decide()), { timeout: 900 })
      : window.setTimeout(() => setMode(decide()), 260);
    return () => {
      if (window.cancelIdleCallback && typeof id === "number") window.cancelIdleCallback(id);
      else clearTimeout(id as number);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-45 lg:opacity-100"
    >
      {/*
        The field must never compete with the headline. On wide screens it is
        masked out of the left column, where the text lives; on narrow screens
        the text is full-width, so it fades downward out of the way instead.
      */}
      <div className="topo-mask absolute inset-0">
        {mode === "webgl" ? (
          <HeroVisual animate />
        ) : (
          <StaticTopology className="size-full" />
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}
