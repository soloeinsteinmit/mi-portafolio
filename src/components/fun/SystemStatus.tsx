"use client";

import { useState } from "react";
import { site } from "@/content/site";

/** Reads as a status light; on hover it tells you what it is actually watching. */
export function SystemStatus() {
  const [hover, setHover] = useState(false);
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      tabIndex={0}
      className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-accent/40"
    >
      <span
        className="size-1.5 shrink-0 rounded-full bg-[var(--ok)]"
        style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }}
      />
      <span className="truncate">
        {hover ? site.currentlyBuilding : "Currently building"}
      </span>
    </span>
  );
}
