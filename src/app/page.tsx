import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { FeaturedCard, CompactCard } from "@/components/work/ProjectCard";
import { PublicationCard } from "@/components/research/PublicationCard";
import { Timeline } from "@/components/sections/Timeline";
import { byTier } from "@/content/projects";
import { publications } from "@/content/publications";
import { experience } from "@/content/experience";
import { certifications } from "@/content/certifications";
import { talks } from "@/content/talks";
import { writing } from "@/content/writing";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { CodePlate } from "@/components/fun/CodePlate";

export default function Home() {
  const featured = byTier(1);
  const selected = byTier(2);
  const lead = publications[0];
  const rest = publications.slice(1, 3);

  return (
    <>
      <Hero />

      {/* 02 — Featured work ------------------------------------------------ */}
      <Section id="work">
        <SectionHeader
          index="01"
          title="Selected Work"
          intro="Making computers go beep boop—reliably, at scale, and under real-world constraints."
          action={{ label: "All work", href: "/work" }}
        />
        <div>
          {featured.map((p, i) => (
            <FeaturedCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Section>

      {/* 02 — Research ----------------------------------------------------- */}
      <Section id="research" className="border-y border-border bg-surface/40">
        <SectionHeader
          index="02"
          title="Research"
          intro="Evidence, uncertainty, and the boundary between machine inference and human judgement."
          action={{ label: "All publications", href: "/research" }}
        />
        <div className="grid gap-4">
          <PublicationCard pub={lead} lead index={0} />
          <div className="grid gap-4 md:grid-cols-2">
            {rest.map((p, i) => (
              <PublicationCard key={p.id} pub={p} index={i + 1} />
            ))}
          </div>
        </div>
        <Reveal delay={2} className="mt-6">
          <Link
            href="/research"
            className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            {publications.length - 3} more publications
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </Section>

      {/* Epigraph ---------------------------------------------------------- */}
      <Section className="border-t border-border py-16 md:py-20">
        <Reveal className="mb-8">
          <p className="label flex items-center gap-3">
            <span className="text-accent">—</span>
            <span>Epigraphs, compiled</span>
          </p>
        </Reveal>
        <Reveal delay={1}>
          <CodePlate />
        </Reveal>
      </Section>

      {/* 03 — Experience --------------------------------------------------- */}
      <Section id="experience">
        <SectionHeader
          index="03"
          title="Experience"
          intro="Talk is cheap. Here is what made it into production."
          action={{ label: "Full history", href: "/experience" }}
        />
        <div className="grid gap-14 lg:grid-cols-[1fr_260px] lg:gap-16">
          <Timeline items={experience.slice(0, 3)} />
          <aside className="lg:pt-2">
            <Reveal>
              <h3 className="label mb-4">Certification</h3>
              <div className="space-y-3">
                {certifications.map((c) => (
                <div
                  key={c.name}
                  className="grid min-h-36 grid-cols-[84px_1fr] overflow-hidden rounded-xl border border-border bg-surface"
                >
                  {c.image ? (
                    <div className="relative border-r border-border bg-[#f7f5f2]">
                      <Image
                        src={c.image}
                        alt={`${c.name} certificate issued to Solomon Eshun`}
                        fill
                        sizes="84px"
                        className="object-contain p-1.5"
                      />
                    </div>
                  ) : null}
                  <div className="flex min-w-0 flex-col p-4">
                    <p className="text-[13.5px] leading-snug font-medium text-text">{c.name}</p>
                    <p className="mt-2 font-mono text-[10px] leading-relaxed text-faint">
                      {c.issuer} · {c.issued}
                      {c.expires ? ` — ${c.expires}` : ""}
                    </p>
                    {c.credentialUrl ? (
                      <a
                        href={c.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-block pt-3 font-mono text-[10.5px] text-accent transition-colors hover:text-accent-hover"
                      >
                        verify ↗
                      </a>
                    ) : null}
                  </div>
                </div>
                ))}
              </div>
              <Link
                href="/experience"
                className="group mt-5 inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                Education & earlier roles
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </Reveal>
          </aside>
        </div>
      </Section>

      {/* 04 — Selected systems --------------------------------------------- */}
      <Section id="systems" className="border-y border-border bg-surface/40">
        <SectionHeader
          index="04"
          title="Supporting Work"
          intro="Side quests in agents, computer vision, and learning systems."
          action={{ label: "Including the archive", href: "/work" }}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {selected.map((p) => (
            <CompactCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      {/* 05 — Writing ------------------------------------------------------ */}
      <Section id="writing">
        <SectionHeader
          index="05"
          title="Writing"
          intro="Notes from the lab: methods, results, and useful failures."
          action={{ label: "All writing", href: "/writing" }}
        />
        <div className="grid gap-4 md:grid-cols-2">
          {writing.map((w, i) => (
            <Reveal key={w.url} as="article" delay={i}>
              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
              >
                <div className="label mb-3">
                  {w.source} · {w.date}
                </div>
                <h3 className="pretty text-lg leading-snug font-semibold text-text transition-colors group-hover:text-accent">
                  {w.title}
                </h3>
                <p className="pretty mt-3 flex-1 text-[14px] leading-relaxed text-muted">
                  {w.summary}
                </p>
                <span className="mt-5 font-mono text-[11px] text-faint">Read ↗</span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={1}>
            <a
              href="https://medium.com/@soloshun"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-xl border border-dashed border-border p-6 transition-colors hover:border-accent/50"
            >
              <div>
                <div className="label mb-3">Medium</div>
                <h3 className="text-lg leading-snug font-semibold text-text transition-colors group-hover:text-accent">
                  More notes as they get written
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  Build logs and technical explainers, mostly about the things
                  that broke first.
                </p>
              </div>
              <span className="mt-5 font-mono text-[11px] text-faint">@soloshun ↗</span>
            </a>
          </Reveal>
        </div>
      </Section>

      {/* 06 — Talks -------------------------------------------------------- */}
      <Section id="talks" className="border-y border-border bg-surface/40">
        <SectionHeader
          index="06"
          title="Talks & Teaching"
          intro="Ideas tested out loud, one question at a time."
          action={{ label: "All talks", href: "/talks" }}
        />
        <ul className="grid gap-5 sm:grid-cols-2">
          {talks.slice(0, 4).map((t, i) => (
            <Reveal as="li" key={t.title} delay={i}>
              <a
                href={t.links?.[0]?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface-2">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 45vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  ) : null}
                </div>
                <div className="label mt-3 flex items-center gap-2.5">
                  <span className="text-accent">{t.role}</span>
                  <span className="text-border-strong">·</span>
                  <span>{t.date}</span>
                </div>
                <h3 className="pretty mt-1.5 text-base leading-snug font-semibold text-text transition-colors group-hover:text-accent">
                  {t.title}
                </h3>
                <p className="mt-1 text-[13px] text-faint">
                  {t.organisation}
                  {t.venue ? ` · ${t.venue}` : ""}
                </p>
              </a>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* 07 — About ------------------------------------------------------- */}
      <Section id="about">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-surface-2">
              <Image
                src="/img/speaking.jpeg"
                alt="Solomon Eshun presenting an AI agents workshop at the Ghana Data Science Summit"
                fill
                sizes="(max-width: 1024px) 100vw, 260px"
                className="object-cover object-[45%_30%]"
                style={{ filter: "var(--portrait-filter)" }}
              />
            </div>
          </Reveal>

          <div>
            <div className="label mb-3 flex items-center gap-3">
              <span className="text-accent">07</span>
              <span className="h-px w-8 bg-border-strong" />
              <span>About</span>
            </div>
            <Reveal>
              <p className="balance text-[clamp(1.3rem,2.5vw,1.8rem)] leading-[1.22] font-medium text-text">
                {about.lead}
              </p>
            </Reveal>
            <Reveal delay={1}>
              <p className="pretty mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                {about.short}
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 08 — Contact ------------------------------------------------------ */}
      <Section id="contact" className="border-t border-border">
        <Reveal className="grid-field rounded-2xl border border-border bg-surface/60 p-8 md:p-14">
          <div className="label mb-5">Contact</div>
          <h2 className="balance max-w-2xl text-[clamp(1.7rem,4vw,2.8rem)] leading-[1.08] font-semibold tracking-tight text-text">
Got a problem nobody has cracked yet?
          </h2>
          <p className="pretty mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            {about.seeking}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition-all duration-200 hover:gap-3"
            >
              {site.email}
              <span aria-hidden>→</span>
            </a>
            <a
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border-strong px-5 py-2.5 text-sm text-text transition-colors hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
