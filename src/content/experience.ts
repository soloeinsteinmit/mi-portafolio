import type { Experience } from "./types";

/** Strongest recent roles expand; older roles compress progressively. */
export const experience: Experience[] = [
  {
    slug: "enbw",
    organisation: "EnBW Energie Baden-Württemberg AG",
    orgUrl: "https://www.enbw.com/company/",
    relationship: "via Ishango.ai, London, UK",
    roles: [
      { title: "MLOps Engineer", period: "Mar 2026 — Present" },
      { title: "Data Platform Engineer", period: "Jan 2026 — Mar 2026" },
    ],
    location: "Karlsruhe, Germany · Remote",
    period: "Jan 2026 — Present",
    summary:
      "Sitting between data scientists and production: moving completed ML work into operable systems, and keeping the data and model workflows behind them running.",
    bullets: [
      "Support and improve production ML workflows across multiple concurrent data-science projects and teams.",
      "Monitor production pipelines, investigate workflow failures and perform root-cause analysis across orchestration, dependencies, infrastructure and deployment.",
      "Contributed to an internal opinionated Python framework that standardises how engineers define and operate data jobs, with reusable abstractions over orchestration, observability and cloud infrastructure.",
      "Embed validation, retries, alerting, observability and documentation into platform workflows.",
      "Support deployment paths and build and maintain monitoring for running production systems.",
    ],
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
    weight: 1,
    relatedProjects: ["enbw-data-platform-mlops"],
  },
  {
    slug: "noeud",
    organisation: "Noeud",
    orgUrl: "https://www.getnoeud.com/",
    roles: [
      { title: "Founding Machine Learning Engineer (R&D)", period: "Oct 2025 — Present" },
    ],
    location: "Accra, Ghana · Part-time remote",
    period: "Oct 2025 — Present",
    summary:
      "Building the ML and intelligence layer for FX-risk decision support for African businesses.",
    bullets: [
      "Developing a market-regime and maturity-risk system combining deterministic quantitative risk calculations, a historical-ML challenger and an LLM context/validation layer.",
      "Developing a multi-horizon African-currency forecasting system with an XGBoost/LightGBM ensemble, benchmarkable alternatives and an LLM news/context layer across 7/30/60/90-day horizons.",
      "Built the benchmarking loop that evaluates candidate surfaces against matured outcomes, with promotion kept as a deliberate manual decision.",
    ],
    stack: ["Python", "XGBoost", "LightGBM", "MLflow", "Prefect", "FastAPI", "Supabase", "Next.js"],
    weight: 1,
    relatedProjects: ["noeud-fx-intelligence"],
  },
  {
    slug: "minohealth",
    organisation: "MinoHealth AI Labs",
    orgUrl: "https://minohealth.ai/",
    roles: [{ title: "Machine Learning Engineer", period: "Oct 2024 — Dec 2025" }],
    location: "Accra, Ghana",
    period: "Oct 2024 — Dec 2025",
    summary:
      "Architected autonomous, tool-using research systems and the distributed infrastructure they run on.",
    bullets: [
      "Built the Moremi Deep Research Agent for autonomous, multi-step research workflows.",
      "Architected the Moremi Bio autonomous agent, which became core technology across four co-authored 2025 publications.",
      "Designed a containerised platform with Docker and FastAPI integrating 20+ heterogeneous C++, Python, Java and Perl tools.",
      "Built distributed orchestration with Celery, RabbitMQ and Redis for long-running heterogeneous workloads, including runs processing 20,000+ protein/SMILES candidates.",
      "Engineered Moremi Bio Co-Researcher, Moremi AI Agent and Moremi Search for production research workflows.",
    ],
    stack: ["Python", "Agentic AI", "LLMs", "Docker", "FastAPI", "Celery", "RabbitMQ", "Redis", "React"],
    weight: 2,
    relatedProjects: ["moremi-intelligent-systems", "moremi-deep-research", "moremi-co-researcher"],
  },
  {
    slug: "karaagro",
    organisation: "KaraAgro AI",
    orgUrl: "https://karaagro.com/",
    roles: [
      { title: "AI/ML Engineer & Drone Piloting/Mapping Engineer", period: "Jan 2025 — Oct 2025" },
    ],
    location: "Ghana · Contract",
    period: "Jan 2025 — Oct 2025",
    summary:
      "Computer vision for crop stress detection, and the drone capture pipelines that fed it.",
    bullets: [
      "Applied YOLO-based computer vision to crop stress and disease detection in real agricultural settings.",
      "Managed drone-based data capture, mapping, annotation and model-data pipelines.",
      "Trained farmers and agricultural officers to use AI-generated agronomic insights.",
    ],
    stack: ["Python", "YOLO", "Computer Vision", "Drone mapping"],
    weight: 2,
    relatedProjects: ["karaagro-cadi"],
  },
  {
    slug: "global-code",
    organisation: "Global Code",
    roles: [{ title: "Instructor", period: "Aug 2025 — Sep 2025" }],
    location: "University of Cape Coast, Ghana",
    period: "2025",
    summary:
      "Introduced undergraduate students to Python, AI and IoT/Raspberry Pi, and supported their capstone projects.",
    bullets: [],
    stack: ["Python", "Raspberry Pi", "IoT"],
    weight: 3,
  },
];

export const education = {
  institution: "University of Cape Coast",
  location: "Cape Coast, Ghana",
  degree: "B.Ed. Computer Science",
  period: "2020 — 2024",
  result: "Second Class Honours (Upper Division) · CGPA 3.2/4.0",
  coursework:
    "Operating Systems · Data Structures · Database Management · Computer Architecture · Programming & Problem Analysis (Java) · Vector Algebra & Differential Equations · Artificial Intelligence",
};
