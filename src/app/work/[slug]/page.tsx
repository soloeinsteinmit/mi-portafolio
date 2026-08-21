import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { publications } from "@/content/publications";
import { Thumb } from "@/components/ui/Thumb";
import { StatusChip } from "@/components/ui/StatusChip";
import { TagRow } from "@/components/ui/Tag";
import { LinkRow } from "@/components/ui/ExternalLinks";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

/** One reusable block so every case study reads in the same order. */
function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="grid gap-3 border-t border-border pt-8 md:grid-cols-[160px_1fr] md:gap-10">
      <h2 className="label md:pt-1">{label}</h2>
      <div className="min-w-0 max-w-2xl">{children}</div>
    </Reveal>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((b) => (
        <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted">
          <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
          <span className="pretty">{b}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = publications.filter((p) =>
    project.relatedPublications?.includes(p.id)
  );
  const siblings = projects.filter((p) => p.tier === project.tier && p.slug !== project.slug);
  const next = siblings[0];

  return (
    <article>
      <header className="relative border-b border-border">
        <div aria-hidden className="grid-field pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-6xl px-5 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16">
          <Link
            href="/work"
            className="group mb-8 inline-flex items-center gap-2 font-mono text-xs text-faint transition-colors hover:text-accent"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            All work
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <StatusChip status={project.status} note={project.statusNote} />
            {project.period ? (
              <span className="font-mono text-[11px] text-faint">{project.period}</span>
            ) : null}
          </div>

          <h1 className="mt-5 max-w-3xl text-[clamp(2.1rem,5.2vw,3.3rem)] leading-[1.03] font-semibold tracking-[-0.03em] text-text">
            {project.title}
          </h1>
          <p className="balance mt-4 max-w-2xl text-lg leading-snug text-muted">
            {project.tagline}
          </p>

          {project.org || project.role ? (
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              {project.org ? (
                project.orgUrl ? (
                  <a
                    href={project.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-text transition-colors hover:text-accent"
                  >
                    {project.org}
                  </a>
                ) : (
                  <span className="font-medium text-text">{project.org}</span>
                )
              ) : null}
              {project.org && project.role ? (
                <span className="text-border-strong">·</span>
              ) : null}
              {project.role ? <span className="text-muted">{project.role}</span> : null}
            </p>
          ) : null}

          {project.links?.length ? (
            <div className="mt-7">
              <LinkRow links={project.links} />
            </div>
          ) : null}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="relative -mt-px aspect-[16/9] overflow-hidden rounded-b-xl border border-t-0 border-border bg-surface-2 md:aspect-[21/9]">
          <Thumb
            src={project.image ?? project.thumbnail}
            alt={project.title}
            seed={project.slug}
            sizes="100vw"
            priority
          />
        </Reveal>

        <div className="mt-16 space-y-10 md:mt-20 md:space-y-12">
          <Reveal className="grid gap-3 md:grid-cols-[160px_1fr] md:gap-10">
            <h2 className="label md:pt-1">Summary</h2>
            <p className="pretty max-w-2xl text-[17px] leading-relaxed text-text">
              {project.summary}
            </p>
          </Reveal>

          {project.problem ? (
            <Block label="The problem">
              <p className="pretty text-[15px] leading-relaxed text-muted">{project.problem}</p>
            </Block>
          ) : null}

          {project.system ? (
            <Block label="What was built">
              <p className="pretty text-[15px] leading-relaxed text-muted">{project.system}</p>
            </Block>
          ) : null}

          {project.flow?.length ? (
            <Reveal className="grid gap-3 border-t border-border pt-8 md:grid-cols-[160px_1fr] md:gap-10">
              <h2 className="label md:pt-1">Architecture</h2>
              <div className="min-w-0">
                <FlowDiagram steps={project.flow} />
              </div>
            </Reveal>
          ) : null}

          {project.contribution?.length ? (
            <Block label="My contribution">
              <Bullets items={project.contribution} />
            </Block>
          ) : null}

          {project.decisions?.length ? (
            <Block label="Decisions that mattered">
              <Bullets items={project.decisions} />
            </Block>
          ) : null}

          {project.outcomes?.length ? (
            <Block label="Outcome & evidence">
              <Bullets items={project.outcomes} />
            </Block>
          ) : null}

          <Block label="Stack">
            <TagRow items={project.stack} />
          </Block>

          {project.currentStatus ? (
            <Block label="Current status">
              <p className="pretty text-[15px] leading-relaxed text-muted">
                {project.currentStatus}
              </p>
            </Block>
          ) : null}

          {project.disclosure ? (
            <Reveal className="grid gap-3 border-t border-border pt-8 md:grid-cols-[160px_1fr] md:gap-10">
              <h2 className="label md:pt-1">Disclosure</h2>
              <p className="pretty max-w-2xl rounded-lg border border-border bg-surface-2 p-4 text-[14px] leading-relaxed text-muted">
                {project.disclosure}
              </p>
            </Reveal>
          ) : null}

          {related.length ? (
            <Block label="Research output">
              <ul className="space-y-4">
                {related.map((p) => (
                  <li key={p.id}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <p className="pretty text-[15px] leading-snug font-medium text-text transition-colors group-hover:text-accent">
                        {p.title}
                      </p>
                      <p className="mt-1 font-mono text-[11px] text-faint">
                        {p.year} · {p.authorPosition} · {p.doiLabel} ↗
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          {project.links?.length ? (
            <Block label="Links">
              <LinkRow links={project.links} />
            </Block>
          ) : null}
        </div>

        {next ? (
          <Reveal className="mt-24 border-t border-border pt-8">
            <p className="label mb-3">Next</p>
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-wrap items-baseline justify-between gap-4"
            >
              <span className="text-xl font-semibold text-text transition-colors group-hover:text-accent md:text-2xl">
                {next.title}
              </span>
              <span className="font-mono text-xs text-faint transition-transform duration-300 group-hover:translate-x-1">
                {next.tagline} →
              </span>
            </Link>
          </Reveal>
        ) : null}
      </div>
    </article>
  );
}
