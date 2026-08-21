"use client";

import { useCallback, useEffect, useState } from "react";
import { Nav } from "./Nav";
import { CommandPalette } from "@/components/fun/CommandPalette";

export function Shell() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const open = useCallback(() => setPaletteOpen(true), []);
  const close = useCallback(() => setPaletteOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Nav onOpenPalette={open} />
      <CommandPalette open={paletteOpen} onClose={close} />
    </>
  );
}
