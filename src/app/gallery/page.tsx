import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Gallery",
  description:
    "Photographs from workshops, field work, conferences and late-night building.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        art="galaxy"
        figure="Fig. 07 — a disc, slowly turning"
        title="Out in the world🌍."
        intro="Sites, sessions, and a considerable amount of work conducted at unreasonable hours."
      />
      <Section>
        <GalleryGrid />
      </Section>
    </>
  );
}
