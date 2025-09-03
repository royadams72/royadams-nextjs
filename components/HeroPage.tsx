"use client";
import { SplitText, ScrollTrigger, gsap, useGSAP } from "@/lib/utils/gsapSetup";
import styles from "@/styles/components/_pages.module.scss";
import { KeyValueMap } from "@/types/interfaces/KeyValueMap";
import CopyComponent from "./CopyComponent";

export default function HeroPage({ copy }: { copy: KeyValueMap[] }) {
  useGSAP(() => {
    const paragraphs = gsap.utils.toArray<HTMLParagraphElement>("p");
    const ul = gsap.utils.toArray<HTMLHtmlElement>("ul")[1];
    const h2s = gsap.utils.toArray<HTMLHtmlElement>("h2");
    const title = gsap.utils.toArray<HTMLHtmlElement>("h1")[0];
    gsap.from([paragraphs, h2s], {
      opacity: 0,
      xPercent: (i) => (i % 2 === 0 ? 50 : -50),
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
    console.log(ul);

    gsap.from(ul, {
      opacity: 0,
      yPercent: 50,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1.5,
    });

    gsap.from(title, {
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      delay: 0.5,
    });
  });
  return (
    <div id="hero" className={styles.fillView}>
      <CopyComponent copy={copy} />
    </div>
  );
}
