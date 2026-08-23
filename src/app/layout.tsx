import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { seo, site } from "@/content/site";
import { Shell } from "@/components/layout/Shell";
import { ThemeSync } from "@/components/layout/ThemeSync";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { JsonLd } from "@/components/layout/JsonLd";
import { Footer } from "@/components/layout/Footer";
import { Grain } from "@/components/fun/Grain";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

/* A literary serif for headings — the site should read like a journal, not a
   dashboard. Body stays a neutral sans; data stays mono. */
const display = Newsreader({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: `${site.name} Portfolio`,
  title: {
    default: seo.title,
    template: "%s · Solomon Eshun",
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  classification: "Personal portfolio, engineering and research",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: "/", languages: { "en-GB": "/" } },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    locale: "en_GB",
    images: [
      {
        url: "/screenshot.png",
        width: 2944,
        height: 1814,
        alt: "Solomon Eshun portfolio homepage — A search into the unknown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/screenshot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/hero-favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/favicon-hero.png", sizes: "512x512", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0e" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      alternateName: site.alias,
      jobTitle: site.role,
      description: site.positioning,
      email: `mailto:${site.email}`,
      url: site.url,
      image: `${site.url}/img/hero-unknown-v2.png`,
      sameAs: site.socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
      knowsAbout: [
        "MLOps",
        "Data engineering",
        "Agentic AI systems",
        "Machine learning research",
        "Distributed systems",
        "Financial machine learning",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${site.name} Portfolio`,
      description: seo.description,
      inLanguage: "en-GB",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: seo.title,
      description: seo.description,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": `${site.url}/#person` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${site.url}/img/hero-unknown-v2.png` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${mono.variable} ${display.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:border focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:text-text"
        >
          Skip to content
        </a>
        <Grain />
        <ThemeSync />
        <ScrollTop />
        <Shell />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={jsonLd} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
