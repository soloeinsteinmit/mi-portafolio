import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./activities.module.scss";

interface Props {
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
}

export const ActivityItem = ({
  title,
  organization,
  date,
  description,
  link,
}: Props) => {
  return (
    <Reveal>
      <div className={styles.activity}>
        <div className={styles.header}>
          <h4 className={styles.title}>{title}</h4>
          {link && link !== "#" && (
            <Link href={link} target="_blank" rel="nofollow">
              <AiOutlineLink size="2rem" className={styles.linkIcon} />
            </Link>
          )}
        </div>
        <div className={styles.meta}>
          <span className={styles.organization}>{organization}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.date}>{date}</span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </Reveal>
  );
};


