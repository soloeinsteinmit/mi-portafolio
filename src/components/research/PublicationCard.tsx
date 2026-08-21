import Link from "next/link";
import type { Publication } from "@/content/types";
import { getProject } from "@/content/projects";
import { Reveal } from "@/components/ui/Reveal";

export function PublicationCard({
  pub,
  lead = false,
  index,
}: {
  pub: Publication;
  lead?: boolean;
  index: number;
}) {
  const related = pub.relatedProject ? getProject(pub.relatedProject) : undefined;

  return (
    <Reveal
      as="article"
      delay={index}
      className={`group relative rounded-xl border p-6 transition-colors md:p-8 ${
        lead
          ? "border-accent/30 bg-accent-soft/40"
          : "border-border bg-surface hover:border-border-strong"
      }`}
    >
      <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px]">
        <span className={lead ? "text-accent" : "text-faint"}>{pub.year}</span>
        <span className="text-border-strong">·</span>
        <span className={lead ? "font-medium text-accent" : "text-muted"}>
          {pub.authorPosition}
        </span>
        <span className="text-border-strong">·</span>
        <span className="text-faint">{pub.venue}</span>
      </div>

      <h3
        className={`pretty leading-snug font-semibold text-text ${
          lead ? "text-xl md:text-2xl" : "text-base md:text-lg"
        }`}
      >
        <a href={pub.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
          <span className="absolute inset-0" aria-hidden />
          {pub.title}
        </a>
      </h3>

      <p className="pretty mt-3 text-[14.5px] leading-relaxed text-muted">{pub.summary}</p>

      <div className="relative mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px]">
        <a
          href={pub.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
        >
          {pub.doiLabel} ↗
        </a>
        {related ? (
          <Link
            href={`/work/${related.slug}`}
            className="text-faint transition-colors hover:text-text"
          >
            System: {related.title} →
          </Link>
        ) : null}
        {pub.extraLinks?.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-faint transition-colors hover:text-text"
          >
            {l.label} ↗
          </a>
        ))}
      </div>
    </Reveal>
  );
}
