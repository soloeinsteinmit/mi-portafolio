import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/sections/Timeline";
import { experience, education } from "@/content/experience";
import { certifications } from "@/content/certifications";
import { skills } from "@/content/skills";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Production MLOps and data platform engineering at EnBW via Ishango.ai, founding ML engineering at Noeud, and intelligent systems work at MinoHealth AI Labs.",
};

const DEPTH_STYLE = {
  core: "border-accent/40 bg-accent-soft text-text",
  working: "border-border bg-surface-2 text-muted",
  familiar: "border-border/70 bg-transparent text-faint",
} as const;

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Production systems, research, and the road between them."
        intro="Roles are weighted by what they demonstrate now, not by how long ago they happened. Current work expands; earlier work compresses."
      />

      <Section>
        <Timeline items={experience} />
      </Section>

      <Section className="border-y border-border bg-surface/40">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 className="label mb-5">Education</h2>
            <h3 className="text-xl font-semibold text-text">{education.institution}</h3>
            <p className="mt-1.5 text-[15px] text-muted">{education.degree}</p>
            <p className="mt-1 font-mono text-[11px] text-faint">
              {education.period} · {education.location}
            </p>
            <p className="mt-3 text-[14px] text-muted">{education.result}</p>
            <p className="pretty mt-4 text-[13.5px] leading-relaxed text-faint">
              Selected coursework: {education.coursework}
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="label mb-5">Certification</h2>
            {certifications.map((c) => (
              <div key={c.name} className="rounded-xl border border-border bg-surface p-6">
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[var(--ok)]/30 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-[var(--ok)] uppercase">
                  <span className="size-1.5 rounded-full bg-[var(--ok)]" />
                  Verified
                </div>
                <p className="text-[16px] leading-snug font-medium text-text">{c.name}</p>
                <p className="mt-2 font-mono text-[11px] text-faint">
                  {c.issuer} · Issued {c.issued}
                  {c.expires ? ` · Valid through ${c.expires}` : ""}
                </p>
                {c.note ? <p className="mt-3 text-[14px] text-muted">{c.note}</p> : null}
              </div>
            ))}
            <p className="mt-4 text-[13px] leading-relaxed text-faint">
              Only issued credentials are listed. Nothing planned or in progress
              appears here.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-text">Capabilities</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-muted">
            Grouped by where the depth actually is. Filled chips are what I work
            in regularly; the rest are real but lighter.
          </p>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.name} delay={i} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="label mb-4">{group.name}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <li
                    key={s.name}
                    className={`rounded border px-2.5 py-1 text-[12.5px] ${DEPTH_STYLE[s.depth]}`}
                  >
                    {s.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal delay={2} className="mt-10">
          <a
            href={site.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-sm text-text transition-colors hover:border-accent hover:text-accent"
          >
            Full CV (PDF)
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </Section>
    </>
  );
}
