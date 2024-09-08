import React from 'react';
import styles from './HomepageFeature.module.css';

const HomepageFeatures = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.centerContent}>
                <blockquote className={styles.quote}>
                    "There are no facts, only interpretations."
                </blockquote>
            </div>
            <nav className={styles.footerNav}>
                <a href="/about" className={styles.footerNavItem}>About Me</a>
                <a href="https://github.com/jlfati23" target="_blank" rel="noopener noreferrer" className={styles.footerNavItem}>GitHub</a>
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={styles.footerNavItem}>LinkedIn</a>
            </nav>
        </div>
    );
}

export default HomepageFeatures;
