"use client";

import { motion } from "motion/react";
import type { Project } from "@/content/types";
import { Thumb } from "@/components/ui/Thumb";
import { StatusChip } from "@/components/ui/StatusChip";
import { TagRow } from "@/components/ui/Tag";
import { inView, revealUp } from "@/lib/motion";

/**
 * Cards open the real artefact — repo, paper, product — not an internal page
 * restating it.
 *
 * The card-wide target is a "stretched link": the title anchor spans the card
 * via an absolutely-positioned overlay. The secondary links then sit above it
 * on their own z-index, so each one goes where it says it goes instead of being
 * swallowed by an outer anchor (which would also be invalid nested markup).
 */
const primaryHref = (project: Project) => {
  const href = project.links?.[0]?.href;
  return href?.startsWith("http") ? href : undefined;
};

function Title({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const href = primaryHref(project);
  if (!href) return <h3 className={className}>{project.title}</h3>;
  return (
    <h3 className={className}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors group-hover:text-accent"
      >
        <span aria-hidden className="absolute inset-0 z-0" />
        {project.title}
      </a>
    </h3>
  );
}

function SecondaryLinks({ project }: { project: Project }) {
  if (!project.links?.length) return null;
  return (
    <p className="relative z-10 mt-5 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[11.5px]">
      {project.links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-faint transition-colors hover:text-accent"
        >
          {l.label.toLowerCase()} ↗
        </a>
      ))}
    </p>
  );
}

/** Featured row — the strongest work gets width, an image and room to breathe. */
export function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <motion.article
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className="group relative border-t border-border py-10 first:border-t-0 first:pt-0 md:py-14"
    >
      <div
        className={`grid gap-7 md:grid-cols-2 md:items-center md:gap-12 ${
          flip ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface-2">
          <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
            <Thumb
              src={project.thumbnail}
              alt={project.title}
              seed={project.slug}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-[11px] text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <StatusChip status={project.status} note={project.statusNote} />
          </div>

          <Title
            project={project}
            className="text-[clamp(1.35rem,2.4vw,1.75rem)] leading-tight font-semibold tracking-tight text-text"
          />

          {project.org ? (
            <p className="mt-2 text-sm text-muted">
              {project.org}
              {project.role ? (
                <>
                  <span className="mx-2 text-border-strong">·</span>
                  <span className="text-faint">{project.role}</span>
                </>
              ) : null}
            </p>
          ) : project.role ? (
            <p className="mt-2 text-sm text-faint">{project.role}</p>
          ) : null}

          <p className="pretty mt-4 text-[15px] leading-relaxed text-muted">
            {project.summary}
          </p>

          <div className="relative z-10 mt-5">
            <TagRow items={project.stack} max={6} />
          </div>

          <SecondaryLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

/** Compact card — used for selected and archived work grids. */
export function CompactCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={revealUp}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-border-strong hover:shadow-card"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface-2">
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]">
          <Thumb
            src={project.thumbnail}
            alt={project.title}
            seed={project.slug}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <StatusChip status={project.status} note={project.statusNote} />
          <span className="shrink-0 font-mono text-[10.5px] text-faint">{project.period}</span>
        </div>
        <Title
          project={project}
          className="mt-3 text-[15px] leading-snug font-semibold text-text"
        />
        <p className="pretty mt-2 flex-1 text-[13px] leading-[1.6] text-muted clamp-3">
          {project.summary}
        </p>
        <div className="relative z-10 mt-4">
          <TagRow items={project.stack} max={3} />
        </div>
      </div>
    </motion.article>
  );
}

/** Single line — the archive, where the point is continuity, not attention. */
export function ArchiveRow({ project }: { project: Project }) {
  const href = primaryHref(project);
  const inner = (
    <>
      <span className="min-w-0">
        <span className="text-[15px] font-medium text-text transition-colors group-hover:text-accent">
          {project.title}
        </span>
        <span className="ml-3 text-[13px] text-faint">{project.tagline}</span>
      </span>
      <span className="shrink-0 font-mono text-[11px] text-faint">{project.period}</span>
    </>
  );
  const className =
    "group flex items-baseline justify-between gap-6 border-b border-border py-4 transition-colors hover:border-border-strong";

  if (!href) return <div className={className}>{inner}</div>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  );
}
