"use client";
import { gsap, useGSAP } from "@/lib/utils/gsapSetup";
import { KeyValueMap } from "@/types/interfaces/KeyValueMap";
import { CardProps } from "@/types/interfaces/CardProps";
import styles from "@/styles/components/_pages.module.scss";
import CopyComponent from "./CopyComponent";
import CardGrid from "./CardGrid";
import { useRef } from "react";
import getRandomInt from "@/lib/utils/getRandomInt";

const Ads = ({ copy, cards }: { copy?: KeyValueMap[]; cards: CardProps[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const offset = 90;
  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray<HTMLAnchorElement>(
      containerRef.current.querySelectorAll("a")
    );

    gsap.from(cards, {
      opacity: 0,
      yPercent: (i) =>
        i % 2 === 0 ? getRandomInt(0, offset) : getRandomInt(0, -offset),
      xPercent: (i) => (i % 2 === 0 ? offset : -offset),
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div id="ads" className={styles.fillView} ref={containerRef}>
      {copy && <CopyComponent copy={copy} />}
      <CardGrid cards={cards} />
    </div>
  );
};

export default Ads;
