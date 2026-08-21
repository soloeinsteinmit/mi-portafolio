"use client";

import { useLayoutEffect } from "react";

export function resolveTheme(): "light" | "dark" {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* private mode */
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

/**
 * Re-asserts the theme immediately after hydration (React can drop attributes
 * it did not render itself) and then enables theme transitions, so the very
 * first paint never animates.
 */
export function ThemeSync() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (root.getAttribute("data-theme") !== resolveTheme()) {
      root.setAttribute("data-theme", resolveTheme());
    }
    const id = requestAnimationFrame(() => root.setAttribute("data-theme-ready", ""));
    return () => cancelAnimationFrame(id);
  }, []);
  return null;
}
