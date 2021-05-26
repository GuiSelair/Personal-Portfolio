import Head from 'next/head';

import Header from '../components/Header';

import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início - Guilherme Selair</title>
      </Head>
      <Header />
    </div>
  );
}
