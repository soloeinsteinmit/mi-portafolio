import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/work",
    "/research",
    "/experience",
    "/writing",
    "/talks",
    "/gallery",
    "/about",
    "/contact",
  ];
  const now = new Date();
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...projects.map((p) => ({
      url: `${site.url}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.tier === 1 ? 0.9 : 0.6,
    })),
  ];
}
