"use client";
import Link from "next/link";
import Image from "next/image";
import { CardProps } from "@/types/CardProps";
import styles from "@/styles/components/_card.module.scss";

const Card = ({ href, imgSrc, label, isTargetBlank = false }: CardProps) => {
  console.log("Card", isTargetBlank);

  return (
    <Link
      className={`${styles.card} ${styles.link}`}
      href={href}
      target={isTargetBlank ? "_blank" : undefined}
      rel={isTargetBlank ? "noopener noreferrer" : undefined}
    >
      <div className={styles.thumb}>
        <Image src={imgSrc} alt={label} fill priority />
      </div>
      <span className={styles.label}>{label}</span>
    </Link>
  );
};

export default Card;
