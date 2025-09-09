"use client";
import { gsap, useGSAP } from "@/lib/utils/gsapSetup";
import { KeyValueMap } from "@/types/interfaces/KeyValueMap";
import { CardProps } from "@/types/interfaces/CardProps";
import styles from "@/styles/components/_section.module.scss";
import CopyComponent from "./CopyComponent";
import CardGrid from "./CardGrid";
import { useRef } from "react";
import getRandomInt from "@/lib/utils/getRandomInt";

const Section = ({
  container,
  copy,
  cards,
}: {
  container: string;
  copy?: KeyValueMap[];
  cards?: CardProps[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const offset = 90;
  useGSAP(
    () => {
      const el = containerRef.current!;
      const q = gsap.utils.selector(el);

      const paras = q("p") as HTMLElement[];
      const h2s = Array.from(
        containerRef.current!.querySelectorAll(":scope h2")
      ) as HTMLElement[];
      const title = q("h1")[0] as HTMLElement | undefined;
      const list = q("ul")[0] as HTMLElement | undefined;
      const cardLinks = q("a") as HTMLElement[];

      // 0) Baselines (important for clean reverses)
      if (paras.length)
        gsap.set(paras, { opacity: 0, xPercent: (i) => (i % 2 ? -50 : 50) });
      if (h2s.length)
        gsap.set(h2s, {
          opacity: 0,
          xPercent: (i) => (i % 2 ? -50 : 50),
          force3D: true,
        });
      if (title) gsap.set(title, { opacity: 0, y: 50 });
      if (list) gsap.set(list, { opacity: 0, yPercent: 50 });
      if (cardLinks.length) {
        gsap.set(cardLinks, {
          opacity: 0,
          xPercent: (i) => (i % 2 ? -offset : offset),
          yPercent: (i) =>
            i % 2 ? -getRandomInt(0, offset) : getRandomInt(0, offset),
        });
      }

      if (paras.length) {
        gsap.to(paras, {
          opacity: 1,
          xPercent: 0,
          ease: "expo.out",
          stagger: { amount: 0.5, from: 0 },
          duration: 0.6,
          overwrite: "auto",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: () =>
              "+=" + Math.min(600, containerRef.current!.offsetHeight * 0.5),
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        });
      }

      if (h2s.length) {
        gsap.to(h2s, {
          opacity: 1,
          xPercent: 0,
          ease: "expo.out",
          stagger: 0.1,
          duration: 0.5,
          overwrite: "auto",
          force3D: true,
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 100%",
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        });
      }

      if (title) {
        gsap.to(title, {
          opacity: 1,
          y: 0,
          ease: "expo.out",
          duration: 0.6,
          overwrite: "auto",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 90%",
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        });
      }

      if (list) {
        gsap.to(list, {
          opacity: 1,
          yPercent: 0,
          ease: "expo.out",
          duration: 0.6,
          overwrite: "auto",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 90%",
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        });
      }

      if (cardLinks.length) {
        gsap.to(cardLinks, {
          opacity: 1,
          xPercent: 0,
          yPercent: 0,
          ease: "power2.out",
          duration: 1,
          stagger: 0.7,
          overwrite: "auto",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 30%",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <div id={container} className={styles.fillView} ref={containerRef}>
      {copy && <CopyComponent copy={copy} />}
      {cards && <CardGrid cards={cards} />}
    </div>
  );
};

export default Section;
