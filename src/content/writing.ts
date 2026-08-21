import type { ProjectLink, WritingItem } from "./types";

/** Kept small and real. An empty shelf beats a padded one. */
export const writing: WritingItem[] = [
  {
    title:
      "Can AI Find Winning Patterns in the Gold Market? A Deep Dive into Session Dynamics",
    date: "2025",
    year: 2025,
    summary:
      "Benchmarking XGBoost, LSTM and Transformer architectures against XAU/USD session structure — what held up, and what was just a flattering backtest.",
    tags: ["Quantitative ML", "Time-series", "Benchmarking"],
    url: "https://medium.com/@soloshun/can-ai-find-winning-patterns-in-the-gold-market-a-deep-dive-into-session-dynamics-1c600336128d",
    source: "Medium",
  },
];

/** Third-party write-ups about systems I built. Not my byline — labelled as such. */
export const coverage: (ProjectLink & { org: string; note: string })[] = [
  {
    label: "Moremi Bio Agent v2: blind AI antigen discovery",
    href: "https://minohealth.ai/blog/moremi-bio-agent-v2-worlds-first-blind-ai-antigen-discovery",
    kind: "article",
    org: "MinoHealth AI Labs",
    note: "On the double-blinded validation of the agent.",
  },
  {
    label: "Moremi AI goes agentic",
    href: "https://www.minohealth.ai/blog/moremi-ai-goes-agentic",
    kind: "article",
    org: "MinoHealth AI Labs",
    note: "The shift from assistant to tool-using autonomous system.",
  },
  {
    label: "Moremi Co-Researcher: an agentic life-science assistant",
    href: "https://www.minohealth.ai/blog/moremi-co-researcher-an-agentic-life-science-assistant",
    kind: "article",
    org: "MinoHealth AI Labs",
    note: "The public deployment of the research agent.",
  },
  {
    label: "Moremi Bio Agent autonomously designs antibodies for malaria",
    href: "https://www.minohealth.ai/blog/moremi-bio-agent-autonomously-designs-and-validates-novel-antibodies-for-malaria",
    kind: "article",
    org: "MinoHealth AI Labs",
    note: "End-to-end automation of design and validation.",
  },
];
