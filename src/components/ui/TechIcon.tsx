import * as si from "simple-icons";

type SimpleIcon = { title: string; hex: string; path: string };

/**
 * Display name → simple-icons export. Anything not listed (or not carried by
 * simple-icons, e.g. AWS and Azure were removed for trademark reasons) falls
 * back to a monogram tile so the row still lines up.
 */
const MAP: Record<string, string> = {
  Python: "siPython",
  TypeScript: "siTypescript",
  JavaScript: "siJavascript",
  Java: "siOpenjdk",
  "C++": "siCplusplus",
  Linux: "siLinux",
  Git: "siGit",
  SQL: "siPostgresql",
  PostgreSQL: "siPostgresql",
  MySQL: "siMysql",
  MongoDB: "siMongodb",
  Redis: "siRedis",
  Docker: "siDocker",
  Kubernetes: "siKubernetes",
  Terraform: "siTerraform",
  Prefect: "siPrefect",
  Datadog: "siDatadog",
  MLflow: "siMlflow",
  Kafka: "siApachekafka",
  Snowflake: "siSnowflake",
  Databricks: "siDatabricks",
  "Apache Spark": "siApachespark",
  Celery: "siCelery",
  RabbitMQ: "siRabbitmq",
  "Celery / RabbitMQ": "siCelery",
  FastAPI: "siFastapi",
  Pydantic: "siPydantic",
  PyPI: "siPypi",
  "GitHub Actions": "siGithubactions",
  "CI/CD": "siGithubactions",
  PyTorch: "siPytorch",
  TensorFlow: "siTensorflow",
  "scikit-learn": "siScikitlearn",
  Pandas: "siPandas",
  NumPy: "siNumpy",
  "Pandas / NumPy": "siPandas",
  OpenCV: "siOpencv",
  XGBoost: "siPython",
  LightGBM: "siPython",
  React: "siReact",
  "Next.js": "siNextdotjs",
  "Node.js": "siNodedotjs",
  "Tailwind CSS": "siTailwindcss",
  Supabase: "siSupabase",
  Prisma: "siPrisma",
  "Open source": "siOpensourceinitiative",
  OpenRouter: "siOpenrouter",
};

/**
 * Capabilities that aren't products. These get a neutral glyph — a monogram
 * tile here would read as a brand mark that failed to load.
 */
const CONCEPTS = new Set([
  "Observability",
  "Agentic / tool-using systems",
  "LLM applications",
  "Model evaluation & benchmarking",
  "Time-series forecasting",
  "Retrieval & search pipelines",
  "Computer vision / YOLO",
  "Statistical risk modelling",
  "Volatility / VaR / CVaR / CFaR",
  "Time-series validation",
  "Quantitative strategy research",
  "REST API design",
  "System design",
  "Vector search",
  "Drone mapping",
  "Open source",
]);

/** Brand hexes that vanish on a dark background; inherit text colour instead. */
function tooDark(hex: string) {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.22;
}

export function TechIcon({
  name,
  className = "size-4",
}: {
  name: string;
  className?: string;
}) {
  const key = MAP[name];
  const icon = key ? ((si as unknown as Record<string, SimpleIcon>)[key] ?? null) : null;

  if (!icon && CONCEPTS.has(name)) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={`shrink-0 ${className}`}>
        <path
          d="M12 3.5 20.5 12 12 20.5 3.5 12z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          opacity="0.55"
        />
      </svg>
    );
  }

  if (!icon) {
    const mono = name
      .replace(/[^A-Za-z0-9 ]/g, "")
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    return (
      <span
        aria-hidden
        className={`grid shrink-0 place-items-center rounded-[3px] border border-border-strong font-mono text-[8px] leading-none text-faint ${className}`}
      >
        {mono}
      </span>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden
      className={`shrink-0 ${className}`}
      fill={tooDark(icon.hex) ? "currentColor" : `#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
}
