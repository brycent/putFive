/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import { LandingNavbar } from '../components/Navbar/LandingNavbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <LandingNavbar />
      <div className={styles.container}>test</div>
    </div>
  );
}
