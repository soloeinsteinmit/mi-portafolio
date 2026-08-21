import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkRow } from "@/components/ui/ExternalLinks";
import { talks } from "@/content/talks";

export const metadata: Metadata = {
  title: "Talks & Community",
  description:
    "Workshops, teaching and community work by Solomon Eshun, including the Agno + OpenRouter AI agents workshop at IndabaX Ghana.",
};

export default function TalksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Talks & Community"
        title="Rooms full of people building things."
        intro="Workshops and teaching, listed with the role I actually held. Where something was a selected workshop rather than an invitation, it says so."
      />

      <Section>
        <ul className="border-t border-border">
          {talks.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i} className="border-b border-border py-9">
              <div className="grid gap-4 md:grid-cols-[180px_1fr] md:gap-10">
                <div>
                  <p className="label text-accent">{t.role}</p>
                  <p className="mt-1.5 font-mono text-[11px] text-faint">{t.date}</p>
                </div>
                <div className="max-w-2xl">
                  <h2 className="pretty text-xl leading-snug font-semibold text-text">
                    {t.title}
                  </h2>
                  <p className="mt-1.5 text-[14px] text-muted">
                    {t.organisation}
                    {t.venue ? ` · ${t.venue}` : ""}
                  </p>
                  <p className="pretty mt-3.5 text-[15px] leading-relaxed text-muted">
                    {t.summary}
                  </p>
                  {t.links?.length ? (
                    <div className="mt-5">
                      <LinkRow links={t.links} />
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
