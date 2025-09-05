import React from "react";
import { KeyValueMap } from "@/types/interfaces/KeyValueMap";
import { CardProps } from "@/types/interfaces/CardProps";
import styles from "@/styles/components/_pages.module.scss";
import CopyComponent from "./CopyComponent";
import CardGrid from "./CardGrid";

const Projects = ({
  copy,
  cards,
}: {
  copy?: KeyValueMap[];
  cards: CardProps[];
}) => {
  return (
    <div id="projects" className={styles.fillView}>
      {copy && <CopyComponent copy={copy} />}
      <CardGrid cards={cards} />
    </div>
  );
};

export default Projects;
