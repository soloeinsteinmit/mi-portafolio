import type { Metadata } from "next";
import { site } from "@/content/site";

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Solomon Eshun — A search into the unknown",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: `/${string}`;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: new URL(path, site.url),
      siteName: site.name,
      title: `${title} · ${site.name}`,
      description,
      locale: "en_GB",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description,
      images: [socialImage.url],
    },
  };
}
