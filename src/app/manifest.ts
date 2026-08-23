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
    icons: [{ src: "/favicon.png", sizes: "any", type: "image/png" }],
  };
}
