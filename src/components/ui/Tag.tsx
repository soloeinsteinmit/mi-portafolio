import { TechIcon } from "./TechIcon";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

/** Stack chip: brand mark plus the name. No bars, no ratings. */
export function TechTag({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-border bg-surface-2 py-0.5 pr-2 pl-1.5 font-mono text-[11px] text-muted">
      <TechIcon name={name} className="size-3" />
      {name}
    </span>
  );
}

export function TagRow({ items, max }: { items: string[]; max?: number }) {
  const shown = max ? items.slice(0, max) : items;
  const rest = max ? items.length - shown.length : 0;
  return (
    <div className="flex flex-wrap gap-1.5">
      {shown.map((t) => (
        <TechTag key={t} name={t} />
      ))}
      {rest > 0 ? <Tag>+{rest}</Tag> : null}
    </div>
  );
}
