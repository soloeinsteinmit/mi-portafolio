import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  index,
  title,
  intro,
  action,
  id,
}: {
  index: string;
  title: string;
  intro?: ReactNode;
  action?: { label: string; href: string };
  id?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div className="max-w-2xl">
          <div className="label mb-3 flex items-center gap-3">
            <span className="text-accent">{index}</span>
            <span className="h-px w-8 bg-border-strong" />
            <span id={id}>{title}</span>
          </div>
          {intro ? (
            <p className="pretty text-xl leading-snug text-text md:text-2xl">{intro}</p>
          ) : null}
        </div>
        {action ? (
          <Link
            href={action.href}
            className="group inline-flex shrink-0 items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            {action.label}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        ) : null}
      </div>
    </Reveal>
  );
}
