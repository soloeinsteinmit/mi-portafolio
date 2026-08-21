"use client";

import { useCallback, useSyncExternalStore } from "react";
import { motion } from "motion/react";

type Theme = "light" | "dark";

/** The DOM attribute is the source of truth; React subscribes to it. */
function subscribe(onChange: () => void) {
  const obs = new MutationObserver(onChange);
  obs.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => obs.disconnect();
}

const getSnapshot = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

/** Matches the CSS default so the hydration render agrees with the server. */
const getServerSnapshot = (): Theme => "dark";

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode — the toggle still works for this session */
    }
  }, []);

  const toggle = useCallback(
    () => setTheme(getSnapshot() === "dark" ? "light" : "dark"),
    [setTheme]
  );

  return { theme, setTheme, toggle };
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={`relative grid size-9 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-border-strong hover:text-text ${className}`}
    >
      <motion.svg
        key={theme}
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ opacity: 0, rotate: -35, scale: 0.7 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {theme === "dark" ? (
          <>
            <circle cx="12" cy="12" r="4.2" />
            <path d="M12 2.6v2.2M12 19.2v2.2M4.4 12H2.2M21.8 12h-2.2M6.4 6.4 4.9 4.9M19.1 19.1l-1.5-1.5M17.6 6.4l1.5-1.5M4.9 19.1l1.5-1.5" />
          </>
        ) : (
          <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a8.6 8.6 0 1 0 11.1 11.1Z" />
        )}
      </motion.svg>
    </button>
  );
}
