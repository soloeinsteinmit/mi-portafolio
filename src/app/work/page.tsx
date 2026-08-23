import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeaturedCard, CompactCard, ArchiveRow } from "@/components/work/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { byTier } from "@/content/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Selected Work",
  description:
    "Production data platform and MLOps work, first-author research on self-healing pipelines, the Lumis SDK, FX-risk intelligence R&D, and autonomous research systems.",
  path: "/work",
});

export default function WorkPage() {
  const featured = byTier(1);
  const selected = byTier(2);
  const archive = byTier(3);

  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        art="orbit"
        figure="Fig. 02 — systems, held in tension"
        title="Making computers go beep boop🤖."
        intro="Systems built to survive contact with real users, real data, and real failure."
      />

      <Section>
        <div>
          {featured.map((p, i) => (
            <FeaturedCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Section>

      <Section className="border-y border-border bg-surface/40">
        <SectionHeader
          index="—"
          title="Supporting Work"
          intro="Agents in production, computer vision in the field, and independent research."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {selected.map((p) => (
            <CompactCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          index="—"
          title="Earlier Work"
          intro="Prior art. Where the assumptions above were first tested."
        />
        <Reveal>
          <div className="border-t border-border">
            {archive.map((p) => (
              <ArchiveRow key={p.slug} project={p} />
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
