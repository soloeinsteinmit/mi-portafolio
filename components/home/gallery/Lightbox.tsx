"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./lightbox.module.scss";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface LightboxProps {
  images: Array<{
    src: string;
    alt: string;
    caption: string;
    year: string;
  }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) => {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <button className={styles.closeButton} onClick={onClose}>
        <AiOutlineClose size="2.4rem" />
      </button>

      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        disabled={currentIndex === 0}
      >
        <AiOutlineLeft size="3rem" />
      </button>

      <div
        className={styles.imageContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={1200}
          height={800}
          className={styles.lightboxImage}
          priority
        />
        <div className={styles.lightboxCaption}>
          <p>{currentImage.caption}</p>
          <span>{currentImage.year}</span>
        </div>
        <div className={styles.imageCounter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        disabled={currentIndex === images.length - 1}
      >
        <AiOutlineRight size="3rem" />
      </button>
    </div>
  );
};

