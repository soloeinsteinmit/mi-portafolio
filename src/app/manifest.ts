import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Solomon Eshun — AI, ML & Data Systems Engineer",
    short_name: "Solomon Eshun",
    description:
      "Production ML, data platforms, agentic systems, open-source infrastructure and applied research.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      { src: "/favicon-hero.png", sizes: "512x512", type: "image/png" },
      { src: "/hero-favicon.ico", sizes: "256x256", type: "image/x-icon" },
    ],
  };
}
