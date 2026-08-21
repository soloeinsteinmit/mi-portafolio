import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { seo, site } from "@/content/site";
import { Shell } from "@/components/layout/Shell";
import { ThemeSync } from "@/components/layout/ThemeSync";
import { JsonLd } from "@/components/layout/JsonLd";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.title,
    template: "%s · Solomon Eshun",
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: seo.title,
    description: seo.description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0e" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.alias,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
  sameAs: site.socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
  knowsAbout: [
    "MLOps",
    "Data engineering",
    "Agentic AI systems",
    "Machine learning research",
    "Distributed systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${mono.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:border focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:text-text"
        >
          Skip to content
        </a>
        <ThemeSync />
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
