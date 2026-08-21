export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-border bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

export function TagRow({ items, max }: { items: string[]; max?: number }) {
  const shown = max ? items.slice(0, max) : items;
  const rest = max ? items.length - shown.length : 0;
  return (
    <div className="flex flex-wrap gap-1.5">
      {shown.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
      {rest > 0 ? <Tag>+{rest}</Tag> : null}
    </div>
  );
}
