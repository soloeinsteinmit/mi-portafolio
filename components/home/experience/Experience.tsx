import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item, index) => (
        <ExperienceItem key={index} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: (
      <>
        <a
          href="https://www.enbw.com/company/"
          target="_blank"
          rel="nofollow noreferrer"
        >
          EnBW Energie Baden-Württemberg AG
        </a>{" "}
        (via{" "}
        <a href="https://ishango.ai/" target="_blank" rel="nofollow noreferrer">
          Ishango AI
        </a>
        , London UK)
      </>
    ),
    position: "DataOps Engineer (Data Platform Engineering)",
    time: "Dec 2025 - Present",
    location: "Karlsruhe, Germany (Remote)",
    description:
      "Supporting the development of an internal data platform for a leading European energy provider. My work focuses on building shared abstractions and guardrails that standardise data pipeline development across teams. Instead of writing ad-hoc orchestration logic, downstream users rely on platform-managed libraries that handle data quality checks, retries, observability, alerting, and documentation by default. This enables reliable, scalable, and compliant data workflows in regulated, high-availability environments.",
    tech: [
      "MLOps",
      "Python",
      "Docker",
      "DataDog",
      "Prefect",
      "DataSync.Platform",
      "AzureDevOps",
      "CI/CD",
      "Model Deployment",
      "SRE",
      "Enterprise ML",
    ],
  },
  {
    title: (
      <a href="https://www.getnoeud.com/" target="_blank" rel="nofollow noreferrer">
        Noeud
      </a>
    ),
    position: "Founding Machine Learning Engineer (R&D)",
    time: "Oct 2025 - Present",
    location: "Accra, Ghana (Part-Time Remote)",
    description:
      "Leading research and prototyping of real-time financial forecasting systems and deep time-series models. Designing end-to-end pipelines from data ingestion to deployment and continuous retraining for live market prediction systems.",
    tech: [
      "PyTorch",
      "Time-Series Forecasting",
      "ML Pipelines",
      "Data Pipelines",
      "System Design",
      "Model Deployment",
      "MLOps",
      "SRE",
      "Python",
      "Quantitative Finance",
    ],
  },
  {
    title: (
      <a href="https://minohealth.ai/" target="_blank" rel="nofollow noreferrer">
        MinoHealth AI Labs
      </a>
    ),
    position: "Machine Learning Engineer",
    time: "Oct 2024 - Dec 2025",
    location: "Accra, Ghana",
    description:
      "Engineered unified, containerized infrastructure integrating 20+ bioinformatics and computational biology tools (written in C++, Python, Java and Perl) with asynchronous task orchestration (Celery, RabbitMQ, Redis). Architected Moremi Bio Co-Researcher, Moremi Agent and Moremi Search powering research workflows on moremi.ai platform. Built Moremi Deep Research Agent (RACE score 46.3, ranked 3/18 on DeepResearch Bench) and designed Moremi Bio Agent, an autonomous research agent technology behind 4 co-authored 2025 research publications including a double-blinded validation study with Imperial College London, Infectious Disease.",
    tech: [
      "Python",
      "Docker",
      "FastAPI",
      "Celery",
      "RabbitMQ",
      "Redis",
      "PyTorch",
      "LLMs",
      "Agentic AI",
      "React",
      "3Dmol.js",
      "Bioinformatics",
    ],
  },
  {
    title: (
      <a href="https://karaagro.com/" target="_blank" rel="nofollow noreferrer">
        KaraAgro AI
      </a>
    ),
    position: "AI Engineer & Drone Mapping",
    time: "Jan 2025 - Dec 2025",
    location: "Accra, Ghana (Part-Time Contract)",
    description:
      "Deployed YOLOv12 computer vision model for cashew stress detection across 42 farms in 28 communities as part of GIZ, MOVE, and FAIR FORWARD funded CADI AI pilot. Led end-to-end drone mapping operations, collecting and annotating 148GB agricultural dataset.",
    tech: [
      "YOLO",
      "Computer Vision",
      "Python",
      "PyTorch",
      "Roboflow",
      "Drone Mapping",
      "Agricultural AI",
    ],
  },
  {
    title: (
      <a
        href="https://www.linkedin.com/company/runmila-ai-institute/"
        target="_blank"
        rel="nofollow noreferrer"
      >
        Runmila AI Institute
      </a>
    ),
    position: "AI Instructor",
    time: "Jul 2025 - Sep 2025",
    location: "Remote (Contract)",
    description:
      "Delivered the 2025 Generative AI & Python Summer Camp for students from Montserrat, Grenada, and Dominica. Taught hands-on sessions on Python programming, large language models, vision-language models, and AI agents.",
    tech: [
      "Python",
      "LLMs",
      "Vision-Language Models",
      "AI Agents",
      "Teaching",
      "Curriculum Development",
    ],
  },
];
