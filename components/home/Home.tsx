import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Publications } from "./publications/Publications";
import { Activities } from "./activities/Activities";
import { Gallery } from "./gallery/Gallery";
import { Contact } from "./contact/Contact";
import { LanguageDetector } from "../utils/LanguageDetector";
import { Footer } from "./footer/Footer";


export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id="main">
          <Heading />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Publications />
          <Activities />
          <Contact />
          <Gallery />
          <Footer />

        </main>
      </div>
      {/* Language Detection Banner - Comment out to disable */}
      <LanguageDetector />
    </>
  );
};
