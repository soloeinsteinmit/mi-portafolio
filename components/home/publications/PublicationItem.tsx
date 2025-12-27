import Link from "next/link";
import { AiOutlineLink, AiOutlineRead } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./publications.module.scss";

interface Props {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link: string;
  doi?: string;
  arxiv?: string;
  blogLink?: string;
  technicalReport?: string;
  collaboration?: string;
  description: string;
}

export const PublicationItem = ({
  title,
  authors,
  journal,
  year,
  link,
  doi,
  arxiv,
  blogLink,
  technicalReport,
  collaboration,
  description,
}: Props) => {
  return (
    <Reveal>
      <div className={styles.publication}>
        <div className={styles.heading}>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.linkIcons}>
            {blogLink && (
              <Link href={blogLink} target="_blank" rel="nofollow" title="Read Blog Post">
                <AiOutlineRead size="2.2rem" className={styles.linkIcon} />
              </Link>
            )}
            {link && link !== "#" && (
              <Link href={link} target="_blank" rel="nofollow" title="View Paper">
                <HiOutlineDocumentText size="2.2rem" className={styles.linkIcon} />
              </Link>
            )}
            {technicalReport && (
              <Link href={technicalReport} target="_blank" rel="nofollow" title="Technical Report">
                <HiOutlineDocumentText size="2.2rem" className={`${styles.linkIcon} ${styles.reportIcon}`} />
              </Link>
            )}
          </div>
        </div>
        
        <div className={styles.meta}>
          <span className={styles.authors}>{authors}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.journal}>{journal}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.year}>{year}</span>
        </div>

        {collaboration && (
          <div className={styles.collaboration}>{collaboration}</div>
        )}

        <p className={styles.description}>{description}</p>

        {(doi || arxiv) && (
          <div className={styles.identifiers}>
            {doi && <span className="chip">DOI: {doi}</span>}
            {arxiv && <span className="chip">arXiv: {arxiv}</span>}
          </div>
        )}
      </div>
    </Reveal>
  );
};


