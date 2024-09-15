import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Excerpts.module.css';

const excerpts = [
    {
        text: "And I knew, now, that what Sian had always wanted most in a lover was the alien, the unknowable, the mysterious, the opaque. The whole point, for her, of being with someone else was the sense of confronting otherness. Without it, she believed, you might as well be talking to yourself.",
        source: "Greg Egan, Closer",
        title: "closer",
    },
    {
        text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
        source: "Alan Watts, Podcast Episode 42",
        title: "test",
    },
];

const ExcerptCard = ({excerpt}) => {
    const url = `/excerpts/contents/${excerpt.title}`;
    return (
        <Link to={url} className={styles.cardLink}>
        <div className={styles.card}>
            <blockquote>{excerpt.text}</blockquote>
            <cite>{excerpt.source}</cite>
        </div>
    </Link>)

}


export default function Excerpts() {
    return (
        <div className={styles.excerptsContainer}>
            <div className={styles.cardsContainer}>
                {excerpts.map((excerpt, index) => (
                    <ExcerptCard key={index} excerpt={excerpt}/>
                ))}
            </div>
        </div>
    );
}
