import Link from "next/link";

/** Inline link. The site is mostly prose with these in it, so it earns a name. */
export function A({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto");
  if (!external) {
    return (
      <Link href={href} className="link">
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {children}
    </a>
  );
}
