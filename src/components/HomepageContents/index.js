import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ContentList = [
    {
        title: 'Easy to Use',
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: 'Focus on What Matters',
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                ahead and move your docs into the <code>docs</code> directory.
            </>
        ),
    },
    {
        title: 'Powered by React',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
    {
        title: 'Powered by React',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
    {
        title: 'Powered by React',
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
];

const quote = "The universe is a cruel, uncaring void. The key to being happy isn't to search for meaning. It's to just keep yourself busy with unimportant nonsense, and eventually, you'll be dead."

function Content({title, description}) {
    return (
        <div className="text--center padding-horiz--md">
            <Heading as="h2">{title}</Heading>
            <p>{description}</p>
        </div>
    );
}



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
