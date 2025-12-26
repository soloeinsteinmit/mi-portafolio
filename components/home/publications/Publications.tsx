import { SectionHeader } from "@/components/utils/SectionHeader";
import { PublicationItem } from "./PublicationItem";

export const Publications = () => {
  return (
    <section className="section-wrapper" id="publications">
      <SectionHeader title="Publications" dir="r" />
      {publications.map((item) => (
        <PublicationItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const publications = [
  {
    title: "Moremi Bio Agent: Using Neisseria meningitidis Reference Data For The Double Blinded Validation of A General Purpose Biology-Trained Reasoning Model for Pathogen and Antigen Discovery",
    authors: "Co-Authored",
    journal: "Submitted for review",
    year: "2025",
    link: "#",
    collaboration: "MinoHealth AI Labs • Imperial College London, Infectious Disease, London, UK",
    description:
      "First-of-its-kind AI system demonstrating blind antigen inference from antibody sequences. Moremi Bio Nano successfully identified experimentally validated antigens in 3 out of 4 independent tests, correctly predicting SARS-CoV-2 Spike RBD, Neisseria meningitidis fHbp v1.1, and SARS-CoV Spike as top-ranked candidates—marking a breakthrough in reasoning-driven antigen discovery without prior biological context.",
  },
  {
    title: "Moremi Bio Agent: Leveraging Agentic Large Language Model for the Discovery of Broad-Spectrum Antibiotics for Enterobacteriaceae",
    authors: "Co-Authored",
    journal: "bioRxiv",
    year: "2025",
    link: "https://www.biorxiv.org/content/10.1101/2025.08.21.671656v1",
    doi: "10.1101/2025.08.21.671656",
    collaboration: "MinoHealth AI Labs",
    description:
      "Autonomous AI pipeline for dual-target antibiotic discovery addressing antimicrobial resistance. Generated 1,002 candidate molecules targeting both FabI enzyme and AcrAB–TolC efflux pump simultaneously. Results: 774 compounds passed ADMET benchmarks, 391 exhibited moderate binding to both targets, and 60 top candidates (score ≥ 0.8) showed favorable drug-likeness with minimal toxicity—demonstrating feasibility of AI-driven antibiotic discovery for multidrug-resistant pathogens.",
  },
  {
    title: "Can Large Language Models Design Biological Weapons? Evaluating Moremi Bio",
    authors: "Co-Authored",
    journal: "arXiv",
    year: "2025",
    link: "https://arxiv.org/abs/2505.17154",
    arxiv: "2505.17154",
    collaboration: "MinoHealth AI Labs",
    description:
      "Critical biosecurity assessment revealing dual-use risks of LLMs in biodesign. Generated 1,020 novel toxic proteins and 5,000 toxic small molecules, with all proteins scoring high in toxicity and several closely matching known toxins (ricin, diphtheria toxin, snake venom proteins). Findings challenge claims that LLMs cannot design bioweapons and underscore the urgent need for robust governance and technical safeguards to balance innovation with biosecurity imperatives.",
  },
  {
    title: "Moremi Bio Agent: Application of A Foundation Model and End-to-End Automation in the Design and Validation of Monoclonal Antibodies Targeting Plasmodium falciparum Invasion Complex",
    authors: "Co-Authored",
    journal: "bioRxiv",
    year: "2025",
    link: "https://www.biorxiv.org/content/10.1101/2025.02.12.637967v1",
    doi: "10.1101/2025.02.12.637967",
    collaboration: "MinoHealth AI Labs • West African Centre for Cell Biology of Infectious Pathogens (WACCBIP), University of Ghana, Accra",
    description:
      "AI-driven antibody design pipeline targeting malaria's invasion mechanism. Generated 999 monoclonal antibodies targeting the AMA1-RON2 complex, with 864 showing successful target interactions. Achieved exceptional binding affinities with dissociation constants (Kd) in femtomolar to attomolar range (ΔG: -116.8 to -5.6 kcal/mol), indicating highly stable interactions. Epitope mapping revealed conserved regions for cross-strain efficacy, establishing a scalable framework for therapeutic development against malaria and other infectious diseases.",
  },
];


