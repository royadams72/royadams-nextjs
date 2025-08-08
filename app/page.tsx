import Link from "next/link";
import ThumbImage from "@/components/ThumbImage";
import { IMAGES } from "@/lib/configs/routes.config";
import styles from "@/styles/components/_common.module.scss";

export default function Home() {
  return (
    <div className={styles.row}>
      <Link className={styles.card} href="/adds">
        <div className={styles.thumb}>
          <ThumbImage
            src={`${IMAGES.THUMBS_PATH_ADS}/ateca.jpg`}
            alt="Online Ads"
            fill
            priority
          />
        </div>
        <span className={`${styles.label} ${styles.link}`}>Online Ads</span>
      </Link>

      <Link className={styles.card} href="/web">
        <div className={styles.thumb}>
          <ThumbImage
            src={`${IMAGES.THUMBS_PATH_PROJECTS}/ma-leon.jpg`}
            alt="Projects"
            fill
          />
        </div>
        <span className={`${styles.label} ${styles.link}`}>Projects</span>
      </Link>

      <Link className={styles.card} href="/mygames">
        <div className={styles.thumb}>
          <ThumbImage
            src={`${IMAGES.THUMBS_PATH_GAMES}/games.jpg`}
            alt="Games"
            fill
          />
        </div>
        <span className={`${styles.label} ${styles.link}`}>Games</span>
      </Link>
    </div>
  );
}
