"use client";

import { useEffect, useState } from "react";
import { listings, type Kind } from "@/content/listings";

const CLASS: Record<Kind, string> = {
  kw: "text-accent",
  com: "text-faint italic",
  str: "text-[var(--ok)]",
  num: "text-[var(--warn)]",
  fn: "text-text",
  type: "text-muted",
};

/**
 * Epigraphs, compiled.
 *
 * An editor pane rather than a code block: each tab is one quotation written
 * as a program in a different language. The status bar carries the attribution
 * so the source is never lost in the joke. Advances every 10s and hands over
 * control the moment a tab or dot is used.
 */
export function CodePlate() {
  const [i, setI] = useState(0);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    if (manual) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % listings.length), 10000);
    return () => clearInterval(id);
  }, [manual]);

  const l = listings[i];
  const pick = (n: number) => {
    setI(n);
    setManual(true);
  };

  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface-2/60 shadow-card">
      {/* window chrome + file tabs */}
      <div className="flex items-stretch gap-0 overflow-x-auto border-b border-border bg-surface/70">
        <div className="flex shrink-0 items-center gap-1.5 px-4">
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
        </div>
        {listings.map((item, n) => (
          <button
            key={item.file}
            type="button"
            onClick={() => pick(n)}
            aria-current={n === i}
            className={`shrink-0 border-r border-border px-4 py-3 font-mono text-[11.5px] transition-colors first:border-l ${
              n === i
                ? "bg-surface-2 text-text"
                : "text-faint hover:bg-surface-2/50 hover:text-muted"
            }`}
          >
            {item.file}
          </button>
        ))}
      </div>

      {/* editor body */}
      <div key={i} className="quote-fade overflow-x-auto">
        <pre className="flex min-w-max font-mono text-[12.5px] leading-[1.85]">
          <code
            aria-hidden
            className="shrink-0 border-r border-border/70 bg-surface/40 px-3 py-5 text-right text-faint select-none"
          >
            {l.lines.map((_, n) => (
              <div key={n}>{n + 1}</div>
            ))}
          </code>
          <code className="px-5 py-5 text-muted">
            {l.lines.map((line, li) => (
              <div key={li} className="whitespace-pre">
                {line.length === 0
                  ? " "
                  : line.map((tok, ti) => (
                      <span key={ti} className={tok.k ? CLASS[tok.k] : undefined}>
                        {tok.t}
                      </span>
                    ))}
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* status bar */}
      <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border bg-surface/70 px-4 py-3">
        <span className="flex items-center gap-2">
          {listings.map((item, n) => (
            <button
              key={item.file}
              type="button"
              onClick={() => pick(n)}
              aria-label={`${item.file} — ${item.who}`}
              aria-current={n === i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                n === i ? "w-6 bg-accent" : "w-1.5 bg-border-strong hover:bg-faint"
              }`}
            />
          ))}
        </span>
        <span className="font-mono text-[10.5px] tracking-[0.14em] text-faint uppercase">
          {l.who} <span className="text-border-strong">·</span> {l.where}
        </span>
        <span className="ml-auto flex items-center gap-4 font-mono text-[10.5px] tracking-[0.14em] text-faint uppercase">
          <span className="text-muted">{l.lang}</span>
          <span>
            {String(i + 1).padStart(2, "0")}/{String(listings.length).padStart(2, "0")}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
