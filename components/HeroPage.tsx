"use client";

import styles from "@/styles/components/_pages.module.scss";
import CopyComponent from "./CopyComponent";
import { KeyValueMap } from "@/types/interfaces/KeyValueMap";

export default function HeroPage({ copy }: { copy: any[] }) {
  return (
    <div className={styles.fillView}>
      <CopyComponent copy={copy} />
    </div>
  );
}
