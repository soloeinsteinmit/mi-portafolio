import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Solomon Eshun about research collaborations, engineering work, or graduate study.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Email is the reliable channel."
        intro={about.seeking}
      />

      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
          <Reveal>
            <h2 className="label mb-4">Direct</h2>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex flex-wrap items-baseline gap-2 text-[clamp(1.3rem,3.4vw,2rem)] leading-tight font-semibold tracking-tight text-text transition-colors hover:text-accent"
            >
              {site.email}
              <span className="font-mono text-sm text-faint transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="pretty mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              I read everything. I reply properly to anything with a real
              question in it — research collaborations, reliability and MLOps
              work, agentic systems, or graduate study.
            </p>
            <p className="mt-6 font-mono text-[11px] text-faint">
              {site.location} · GMT
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h2 className="label mb-4">Elsewhere</h2>
            <ul className="border-t border-border">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-6 border-b border-border py-4 transition-colors hover:border-border-strong"
                  >
                    <span className="text-[15px] font-medium text-text transition-colors group-hover:text-accent">
                      {s.label}
                    </span>
                    <span className="truncate font-mono text-[11px] text-faint">
                      {s.handle} ↗
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 border-b border-border py-4 transition-colors hover:border-border-strong"
                >
                  <span className="text-[15px] font-medium text-text transition-colors group-hover:text-accent">
                    Curriculum Vitae
                  </span>
                  <span className="font-mono text-[11px] text-faint">PDF ↗</span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
