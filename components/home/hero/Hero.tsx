import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/ss.jpeg";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m Solo Shun<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m an <span>AI/ML Engineer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              I design and deploy intelligent systems that solve real-world challenges across AI and finance. From building autonomous AI agents and production-scale 
              ML pipelines to developing quantitative trading systems and algorithmic strategies 
              for financial markets. Let&apos;s build the future together!
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        {/* Profile image card - uncomment when ready */}
        {/* <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={styles.profileWrapper}
        >
          <div className={styles.imageCard}>
            <Image
              className={styles.profile}
              src={Profile}
              priority
              alt="Solomon Eshun (Solo Shun) | AI/ML Engineer"
              width={280}
              height={280}
            />
          </div>
        </motion.div> */}
      </div>
      <DotGrid />
    </section>
  );
};
