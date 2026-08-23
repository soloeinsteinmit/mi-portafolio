import type { Publication } from "./types";

/**
 * Grouped so that the systems research leads and the biomedical titles read as
 * downstream evidence of an intelligent system, not as a change of field.
 */
export const publications: Publication[] = [
  {
    id: "arxiv-2608.01955",
    title:
      "Agentic Self-Healing for Data and AI Pipelines: An Affordable Vendor-Agnostic Architecture using Open-Source Software",
    year: 2026,
    authorPosition: "First author",
    venue: "arXiv preprint",
    href: "https://doi.org/10.48550/arXiv.2608.01955",
    doiLabel: "arXiv:2608.01955",
    summary:
      "Proposes a vendor-agnostic architecture for agentic incident triage, diagnosis, guarded remediation, verification and organisational learning across data and AI pipelines, assembled entirely from open-source components.",
    group: "systems",
    relatedProject: "lumis-sdk",
  },
  {
    id: "neisseria-2025",
    title:
      "Moremi Bio Agent: Using Neisseria meningitidis Reference Data for the Double-Blinded Validation of a General Purpose Biology-Trained Reasoning Model for Pathogen and Antigen Discovery",
    year: 2025,
    authorPosition: "Second author",
    venue: "Preprint — collaboration with Imperial College London",
    href: "https://doi.org/10.64898/2025.12.17.694980",
    doiLabel: "10.64898/2025.12.17.694980",
    summary:
      "A double-blinded validation of the autonomous agent I architected, run against reference data to test whether the system's discovery process holds up when the answers are withheld.",
    group: "agentic-applications",
    relatedProject: "moremi-intelligent-systems",
    extraLinks: [
      {
        label: "MinoHealth write-up",
        href: "https://minohealth.ai/blog/moremi-bio-agent-v2-worlds-first-blind-ai-antigen-discovery",
        kind: "article",
      },
    ],
  },
  {
    id: "enterobacteriaceae-2025",
    title:
      "Moremi Bio Agent: Leveraging Agentic Large Language Model for the Discovery of Broad-Spectrum Antibiotics for Enterobacteriaceae",
    year: 2025,
    authorPosition: "Fourth author",
    venue: "bioRxiv preprint",
    href: "https://www.biorxiv.org/content/10.1101/2025.08.21.671656v1",
    doiLabel: "10.1101/2025.08.21.671656",
    summary:
      "Applies the tool-using agent and its distributed execution layer to broad-spectrum antibiotic discovery — a workload that depends on high-throughput candidate validation and ranking.",
    group: "agentic-applications",
    relatedProject: "moremi-intelligent-systems",
    extraLinks: [
      {
        label: "MinoHealth write-up",
        href: "https://www.minohealth.ai/blog/moremi-bio-agent-tackles-amr-ai-driven-discovery-of-broad-spectrum-antibiotics-against-enterobacteriaceae",
        kind: "article",
      },
    ],
  },
  {
    id: "bioweapons-2025",
    title: "Can Large Language Models Design Biological Weapons? Evaluating Moremi Bio",
    year: 2025,
    authorPosition: "Fourth author",
    venue: "arXiv preprint",
    href: "https://arxiv.org/abs/2505.17154",
    doiLabel: "arXiv:2505.17154",
    summary:
      "A safety evaluation of the agent's capability boundaries — what a capable tool-using scientific system can and should be prevented from doing.",
    group: "agentic-applications",
    relatedProject: "moremi-intelligent-systems",
    extraLinks: [
      {
        label: "MinoHealth write-up",
        href: "https://www.minohealth.ai/blog/large-language-models-can-design-biological-weapons",
        kind: "article",
      },
    ],
  },
  {
    id: "plasmodium-2025",
    title:
      "Moremi Bio Agent: Application of a Foundation Model and End-to-End Automation in the Design and Validation of Monoclonal Antibodies Targeting Plasmodium falciparum Invasion Complex",
    year: 2025,
    authorPosition: "Sixth author",
    venue: "bioRxiv preprint — collaboration with WACCBIP, University of Ghana",
    href: "https://www.biorxiv.org/content/10.1101/2025.02.12.637967v1",
    doiLabel: "10.1101/2025.02.12.637967",
    summary:
      "End-to-end automation of antibody design and validation, demonstrating the agent running a full research workflow rather than a single assisted step.",
    group: "agentic-applications",
    relatedProject: "moremi-intelligent-systems",
    extraLinks: [
      {
        label: "MinoHealth write-up",
        href: "https://www.minohealth.ai/blog/moremi-bio-agent-autonomously-designs-and-validates-novel-antibodies-for-malaria",
        kind: "article",
      },
    ],
  },
];

export const publicationGroups = [
  {
    key: "systems" as const,
    label: "Data & AI Systems Research",
    note: "First-author work on recovering production pipelines without a human in the loop.",
  },
  {
    key: "agentic-applications" as const,
    label: "Intelligent Agent Research Applications",
    note: "Downstream results produced by the autonomous research system I architected.",
  },
];

export const getPublication = (id: string) =>
  publications.find((p) => p.id === id);
