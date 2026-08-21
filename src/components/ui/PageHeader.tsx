import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <header className="relative border-b border-border">
      <div
        aria-hidden
        className="grid-field pointer-events-none absolute inset-0 opacity-60"
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-28 pb-14 md:px-8 md:pt-36 md:pb-20">
        <Reveal>
          <p className="label mb-5 flex items-center gap-3">
            <span className="text-accent">{eyebrow}</span>
            <span className="h-px w-8 bg-border-strong" />
          </p>
          <h1 className="text-[clamp(2.1rem,5.5vw,3.4rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-text">
            {title}
          </h1>
          {intro ? (
            <p className="pretty mt-6 max-w-2xl text-[16.5px] leading-relaxed text-muted">
              {intro}
            </p>
          ) : null}
          {meta ? <div className="mt-7">{meta}</div> : null}
        </Reveal>
      </div>
    </header>
  );
}
