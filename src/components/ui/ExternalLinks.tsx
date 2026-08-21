import Link from "next/link";
import type { ProjectLink } from "@/content/types";

const GLYPH: Record<string, string> = {
  site: "↗",
  github: "◇",
  pypi: "▤",
  paper: "§",
  doi: "§",
  docs: "≡",
  article: "✎",
  video: "▷",
  credential: "✓",
  post: "↗",
};

export function LinkPill({ link }: { link: ProjectLink }) {
  const external = link.href.startsWith("http") || link.href.startsWith("mailto");
  const Comp = external ? "a" : Link;
  return (
    <Comp
      href={link.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] text-muted transition-all duration-200 hover:border-accent/50 hover:text-accent"
    >
      <span className="font-mono text-[11px] text-faint transition-colors group-hover:text-accent">
        {GLYPH[link.kind] ?? "↗"}
      </span>
      {link.label}
    </Comp>
  );
}

export function LinkRow({ links }: { links?: ProjectLink[] }) {
  if (!links?.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <LinkPill key={l.href + l.label} link={l} />
      ))}
    </div>
  );
}
