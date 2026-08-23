import type { ClaimStatus } from "@/content/types";

const MAP: Record<
  ClaimStatus,
  { label: string; dot: string; text: string; ring: string; pulse?: boolean }
> = {
  production: {
    label: "In production",
    dot: "bg-[var(--ok)]",
    text: "text-[var(--ok)]",
    ring: "border-[var(--ok)]/30",
    pulse: true,
  },
  published: {
    label: "Published",
    dot: "bg-accent",
    text: "text-accent",
    ring: "border-accent/30",
  },
  "active-development": {
    label: "Active development",
    dot: "bg-[var(--warn)]",
    text: "text-[var(--warn)]",
    ring: "border-[var(--warn)]/30",
    pulse: true,
  },
  "pre-alpha": {
    label: "Pre-alpha",
    dot: "bg-[var(--warn)]",
    text: "text-[var(--warn)]",
    ring: "border-[var(--warn)]/30",
    pulse: true,
  },
  experimental: {
    label: "Experimental",
    dot: "bg-faint",
    text: "text-muted",
    ring: "border-border-strong",
  },
  archived: {
    label: "Archive",
    dot: "bg-faint",
    text: "text-faint",
    ring: "border-border",
  },
};

/**
 * Claim status is never decorative here — it is the difference between
 * "this runs" and "this is being built", and it renders on every card.
 */
export function StatusChip({
  status,
  note,
  className = "",
}: {
  status: ClaimStatus;
  note?: string;
  className?: string;
}) {
  const s = MAP[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${s.ring} bg-surface/60 px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] uppercase ${s.text} ${className}`}
    >
      {s.label}
      {note ? <span className="text-faint normal-case tracking-normal">· {note}</span> : null}
    </span>
  );
}
