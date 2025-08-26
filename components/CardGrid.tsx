"use client";
import React from "react";
import styles from "@/styles/components/_card.module.scss";
import { CardProps } from "@/types/CardProps";
import Card from "./Card";

const CardGrid = ({ cards }: { cards: CardProps[] }) => {
  return (
    <div className={styles.row}>
      {cards.map((g: CardProps) => (
        <Card
          key={g.label}
          href={g.href}
          label={g.label}
          imgSrc={g.imgSrc}
          isTargetBlank={g?.isTargetBlank}
        />
      ))}
    </div>
  );
};

export default CardGrid;
