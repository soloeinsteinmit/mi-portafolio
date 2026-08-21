import type { Project } from "./types";

/**
 * Selected work, ordered by evidence strength rather than recency.
 *
 * Wording here is bounded by the Master Profile Evidence Bank: nothing in
 * active development is described as shipped, no confidential client detail
 * appears, and every external claim resolves to a public link.
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
      "I support production machine-learning and data workflows across multiple concurrent projects and data-science teams at a large European energy utility — deployment, observability, incident investigation and platform reliability.",
    problem:
      "Data scientists produce models that work. Getting those models to keep working — across orchestration, dependency, infrastructure and deployment boundaries, on live data, without a dedicated engineer babysitting each one — is a different problem entirely. Every team was independently re-solving the same operational concerns.",
    system:
      "A shared internal data platform, plus an opinionated internal Python framework that standardises how engineers define and operate data jobs. Engineers import reusable abstractions, define their job inside that structure, and inherit consistent operational behaviour instead of hand-rolling orchestration, observability and cloud plumbing per project.",
    contribution: [
      "Support and improve production ML workflows across multiple data-science projects and teams, partnering with data scientists to move completed model work into deployable, operable systems.",
      "Monitor production pipelines, investigate workflow failures and perform root-cause analysis across orchestration, dependencies, infrastructure, deployment and non-business-logic code.",
      "Contributed to the internal Python framework that gives engineers a standard way to create and operate data jobs, with reusable abstractions over orchestration, observability and platform infrastructure.",
      "Embedded validation, retries, alerting, observability and documentation into platform workflows.",
      "Support infrastructure and deployment paths, and build and maintain monitoring for running systems.",
    ],
    decisions: [
      "Standardise the operational surface, not the business logic — teams keep their modelling freedom and inherit reliability by default.",
      "Observability is part of job definition rather than a step someone remembers afterwards.",
      "Failure investigation is a first-class workflow: the goal is a diagnosis you can act on, not a restarted job.",
    ],
    flow: [
      { label: "Ingestion", note: "live European sensor & market data" },
      { label: "Orchestration", note: "Prefect" },
      { label: "Model workflows", note: "MLflow" },
      { label: "Observability", note: "Datadog" },
      { label: "Incident & RCA", note: "the part nobody photographs" },
    ],
    outcomes: [
      "Production ML and data workflows for multiple concurrent teams stay operable without per-project bespoke tooling.",
      "The repeated operational burden of diagnosing and recovering pipeline failures directly motivated my first-author research on agentic self-healing.",
    ],
    currentStatus:
      "Current role. Data Platform Engineer (Jan–Mar 2026), MLOps Engineer (Mar 2026 — present); the two sets of responsibilities overlap in practice.",
    disclosure:
      "Described at a deliberately public-safe level. Internal repositories, the framework's internal name, customer-specific logic, sensitive business use cases and confidential operational detail are omitted.",
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
    relatedPublications: ["arxiv-2608.01955"],
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
      "A vendor-agnostic architecture for agentic incident triage, diagnosis, guarded remediation, verification and organisational learning across data and AI pipelines — built entirely from open-source software.",
    problem:
      "Pipeline reliability tooling is either expensive, vendor-locked, or stops at alerting. Teams are left with the same manual loop: an alert fires, an engineer reconstructs context from scattered logs, forms a diagnosis, fixes it, and the knowledge evaporates before the next incident.",
    system:
      "An architecture in which agents operate over bounded incident evidence and produce structured, reviewable diagnoses — with remediation kept behind explicit approval and verification boundaries, and each incident leaving behind a durable organisational-memory record.",
    contribution: [
      "First author. The research originated directly from the operational burden of repeatedly diagnosing and recovering production pipeline failures across many projects.",
      "Designed the architecture around affordability and vendor-agnosticism: it should be assemblable from open-source components rather than bought.",
      "Defined the boundary between what an agent may conclude and what an agent may execute.",
    ],
    flow: [
      { label: "Detect" },
      { label: "Triage" },
      { label: "Diagnose", note: "bounded evidence" },
      { label: "Plan" },
      { label: "Approve", note: "human boundary" },
      { label: "Remediate" },
      { label: "Verify" },
      { label: "Learn", note: "operational memory" },
    ],
    outcomes: [
      "Published to arXiv as arXiv:2608.01955.",
      "Implemented in the open as the Lumis SDK, rather than left as a conceptual architecture.",
    ],
    currentStatus:
      "Published. The implementation path continues in Lumis SDK, currently at the Diagnosis-as-Code stage.",
    stack: [
      "Agentic systems",
      "Open-source infrastructure",
      "Incident diagnosis",
      "Observability",
      "MLOps",
    ],
    links: [
      {
        label: "Read the paper (arXiv:2608.01955)",
        href: "https://doi.org/10.48550/arXiv.2608.01955",
        kind: "paper",
      },
      { label: "Lumis SDK — implementation", href: "/work/lumis-sdk", kind: "site" },
    ],
    relatedPublications: ["arxiv-2608.01955"],
  },
  {
    slug: "lumis-sdk",
    title: "Lumis SDK",
    tagline: "Diagnosis-as-Code — the open-source companion to the self-healing research",
    role: "Creator & maintainer",
    period: "2026 — Present",
    status: "pre-alpha",
    statusNote: "Building in public",
    tier: 1,
    order: 3,
    summary:
      "A deterministic-first, evidence-grounded Python framework for incident diagnosis and guarded recovery across data, ML and software pipelines. Work in progress, and honest about it.",
    problem:
      "A paper describes an architecture. It does not prove the architecture survives contact with a real repository, a real incident and a real engineer who needs an answer in the next ten minutes.",
    system:
      "Lumis takes bounded incident evidence and produces a structured, reviewable diagnosis — emitted as a Markdown or JSON report and recorded as an operational-memory entry. Models are optional. Consequential actions stay explicitly controlled.",
    contribution: [
      "Designed and built the SDK as the public implementation path for the self-healing architecture.",
      "Scoped the pre-alpha deliberately to Diagnosis-as-Code, where the output is reviewable, rather than shipping remediation that nobody should trust yet.",
      "Published to PyPI so the work is installable, not just readable.",
    ],
    decisions: [
      "Deterministic-first: the model is an optional participant, never the authority.",
      "Evidence is bounded before it reaches a model — a diagnosis you cannot trace is not a diagnosis.",
      "Execution-related models are recommendation and verification contracts, not delegated authority.",
    ],
    flow: [
      { label: "Bounded incident evidence" },
      { label: "Structured diagnosis", note: "reviewable" },
      { label: "Markdown / JSON report" },
      { label: "Operational-memory record" },
    ],
    outcomes: [
      "Public on GitHub and installable from PyPI.",
      "Turns the research into an execution track: paper → open-source implementation → possible future platform.",
    ],
    currentStatus:
      "Pre-alpha and under active development. The current implemented boundary is Diagnosis-as-Code; Healing-as-Code (detect → triage → diagnose → plan → approve → remediate → verify → learn) is the longer-term direction.",
    disclosure:
      "Lumis does not perform unrestricted or default production remediation. Current execution-related models are recommendation and verification contracts rather than authority granted to a language model.",
    stack: [
      "Python",
      "Agentic systems",
      "Diagnosis-as-Code",
      "Observability",
      "MLOps",
      "Open source",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/soloshun/lumis-sdk", kind: "github" },
      { label: "PyPI", href: "https://pypi.org/project/lumis-sdk/", kind: "pypi" },
      {
        label: "The research behind it",
        href: "/work/agentic-self-healing",
        kind: "paper",
      },
    ],
    relatedPublications: ["arxiv-2608.01955"],
  },
  {
    slug: "noeud-fx-intelligence",
    title: "FX-Risk Intelligence Systems",
    tagline: "Deterministic quant baselines, ML challengers, and a bounded LLM context layer",
    org: "Noeud",
    orgUrl: "https://www.getnoeud.com/",
    role: "Founding Machine Learning Engineer (R&D)",
    period: "Oct 2025 — Present",
    status: "active-development",
    statusNote: "Preparing for release",
    tier: 1,
    order: 4,
    summary:
      "I build the ML and intelligence layer for FX-risk decision support for African businesses — two R&D systems: a market-regime and maturity-risk engine, and a multi-horizon forecasting system.",
    problem:
      "African businesses carry currency risk they cannot price. Handing that decision to a language model is irresponsible; handing it to a static formula ignores the context that actually moves these markets.",
    system:
      "A layered architecture where a deterministic quantitative engine stays the explicit baseline, a historical-ML model runs as a challenger, and an LLM layer contributes external market context as a candidate interpretation. Every candidate is stored, benchmarked against matured observations, and promoted only by deliberate decision.",
    contribution: [
      "Built the deterministic core: normalised FX ingestion and per-pair market-regime snapshots computing log returns, annualised volatility, parametric VaR, CVaR/Expected Shortfall, CFaR, time-scaled volatility, trend ratio, acceleration, regime multipliers, historical VaR and a fat-tail ratio.",
      "Built an independent historical-ML challenger predicting a multi-tenor multiplier ladder, stored and evaluated as shadow outcomes against matured observations.",
      "Built the LLM context layer that consumes the deterministic payload and ML predictions as structured inputs, retrieves current market context, and uses stored prior runs as operational memory.",
      "Built dense 1–252-day candidate maturity surfaces with path-aware evaluation, and the benchmark tables that record results once forecasts mature.",
      "Developing the multi-horizon forecasting system: an XGBoost/LightGBM ensemble with benchmarkable alternatives, an LLM news/context layer, and an adjustment layer combining the two across 7/30/60/90-day horizons.",
    ],
    decisions: [
      "The deterministic engine remains the source of truth during experiments — it is never silently replaced by a model.",
      "Guarded promotion: nothing is auto-promoted. Deterministic, historical-ML and news-adjusted surfaces are benchmarked against each other and promoted manually.",
      "The LLM produces a validation or news-adjusted candidate, not an unrestricted financial decision.",
    ],
    flow: [
      { label: "Deterministic quant engine", note: "explicit baseline" },
      { label: "Historical-ML challenger", note: "shadow" },
      { label: "LLM context & validation", note: "candidate only" },
      { label: "Benchmark on matured outcomes" },
      { label: "Manual promotion", note: "guarded" },
    ],
    outcomes: [
      "A working benchmarking loop that compares deterministic, historical-ML and news-adjusted candidate surfaces against real matured outcomes.",
      "Model families for the forecasting system are registry-managed and family-agnostic, so a challenger can be swapped without rewriting the pipeline.",
    ],
    currentStatus:
      "Active development. The market-regime capability is being prepared for a user-facing release subject to final testing; the ML challenger and LLM layers run as experimental/shadow components.",
    disclosure:
      "Temporal Fusion Transformer and Markov regime approaches were explored and benchmarked during model investigation. They are not current production components and are not presented as such.",
    stack: [
      "Python",
      "XGBoost",
      "LightGBM",
      "MLflow",
      "Prefect",
      "FastAPI",
      "Supabase",
      "SQLite",
      "GitHub Actions",
      "OpenRouter",
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
    thumbnail: "/project-imgs/bio-orchestration-v2.png",
    image: "/project-imgs/bio-orchestration-v2.png",
    summary:
      "I architected the autonomous agent and the distributed infrastructure underneath it — a tool-using research system that orchestrates 20+ heterogeneous scientific tools and produced four co-authored publications as downstream output.",
    problem:
      "Scientific tooling is a dependency minefield: dozens of tools written in C++, Python, Java and Perl, each with its own runtime assumptions, many needing multi-hour or multi-day execution. An agent that can reason about research is useless if it cannot reliably run anything.",
    system:
      "A containerised platform exposing heterogeneous tools behind consistent APIs, a distributed execution layer for long-running heterogeneous workloads, and an autonomous agent on top that plans and executes multi-step research using those tools.",
    contribution: [
      "Architected Moremi Bio, the autonomous agent that became the core technology behind four co-authored 2025 research publications.",
      "Designed the containerised platform with Docker and FastAPI, integrating 20+ heterogeneous tools written in C++, Python, Java and Perl behind consistent interfaces.",
      "Built distributed task orchestration with Celery, RabbitMQ and Redis for long-running heterogeneous workloads, including multi-hour simulations and protein/SMILES processing.",
      "Built high-throughput molecular validation and ranking workflows capable of processing 20,000+ protein/SMILES candidates in a multi-day run.",
      "Engineered Moremi Bio Co-Researcher, Moremi AI Agent and Moremi Search for production research workflows.",
      "Created a React/3Dmol.js molecular analytics interface for interactive research workflows.",
    ],
    decisions: [
      "Containerise per tool rather than per workflow — dependency conflicts stop being a research problem.",
      "Long-running work needs checkpointing and recovery, not retries; a multi-day job that restarts from zero is a failed job.",
      "The agent's capability ceiling is set by the reliability of its tools, so the infrastructure came first.",
    ],
    flow: [
      { label: "Agent planning", note: "tool-using, autonomous" },
      { label: "Unified tool APIs", note: "Docker + FastAPI, 20+ tools" },
      { label: "Distributed execution", note: "Celery / RabbitMQ / Redis" },
      { label: "Validation & ranking", note: "20,000+ candidates per run" },
      { label: "Research output", note: "4 publications" },
    ],
    outcomes: [
      "Four co-authored 2025 publications produced using the system, including collaborations with Imperial College London and WACCBIP, University of Ghana.",
      "A public-facing agent deployed on moremi.ai, giving researchers without infrastructure access the same computational workflows.",
    ],
    currentStatus:
      "Delivered. The systems remain in production use at MinoHealth AI Labs.",
    disclosure:
      "Source code is proprietary to MinoHealth AI Labs. Architecture is described here at a level suitable for public discussion.",
    stack: [
      "Python",
      "Agentic AI",
      "LLMs",
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
        label: "Moremi goes agentic",
        href: "https://www.minohealth.ai/blog/moremi-ai-goes-agentic",
        kind: "article",
      },
    ],
    relatedPublications: [
      "neisseria-2025",
      "enterobacteriaceae-2025",
      "bioweapons-2025",
      "plasmodium-2025",
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
      "Built a deep research agent that runs autonomous, multi-step research workflows — planning, retrieval, tool use and synthesis without step-by-step human direction.",
    problem:
      "Research questions rarely resolve in one retrieval. They need decomposition, iterative search, source evaluation and synthesis — a loop most systems hand back to the user at every step.",
    system:
      "A multi-step agent that plans a research trajectory, retrieves and evaluates sources, uses tools where a source is not enough, and synthesises a result — deployed into production research workflows.",
    contribution: [
      "Built the deep research agent for autonomous, multi-step research workflows.",
      "Integrated multi-agent orchestration and retrieval into the production research platform.",
    ],
    currentStatus: "Delivered and deployed into production research workflows.",
    stack: ["Python", "LLMs", "Agentic AI", "Retrieval", "FastAPI"],
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
      "A security-hardened public deployment of the research agent on moremi.ai, giving researchers without infrastructure access the same tool-driven computational workflows.",
    problem:
      "The internal agent assumes trusted users and unbounded compute. Neither assumption survives a public deployment.",
    system:
      "A public agent running on the same unified tool infrastructure, with security constraints and usage limits that preserve genuine research capability while bounding what an anonymous user can trigger.",
    contribution: [
      "Designed and engineered the public-facing agent, including the safety constraints and usage limits that make public operation viable.",
    ],
    currentStatus: "Live on moremi.ai.",
    stack: ["Python", "Agentic AI", "LLMs", "Security hardening", "FastAPI"],
    links: [
      { label: "Try it on moremi.ai", href: "https://moremi.ai", kind: "site" },
      {
        label: "An agentic life-science assistant",
        href: "https://www.minohealth.ai/blog/moremi-co-researcher-an-agentic-life-science-assistant",
        kind: "article",
      },
      {
        label: "Video: ADMET prediction & compound ranking",
        href: "https://www.youtube.com/watch?v=1rXk8ydt4zk",
        kind: "video",
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
      "Applied YOLO-based computer vision to crop stress and disease detection, and ran the drone capture, mapping and annotation pipelines that fed it — including training the farmers and extension officers who had to use the output.",
    problem:
      "A detection model is worthless to a farmer who cannot act on it. The hard parts sit either side of the model: capturing usable aerial data over real terrain, and turning a prediction into an agronomic decision someone trusts.",
    system:
      "An end-to-end loop from drone-based capture and mapping, through annotation and model-data pipelines, to YOLO-based detection and field-level agronomic insight.",
    contribution: [
      "Applied YOLO/computer vision to crop stress and disease detection in real agricultural settings.",
      "Managed drone-based data capture and mapping workflows, annotation and model-data pipelines.",
      "Trained farmers and agricultural officers to use AI-generated agronomic insights in practice.",
    ],
    currentStatus: "Contract completed, Oct 2025.",
    stack: ["Python", "YOLO", "Computer Vision", "Drone mapping", "Annotation pipelines"],
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
      "An end-to-end ML pipeline benchmarking XGBoost, LSTM and Transformer architectures for gold-market direction and return prediction, with the findings written up publicly.",
    problem:
      "Financial time series invite overfitting and flattering backtests. The interesting question is not whether a model can fit gold prices, but whether any model family holds up across session structure once the pipeline is honest.",
    system:
      "Data acquisition via the MetaTrader 5 API, feature engineering around session dynamics, training and evaluation across three model families, and backtesting.",
    contribution: [
      "Built the full pipeline: acquisition, feature engineering, training, evaluation and backtesting.",
      "Compared XGBoost, LSTM and Transformer architectures on the same footing.",
      "Documented the findings in a public write-up rather than only a repository.",
    ],
    currentStatus: "Complete. Independent work, kept public as methodology evidence.",
    stack: ["Python", "XGBoost", "LSTM", "Transformers", "Time-series", "MetaTrader 5"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/soloshun/Quantitative-XAUUSD-Strategy",
        kind: "github",
      },
      {
        label: "Write-up on Medium",
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
      "Implementing a functional language model from first principles — tokenisation, attention, the training loop — to understand the machinery underneath the systems I build on top of.",
    currentStatus:
      "Ongoing learning project, documented publicly as it progresses.",
    stack: ["Python", "PyTorch", "Transformers", "Tokenisation", "Attention"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/soloshun/llm-from-scratch",
        kind: "github",
      },
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
    summary:
      "An algorithm visualisation platform for learners, with a companion app and docs site.",
    currentStatus: "Earlier work, kept online.",
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
    currentStatus: "Earlier work, kept online.",
    stack: ["TypeScript", "React"],
    links: [
      { label: "Live", href: "https://dsalgodeck.netlify.app/", kind: "site" },
      {
        label: "GitHub",
        href: "https://github.com/soloshun/ds-algo-deck-v010",
        kind: "github",
      },
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
    summary: "A plant disease detection tool built around an image classification model.",
    currentStatus: "Earlier work, kept online.",
    stack: ["Python", "Computer Vision", "Next.js"],
    links: [
      { label: "Live", href: "https://sonu-ai.vercel.app", kind: "site" },
      { label: "GitHub", href: "https://github.com/soloshun/sonu-ai", kind: "github" },
    ],
  },
  {
    slug: "activetrack",
    title: "ActiveTrack",
    tagline: "IoT fitness tracking with an LSTM prediction layer",
    role: "Creator",
    period: "2024",
    status: "archived",
    tier: 3,
    order: 4,
    summary:
      "An AI/IoT fitness-tracking project using sensor and health signals with an LSTM-based prediction layer.",
    currentStatus: "Earlier work, kept for continuity with the IoT/edge track.",
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
      "A pick-and-place robot built with Arduino/ZMROBO and Python, associated with a Best Participant robotics/IoT award.",
    currentStatus: "Origin story, not current technical evidence.",
    stack: ["Python", "Arduino", "ZMROBO", "Robotics"],
  },
];

export const featuredProjects = projects.filter((p) => p.tier === 1);
export const selectedProjects = projects.filter((p) => p.tier === 2);
export const archivedProjects = projects.filter((p) => p.tier === 3);

export const byTier = (tier: 1 | 2 | 3) =>
  projects.filter((p) => p.tier === tier).sort((a, b) => a.order - b.order);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
