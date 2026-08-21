import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Solomon Eshun — AI and data systems engineer in Accra, Ghana, working on reliable intelligent systems across production ML, agentic AI and applied research.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title={about.lead} />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_320px] lg:gap-20">
          <div className="prose-body max-w-2xl space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i}>
                <p className="pretty text-[16px] leading-[1.75] text-muted">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={3}>
              <p className="pretty text-[16px] leading-[1.75] text-muted">{about.human}</p>
            </Reveal>
            <Reveal delay={4}>
              <p className="pretty rounded-xl border border-accent/25 bg-accent-soft p-5 text-[15px] leading-relaxed text-text">
                {about.seeking}
              </p>
            </Reveal>
          </div>

          <aside className="lg:pt-1">
            <Reveal>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border bg-surface-2">
                <Image
                  src="/img/speaking.jpeg"
                  alt="Solomon Eshun presenting an AI agents workshop at the Ghana Data Science Summit"
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="object-cover object-[45%_30%]"
                  style={{ filter: "var(--portrait-filter)" }}
                />
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-[0.1em] text-faint uppercase">
                Ghana Data Science Summit · IndabaX Ghana · 2026
              </p>

              <dl className="mt-8 space-y-4 border-t border-border pt-6">
                {about.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="label mb-1">{f.label}</dt>
                    <dd className="text-[14.5px] text-text">{f.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">
                <Link
                  href="/contact"
                  className="rounded-full bg-text px-4 py-2 text-[13px] font-medium text-bg"
                >
                  Get in touch
                </Link>
                <a
                  href={site.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-[13px] text-muted transition-colors hover:border-border-strong hover:text-text"
                >
                  CV
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>
    </>
  );
}
