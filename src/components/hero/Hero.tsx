import Link from "next/link";
import { site } from "@/content/site";
import { HeroCanvas } from "./HeroCanvas";
import { Portrait } from "./Portrait";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <HeroCanvas />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          <div className="max-w-2xl">
            <p className="label mb-6 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span
                className="size-1.5 rounded-full bg-[var(--ok)]"
                style={{ animation: "pulse-dot 2.4s ease-in-out infinite" }}
              />
              <span>{site.role}</span>
              <span className="text-border-strong">/</span>
              <span>{site.location}</span>
            </p>

            <h1 className="text-[clamp(2.6rem,7vw,4.6rem)] leading-[0.95] font-semibold tracking-[-0.035em] text-text">
              Solomon Eshun
            </h1>

            <p className="balance mt-6 text-[clamp(1.2rem,2.6vw,1.7rem)] leading-[1.28] font-medium text-text">
              I build reliable intelligent systems — and keep them running once
              they meet real data.
            </p>

            <p className="pretty mt-5 max-w-xl text-[15.5px] leading-relaxed text-muted">
              {site.supporting}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition-all duration-200 hover:gap-3"
              >
                View selected work
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/research"
                className="rounded-full border border-border-strong px-5 py-2.5 text-sm text-text transition-colors hover:border-accent hover:text-accent"
              >
                Read research
              </Link>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-colors hover:border-border-strong hover:text-text"
              >
                CV
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-border px-5 py-2.5 text-sm text-muted transition-colors hover:border-border-strong hover:text-text"
              >
                Contact
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2">
              {site.socials
                .filter((s) => !s.href.startsWith("mailto"))
                .map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-baseline gap-1.5 font-mono text-[11px] tracking-[0.08em] text-faint uppercase transition-colors hover:text-accent"
                    >
                      {s.label}
                      <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div className="w-full max-w-52 sm:max-w-60 lg:max-w-none">
            <Portrait />
          </div>
        </div>
      </div>
    </section>
  );
}
