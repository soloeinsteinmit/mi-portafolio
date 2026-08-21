"use client";

import { motion } from "motion/react";
import { inView } from "@/lib/motion";

/**
 * Architecture flow. Deliberately plain: a diagram earns its place by making
 * the shape of a system obvious, not by decorating the page.
 */
export function FlowDiagram({
  steps,
  label = "Architecture",
}: {
  steps: { label: string; note?: string }[];
  label?: string;
}) {
  return (
    <figure className="rounded-xl border border-border bg-surface-2/60 p-5 md:p-7">
      <figcaption className="label mb-5">{label}</figcaption>
      <motion.ol
        className="flex flex-col gap-2 md:flex-row md:items-stretch md:gap-0"
        initial="hidden"
        whileInView="show"
        viewport={inView}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      >
        {steps.map((s, i) => (
          <motion.li
            key={s.label}
            className="flex min-w-0 flex-1 items-center gap-2 md:flex-col md:items-stretch md:gap-0"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
            }}
          >
            <div className="flex-1 rounded-lg border border-border bg-surface px-3.5 py-3 md:mx-1">
              <div className="font-mono text-[10px] text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-1 text-sm leading-snug font-medium text-text">{s.label}</div>
              {s.note ? (
                <div className="mt-1 text-xs leading-snug text-faint">{s.note}</div>
              ) : null}
            </div>
            {i < steps.length - 1 ? (
              <span
                aria-hidden
                className="shrink-0 self-center font-mono text-sm text-border-strong md:hidden"
              >
                ↓
              </span>
            ) : null}
          </motion.li>
        ))}
      </motion.ol>
      {/* Desktop connector rail, drawn once the steps have landed. */}
      <motion.div
        aria-hidden
        className="mt-4 hidden h-px origin-left bg-gradient-to-r from-accent/50 via-border-strong to-transparent md:block"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={inView}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </figure>
  );
}
