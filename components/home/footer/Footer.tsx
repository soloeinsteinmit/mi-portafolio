import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
    // You can update this date manually when you make significant updates to the site
    const lastUpdated = "February 7, 2026";

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p className={styles.lastUpdated}>
                    Profile last updated: <span className={styles.date}>{lastUpdated}</span>
                </p>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Solomon Eshun. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
