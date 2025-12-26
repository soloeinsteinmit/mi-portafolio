"use client";

import { useEffect, useState } from "react";
import styles from "./languagedetector.module.scss";

/**
 * Simple Language Detector Component
 *
 * Detects user's browser language and shows a suggestion to switch
 * Uses browser's navigator.language API
 *
 * To enable: Import and add <LanguageDetector /> to your Home component
 */

const SUPPORTED_LANGUAGES = {
  en: "English",
  fr: "Français",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
  nl: "Nederlands",
  pt: "Português",
  pl: "Polski",
  sv: "Svenska",
  da: "Dansk",
  fi: "Suomi",
  no: "Norsk",
  zh: "中文", // Chinese
  ja: "日本語", // Japanese
  ar: "العربية", // Arabic
};

export const LanguageDetector = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [detectedLang, setDetectedLang] = useState<string>("");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user already dismissed
    const isDismissed = localStorage.getItem("language-banner-dismissed");
    if (isDismissed) {
      setDismissed(true);
      return;
    }

    // Detect browser language with multiple fallbacks
    let browserLang = "";

    // Try navigator.language first
    if (navigator.language) {
      browserLang = navigator.language.split("-")[0].toLowerCase();
    }
    // Fallback to navigator.languages array
    else if (navigator.languages && navigator.languages.length > 0) {
      browserLang = navigator.languages[0].split("-")[0].toLowerCase();
    }
    // Final fallback to userLanguage (older IE)
    else if ((navigator as any).userLanguage) {
      browserLang = (navigator as any).userLanguage.split("-")[0].toLowerCase();
    }

    // console.log("Detected browser language:", browserLang); // Debug log

    // Check if it's not English and is supported
    if (
      browserLang &&
      browserLang !== "en" &&
      SUPPORTED_LANGUAGES[browserLang as keyof typeof SUPPORTED_LANGUAGES]
    ) {
      setDetectedLang(browserLang);
      setShowBanner(true);
      // console.log("Showing language banner for:", browserLang); // Debug log
    } 
    // else {
    //   console.log("Banner not shown. Language:", browserLang); // Debug log
    // }
  }, []);

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem("language-banner-dismissed", "true");
  };

  const handleTranslate = () => {
    // Use Google Translate widget or redirect to translated version
    const currentUrl = window.location.href;
    const googleTranslateUrl = `https://translate.google.com/translate?sl=en&tl=${detectedLang}&u=${encodeURIComponent(
      currentUrl
    )}`;
    window.open(googleTranslateUrl, "_blank");
    handleDismiss();
  };

  if (!showBanner || dismissed) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <span className={styles.icon}>🌍</span>
        <p className={styles.text}>
          It looks like you might prefer{" "}
          <strong>
            {
              SUPPORTED_LANGUAGES[
                detectedLang as keyof typeof SUPPORTED_LANGUAGES
              ]
            }
          </strong>
          . Would you like to translate this page?
        </p>
        <div className={styles.buttons}>
          <button onClick={handleTranslate} className={styles.translateBtn}>
            Translate
          </button>
          <button onClick={handleDismiss} className={styles.dismissBtn}>
            Stay in English
          </button>
        </div>
      </div>
    </div>
  );
};
