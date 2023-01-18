import ImageMain from "../components/ImageMain";
import SideBar from "../components/SideBar";
import styles from "../styles/home.module.scss";
import MainContent from "../components/MainContent";
import Head from "next/head";

export default function Home() {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
  </style>;
  return (
    <div className={styles.containerMain}>
      <Head>
        <title>shavanna.</title>
        <link rel="icon" type="image/png" href="../images/sh.png"></link>
      </Head>
      <header className={styles.header}>
        <div className={styles.item_menu}>
          <SideBar />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.espacamento}></div>

        <div className={styles.item_img_main}>
          <ImageMain />
        </div>
        <div className={styles.espacamento}></div>

        <div className={styles.item_mainContent}>
          <MainContent />
        </div>
      </main>
    </div>
  );
}
