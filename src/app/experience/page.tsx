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
        <div>
          <Reveal className="max-w-3xl">
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

          <div id="certifications" className="mt-14 scroll-mt-28 border-t border-border pt-10">
            <Reveal className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-text">Certifications</h2>
                <p className="mt-2 max-w-xl text-[14.5px] text-muted">
                  Verified credentials, added when they are issued.
                </p>
              </div>
              <p className="label">Databricks certification path</p>
            </Reveal>

            <div className="space-y-4">
              {certifications.map((c) => (
                <Reveal
                  key={c.name}
                  as="article"
                  className="grid min-h-44 grid-cols-[minmax(112px,34%)_1fr] overflow-hidden rounded-xl border border-border bg-surface sm:min-h-56 sm:grid-cols-[minmax(260px,36%)_1fr]"
                >
                  {c.image ? (
                    <div className="relative min-h-full border-r border-border bg-[#f7f5f2]">
                      <Image
                        src={c.image}
                        alt={`${c.name} certificate issued to Solomon Eshun`}
                        fill
                        sizes="(max-width: 640px) 34vw, 36vw"
                        className="object-contain p-2.5 sm:p-5"
                      />
                    </div>
                  ) : null}
                  <div className="flex min-w-0 flex-col p-4 sm:p-7">
                    <div className="label mb-3 text-accent">Verified credential</div>
                    <p className="text-[15px] leading-snug font-medium text-text sm:text-lg">
                      {c.name}
                    </p>
                    <p className="mt-2 font-mono text-[10px] leading-relaxed text-faint sm:text-[11px]">
                      {c.issuer} · Issued {c.issued}
                      {c.expires ? ` · Valid through ${c.expires}` : ""}
                    </p>
                    {c.credentialId ? (
                      <p className="mt-1 font-mono text-[10px] text-faint sm:text-[11px]">
                        Credential ID {c.credentialId}
                      </p>
                    ) : null}
                    {c.note ? (
                      <p className="pretty mt-3 hidden text-[14px] text-muted sm:block">{c.note}</p>
                    ) : null}
                    {c.credentialUrl ? (
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-block pt-4 font-mono text-[10.5px] text-accent transition-colors hover:text-accent-hover sm:text-[11.5px]"
                      >
                        verify credential ↗
                      </a>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="capabilities">
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
              <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {group.items.map((s) => (
                  <li
                    key={s.name}
                    className={`flex min-w-0 items-start gap-2.5 text-[13px] ${DEPTH_STYLE[s.depth]}`}
                    title={`${s.name} · ${s.depth === "core" ? "Core" : s.depth === "working" ? "Working" : "Familiar"}`}
                  >
                    <TechIcon
                      name={s.name}
                      className={`mt-0.5 size-4 ${s.depth === "familiar" ? "opacity-50" : ""}`}
                    />
                    <span className="min-w-0 leading-snug break-words">{s.name}</span>
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
