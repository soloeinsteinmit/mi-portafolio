import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { writing, coverage } from "@/content/writing";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Writing",
  description:
    "Technical notes, build logs and research explainers by Solomon Eshun, plus coverage of systems he built.",
  path: "/writing",
});

export default function WritingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        art="diffusion"
        figure="Fig. 06 — ink, finding its shape"
        title="Notes from the lab📝."
        intro="What worked, what failed, and what the evidence changed."
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {writing.map((w, i) => (
            <Reveal key={w.url} as="article" delay={i}>
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-7 transition-colors hover:border-border-strong"
              >
                <div className="label mb-3">
                  {w.source} · {w.date}
                </div>
                <h2 className="pretty text-lg leading-snug font-semibold text-text transition-colors group-hover:text-accent">
                  {w.title}
                </h2>
                <p className="pretty mt-3 flex-1 text-[14.5px] leading-relaxed text-muted">
                  {w.summary}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {w.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-faint">Read ↗</span>
                </div>
              </a>
            </Reveal>
          ))}

          <Reveal delay={1}>
            <a
              href="https://medium.com/@soloshun"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-xl border border-dashed border-border p-7 transition-colors hover:border-accent/50"
            >
              <div>
                <div className="label mb-3">Medium</div>
                <h2 className="text-lg leading-snug font-semibold text-text transition-colors group-hover:text-accent">
                  More as it gets written
                </h2>
                <p className="pretty mt-3 text-[14.5px] leading-relaxed text-muted">
                  Build logs from Lumis, notes on pipeline reliability, and
                  whatever the current problem turns out to be.
                </p>
              </div>
              <span className="mt-5 font-mono text-[11px] text-faint">@soloshun ↗</span>
            </a>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/40">
        <Reveal className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight text-text">Elsewhere</h2>
          <p className="mt-2 max-w-2xl text-[15px] text-muted">
            Write-ups by MinoHealth AI Labs about systems I worked on. Not my
            byline — included because they document the work.
          </p>
        </Reveal>
        <ul className="border-t border-border">
          {coverage.map((c, i) => (
            <Reveal as="li" key={c.href} delay={i}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-border py-4 transition-colors hover:border-border-strong"
              >
                <span className="min-w-0">
                  <span className="text-[15px] font-medium text-text transition-colors group-hover:text-accent">
                    {c.label}
                  </span>
                  <span className="ml-3 text-[13px] text-faint">{c.note}</span>
                </span>
                <span className="shrink-0 font-mono text-[11px] text-faint">{c.org} ↗</span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
