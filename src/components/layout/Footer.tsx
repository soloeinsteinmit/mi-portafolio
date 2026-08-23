import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-28 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="max-w-sm text-xl leading-snug font-medium text-text">
              Talk is cheap. Show me the code.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-sm text-muted underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <h2 className="label mb-4">Site</h2>
            <ul className="space-y-2.5">
              {site.footerNav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label mb-4">Elsewhere</h2>
            <ul className="space-y-2.5">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-2 text-sm text-muted transition-colors hover:text-text"
                  >
                    {s.label}
                    <span className="font-mono text-[11px] text-faint transition-transform duration-300 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2 text-sm text-muted transition-colors hover:text-text"
                >
                  CV
                  <span className="font-mono text-[11px] text-faint">PDF</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-faint">
            © {new Date().getFullYear()} Solomon Eshun · observations ongoing,
            conclusions provisional
          </p>
          <p className="font-mono text-[11px] text-faint">
            <span className="text-muted">solo·shun</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
