import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Unified Bioinformatics Orchestration Infrastructure",
    imgSrc: "/project-imgs/bio.png",
    code: "#",
    projectLink: "#",
    tech: [
      "Docker",
      "FastAPI",
      "Celery",
      "RabbitMQ",
      "MongoDB",
      "Redis",
      "Python",
      "C++",
      "Java",
      "Perl",
    ],
    description:
      "Scalable distributed infrastructure unifying 20+ heterogeneous bioinformatics tools. Powers autonomous agents, web platforms, and internal analytics.",
    // status: "In Production",
    disclaimer:
      "⚠️ This infrastructure is proprietary and powers multiple production systems at MinoHealth AI Labs. Architecture details shared for educational purposes. Contact MinoHealth for collaborations.",
    modalContent: (
      <>
        <p>
          Architected a production-grade distributed infrastructure that unifies
          20+ heterogeneous bioinformatics tools (written in C++, Python, Java,
          and Perl) into a single, scalable ecosystem. Using{" "}
          <strong>Docker</strong> for containerization and{" "}
          <strong>FastAPI</strong> for unified interfaces, the system eliminates
          dependency conflicts and ensures reproducibility across diverse
          computational biology workflows.
        </p>
        <p>
          <strong>Distributed Task Orchestration:</strong> Engineered a robust
          orchestration layer using <strong>Celery</strong>,{" "}
          <strong>RabbitMQ</strong>, and <strong>Redis</strong> that dynamically
          schedules computational workloads across scalable worker nodes.
          Supports multi-day execution for both the batch processing of 20,000+
          molecules or protein sequences and complex molecular dynamics
          simulations with temporal checkpointing and automatic recovery—ensuring
          zero data loss even during long-running jobs.
        </p>
        <p>
          <strong>Applications & Impact:</strong> This infrastructure powers
          multiple production systems: <strong>Moremi Bio Agent</strong> (
          autonomous AI researcher with 4 publications),{" "}
          <strong>Moremi Biokits</strong> (web-based platform with 3D
          visualization), and <strong>Moremi Bio Co-Researcher</strong>{" "}
          (public-facing agent on moremi.ai). Additionally developed an internal
          Python package for computational biology analytics used across
          research workflows.
        </p>
        <p>
          Built under resource constraints to be highly scalable and
          fault-tolerant, handling intensive computational demands while
          maintaining responsive user experiences. Dynamic worker scheduling
          enables graceful handling of concurrent long-running simulations
          without blocking interactions.
        </p>
      </>
    ),
  },
  {
    title: "Moremi Deep Research Agent",
    imgSrc: "/project-imgs/deep_research.png",
    code: "#",
    projectLink: "https://moremi.ai",
    tech: [
      "Python",
      "LLMs",
      "Agentic AI",
      "RAG",
      "FastAPI",
      "Research Automation",
    ],
    description:
      "Advanced autonomous research agent achieving RACE score of 46.3 on DeepResearch Bench (ranked 3/18 globally).",
    modalContent: (
      <>
        <p>
          Built an advanced autonomous research agent that demonstrates
          state-of-the-art reasoning and research capabilities. Achieved a RACE
          score of 46.3 on the DeepResearch Bench, ranking 3rd out of 18 agents
          globally.
        </p>
        <p>
          The system integrates multi-agent orchestration, advanced retrieval
          techniques, and reasoning capabilities to conduct comprehensive
          research autonomously. Deployed on production platform serving
          real-world research workflows.
        </p>
        <p>
          Featured in MinoHealth AI Labs blog as a breakthrough in agentic AI
          research systems.
        </p>
      </>
    ),
  },
  {
    title: "Moremi Bio Agent",
    // title: "Moremi Bio Agent - Autonomous Research System",
    imgSrc: "/project-imgs/agent.png",
    projectLink: "#",
    code: "#",
    tech: [
      "Python",
      "Agentic AI",
      "LLMs",
      "Prompt Engineering",
      "Tool Use",
      "Chain-of-Thought",
    ],
    description:
      "Autonomous AI agent leveraging the unified bioinformatics infrastructure for independent drug discovery research. Co-authored 4 publications in 2025.",
    // status: "In Production",
    disclaimer:
      "⚠️ This system is in production use at MinoHealth AI Labs. Source code is proprietary. Contact MinoHealth for collaborations.",
    modalContent: (
      <>
        <p>
          Developed <strong>Moremi Bio Agent</strong>, an autonomous AI research
          system that independently conducts computational biology research. The
          agent leverages the unified bioinformatics infrastructure (see
          separate project card) to orchestrate 20+ containerized tools through
          advanced prompt engineering, chain-of-thought reasoning, and strategic
          tool-use capabilities.
        </p>
        <p>
          <strong>Autonomous Capabilities:</strong> Unlike traditional workflows
          that require human direction at each step, Moremi Bio Agent
          autonomously designs experiments, selects appropriate computational
          tools, executes complex workflows, and interprets results. It employs
          sophisticated reasoning strategies to navigate the vast space of
          possible experimental designs and computational approaches.
        </p>
        <p>
          <strong>Research Impact:</strong> Co-authored{" "}
          <strong>4 peer-reviewed research publications</strong> in 2025,
          demonstrating breakthrough capabilities in antibiotic discovery
          (targeting multidrug-resistant pathogens), antibody design (malaria
          therapeutics), antigen inference (vaccine development), and
          biosecurity assessment. A technical report documenting the agent's
          architecture and validation is also available under the publications
          section of this portfolio.
        </p>
        <p>
          The agent represents a paradigm shift in computational biology—
          transforming bioinformatics tools from passive utilities into active
          research collaborators capable of autonomous scientific discovery and
          peer-reviewed publication.
        </p>
      </>
    ),
  },
  {
    title: "Moremi Biokits",
    // title: "Moremi Biokits - Web-Based Drug Discovery Platform",
    imgSrc: "/project-imgs/biokit_thumnail.png",
    projectLink: "#",
    code: "#",
    tech: [
      "Next.js",
      "TypeScript",
      "3Dmol.js",
      "FastAPI",
      "React Query",
      "MongoDB",
    ],
    description:
      "Interactive web platform with 3D molecular visualization, providing researchers intuitive access to the unified bioinformatics infrastructure.",
    videoSrc: "/project-imgs/biokit.mp4",
    status: "In Development",
    disclaimer:
      "⚠️ Platform in development and internal testing. The demonstration shown represents a snapshot of the system as I developed it during my time with the company. Source code is proprietary. Contact MinoHealth AI Labs for collaborations.",
    modalContent: (
      <>
        <p>
          Developed <strong>Moremi Biokits</strong>, a web-based platform that
          provides researchers with an intuitive interface to the unified
          bioinformatics infrastructure (see separate project). Built with{" "}
          <strong>Next.js</strong>, the platform democratizes access to complex
          computational biology workflows through modern, responsive web design.
        </p>
        <p>
          <strong>Interactive 3D Visualization:</strong> Integrated{" "}
          <strong>3Dmol.js</strong> for real-time, browser-based exploration of
          protein structures, ligand binding sites, and molecular dynamics
          trajectories. Researchers interactively analyze drug-target
          interactions and visualize simulation results without specialized
          software installations.
        </p>
        <p>
          <strong>Guided Workflows:</strong> Provides streamlined molecular
          validation workflows—researchers submit compounds for computational
          screening, monitor job progress in real-time, and retrieve results
          through an intuitive dashboard. Seamless backend integration ensures
          efficient processing across the distributed infrastructure.
        </p>
        <p>
          Bridges the gap between computational power and usability, making
          advanced drug discovery accessible to researchers regardless of
          computational expertise.
        </p>
      </>
    ),
  },
  {
    title: "Moremi Bio Co-Researcher",
    // title: "Moremi Bio Co-Researcher - Public Bio Agent",
    imgSrc: "/project-imgs/cor.gif",
    code: "#",
    projectLink: "https://moremi.ai",
    tech: [
      "Python",
      "Agentic AI",
      "LLMs",
      "Bioinformatics Tools",
      "Security Hardening",
    ],
    description:
      "Public-facing bioinformatics agent on moremi.ai, providing secure access to the unified infrastructure for computational biology research.",
    modalContent: (
      <>
        <p>
          Designed <strong>Moremi Bio Co-Researcher</strong>, a security-
          hardened, public-facing version deployed on{" "}
          <a
            href="https://moremi.ai"
            style={{ color: "rgb(99, 179, 237)", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            moremi.ai
          </a>{" "}
          that brings computational biology capabilities to the public. It
          leverages the same unified bioinformatics infrastructure (20+
          containerized tools) used by the internal Moremi Bio Agent.
        </p>
        <p>
          <strong>Constrained for Safety:</strong> Implemented security
          constraints and usage limits to ensure safe public operation while
          maintaining genuine research capabilities. The agent functions as an
          autonomous scientific partner, executing complex computational biology
          workflows through a tool-driven architecture—allowing researchers
          worldwide to conduct computational experiments without requiring
          infrastructure access.
        </p>
        <p>
          <strong>Public Research Tool:</strong> Enables independent
          researchers, students, and institutions to perform bioinformatics
          analyses, molecular dynamics simulations, and drug discovery workflows
          that would typically require significant computational resources and
          technical expertise.
        </p>
      </>
    ),
  },
  {
    title: "Moremi AI Agents",
    // title: "Moremi AI Platform - General AI Agents",
    imgSrc: "/project-imgs/search.gif",
    code: "#",
    projectLink: "https://moremi.ai",
    tech: [
      "Python",
      "LLMs",
      "Real-time Search",
      "Medical Imaging",
      "Computer Vision",
      "FastAPI",
    ],
    description:
      "Suite of general-purpose AI agents on moremi.ai: real-time clinical search and medical image analysis for healthcare workflows.",
    modalContent: (
      <>
        <p>
          Developed specialized AI agents on{" "}
          <a
            href="https://moremi.ai"
            style={{ color: "rgb(99, 179, 237)", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            moremi.ai
          </a>{" "}
          that address clinical and healthcare needs beyond computational
          biology. These agents operate independently of the bioinformatics
          infrastructure, focusing on information retrieval and diagnostic
          support.
        </p>
        <p>
          <strong>MoremiSearch:</strong> Real-time web search agent optimized
          for clinical and biomedical research. While capable of general-
          purpose search, it excels at navigating complex medical literature,
          drug specifications, clinical trial data, and emerging treatment
          protocols with unprecedented speed and accuracy.{" "}
          <a
            href="https://www.minohealth.ai/blog/moremi-ai-goes-agentic"
            style={{ color: "rgb(99, 179, 237)", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the blog post
          </a>
          .
        </p>
        <p>
          <strong>Moremi AI Agent:</strong> Generates preliminary medical
          reports from X-rays, MRIs, and CT scans using computer vision and
          LLMs. Provides immediate, data-driven insights that accelerate
          diagnostic workflows, streamlining the path from image acquisition to
          clinical interpretation Most recent update of this AI agent include 
          integration with CRM and EHR systems.{" "}
          <a
            href="https://www.minohealth.ai/blog/moremi-ai-goes-agentic"
            style={{ color: "rgb(99, 179, 237)", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the blog post
          </a>
          .
        </p>
        <p>
          Platform vision:{" "}
          <a
            href="https://www.minohealth.ai/blog/moremi-ai-towards-artificial-general-intelligence-for-health-and-biology"
            style={{ color: "rgb(99, 179, 237)", textDecoration: "underline" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Moremi AI: Towards AGI for Health and Biology
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Quantitative XAU/USD Session Strategy",
    imgSrc: "/project-imgs/xauusd.jpg",
    code: "https://github.com/soloeinsteinmit/Quantitative-XAUUSD-Strategy",
    projectLink:
      "https://medium.com/@soloshun/can-ai-find-winning-patterns-in-the-gold-market-a-deep-dive-into-session-dynamics-1c600336128d",
    tech: [
      "Python",
      "XGBoost",
      "LSTM",
      "Transformers",
      "Time-Series",
      "MetaTrader5",
    ],
    description:
      "End-to-end ML pipeline benchmarking XGBoost, LSTM, and Transformer architectures for financial market prediction.",
    modalContent: (
      <>
        <p>
          Built a comprehensive end-to-end machine learning pipeline to predict
          gold market (XAU/USD) direction and returns using state-of-the-art
          time-series models.
        </p>
        <p>
          Implemented full workflow including data acquisition via MetaTrader5
          API, advanced feature engineering, model training, evaluation, and
          backtesting. Compared performance across XGBoost, LSTM, and
          Transformer architectures.
        </p>
        <p>
          Documented findings in a detailed Medium article exploring session
          dynamics and pattern recognition in financial markets.
        </p>
      </>
    ),
  },
  {
    title: "Building LLM from Scratch",
    imgSrc: "/project-imgs/llm.webp",
    code: "https://github.com/soloeinsteinmit/llm-from-scratch",
    projectLink: "https://soloshun.medium.com/",
    tech: [
      "Python",
      "PyTorch",
      "Transformers",
      "Tokenization",
      "Attention Mechanisms",
    ],
    description:
      "Educational journey developing a functional LLM from first principles, documented with code and articles.",
    modalContent: (
      <>
        <p>
          Developing a functional Large Language Model from first principles to
          deeply understand transformer architectures, attention mechanisms,
          tokenization, and training workflows.
        </p>
        <p>
          This public learning journey documents the entire process through
          open-source code, detailed visualizations, and educational articles
          aimed at making advanced AI concepts accessible to everyone.
        </p>
        <p>
          Published on Medium with comprehensive explanations of each component
          and design decision.
        </p>
      </>
    ),
  },
  {
    title: "DS.AlgoDeck - Interactive Learning Platform",
    imgSrc: "/project-imgs/dsalgo.png",
    code: "https://github.com/soloeinsteinmit/ds-algo-deck-v010",
    projectLink: "https://dsalgodeck.netlify.app/",
    tech: [
      "React",
      "JavaScript",
      "Gemini API",
      "Data Structures",
      "Algorithms",
    ],
    description:
      "Open-source educational platform for learning data structures through interactive visualizations and AI-powered code generation.",
    modalContent: (
      <>
        <p>
          Built an open-source educational platform that makes learning data
          structures and algorithms engaging through interactive visualizations
          and hands-on practice.
        </p>
        <p>
          Currently implementing an AI-powered code generator using the Gemini
          API to provide personalized coding assistance and automatic solution
          generation for learners at all levels.
        </p>
        <p>
          Features include a live playground for experimentation, visual
          representations of algorithms in action, and comprehensive learning
          resources.
        </p>
      </>
    ),
  },
  {
    title: "Sonu AI - Plant Disease Detection",
    imgSrc: "/project-imgs/sonu.png",
    code: "https://github.com/soloeinsteinmit/sonu-ai",
    projectLink: "https://sonu-ai.vercel.app",
    tech: ["Next.js", "ONNX", "Computer Vision", "PWA", "Tailwind", "Leaflet"],
    description:
      "Offline-capable PWA for crop disease detection achieving 96% accuracy, built in 5 days for Ghanaian farmers.",
    modalContent: (
      <>
        <p>
          Developed an AI-powered offline Progressive Web App for crop disease
          detection and treatment guidance, specifically optimized for Ghanaian
          farmers with limited internet connectivity.
        </p>
        <p>
          Implemented ONNX for on-device inference enabling full offline
          functionality, integrated Leaflet for outbreak mapping visualization,
          and built a responsive mobile UI with Next.js and Tailwind CSS.
        </p>
        <p>
          Achieved 96% accuracy with complete offline capability and deployed
          live within 5 days as a hackathon project. Featured on Devpost.
        </p>
      </>
    ),
  },
];
