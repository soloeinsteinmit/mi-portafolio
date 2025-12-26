import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/solomon-eshun-788568317"
              target="_blank"
              rel="nofollow"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link href="https://github.com/soloeinsteinmit" target="_blank" rel="nofollow">
              GitHub
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:solomoneshun373@gmail.com" className={styles.emailLink}>
            <AiFillMail size="2.4rem" />
            <span className={styles.emailText}>solomoneshun373@gmail.com</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
