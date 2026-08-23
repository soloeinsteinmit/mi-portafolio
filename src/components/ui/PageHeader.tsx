import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { PageArt, type ArtVariant } from "@/components/art/PageArt";

export function PageHeader({
  eyebrow,
  title,
  intro,
  meta,
  art,
  figure,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  meta?: ReactNode;
  /** Each page gets its own figure, so no two headers draw the same thing. */
  art: ArtVariant;
  /** Plate caption, e.g. "Fig. 02 — two sources, one pattern". */
  figure?: string;
}) {
  return (
    <header className="relative isolate flex min-h-[72svh] flex-col justify-end overflow-hidden border-b border-border">
      <PageArt variant={art} className="page-art" intensity={0.55} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-14 md:px-8 md:pb-20">
        <Reveal>
          <p className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-border pb-4 font-mono text-[10.5px] tracking-[0.18em] text-faint uppercase">
            <span className="text-muted">{eyebrow}</span>
            {figure ? (
              <>
                <span className="hidden text-border-strong sm:inline">/</span>
                <span>{figure}</span>
              </>
            ) : null}
          </p>
          <h1 className="display text-[clamp(2.4rem,6vw,3.9rem)] leading-[1.02] font-normal tracking-[-0.02em] text-text">
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
