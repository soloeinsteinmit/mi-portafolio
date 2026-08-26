import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LinkRow } from "@/components/ui/ExternalLinks";
import { talks } from "@/content/talks";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Talks & Community",
  description:
    "Talks, workshops and teaching by Solomon Eshun on building in the age of AI, production agents, MLOps and applied machine learning.",
  path: "/talks",
});

export default function TalksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Talks & Teaching"
        art="radial"
        figure="Fig. 05 — propagation"
        title="Thinking out loud🎙️."
        intro="Workshops, classrooms, and the questions that made the method better."
      />

      <Section>
        <ul className="border-t border-border">
          {talks.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i} className="border-b border-border py-9">
              <div className="grid gap-5 md:grid-cols-[240px_1fr] md:gap-10">
                <div>
                  {t.image ? (
                    <div className="relative mb-3 aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface-2">
                      <Image
                        src={t.image}
                        alt={t.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 240px"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
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
