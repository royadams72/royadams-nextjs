import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/components/_common.module.scss";
type CardProps = {
  href: string;
  imgSrc: string;
  label: string;
};
const Card = ({ href, imgSrc, label }: CardProps) => {
  return (
    <Link className={`${styles.card} ${styles.link}`} href={href}>
      <div className={styles.thumb}>
        <Image src={imgSrc} alt={label} fill priority />
      </div>
      <span className={styles.label}>{label}</span>
    </Link>
  );
};

export default Card;
