"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

/**
 * Every route change starts at the top.
 *
 * Belt and braces on purpose: the layout effect fires before paint, and the
 * rAF pass fires after the router has finished its own restoration — which is
 * what was previously landing the page part-way down a section.
 */
export function ScrollTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (window.location.hash) return; // a deep link to a section wins
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (window.location.hash) return;
    const a = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      const b = requestAnimationFrame(() => window.scrollTo(0, 0));
      return () => cancelAnimationFrame(b);
    });
    return () => cancelAnimationFrame(a);
  }, [pathname]);

  return null;
}
