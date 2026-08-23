import Image from "next/image";

/**
 * Large plate, bled into the page.
 *
 * It sits behind and alongside the headline rather than in a box beside it —
 * masked on the left and bottom so it dissolves into the background instead of
 * ending on a hard edge, and desaturated so the type stays the loudest thing.
 */
export function Portrait() {
  return (
    <div className="portrait-bleed pointer-events-none absolute inset-y-0 right-0 z-0 w-[78%] sm:w-[64%] lg:w-[52%]">
      <div className="relative h-full w-full">
        <Image
          src="/img/hero-unknown-v2.png"
          alt="Solomon Eshun looking toward a field of mathematical structures"
          fill
          priority
          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 64vw, 52vw"
          className="object-contain object-right object-bottom"
          style={{ filter: "var(--portrait-filter)" }}
        />
        <span aria-hidden className="portrait-edge-blend absolute inset-y-0 left-0 z-10 w-[42%]" />
      </div>
    </div>
  );
}
