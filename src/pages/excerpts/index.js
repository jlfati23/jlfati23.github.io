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
        text: "One of the most remarkable things about human beings is our ability to use culture to create the world we actually live in, to make up our world from scratch.Most of what we take for reality consists not of things as they ‘really’ are but of ideas people have developed about things as they think they are. Culture is where all those ideas wind up, and culture is what we look to for the tools we need to make sense of things, including ourselves..",
        source: "Allan Johnson,The Forest and the Trees: Sociology as Life, Practice, and Promise, Chapter 2",
        title: "Culture",
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


const Excerpts = ()=> {
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
export default Excerpts
