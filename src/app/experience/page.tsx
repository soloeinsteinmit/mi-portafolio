import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/sections/Timeline";
import { TechIcon } from "@/components/ui/TechIcon";
import { experience, education } from "@/content/experience";
import { certifications } from "@/content/certifications";
import { skills } from "@/content/skills";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Experience",
  description:
    "Production MLOps and data platform engineering at EnBW via Ishango.ai, founding ML engineering at Noeud, and intelligent systems work at MinoHealth AI Labs.",
  path: "/experience",
});

const DEPTH_STYLE = {
  core: "text-text",
  working: "text-muted",
  familiar: "text-faint",
} as const;

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        art="spectrum"
        figure="Fig. 04 — signal, resolved over time"
        title="Talk is cheap. Show me the code💻."
        intro="The places where models, pipelines, and platforms had to work for real."
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
              <div
                key={c.name}
                className="overflow-hidden rounded-xl border border-border bg-surface"
              >
                {c.image ? (
                  <div className="relative aspect-[16/9] border-b border-border bg-surface-2">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain p-4"
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <p className="text-[16px] leading-snug font-medium text-text">{c.name}</p>
                  <p className="mt-2 font-mono text-[11px] text-faint">
                    {c.issuer} · Issued {c.issued}
                    {c.expires ? ` · Valid through ${c.expires}` : ""}
                  </p>
                  {c.credentialId ? (
                    <p className="mt-1 font-mono text-[11px] text-faint">
                      Credential ID {c.credentialId}
                    </p>
                  ) : null}
                  {c.note ? <p className="mt-3 text-[14px] text-muted">{c.note}</p> : null}
                  {c.credentialUrl ? (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block font-mono text-[11.5px] text-accent transition-colors hover:text-accent-hover"
                    >
                      verify credential ↗
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-text">Capabilities</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-muted">
            Grouped by where the depth actually is.
          </p>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal key={group.name} delay={i} className="rounded-xl border border-border bg-surface p-6">
              <h3 className="label mb-4">{group.name}</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3">
                {group.items.map((s) => (
                  <li
                    key={s.name}
                    className={`flex items-center gap-2 text-[13px] ${DEPTH_STYLE[s.depth]}`}
                    title={s.depth === "core" ? "Core" : s.depth === "working" ? "Working" : "Familiar"}
                  >
                    <TechIcon
                      name={s.name}
                      className={`size-4 ${s.depth === "familiar" ? "opacity-50" : ""}`}
                    />
                    <span className="truncate">{s.name}</span>
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
