import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PublicationCard } from "@/components/research/PublicationCard";
import { publications, publicationGroups } from "@/content/publications";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Research",
  description:
    "First-author research on agentic self-healing for data and AI pipelines, and publications produced by the autonomous research systems I architected.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        art="interference"
        figure="Fig. 03 — two sources, one pattern"
        title="Into the unknown🙂🌌."
        intro="On the limits of what a machine may conclude."
        meta={
          <dl className="flex flex-wrap gap-x-10 gap-y-4">
            {[
              { k: "Publications", v: String(publications.length) },
              { k: "Fields", v: "AI · ML · LLMs · Financial ML · Physical AI" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="label mb-1">{s.k}</dt>
                <dd className="text-[15px] font-medium text-text">{s.v}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {publicationGroups.map((group, gi) => {
        const items = publications.filter((p) => p.group === group.key);
        if (!items.length) return null;
        return (
          <Section
            key={group.key}
            className={gi === 0 ? "" : "border-t border-border bg-surface/40"}
          >
            <Reveal className="mb-8">
              <h2 className="text-2xl font-semibold tracking-tight text-text">
                {group.label}
              </h2>
              <p className="mt-2 max-w-2xl text-[15px] text-muted">{group.note}</p>
            </Reveal>
            <div className="grid gap-4">
              {items.map((p, i) => (
                <PublicationCard key={p.id} pub={p} lead={gi === 0 && i === 0} index={i} />
              ))}
            </div>
          </Section>
        );
      })}

      <Section className="border-t border-border">
        <Reveal className="rounded-xl border border-border bg-surface p-7 md:p-9">
          <h2 className="label mb-4">A note on author position</h2>
          <p className="pretty max-w-2xl text-[15px] leading-relaxed text-muted">
            Author positions are listed exactly as published. On the Moremi
            papers my contribution is the intelligent system and the distributed
            research infrastructure it runs on — the biology is the domain those
            systems were pointed at, not my claim to expertise.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
