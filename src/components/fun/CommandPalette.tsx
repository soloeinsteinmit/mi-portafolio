"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { publications } from "@/content/publications";
import { useTheme } from "@/components/layout/ThemeToggle";

type Item = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  run: () => void;
};

/** A small reward for anyone who tries ⌘K. Nothing important hides behind it. */
const EASTER: Record<string, string> = {
  whoami: "solomon — ai & data systems engineer. currently: keeping pipelines alive.",
  sudo: "nice try. consequential actions remain explicitly controlled.",
  "rm -rf": "that is exactly the kind of remediation Lumis will not run for you.",
  hire: "yes. solomoneshun373@gmail.com",
  help: "type to search, ↑↓ to move, ⏎ to go, esc to leave.",
  status: "all systems nominal. one engineer, slightly under-slept.",
};

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const { toggle } = useTheme();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const items: Item[] = useMemo(() => {
    const go = (href: string) => () => {
      router.push(href);
      onClose();
    };
    return [
      ...site.nav.map((n) => ({
        id: `nav-${n.href}`,
        label: n.label,
        group: "Pages",
        run: go(n.href),
      })),
      { id: "nav-gallery", label: "Gallery", group: "Pages", run: go("/gallery") },
      ...projects.map((p) => {
        const href = p.links?.find((l) => l.href.startsWith("http"))?.href;
        return {
          id: `proj-${p.slug}`,
          label: p.title,
          hint: p.org ?? p.role,
          group: "Work",
          run: href
            ? () => {
                window.open(href, "_blank", "noopener,noreferrer");
                onClose();
              }
            : go("/work"),
        };
      }),
      ...publications.map((p) => ({
        id: `pub-${p.id}`,
        label: p.title,
        hint: p.doiLabel,
        group: "Research",
        run: () => {
          window.open(p.href, "_blank", "noopener,noreferrer");
          onClose();
        },
      })),
      {
        id: "act-theme",
        label: "Toggle theme",
        hint: "light / dark",
        group: "Actions",
        run: () => {
          toggle();
          onClose();
        },
      },
      {
        id: "act-cv",
        label: "Open CV",
        hint: "PDF",
        group: "Actions",
        run: () => {
          window.open(site.cv, "_blank", "noopener,noreferrer");
          onClose();
        },
      },
      {
        id: "act-email",
        label: "Copy email address",
        hint: site.email,
        group: "Actions",
        run: () => {
          navigator.clipboard?.writeText(site.email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        },
      },
      ...site.socials
        .filter((s) => !s.href.startsWith("mailto"))
        .map((s) => ({
          id: `soc-${s.label}`,
          label: s.label,
          hint: s.handle,
          group: "Elsewhere",
          run: () => {
            window.open(s.href, "_blank", "noopener,noreferrer");
            onClose();
          },
        })),
    ];
  }, [router, onClose, toggle]);

  const q = query.trim().toLowerCase();
  const easter = Object.keys(EASTER).find((k) => q === k || (q.length > 2 && k.startsWith(q)));

  const filtered = useMemo(() => {
    if (!q) return items;
    return items.filter(
      (i) =>
        i.label.toLowerCase().includes(q) || (i.hint ?? "").toLowerCase().includes(q)
    );
  }, [items, q]);

  // Reset the highlighted row as the query changes, and clear the query each
  // time the palette opens. Both are state adjustments driven by a value we
  // already have during render, so they do not need an effect.
  const [lastQuery, setLastQuery] = useState(query);
  if (lastQuery !== query) {
    setLastQuery(query);
    setActive(0);
  }

  const [wasOpen, setWasOpen] = useState(open);
  if (wasOpen !== open) {
    setWasOpen(open);
    if (open) {
      setQuery("");
      setLastQuery("");
      setActive(0);
    }
  }

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 40);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        filtered[active]?.run();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active, onClose]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-idx="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  let lastGroup = "";

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
        >
          <div
            className="absolute inset-0 bg-bg/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border-strong bg-bg-elevated shadow-float"
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <span className="font-mono text-xs text-accent">›</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search work, research, pages…"
                aria-label="Search"
                className="h-12 flex-1 bg-transparent text-sm text-text outline-none placeholder:text-faint"
              />
              <kbd className="rounded border border-border bg-surface-2 px-1.5 py-px font-mono text-[10px] text-faint">
                esc
              </kbd>
            </div>

            <div ref={listRef} className="max-h-[52vh] overflow-y-auto py-2">
              {easter ? (
                <p className="mx-2 mb-2 rounded-lg border border-accent/25 bg-accent-soft px-3.5 py-2.5 font-mono text-xs leading-relaxed text-muted">
                  <span className="text-accent">$ {easter}</span>
                  <br />
                  {EASTER[easter]}
                </p>
              ) : null}

              {filtered.length === 0 && !easter ? (
                <p className="px-4 py-6 text-center text-sm text-faint">
                  Nothing here. Try “Lumis”, “research”, or “contact”.
                </p>
              ) : null}

              {filtered.map((item, i) => {
                const header = item.group !== lastGroup ? item.group : null;
                lastGroup = item.group;
                return (
                  <div key={item.id}>
                    {header ? <div className="label px-4 pt-3 pb-1.5">{header}</div> : null}
                    <button
                      type="button"
                      data-idx={i}
                      onMouseEnter={() => setActive(i)}
                      onClick={item.run}
                      className={`flex w-full items-center justify-between gap-4 px-4 py-2 text-left text-sm transition-colors ${
                        i === active ? "bg-surface-2 text-text" : "text-muted"
                      }`}
                    >
                      <span className="min-w-0 truncate">{item.label}</span>
                      {item.hint ? (
                        <span className="shrink-0 truncate font-mono text-[11px] text-faint">
                          {item.id === "act-email" && copied ? "copied ✓" : item.hint}
                        </span>
                      ) : null}
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
