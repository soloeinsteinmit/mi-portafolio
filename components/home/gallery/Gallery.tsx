"use client";

/**
 * Gallery Component
 * 
 * TO ADD NEW IMAGES:
 * 1. Place compressed images in /public/gallery/ folder
 * 2. Add a new object to the galleryImages array below
 * 3. The grid will auto-adjust to any number of images!
 * 
 * Image specs:
 * - Recommended: 1200-1600px wide, 4:3 aspect ratio
 * - Compress before uploading (aim for <500KB)
 * - Formats: JPG (photos), PNG (graphics)
 */

import { useState } from "react";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { GalleryItem } from "./GalleryItem";
import { Lightbox } from "./Lightbox";
import styles from "./gallery.module.scss";

export const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev < galleryImages.length - 1 ? prev + 1 : prev
    );
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="section-wrapper" id="gallery">
      <SectionHeader title="Gallery" dir="r" />
      
      <div className={styles.galleryGrid}>
        {galleryImages.map((item, idx) => (
          <GalleryItem key={idx} {...item} onClick={() => openLightbox(idx)} />
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      )}

      {/* Uncomment when you have more images */}
      {/* <div className={styles.viewMore}>
        <a href="/gallery" className={styles.viewMoreLink}>
          View Full Gallery →
        </a>
      </div> */}
    </section>
  );
};

const galleryImages = [
  {
    src: "/gallery/2.jpg",
    alt: "Speaking at Tech & Beyond Expo 2025",
    caption: "Presenting on Software Engineering in the Age of AI at Academic City University",
    year: "2025",
  },
  {
    src: "/gallery/5.jpeg",
    alt: "Global Code Bootcamp Mentoring",
    caption: "Mentoring students in Python and AI integration at University of Cape Coast",
    year: "2025",
  },
  {
    src: "/gallery/3.jpg",
    alt: "Ghana Data Science Summit 2025",
    caption: "Presenting on Software Engineering in the Age of AI at Academic City University",
    year: "2025",
  },
  {
    src: "/gallery/ds3.jpeg",
    alt: "DS-I Africa",
    caption: "At DS-I Africa Consortium Meeting 2025",
    year: "2025",
  },
  {
    src: "/gallery/ds1.jpg",
    alt: "DS-I Africa",
    caption: "At DS-I Africa Consortium Meeting 2025",
    year: "2025",
  },
  {
    src: "/gallery/ds2.jpg",
    alt: "DS-I Africa",
    caption: "At DS-I Africa Consortium Meeting 2025",
    year: "2025",
  },
  {
    src: "/gallery/ds4.jpeg",
    alt: "DS-I Africa",
    caption: "At DS-I Africa Consortium Meeting 2025",
    year: "2025",
  },
  {
    src: "/gallery/4.jpeg",
    alt: "Global Code Bootcamp Mentoring",
    caption: "Mentoring students in Python and AI integration at University of Cape Coast",
    year: "2025",
  },
  {
    src: "/gallery/ind1.jpg",
    alt: "IndabaX Ghana",
    caption: "LoRA fine-tuning workshop at IndabaX Ghana, Ashesi University",
    year: "2025",
  },
  {
    src: "/gallery/ind2.jpg",
    alt: "IndabaX Ghana",
    caption: "LoRA fine-tuning workshop at IndabaX Ghana, Ashesi University",
    year: "2025",
  },
  {
    src: "/gallery/ind3.jpg",
    alt: "IndabaX Ghana",
    caption: "LoRA fine-tuning workshop at IndabaX Ghana, Ashesi University",
    year: "2025",
  },
  {
    src: "/gallery/rob1.jpg",
    alt: "Robotics and IoT TransforME Project",
    caption: "Best Participant Award for exceptional performance and innovation in Robotics and IoT",
    year: "2023",
  },
  {
    src: "/gallery/rob2.jpg",
    alt: "Robotics and IoT TransforME Project",
    caption: "Best Participant Award for exceptional performance and innovation in Robotics and IoT",
    year: "2023",
  },
  {
    src: "/gallery/rob3.jpeg",
    alt: "Robotics and IoT TransforME Project",
    caption: "Showcasing the award-winning project at the Robotics and IoT TransforME exhibition",
    year: "2023",
  },
  {
    src: "/gallery/rob4.jpeg",
    alt: "Robotics and IoT TransforME Project",
    caption: "Showcasing the award-winning project at the Robotics and IoT TransforME exhibition",
    year: "2023",
  },
  {
    src: "/gallery/glb1.jpg",
    alt: "GlobalCode Certificate Ceremony",
    caption: "Receiving the certificate for the GlobalCode 3-week Programming Camp (Raspberry Pi & Python)",
    year: "2024",
  },
  {
    src: "/gallery/glb2.jpg",
    alt: "ActiveTrack Project Presentation",
    caption: "Presenting ActiveTrack at the GlobalCode Project Display: An AI-driven fitness tracker integrating IoT, LSTM models, and open-source LLMs",
    year: "2024",
  },
  {
    src: "/gallery/cadi1.jpg",
    alt: "Drone mapping in Bono Region",
    caption: "Selfie at my first drone mapping site in the Bono Region for the CADI AI pilot.",
    year: "2025",
  },
  {
    src: "/gallery/cadi2.jpg",
    alt: "Team and extension officer on site",
    caption: "With teammates Donald and BoBT and a local extension officer during field operations.",
    year: "2025",
  },
  {
    src: "/gallery/cadi3.jpg",
    alt: "Arrival in Savannah Region",
    caption: "First landing in the Savannah Region with the team for agricultural data collection.",
    year: "2025",
  },
  {
    src: "/gallery/cadi4.jpg",
    alt: "DJI Phantom 4 Pro drone operation",
    caption: "Operating the DJI Phantom 4 Pro with the team, a farmer, and an extension officer.",
    year: "2025",
  },
  {
    src: "/gallery/cadi5.jpg",
    alt: "Aerial view of Accra",
    caption: "View of Accra from the plane window during the flight back from Sunyani.",
    year: "2025",
  },
  {
    src: "/gallery/cadi6.jpeg",
    alt: "Fieldwork and yam protection",
    caption: "On the field with the drone bag; the metal fences here protect yams from hungry cattle😅!",
    year: "2025",
  },
  {
    src: "/gallery/cadi7.jpeg",
    alt: "Arrival at Accra Airport",
    caption: "Back at Accra airport with the team after a successful drone mapping mission.",
    year: "2025",
  },
  {
    src: "/gallery/run1.jpeg",
    alt: "Runmila AI Institute Summer Camp",
    caption: "Teaching Python and Generative AI to students from Montserrat, Grenada, and Dominica during the Runmila AI Summer Camp.",
    year: "2025",
  },
  {
    src: "/gallery/run2.jpeg",
    alt: "Runmila AI Institute Summer Camp",
    caption: "Conducting a hands-on session on Large Language Models and AI agents via Google Colab.",
    year: "2025",
  },
];

