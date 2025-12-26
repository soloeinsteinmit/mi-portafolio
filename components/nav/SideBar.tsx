import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: [0.1, 0.3, 0.5],
      rootMargin: "-20% 0px -20% 0px",
    };

    const callback = (entries: any) => {
      // Find the section with the highest intersection ratio
      let maxRatio = 0;
      let maxEntry: any = null;

      entries.forEach((entry: any) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          maxEntry = entry;
        }
      });

      if (maxEntry) {
        setSelected(maxEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));

    // Fallback: Check scroll position on scroll events
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section: any) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setSelected(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Cleanup
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{background: "var(--background-dark)"}}>
      <motion.nav
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideBar}
      >
        <span className={styles.logo} onClick={() => {
          document.location.hash === "" ?
          document.getElementById("main")?.scrollIntoView() :
          document.location.hash = '';
          }}>
          SS<span>.</span>
        </span>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="#about"
          onClick={() => {
            setSelected("about");
          }}
          className={selected === "about" ? styles.selected : ""}
        >
          About
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#projects"
          onClick={() => setSelected("projects")}
          className={selected === "projects" ? styles.selected : ""}
        >
          Projects
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="#experience"
          onClick={() => setSelected("experience")}
          className={selected === "experience" ? styles.selected : ""}
        >
          Exp.
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#publications"
          onClick={() => setSelected("publications")}
          className={selected === "publications" ? styles.selected : ""}
        >
          Publications
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="#activities"
          onClick={() => setSelected("activities")}
          className={selected === "activities" ? styles.selected : ""}
        >
          Activities
        </motion.a>
        
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          href="#contact"
          onClick={() => setSelected("contact")}
          className={selected === "contact" ? styles.selected : ""}
        >
          Contact
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          href="#gallery"
          onClick={() => setSelected("gallery")}
          className={selected === "gallery" ? styles.selected : ""}
        >
          Gallery
        </motion.a>
      </motion.nav>
    </div>
  );
};
