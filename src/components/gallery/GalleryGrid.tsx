"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { gallery, galleryGroups } from "@/content/gallery";
import { inView, revealUp } from "@/lib/motion";

export function GalleryGrid() {
  const [group, setGroup] = useState("All");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(
    () => (group === "All" ? gallery : gallery.filter((g) => g.group === group)),
    [group]
  );

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open === null ? null : items[open];

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {galleryGroups.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => {
              setGroup(g);
              setOpen(null);
            }}
            className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] tracking-[0.06em] uppercase transition-colors ${
              group === g
                ? "border-accent/50 bg-accent-soft text-accent"
                : "border-border text-faint hover:border-border-strong hover:text-muted"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item, i) => (
          <motion.figure
            key={item.src}
            variants={revealUp}
            custom={Math.min(i, 6)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="break-inside-avoid"
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-lg border border-border bg-surface-2 text-left"
              aria-label={`Open image: ${item.alt}`}
            >
              <span className="relative block">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </span>
              <span className="flex items-start justify-between gap-3 p-3.5">
                <span className="pretty text-[13px] leading-snug text-muted">
                  {item.caption}
                </span>
                <span className="shrink-0 font-mono text-[10px] text-faint">{item.year}</span>
              </span>
            </button>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {current ? (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
          >
            <div className="absolute inset-0 bg-bg/94 backdrop-blur-md" onClick={close} />
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex max-h-full w-full max-w-4xl flex-col"
            >
              <div className="relative overflow-hidden rounded-lg border border-border bg-surface-2">
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={1600}
                  height={1200}
                  sizes="100vw"
                  className="max-h-[72vh] w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-6">
                <p className="pretty max-w-2xl text-[14px] leading-relaxed text-muted">
                  {current.caption}
                </p>
                <p className="shrink-0 font-mono text-[11px] text-faint">
                  {open! + 1} / {items.length}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous image"
                  className="grid size-9 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-border-strong hover:text-text"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next image"
                  className="grid size-9 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-border-strong hover:text-text"
                >
                  →
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="ml-auto rounded-full border border-border bg-surface px-4 py-2 font-mono text-[11px] text-muted transition-colors hover:border-border-strong hover:text-text"
                >
                  Close · esc
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
