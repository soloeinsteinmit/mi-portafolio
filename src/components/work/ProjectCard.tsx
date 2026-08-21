"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/content/types";
import { Thumb } from "@/components/ui/Thumb";
import { StatusChip } from "@/components/ui/StatusChip";
import { TagRow } from "@/components/ui/Tag";
import { inView, revealUp } from "@/lib/motion";

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
      <Link href={`/work/${project.slug}`} className="block">
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
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>

          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-[11px] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <StatusChip status={project.status} note={project.statusNote} />
            </div>

            <h3 className="text-[clamp(1.35rem,2.4vw,1.75rem)] leading-tight font-semibold tracking-tight text-text">
              {project.title}
            </h3>

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

            <div className="mt-5">
              <TagRow items={project.stack} max={6} />
            </div>

            <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-text transition-colors group-hover:text-accent">
              Read case study
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
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
      className="group h-full"
    >
      <Link
        href={`/work/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-border-strong hover:shadow-card"
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
          <StatusChip
            status={project.status}
            note={project.statusNote}
            className="self-start"
          />
          <h3 className="mt-3.5 text-base leading-snug font-semibold text-text">
            {project.title}
          </h3>
          <p className="mt-1.5 text-[13px] text-faint">{project.tagline}</p>
          <p className="pretty mt-3 flex-1 text-[13.5px] leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="mt-4">
            <TagRow items={project.stack} max={4} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/** Single line — the archive, where the point is continuity, not attention. */
export function ArchiveRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex items-baseline justify-between gap-6 border-b border-border py-4 transition-colors hover:border-border-strong"
    >
      <span className="min-w-0">
        <span className="text-[15px] font-medium text-text transition-colors group-hover:text-accent">
          {project.title}
        </span>
        <span className="ml-3 text-[13px] text-faint">{project.tagline}</span>
      </span>
      <span className="shrink-0 font-mono text-[11px] text-faint">{project.period}</span>
    </Link>
  );
}
