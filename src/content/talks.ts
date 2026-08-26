import type { Talk } from "./types";

/** High-signal items only. Wording matches the evidence: presenter, not invited speaker. */
export const talks: Talk[] = [
  {
    image: "/talks/building-working-age-ai-innovotech-2026.png",
    title: "Building and Working in the Age of AI: Ask Me Anything",
    role: "Guest Speaker",
    organisation: "InnovoTech Lab",
    venue: "Online",
    date: "22 Aug 2026",
    year: 2026,
    summary:
      "A practical AMA on how AI is reshaping software and data engineering — and why programming, mathematics and logical reasoning remain non-negotiable foundations in the AI era. The session also explored building AI products around real customer problems, production AI, agents and MLOps, physical AI and robotics, and opportunities in African languages and local challenges.",
    links: [
      {
        label: "Watch full recording",
        href: "https://www.youtube.com/watch?v=-Vb-nwC7uEc",
        kind: "video",
      },
      {
        label: "LinkedIn recap",
        href: "https://lnkd.in/p/duuUNmMC",
        kind: "post",
      },
    ],
  },
  {
    image: "/gallery/indaba2026_1.jpeg",
    title: "Building Useful AI Agents with Agno + OpenRouter",
    role: "Workshop Presenter",
    organisation: "Ghana Data Science Summit / IndabaX Ghana",
    date: "2026",
    year: 2026,
    summary:
      "A hands-on workshop on constructing agents that actually do something: tool use, context and memory, orchestration, and multi-agent patterns — with the failure modes included.",
    links: [
      {
        label: "Workshop repository",
        href: "https://github.com/soloshun/agno_indaba_workshop",
        kind: "github",
      },
    ],
  },
  {
    image: "/gallery/3.jpg",
    title: "Software Engineering in the Age of AI",
    role: "Presenter",
    organisation: "Tech & Beyond Expo",
    venue: "Academic City University",
    date: "2025",
    year: 2025,
    summary:
      "On what changes and what stubbornly does not when the tooling starts writing code with you.",
    links: [
      {
        label: "LinkedIn post",
        href: "https://www.linkedin.com/posts/solomon-eshun-788568317_softwareengineering-ai-techandbeyondexpo-activity-7391428562798465024-n_BO",
        kind: "post",
      },
    ],
  },
  {
    image: "/gallery/ind1.jpg",
    title: "LoRA Fine-Tuning & Vision-Language Models",
    role: "Facilitator",
    organisation: "Ghana Data Science Summit / IndabaX 2025",
    venue: "Ashesi University",
    date: "2025",
    year: 2025,
    summary:
      "Guided participants through hands-on LoRA fine-tuning and vision-language-model exercises.",
    links: [
      {
        label: "MinoHealth post",
        href: "https://www.linkedin.com/posts/minohealth-ai-labs_indabaxghana2025-datascience-minohealth-activity-7340762708012642304-BXoP",
        kind: "post",
      },
    ],
  },
  {
    image: "/gallery/glb4.jpeg",
    title: "Global Code 3-Week Bootcamp",
    role: "Instructor",
    organisation: "Global Code",
    venue: "University of Cape Coast",
    date: "Aug — Sep 2025",
    year: 2025,
    summary:
      "Mentored undergraduate participants in Python, IoT/Raspberry Pi and AI integration, and supported their capstone projects.",
    links: [
      {
        label: "LinkedIn post",
        href: "https://www.linkedin.com/posts/solomon-eshun-788568317_globalcode-python-iot-activity-7371082502087655424-yJWM",
        kind: "post",
      },
    ],
  },
  {
    image: "/gallery/run1.jpeg",
    title: "Runmila AI Institute Summer Camp",
    role: "Instructor",
    organisation: "Runmila AI Institute",
    date: "2025",
    year: 2025,
    summary:
      "Taught Python, generative AI and hands-on LLM/agent sessions to students from Montserrat, Grenada and Dominica.",
    links: [
      {
        label: "Runmila AI Institute",
        href: "https://www.linkedin.com/company/runmila-ai-institute/",
        kind: "post",
      },
    ],
  },
];
