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
    title: "Moremi Bio - Drug Discovery Platform",
    imgSrc: "/project-imgs/biokit_thumnail.png",
    projectLink: "#",
    code: "#",
    tech: ["Python", "Docker", "FastAPI", "Celery", "RabbitMQ", "Redis", "3Dmol.js", "Next.js"],
    description:
      "Containerized bioinformatics platform processing 20,000+ molecules, co-authored 4 research publications in 2025.",
    videoSrc: "/project-imgs/biokit.mp4",
    status: "In Development",
    disclaimer:
      "⚠️ This platform is currently in development and internal testing/use. The demonstration shown represents a snapshot of the system as I developed it during my time with the company. Source code is proprietary and cannot be shared publicly. You can contact minoHealth AI Labs for possible collaborations.",
    modalContent: (
      <>
        <p>
          Developed a high-performance, containerized bioinformatics ecosystem that unifies 
          over 20 heterogeneous scientific tools (written in C++, Python, Java, & Perl) into a seamless 
          drug discovery pipeline. By leveraging <strong>Docker</strong> and <strong>FastAPI</strong>, 
          I created a reproducible environment that eliminates dependency conflicts and 
          standardizes complex computational workflows.
        </p>
        <p>
          To handle the intensive computational demands of molecular dynamics simulation and other complex bioinformatics workflows, I engineered a distributed task orchestration layer using <strong>Celery</strong>, <strong>RabbitMQ</strong>, and <strong>Redis</strong>. This system dynamically schedules long-running simulations across scalable worker nodes, allowing for the concurrent processing of massive datasets without bottlenecking the user experience.
        </p>
        <p>
          The platform bridges the gap between raw data and scientific insight through 
          integrated <strong>3Dmol.js</strong> visualizations. This allows researchers to 
          interactively explore protein-ligand binding sites and simulation trajectories 
          directly in the browser, providing a powerful interface for real-time analysis of 
          drug-target interactions.
        </p>
        <p>
          This infrastructure has already processed over <strong>20,000 molecules </strong> 
          and served as the computational foundation for <strong>4 research publications </strong> 
          in 2025, demonstrating its reliability and impact in modern bioinformatics research.
        </p>
      </>
    ),
  },
      {
    title: "Moremi Agents",
    imgSrc: "/project-imgs/moremi.png",
    code: "#",
    projectLink: "https://moremi.ai",
    tech: [
      "Python",
      "Agentic AI",
      "Docker",
      "FastAPI",
      "LLMs",
      "Bioinformatics Tools",
      "Medical Imaging",
    ],
    description:
      "A suite of autonomous AI agents designed for bioinformatics and clinical research workflows, real-time medical search and medical image analysis.",
    modalContent: (
      <>
        <p>
          I developed the <strong>Moremi Bio Co-Researcher Agent</strong> as a public-facing, 
          security-hardened implementation of my bioinformatics ecosystem. It functions as an 
          autonomous scientific partner, utilizing a tool-driven architecture to execute complex 
          computational biology workflows using the same containerized infrastructure of 20+ 
          specialized tools.
        </p>
        <p>
          <strong>MoremiSearch</strong> is a powerful, real-time web search tool
          that allows the AI Agent to access and analyze information across all
          domains. While it can perform any AI search, it is uniquely optimized
          for clinical applications, helping conduct complex medical research
          with unprecedented speed, including the latest research on drug
          specifications, clinical trial data, and emerging treatment protocols.
        </p>
        <p>
          <strong>Moremi AI Agent</strong> takes the platform further by using
          specialized tools to provide the best possible response to complex
          queries. A key feature is its ability to generate detailed,
          preliminary medical reports from medical images such as X-rays, MRIs,
          and CT scans, streamlining workflows and providing immediate,
          data-driven insights that accelerate the diagnostic process.
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
