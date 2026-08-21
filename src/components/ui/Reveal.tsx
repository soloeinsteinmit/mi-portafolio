"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { inView, revealUp } from "@/lib/motion";

/** Section reveal. One primitive, used everywhere, so the page moves as a whole. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      variants={revealUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      {children}
    </M>
  );
}
