import type { NextPage } from "next";
import Head from "next/head";
import Topbar from "../src/Sections/Header/Topbar";
import styles from "../styles/Home.module.css";
import CallToAction from "../src/Sections/CallToAction";
import Benefits from "../src/Sections/Benefits";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bordados Flôres Ateliê</title>
        <meta name="description" content="Artesanato | Costura criativa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Topbar />
      <CallToAction />
      <Benefits />
    </div>
  );
};

export default Home;
