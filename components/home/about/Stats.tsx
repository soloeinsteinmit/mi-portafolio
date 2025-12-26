import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { FaChartLine } from "react-icons/fa";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Programming, AI/ML & Data Science</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">C++</span>
            <span className="chip">Java</span>
            <span className="chip">PyTorch</span>
            <span className="chip">TensorFlow</span>
            <span className="chip">Transformers</span>
            <span className="chip">LLMs</span>
            <span className="chip">Computer Vision</span>
            <span className="chip">YOLO</span>
            <span className="chip">Pandas</span>
            <span className="chip">NumPy</span>
            <span className="chip">Scikit-learn</span>
            <span className="chip">Time-Series</span>
            <span className="chip">XGBoost</span>
            <span className="chip">LSTM</span>
            <span className="chip">Reinforcement Learning</span>
            <span className="chip">Agentic AI</span>
            <span className="chip">RAG Systems</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>MLOps & DevOps</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Docker</span>
            <span className="chip">AWS</span>
            <span className="chip">DigitalOcean</span>
            {/* <span className="chip">Kubernetes</span> */}
            <span className="chip">CI/CD</span>
            <span className="chip">MLFlow</span>
            <span className="chip">FastAPI</span>
            <span className="chip">Celery</span>
            <span className="chip">RabbitMQ</span>
            <span className="chip">Redis</span>
            <span className="chip">PostgreSQL & MySQL</span>
            <span className="chip">MongoDB</span>
            <span className="chip">Git</span>
            <span className="chip">Linux</span>
            <span className="chip">ETL Pipelines</span>
            <span className="chip">Data Modeling & Database Design</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <FaChartLine size="2.4rem" color="var(--brand)" />
            <span>Full-Stack, Design & Trading</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React</span>
            <span className="chip">Next.js</span>
            <span className="chip">Node.js</span>
            <span className="chip">TypeScript</span>
            <span className="chip">JavaScript</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Figma</span>
            <span className="chip">Prisma</span>
            <span className="chip">Justinmind</span>
            <span className="chip">MQL5</span>
            <span className="chip">MetaTrader</span>
            <span className="chip">TradingView</span>
            <span className="chip">Forex Trading</span>
            <span className="chip">Algorithmic Trading</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
