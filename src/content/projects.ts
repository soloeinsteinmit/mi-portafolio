import type { Project } from "./types";

/**
 * Selected work, ordered by evidence strength rather than recency.
 *
 * To add one: copy an entry. `thumbnail` is optional — leave it out and a
 * deterministic tile is generated from the slug. To use a real image, drop the
 * file in /public/project-imgs and set thumbnail: "/project-imgs/name.png".
 *
 * `stack` lists tools actually used to build and run the thing, not model
 * families or paradigms — those change per experiment and don't belong here.
 */
export const projects: Project[] = [
  /* ------------------------------------------------------------------ TIER 1 */
  {
    slug: "enbw-data-platform-mlops",
    title: "Production Data Platform & MLOps",
    tagline: "Keeping enterprise ML and data workflows alive in production",
    org: "EnBW Energie Baden-Württemberg AG (via Ishango.ai)",
    orgUrl: "https://www.enbw.com/company/",
    role: "Data Platform Engineer → MLOps Engineer",
    period: "Jan 2026 — Present",
    status: "production",
    tier: 1,
    order: 1,
    summary:
      "Keeping production ML and data workflows alive across multiple teams at a large European energy utility — deployment, observability, and working out why a pipeline died at 3am.",
    stack: [
      "Python",
      "AWS",
      "Terraform",
      "Prefect",
      "Datadog",
      "MLflow",
      "Azure DevOps",
      "Kafka",
      "Snowflake",
      "Iceberg",
    ],
    links: [
      { label: "EnBW", href: "https://www.enbw.com/company/", kind: "site" },
      { label: "Ishango.ai", href: "https://ishango.ai/", kind: "site" },
    ],
  },
  {
    slug: "agentic-self-healing",
    title: "Agentic Self-Healing for Data & AI Pipelines",
    tagline: "First-author research on affordable, vendor-agnostic pipeline recovery",
    role: "First author",
    period: "2026",
    status: "published",
    tier: 1,
    order: 2,
    summary:
      "A vendor-agnostic architecture for agentic incident triage, diagnosis and guarded remediation across data and AI pipelines — assembled from open-source parts rather than bought.",
    stack: ["Python", "Prefect", "Datadog", "Open source"],
    links: [
      { label: "Paper", href: "https://doi.org/10.48550/arXiv.2608.01955", kind: "paper" },
      { label: "Lumis SDK", href: "https://lumis-sdk.vercel.app/", kind: "site" },
    ],
  },
  {
    slug: "lumis-sdk",
    title: "Lumis SDK",
    tagline: "Agentic self-healing for data & AI pipelines",
    role: "Creator & maintainer",
    period: "2026 — Present",
    status: "pre-alpha",
    statusNote: "Building in public",
    tier: 1,
    order: 3,
    summary:
      "A vendor-agnostic, deterministic-first SDK for evidence-grounded diagnosis and guarded remediation across data and AI pipelines. Pre-alpha and built in public.",
    stack: ["Python", "PyPI", "Prefect", "Datadog", "Pydantic"],
    links: [
      { label: "lumis-sdk.vercel.app", href: "https://lumis-sdk.vercel.app/", kind: "site" },
      { label: "GitHub", href: "https://github.com/soloshun/lumis-sdk", kind: "github" },
      { label: "PyPI", href: "https://pypi.org/project/lumis-sdk/", kind: "pypi" },
      { label: "Paper", href: "https://doi.org/10.48550/arXiv.2608.01955", kind: "paper" },
    ],
  },
  {
    slug: "noeud-fx-intelligence",
    title: "FX-Risk Intelligence Systems",
    tagline: "Pricing and forecasting currency risk for African businesses",
    org: "Noeud",
    orgUrl: "https://www.getnoeud.com/",
    role: "Founding Machine Learning Engineer (R&D)",
    period: "Oct 2025 — Present",
    status: "active-development",
    statusNote: "Preparing for release",
    tier: 1,
    order: 4,
    summary:
      "The ML and intelligence layer behind FX-risk decision support for African businesses — pricing currency risk that most businesses here carry blind, and forecasting it across multiple horizons.",
    stack: [
      "Python",
      "AWS",
      "MLflow",
      "Prefect",
      "FastAPI",
      "Supabase",
      "PostgreSQL",
      "GitHub Actions",
      "Docker",
      "Next.js",
    ],
    links: [{ label: "Noeud", href: "https://www.getnoeud.com/", kind: "site" }],
  },
  {
    slug: "moremi-intelligent-systems",
    title: "Moremi Intelligent Research Systems",
    tagline: "Autonomous, tool-using agents on distributed scientific infrastructure",
    org: "MinoHealth AI Labs",
    orgUrl: "https://minohealth.ai/",
    role: "Machine Learning Engineer",
    period: "Oct 2024 — Dec 2025",
    status: "production",
    tier: 1,
    order: 5,
    summary:
      "An autonomous tool-using research agent and the distributed platform under it — 20+ scientific tools behind one API, multi-day runs, 20,000+ candidates per batch. It produced four publications.",
    stack: [
      "Python",
      "Docker",
      "FastAPI",
      "Celery",
      "RabbitMQ",
      "Redis",
      "MongoDB",
      "React",
    ],
    links: [
      { label: "moremi.ai", href: "https://moremi.ai", kind: "site" },
      {
        label: "Write-up",
        href: "https://www.minohealth.ai/blog/moremi-ai-goes-agentic",
        kind: "article",
      },
    ],
  },

  /* ------------------------------------------------------------------ TIER 2 */
  {
    slug: "moremi-deep-research",
    title: "Moremi Deep Research Agent",
    tagline: "Autonomous multi-step research workflows",
    org: "MinoHealth AI Labs",
    role: "Machine Learning Engineer",
    period: "2025",
    status: "production",
    tier: 2,
    order: 1,
    thumbnail: "/project-imgs/deep_research.png",
    summary:
      "A deep research agent that plans, retrieves, reaches for tools and synthesises — without a human nudging it at every step.",
    stack: ["Python", "FastAPI", "Redis", "Vector search"],
    links: [{ label: "moremi.ai", href: "https://moremi.ai", kind: "site" }],
  },
  {
    slug: "moremi-co-researcher",
    title: "Moremi Bio Co-Researcher",
    tagline: "The public, safety-bounded face of the research agent",
    org: "MinoHealth AI Labs",
    role: "Machine Learning Engineer",
    period: "2025",
    status: "production",
    tier: 2,
    order: 2,
    thumbnail: "/project-imgs/cor.gif",
    summary:
      "The public, safety-bounded deployment of the research agent — same tool infrastructure, without needing access to any of it.",
    stack: ["Python", "FastAPI", "Docker", "Redis"],
    links: [
      { label: "Try it", href: "https://moremi.ai", kind: "site" },
      {
        label: "Write-up",
        href: "https://www.minohealth.ai/blog/moremi-co-researcher-an-agentic-life-science-assistant",
        kind: "article",
      },
    ],
  },
  {
    slug: "karaagro-cadi",
    title: "Crop Stress Detection & Drone Mapping",
    tagline: "Computer vision that has to work in a field, in the sun, on a farm",
    org: "KaraAgro AI",
    orgUrl: "https://karaagro.com/",
    role: "AI/ML Engineer & Drone Piloting/Mapping Engineer",
    period: "Jan 2025 — Oct 2025",
    status: "production",
    tier: 2,
    order: 3,
    thumbnail: "/gallery/cadi4.jpg",
    summary:
      "Detection of crop stress and disease from the air, plus the drone capture and mapping pipelines that fed it. Flown over real farms in the Bono and Savannah regions.",
    stack: ["Python", "PyTorch", "OpenCV", "Drone mapping", "Label Studio"],
    links: [{ label: "KaraAgro AI", href: "https://karaagro.com/", kind: "site" }],
  },
  {
    slug: "xauusd-quant",
    title: "Quantitative XAU/USD Session Strategy",
    tagline: "Benchmarking model families against gold-market session dynamics",
    role: "Independent research",
    period: "2025",
    status: "archived",
    tier: 2,
    order: 4,
    thumbnail: "/project-imgs/xauusd.jpg",
    summary:
      "An end-to-end pipeline testing whether gold-market session structure is predictable at all. Mostly an exercise in not fooling yourself with a flattering backtest.",
    stack: ["Python", "PyTorch", "scikit-learn", "MetaTrader 5", "Pandas"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/soloshun/Quantitative-XAUUSD-Strategy",
        kind: "github",
      },
      {
        label: "Write-up",
        href: "https://medium.com/@soloshun/can-ai-find-winning-patterns-in-the-gold-market-a-deep-dive-into-session-dynamics-1c600336128d",
        kind: "article",
      },
    ],
  },
  {
    slug: "llm-from-scratch",
    title: "Building an LLM from Scratch",
    tagline: "Tokenisation, attention and training loop, from first principles",
    role: "Independent learning project",
    period: "2025",
    status: "active-development",
    tier: 2,
    order: 5,
    thumbnail: "/project-imgs/llm.webp",
    summary:
      "Tokenisation, attention, the training loop — from first principles, so the thing I operate all day isn't a black box to me.",
    stack: ["Python", "PyTorch"],
    links: [
      { label: "GitHub", href: "https://github.com/soloshun/llm-from-scratch", kind: "github" },
    ],
  },

  /* ------------------------------------------------------------------ TIER 3 */
  {
    slug: "opendsa",
    title: "OpenDSA",
    tagline: "Algorithm visualisation for people learning data structures",
    role: "Creator",
    period: "2024",
    status: "archived",
    tier: 3,
    order: 1,
    thumbnail: "/project-imgs/opendsa.png",
    summary: "An algorithm visualisation platform for learners, with a companion app and docs.",
    stack: ["TypeScript", "React", "Next.js"],
    links: [
      { label: "Live", href: "https://opendsa.vercel.app/", kind: "site" },
      { label: "Docs", href: "https://docs-opendsa.vercel.app/", kind: "docs" },
      { label: "GitHub", href: "https://github.com/soloshun/opendsa", kind: "github" },
    ],
  },
  {
    slug: "ds-algo-deck",
    title: "DS.AlgoDeck",
    tagline: "Interactive drilling for data structures and algorithms",
    role: "Creator",
    period: "2024",
    status: "archived",
    tier: 3,
    order: 2,
    thumbnail: "/project-imgs/dsalgo.png",
    summary: "An interactive learning platform for data structures and algorithms.",
    stack: ["TypeScript", "React"],
    links: [
      { label: "Live", href: "https://dsalgodeck.netlify.app/", kind: "site" },
      { label: "GitHub", href: "https://github.com/soloshun/ds-algo-deck-v010", kind: "github" },
    ],
  },
  {
    slug: "sonu-ai",
    title: "Sonu AI",
    tagline: "Plant disease detection in the browser",
    role: "Creator",
    period: "2024",
    status: "archived",
    tier: 3,
    order: 3,
    thumbnail: "/project-imgs/sonu.png",
    summary: "Plant disease detection from a photo — the first model I trained that was useful to someone who wasn't me.",
    stack: ["Python", "TensorFlow", "Next.js"],
    links: [
      { label: "Live", href: "https://sonu-ai.vercel.app", kind: "site" },
      { label: "GitHub", href: "https://github.com/soloshun/sonu-ai", kind: "github" },
    ],
  },
  {
    slug: "activetrack",
    title: "ActiveTrack",
    tagline: "IoT fitness tracking with a sequence model on top",
    role: "Creator",
    period: "2024",
    status: "archived",
    tier: 3,
    order: 4,
    summary: "An AI/IoT fitness tracker built around live sensor and health signals.",
    stack: ["Python", "TensorFlow", "Flask", "Node.js", "React"],
  },
  {
    slug: "pidro-bot",
    title: "PiDro Bot",
    tagline: "Where the whole thing started",
    role: "Creator",
    period: "2023",
    status: "archived",
    tier: 3,
    order: 5,
    thumbnail: "/gallery/rob3.jpeg",
    summary:
      "A pick-and-place robot, and a Best Participant award. Felt like magic at the time and still sort of does.",
    stack: ["Python", "Arduino", "ZMROBO"],
  },
];

export const byTier = (tier: 1 | 2 | 3) =>
  projects.filter((p) => p.tier === tier).sort((a, b) => a.order - b.order);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
