import { IMAGES } from "@/lib/configs/routes.config";
import styles from "@/styles/components/_common.module.scss";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className={styles.row}>
      <Card
        href="/adds"
        label="Online Ads"
        imgSrc={`${IMAGES.THUMBS_PATH_ADS}/ateca.jpg`}
      />
      <Card
        href="/projects"
        label="Projects"
        imgSrc={`${IMAGES.THUMBS_PATH_PROJECTS}/ma-leon.jpg`}
      />
      <Card
        href="/games"
        label="Games"
        imgSrc={`${IMAGES.THUMBS_PATH_GAMES}/games.jpg`}
      />
    </div>
  );
}
