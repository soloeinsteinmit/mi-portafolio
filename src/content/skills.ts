import type { SkillGroup } from "./types";

/**
 * A capability matrix, not a tag cloud. `depth` drives visual weight so that
 * current, high-depth tools read stronger than familiar ones.
 */
export const skills: SkillGroup[] = [
  {
    name: "Data Engineering · MLOps · Platform",
    items: [
      { name: "Prefect", depth: "core" },
      { name: "MLflow", depth: "core" },
      { name: "Datadog", depth: "core" },
      { name: "Docker", depth: "core" },
      { name: "AWS", depth: "core" },
      { name: "Databricks", depth: "core" },
      { name: "CI/CD", depth: "core" },
      { name: "Observability", depth: "core" },
      { name: "Terraform", depth: "working" },
      { name: "Azure DevOps", depth: "working" },
      { name: "Kafka", depth: "working" },
      { name: "Snowflake", depth: "working" },
      { name: "Iceberg", depth: "working" },
      { name: "Celery / RabbitMQ", depth: "working" },
      { name: "PostgreSQL", depth: "working" },
      { name: "MongoDB", depth: "familiar" },
      { name: "Redis", depth: "familiar" },
    ],
  },
  {
    name: "AI · Machine Learning · Intelligent Systems",
    items: [
      { name: "Agentic / tool-using systems", depth: "core" },
      { name: "LLM applications", depth: "core" },
      { name: "Model evaluation & benchmarking", depth: "core" },
      { name: "PyTorch", depth: "core" },
      { name: "scikit-learn", depth: "core" },
      { name: "XGBoost", depth: "core" },
      { name: "LightGBM", depth: "core" },
      { name: "Time-series forecasting", depth: "core" },
      { name: "Retrieval & search pipelines", depth: "working" },
      { name: "Computer vision / YOLO", depth: "working" },
      { name: "TensorFlow", depth: "working" },
      { name: "Pandas / NumPy", depth: "core" },
    ],
  },
  {
    name: "Programming & Core Engineering",
    items: [
      { name: "Python", depth: "core" },
      { name: "SQL", depth: "core" },
      { name: "Linux", depth: "core" },
      { name: "Git", depth: "core" },
      { name: "TypeScript", depth: "working" },
      { name: "Java", depth: "working" },
      { name: "C++", depth: "familiar" },
    ],
  },
  {
    name: "Quantitative & Financial Computing",
    items: [
      { name: "Statistical risk modelling", depth: "core" },
      { name: "Volatility / VaR / CVaR / CFaR", depth: "core" },
      { name: "Time-series validation", depth: "core" },
      { name: "Quantitative strategy research", depth: "working" },
      { name: "MetaTrader 5 / MQL5", depth: "familiar" },
    ],
  },
  {
    name: "Software & Product Engineering",
    items: [
      { name: "FastAPI", depth: "core" },
      { name: "REST API design", depth: "core" },
      { name: "System design", depth: "core" },
      { name: "Next.js", depth: "working" },
      { name: "React", depth: "working" },
      { name: "Node.js", depth: "working" },
      { name: "Tailwind CSS", depth: "working" },
      { name: "Supabase", depth: "working" },
      { name: "Prisma", depth: "familiar" },
    ],
  },
];
