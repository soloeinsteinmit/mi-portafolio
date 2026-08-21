import type { Variants, Transition } from "motion/react";

/**
 * Shared motion vocabulary. Everything on the site uses these so the whole
 * page moves with one accent — short, eased, and never blocking content.
 */
export const ease = [0.16, 1, 0.3, 1] as const;

export const spring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.8,
};

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.06 },
  }),
};

export const revealFade: Variants = {
  hidden: { opacity: 0 },
  show: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease, delay: i * 0.06 },
  }),
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

/** Viewport config used for every scroll reveal — fires once, slightly early. */
export const inView = { once: true, margin: "-80px 0px -80px 0px" } as const;
