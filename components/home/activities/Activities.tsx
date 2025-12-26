import { SectionHeader } from "@/components/utils/SectionHeader";
import { ActivityItem } from "./ActivityItem";
import styles from "./activities.module.scss";

export const Activities = () => {
  return (
    <section className="section-wrapper" id="activities">
      <SectionHeader title="Activities & Certifications" dir="l" />
      
      <div className={styles.activitiesContainer}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Conferences & Seminars</h3>
          {conferences.map((item, idx) => (
            <ActivityItem key={idx} {...item} />
          ))}
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Volunteer & Mentorship</h3>
          {volunteer.map((item, idx) => (
            <ActivityItem key={idx} {...item} />
          ))}
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Certifications & Awards</h3>
          {certifications.map((item, idx) => (
            <ActivityItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const conferences = [
  {
    title: "Tech & Beyond Expo",
    organization: "Academic City University",
    date: "2025",
    description: "Presented on Software Engineering in the Age of AI",
    link: "https://www.linkedin.com/posts/solomon-eshun-788568317_softwareengineering-ai-techandbeyondexpo-activity-7391428562798465024-n_BO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBZzFgBdNK_PhBkFl0AT6WT8ExWJp_082s",
  },
  {
    title: "Ghana Data Science Summit 2025 (IndabaX)",
    organization: "Ashesi University, Berekuso - Ghana",
    date: "2025",
    description: "Guided participants through hands-on LoRA-based fine-tuning and VLM exercises",
    link: "https://www.linkedin.com/posts/minohealth-ai-labs_indabaxghana2025-datascience-minohealth-activity-7340762708012642304-BXoP",
  },
  {
    title: "DS-I Africa Program",
    organization: "University of Ghana, Accra - Ghana",
    date: "2025",
    description: "Exhibited Moremi AI from minoHealth AI Labs, a generalist AI doctor democratizing access to quality healthcare across the continent",
    link: "https://www.linkedin.com/posts/solomon-eshun-788568317_ever-wondered-what-happens-when-you-put-activity-7366020646008512512-4kW2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBZzFgBdNK_PhBkFl0AT6WT8ExWJp_082s",
  },
];

const volunteer = [
  {
    title: "Global Code 3-Weeks Bootcamp 2025",
    organization: "University of Cape Coast - Ghana",
    date: "2025",
    description: "Mentored participants in Python, IoT, and AI integration, supporting capstone projects",
    link: "https://www.linkedin.com/posts/solomon-eshun-788568317_globalcode-python-iot-activity-7371082502087655424-yJWM",
  },
];

const certifications = [
  {
    title: "GlobalCode Certificate",
    organization: "3-week Programming Camp (Raspberry Pi & Python)",
    date: "2024",
    description: "Intensive programming bootcamp focused on hardware programming and Python",
    link: "#",
  },
  {
    title: "Professional Certificate in Robotics, Arduino & IoT",
    organization: "Professional Certification Program",
    date: "2023",
    description: "Comprehensive training in embedded systems and IoT development",
    link: "#",
  },
  {
    title: "Best Participant Award",
    organization: "Robotics and IoT TransforME Project",
    date: "2023",
    description: "Awarded for exceptional performance and innovation in robotics and IoT project",
    link: "#",
  },
];


