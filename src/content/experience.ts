import type { Experience } from "./types";

/** Strongest recent roles expand; older roles compress progressively. */
export const experience: Experience[] = [
  {
    slug: "enbw",
    organisation: "EnBW Energie Baden-Württemberg AG",
    orgUrl: "https://www.enbw.com/company/",
    logo: "/experience/logos/enbw.svg",
    relationship: "via Ishango.ai, London, UK",
    roles: [
      { title: "MLOps Engineer", period: "Mar 2026 — Present" },
      { title: "Data Platform Engineer", period: "Jan 2026 — Mar 2026" },
    ],
    location: "Karlsruhe, Germany · Remote",
    period: "Jan 2026 — Present",
    summary:
      "Sitting between data scientists and production: moving completed ML work into operable systems, and keeping them running.",
    bullets: [
      "Production ML and data workflows across multiple teams — deployment, observability, incident investigation.",
      "Contributed to an internal Python framework that standardises how engineers define and operate data jobs.",
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
    logo: "/experience/logos/noeud.png",
    roles: [
      { title: "Founding Machine Learning Engineer (R&D)", period: "Oct 2025 — Present" },
    ],
    location: "Accra, Ghana · Part-time remote",
    period: "Oct 2025 — Present",
    summary:
      "Building the ML and intelligence layer for FX-risk decision support for African businesses.",
    bullets: [
      "A market-regime engine and a multi-horizon forecasting system, both in active development.",
      "Deterministic baseline, ML challenger in shadow, LLM context layer — benchmarked before anything is promoted.",
    ],
    stack: ["Python", "AWS", "MLflow", "Prefect", "FastAPI", "Supabase", "PostgreSQL", "Docker"],
    weight: 1,
    relatedProjects: ["noeud-fx-intelligence"],
  },
  {
    slug: "minohealth",
    organisation: "MinoHealth AI Labs",
    orgUrl: "https://minohealth.ai/",
    logo: "/experience/logos/minohealth.png",
    roles: [{ title: "Machine Learning Engineer", period: "Oct 2024 — Dec 2025" }],
    location: "Accra, Ghana",
    period: "Oct 2024 — Dec 2025",
    summary:
      "Architected autonomous, tool-using research systems and the distributed infrastructure they run on.",
    bullets: [
      "Moremi Bio — an autonomous research agent that became the core technology behind four co-authored publications.",
      "The containerised platform and distributed execution layer underneath it, plus the public Co-Researcher agent.",
    ],
    stack: ["Python", "Docker", "FastAPI", "Celery", "RabbitMQ", "Redis", "MongoDB", "React"],
    weight: 2,
    relatedProjects: ["moremi-intelligent-systems", "moremi-deep-research", "moremi-co-researcher"],
  },
  {
    slug: "karaagro",
    organisation: "KaraAgro AI",
    orgUrl: "https://karaagro.com/",
    logo: "/experience/logos/karaagro.png",
    roles: [
      { title: "AI/ML Engineer & Drone Piloting/Mapping Engineer", period: "Jan 2025 — Oct 2025" },
    ],
    location: "Ghana · Contract",
    period: "Jan 2025 — Oct 2025",
    summary:
      "Computer vision for crop stress detection, and the drone capture pipelines that fed it.",
    bullets: [
      "YOLO-based detection in real agricultural settings, with the drone capture and annotation pipelines behind it.",
      "Trained the farmers and extension officers who had to act on the output.",
    ],
    stack: ["Python", "PyTorch", "OpenCV", "Drone mapping"],
    weight: 2,
    relatedProjects: ["karaagro-cadi"],
  },
  {
    slug: "global-code",
    organisation: "Global Code",
    orgUrl: "https://globalcode.org.uk/",
    logo: "/experience/logos/global-code.png",
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
