import SideBar from "../components/SideBar";
import styles from "../styles/home.module.scss";
import Head from "next/head";
import SlideProject from "../components/SlideProject";

function projeto1() {
  

  return (
    <div className={styles.containerMain}>
      <Head>
        <title>Projeto 1</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.item_menu}>
          <SideBar />
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.slide}>
          <div className={styles.slideItem}>
            <img src="/images/paisagem.jpg" width="600px" alt="paisagem" />
          </div>
          <div className={styles.slideItem}>
            <h1 className={styles.slideTittle}>projeto 1</h1>
          </div>
          <div className={styles.slideItem}>
            <p className={styles.textSlide}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
              nisl eget nulla elementum ornare nec id leo. Pellentesque tempor
              convallis commodo. Aenean non lacinia nisl. Sed rhoncus sapien
              nisi, sed molestie libero commodo eu. Maecenas sagittis vulputate
              euismod. Ut fringilla, orci non molestie volutpat, augue purus
              bibendum ante, ac imperdiet elit felis sed justo. Nam fermentum
              nisi ut lacus vestibulum, in fringilla lectus vehicula. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisl
              eget nulla elementum ornare nec id leo. Pellentesque tempor
              convallis commodo. Aenean non lacinia nisl. Sed rhoncus sapien
              nisi, sed molestie libero commodo eu. Maecenas sagittis vulputate
              euismod. Ut fringilla, orci non molestie volutpat, augue purus
              bibendum ante, ac imperdiet elit felis sed justo. Nam fermentum
              nisi ut lacus vestibulum, in fringilla lectus vehicula. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisl
              eget nulla elementum ornare nec id leo. Pellentesque tempor
              convallis commodo. Aenean non lacinia nisl. Sed rhoncus sapien
              nisi, sed molestie libero commodo eu. Maecenas sagittis vulputate
              euismod. Ut fringilla, orci non molestie volutpat, augue purus
              bibendum ante, ac imperdiet elit felis sed justo. Nam fermentum
              nisi ut lacus vestibulum, in fringilla lectus vehicula.
            </p>
          </div>
          <div className={styles.slideItem}>
            <img src="/images/paisagem.jpg" width="600px" alt="paisagem" />
          </div>
          <div className={styles.slideItem}>
            <p className={styles.textSlide}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
              nisl eget nulla elementum ornare nec id leo. Pellentesque tempor
              convallis commodo. Aenean non lacinia nisl. Sed rhoncus sapien
              nisi, sed molestie libero commodo eu. Maecenas sagittis vulputate
              euismod. Ut fringilla, orci non molestie volutpat, augue purus
              bibendum ante, ac imperdiet elit felis sed justo. Nam fermentum
              nisi ut lacus vestibulum, in fringilla lectus vehicula. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisl
              eget nulla elementum ornare nec id leo. Pellentesque tempor
              convallis commodo. Aenean non lacinia nisl. Sed rhoncus sapien
              nisi, sed molestie libero commodo eu. Maecenas sagittis vulputate
              euismod. Ut fringilla, orci non molestie volutpat, augue purus
              bibendum ante, ac imperdiet elit felis sed justo. Nam fermentum
              nisi ut lacus vestibulum, in fringilla lectus vehicula. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisl
              eget nulla elementum ornare nec id leo. Pellentesque tempor
              convallis commodo. Aenean non lacinia nisl. Sed rhoncus sapien
              nisi, sed molestie libero commodo eu. Maecenas sagittis vulputate
              euismod. Ut fringilla, orci non molestie volutpat, augue purus
              bibendum ante, ac imperdiet elit felis sed justo. Nam fermentum
              nisi ut lacus vestibulum, in fringilla lectus vehicula.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default projeto1;
