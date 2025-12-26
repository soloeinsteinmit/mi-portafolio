import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "EnBW Energie Baden-Württemberg AG (via Ishango AI, London UK)",
    position: "L3 MLOps Engineer",
    time: "Dec 2025 - Present",
    location: "Karlsruhe, Germany (Remote)",
    description:
      "Supporting enterprise-scale MLOps initiatives for a leading European energy provider. Focusing on production ML infrastructure, deployment pipelines, and operational reliability in regulated, high-availability environments.",
    tech: [
      "MLOps",
      "Python",
      "Docker",
      "CI/CD",
      "Model Deployment",
      "Monitoring",
      "Enterprise ML",
    ],
  },
  {
    title: "Noeud",
    position: "Founding Machine Learning Engineer (R&D)",
    time: "Oct 2025 - Present",
    location: "Accra, Ghana (Part-Time Remote)",
    description:
      "Leading research and prototyping of real-time financial forecasting systems using Temporal Fusion Transformers and deep time-series models. Designing end-to-end pipelines from data ingestion to deployment for live market prediction systems.",
    tech: [
      "PyTorch",
      "Time-Series Forecasting",
      "ML Pipelines",
      "System Design",
      "Model Deployment",
      "MLOps",
      "Python",
      "Quantitative Finance",
    ],
  },
  {
    title: "MinoHealth AI Labs",
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
    title: "KaraAgro AI",
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
    title: "Runmila AI Institute",
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
