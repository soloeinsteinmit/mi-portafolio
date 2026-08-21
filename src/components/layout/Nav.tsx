"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const isScrolled = () => window.scrollY > 12;

export function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useSyncExternalStore(subscribeScroll, isScrolled, () => false);

  // Close the menu when the route changes. Adjusting state during render is the
  // supported pattern here — an effect would cost an extra committed frame.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:px-8"
      >
        <Link href="/" className="group flex items-baseline gap-2.5">
          <span className="text-[15px] font-semibold tracking-tight text-text">
            Solomon Eshun
          </span>
          <span className="hidden font-mono text-[11px] text-faint transition-colors group-hover:text-accent sm:inline">
            /solo·shun
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative rounded-md px-3 py-1.5 text-[13.5px] transition-colors ${
                    active ? "text-text" : "text-muted hover:text-text"
                  }`}
                >
                  {item.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPalette}
            aria-label="Open command palette"
            className="hidden items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] text-faint transition-colors hover:border-border-strong hover:text-muted lg:flex"
          >
            <span>Jump to</span>
            <kbd className="rounded border border-border bg-surface-2 px-1.5 py-px text-[10px]">
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid size-9 place-items-center rounded-full border border-border bg-surface text-muted md:hidden"
          >
            <span className="relative block h-3 w-4">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="absolute inset-x-0 top-0 h-px bg-current"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute inset-x-0 top-1.5 h-px bg-current"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="absolute inset-x-0 top-3 h-px bg-current"
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-border bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto max-w-6xl px-5 py-3">
              {[...site.nav, { label: "Field Notes", href: "/gallery" }, { label: "Contact", href: "/contact" }].map(
                (item) => (
                  <li key={item.href} className="border-b border-border/60 last:border-0">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3.5 text-[15px] text-text"
                    >
                      {item.label}
                      <span className="font-mono text-xs text-faint">→</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
