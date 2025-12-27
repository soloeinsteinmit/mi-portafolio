import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey there! I&apos;m Solomon Eshun (but I love to be called Solo Shun
              😄). I&apos;m an AI/ML Engineer with a strong Software Engineering
              foundation, currently working as an L3 MLOps Engineer at EnBW (via
              Ishango AI, London UK) and Founding ML Engineer at Noeud.
              <br />
              <br />I specialize in building advanced AI systems that solve
              real-world problems - from autonomous research agents that rank
              among the top globally, to production-scale MLOps pipelines
              serving enterprise clients.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              At MinoHealth AI Labs, I built the Moremi Deep Research Agent,
              achieving a RACE score of 46.3 on the DeepResearch Bench (ranked
              3/18 agents). I&apos;ve architected systems processing 20,000+
              molecules and protein sequences in multi-day runs, and co-authored 4 research
              publications in 2025 on AI-driven drug discovery and biosecurity.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My tech stack spans PyTorch, TensorFlow, FastAPI, Docker, and the
              full MLOps toolchain (AWS, MLFlow, CI/CD etc.). I&apos;m also
              proficient in full-stack development with React, Next.js, Node.js, Prisma, and
              building scalable distributed systems.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not training models or debugging pipelines, I&apos;m
              deeply into the world of quantitative finance and algorithmic
              trading - building forex trading strategies with MQL5, Python,
              MetaTrader, and TradingView. I love applying machine learning to
              financial markets and exploring time-series forecasting.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of AI and fintech, I&apos;m a gamer at heart 🎮 - gaming helps me 
              set my mind free and recharge. I&apos;m deeply passionate about motivating people 
              to bring out the best in themselves, reading self-help books for personal growth, 
              and listening to motivational talks from my mentors. I also love public speaking 
              and seize every opportunity to inspire and share knowledge on stage.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I mentor at bootcamps, contribute to open-source AI education projects, and 
              enjoy watching science and tech videos to stay curious. Let&apos;s connect and build 
              something amazing! 🚀
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
