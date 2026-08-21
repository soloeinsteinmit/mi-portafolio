import type { ReactNode } from "react";

export function Section({
  children,
  id,
  className = "",
  bleed = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  bleed?: boolean;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className={bleed ? "" : "mx-auto max-w-6xl px-5 md:px-8"}>{children}</div>
    </section>
  );
}
