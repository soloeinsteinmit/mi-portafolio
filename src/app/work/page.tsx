import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeaturedCard, CompactCard, ArchiveRow } from "@/components/work/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { byTier } from "@/content/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Production data platform and MLOps work, first-author research on self-healing pipelines, the Lumis SDK, FX-risk intelligence R&D, and autonomous research systems.",
};

export default function WorkPage() {
  const featured = byTier(1);
  const selected = byTier(2);
  const archive = byTier(3);

  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="Systems, in order of what they prove."
        intro="Each entry follows the same shape: the problem that existed, the system that was built, what I contributed, and what is actually true about its status today. Nothing here is described as finished if it is not."
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
          intro="Kept for continuity, not for weight. This is where I learned the things the work above assumes."
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
