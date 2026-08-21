import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Field Notes",
  description:
    "Photographs from workshops, field work, conferences and late-night building.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Field Notes"
        title="The parts that do not fit in a case study."
        intro="Drone sites in the Bono Region, workshops at IndabaX, a bootcamp at Cape Coast, and a fair amount of work done at hours I would not recommend."
      />
      <Section>
        <GalleryGrid />
      </Section>
    </>
  );
}
