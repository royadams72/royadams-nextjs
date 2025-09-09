"use client";
import blobRadii from "@/data/blobRadii.json";
import coloursArray from "@/data/coloursArray.json";

import styles from "@/styles/components/_background.module.scss";

import Blob from "@/components/Blob";
import React from "react";

const Background = () => {
  return (
    <div className={styles.backgroundAnimation}>
      {Array.from({ length: 10 }, (_, i) => (
        <Blob key={i} radii={blobRadii} colors={coloursArray} />
      ))}
    </div>
  );
};

export default Background;
