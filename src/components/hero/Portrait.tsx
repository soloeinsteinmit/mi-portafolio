import Image from "next/image";

/**
 * Editorial crop in a geometric frame — not a circular avatar. Desaturated to
 * sit inside the theme, with a small colour return on hover.
 */
export function Portrait() {
  return (
    <figure className="group relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-surface-2">
        <Image
          src="/img/portrait.jpeg"
          alt="Solomon Eshun"
          fill
          priority
          sizes="(max-width: 1024px) 60vw, 380px"
          className="object-cover object-[60%_28%] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
          style={{ filter: "var(--portrait-filter)" }}
        />
        <div
          aria-hidden
          className="grid-field pointer-events-none absolute inset-0 opacity-70 mix-blend-overlay"
          style={{ backgroundSize: "36px 36px" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/45 via-transparent to-transparent"
        />
      </div>

      {/* corner ticks */}
      <span aria-hidden className="absolute -top-1 -left-1 size-3 border-t border-l border-accent/70" />
      <span aria-hidden className="absolute -right-1 -bottom-1 size-3 border-r border-b border-accent/70" />

      <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.12em] text-faint uppercase">
        <span>Solomon Eshun</span>
        <span>Accra · GH</span>
      </figcaption>
    </figure>
  );
}
