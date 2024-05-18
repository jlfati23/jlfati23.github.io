import styles from './styles.module.css';




export default function HomepageContents() {
    return (
        <div className={styles.center}>
            <h1 style={{
                fontFamily : 'serif',
                fontStyle : 'italic',
            }}>
                The universe is a cruel, uncaring void. The key to being happy isn't to search for meaning. It's to
                just
                keep yourself busy with unimportant nonsense, and eventually, you'll be dead.
            </h1>
        </div>

    );
}
