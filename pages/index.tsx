import type { NextPage } from "next";
import Head from "next/head";

import SettingsMenu from "../components/Settings/SettingsMenu";
import styles from "../styles/home.module.css";

const Home: NextPage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <Head>
        <title>Cofi</title>
        <meta
          name="description"
          content="Virtual cafe with carefully curated lofi playlists."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <SettingsMenu />
        <h1 className={styles.title}>Welcome to Cofi</h1>
      </main>

      <footer className={styles.footer}>
        <div className={styles.description}>
          &copy; {currentYear}
          <a href="https://www.brandi.codes" target="_blank" rel="noreferrer">
            brandiCodes
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
