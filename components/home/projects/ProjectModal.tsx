import styles from "./projectmodal.module.scss";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
  videoSrc?: string;
  status?: string;
  disclaimer?: string;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
  videoSrc,
  status,
  disclaimer,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        {videoSrc ? (
          <video
            className={styles.modalImage}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={imgSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            priority
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            width={500}
            height={400}
            className={styles.modalImage}
          />
        )}
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h4>{title}</h4>
            {status && <span className={styles.statusBadge}>{status}</span>}
          </div>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>

          {disclaimer && (
            <div className={styles.disclaimer}>
              <p>{disclaimer}</p>
            </div>
          )}

          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links<span>.</span>
            </p>
            <div className={styles.links}>
              {code === "#" ? (
                <span className={styles.disabledLink}>
                  <AiFillGithub /> source code
                </span>
              ) : (
                <Link target="_blank" rel="nofollow" href={code}>
                  <AiFillGithub /> source code
                </Link>
              )}
              {projectLink === "#" ? (
                <span className={styles.disabledLink}>
                  <AiOutlineExport /> live project
                </span>
              ) : (
                <Link target="_blank" rel="nofollow" href={projectLink}>
                  <AiOutlineExport /> live project
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
