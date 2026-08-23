import Link from "next/link";
import { site } from "@/content/site";
import { Portrait } from "./Portrait";
import { PageArt } from "@/components/art/PageArt";
import { StatusLine } from "@/components/fun/StatusLine";

const TAGS = ["ML", "Data", "LLMs", "Systems", "Physical AI", "Agentic AI"];

/**
 * One statement, held large. Everything else is support: the name above it,
 * a single line below it, and the plate off to the side.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden pt-28 pb-14 md:pb-20">
      <PageArt variant="binary" className="page-art hero-art z-[1]" intensity={1.3} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-bg"
      />

      <Portrait />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid items-end">
          <div className="min-w-0 max-w-2xl">
            <ul className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10.5px] tracking-[0.22em] text-faint uppercase">
              {TAGS.map((tag, i) => (
                <li key={tag} className="flex items-center gap-3">
                  {i > 0 ? <span className="text-border-strong">·</span> : null}
                  {tag}
                </li>
              ))}
            </ul>

            <p className="font-mono text-[12px] tracking-[0.24em] text-muted uppercase">
              Solomon Eshun
            </p>

            <h1 className="display mt-4 text-[clamp(3.2rem,10vw,7rem)] leading-[0.88] font-normal tracking-[-0.03em] text-text">
              A search into
              <br />
              the <span className="italic text-accent">unknown</span>
            </h1>

            <p className="pretty mt-8 max-w-md text-[15px] leading-relaxed text-muted">
              {site.supporting}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition-all duration-200 hover:gap-3"
              >
                Work
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/research"
                className="rounded-full border border-border-strong px-5 py-2.5 text-sm text-text transition-colors hover:border-accent hover:text-accent"
              >
                Research
              </Link>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-colors hover:border-border-strong hover:text-text"
              >
                CV
              </a>
            </div>

            <div className="mt-9">
              <StatusLine />
            </div>

            <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-1.5 font-mono text-[11px] tracking-[0.08em] text-faint uppercase transition-colors hover:text-accent"
                  >
                    {s.label}
                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
