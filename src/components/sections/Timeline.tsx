"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import type { Experience } from "@/content/types";
import { getProject } from "@/content/projects";
import { TagRow } from "@/components/ui/Tag";
import { inView, revealUp } from "@/lib/motion";

/**
 * Weight-aware timeline: current roles expand, older roles compress. The rail
 * fills as you scroll, which is decoration — the dates carry the meaning.
 */
export function Timeline({ items }: { items: Experience[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.55"],
  });
  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ol ref={ref} className="relative">
      <div aria-hidden className="absolute top-2 bottom-2 left-[7px] w-px bg-border md:left-[9px]">
        <motion.div
          className="h-full w-full origin-top bg-gradient-to-b from-accent to-accent/20"
          style={{ scaleY }}
        />
      </div>

      {items.map((item, i) => (
        <motion.li
          key={item.slug}
          variants={revealUp}
          custom={i}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="relative pl-8 pb-12 last:pb-0 md:pl-12"
        >
          <span
            aria-hidden
            className={`absolute top-1.5 left-0 grid size-[15px] place-items-center rounded-full border md:size-[19px] ${
              item.weight === 1
                ? "border-accent bg-bg"
                : "border-border-strong bg-surface"
            }`}
          >
            <span
              className={`rounded-full ${
                item.weight === 1 ? "size-1.5 bg-accent" : "size-1 bg-faint"
              }`}
            />
          </span>

          <div className="font-mono text-[11px] tracking-[0.08em] text-faint uppercase">
            {item.period}
            <span className="mx-2 text-border-strong">·</span>
            {item.location}
          </div>

          <div className="mt-2 flex items-start gap-3.5 sm:gap-4">
            {item.logo ? (
              item.orgUrl ? (
                <a
                  href={item.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.organisation}`}
                  className="relative mt-0.5 h-12 w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-transform hover:-translate-y-0.5 sm:w-16"
                >
                  <Image
                    src={item.logo}
                    alt={`${item.organisation} logo`}
                    fill
                    sizes="64px"
                    className="object-contain p-2"
                  />
                </a>
              ) : (
                <div className="relative mt-0.5 h-12 w-14 shrink-0 overflow-hidden rounded-xl border border-border bg-white shadow-sm sm:w-16">
                  <Image
                    src={item.logo}
                    alt={`${item.organisation} logo`}
                    fill
                    sizes="64px"
                    className="object-contain p-2"
                  />
                </div>
              )
            ) : null}

            <div className="min-w-0 flex-1">
              <h3 className="flex flex-wrap items-baseline gap-x-2.5 text-lg font-semibold text-text md:text-xl">
                {item.orgUrl ? (
                  <a
                    href={item.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {item.organisation}
                  </a>
                ) : (
                  item.organisation
                )}
                {item.relationship ? (
                  <span className="text-[13px] font-normal text-faint">
                    {item.relationship}
                  </span>
                ) : null}
              </h3>

          <ul className="mt-2.5 space-y-1">
            {item.roles.map((r) => (
              <li key={r.title} className="flex flex-wrap items-baseline gap-x-3 text-[14.5px]">
                <span className="font-medium text-text">{r.title}</span>
                <span className="font-mono text-[11px] text-faint">{r.period}</span>
              </li>
            ))}
          </ul>

          {item.weight < 3 ? (
            <p className="pretty mt-3 max-w-2xl text-[14.5px] leading-relaxed text-muted">
              {item.summary}
            </p>
          ) : (
            <p className="mt-2 text-[14px] text-muted">{item.summary}</p>
          )}

          {item.weight === 1 && item.bullets.length > 0 ? (
            <ul className="mt-4 max-w-2xl space-y-2">
              {item.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[14px] leading-relaxed text-muted">
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-border-strong" />
                  <span className="pretty">{b}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {item.weight < 3 ? (
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <TagRow items={item.stack} max={item.weight === 1 ? 10 : 5} />
            </div>
          ) : null}

              {item.relatedProjects?.length ? (
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
              {item.relatedProjects.map((slug) => {
                const p = getProject(slug);
                const href = p?.links?.find((l) => l.href.startsWith("http"))?.href;
                if (!p || !href) return null;
                return (
                  <a
                    key={slug}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-faint transition-colors hover:text-accent"
                  >
                    {p.title} ↗
                  </a>
                );
              })}
            </div>
              ) : null}
            </div>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
