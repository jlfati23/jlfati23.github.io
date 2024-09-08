import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Who I Am</h1>
            <p className={styles.paragraph}>I’m a passionate lifelong learner who thrives on new challenges and personal growth. My journey in technology began with a fascination for computer science, and I’ve since expanded my interests to include sociology, language, and the impact of technology on society.</p>

            <h2 className={styles.subtitle}>Technology Enthusiast</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>Deeply fascinated by computer science and the digital world 🔍.</li>
                <li className={styles.listItem}>Committed to the open-source movement and the role of the internet in enhancing democracy and justice ⚖️.</li>
                <li className={styles.listItem}>Advocate for privacy rights, striving to balance them with convenience in our increasingly digital lives.</li>
            </ul>

            <h2 className={styles.subtitle}>Advocate for Social Justice</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>Strong supporter of women's rights and gender equality 🚺.</li>
                <li className={styles.listItem}>Believer in universal internet access as a fundamental human right 🌍.</li>
                <li className={styles.listItem}>Curious about the human brain 🧠, decision-making, and the deeper meanings of life ❤️.</li>
            </ul>

            <h2 className={styles.subtitle}>Language and Culture Explorer</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>Currently learning French 🇫🇷, with a belief that language opens doors to new cultural perspectives.</li>
                <li className={styles.listItem}>View English not just as a language but as a powerful tool for accessing a wider world 🌍.</li>
            </ul>

            <h2 className={styles.subtitle}>Animal Lover and Dog Whisperer</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>I may just have a knack for understanding what dogs are saying and enjoy communicating with them 🐾.</li>
                <li className={styles.listItem}>Dream of having my own dog partner, someone to share adventures and companionship.</li>
            </ul>

            <h2 className={styles.subtitle}>Fitness and Wellness Enthusiast</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>Actively engaged in sports like basketball 🏀 and CrossFit 💪, with a goal of mastering a handstand one day.</li>
                <li className={styles.listItem}>Aspiring marathon runner, with a dream to run marathons in different countries, combining my love for travel and fitness 🌍.</li>
            </ul>

            <h2 className={styles.subtitle}>Lifelong Learner</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>An avid reader and continuous explorer of new ideas, always seeking to expand my intellectual horizons 📚.</li>
            </ul>
        </div>
    );
}

export default About;
