import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageContents from '@site/src/components/HomepageContents';

import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function HomePage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <main>
        <HomepageContents/>
      </main>
    </Layout>
  );
}
