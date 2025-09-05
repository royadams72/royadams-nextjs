"use client";
import { gsap, useGSAP } from "@/lib/utils/gsapSetup";
import styles from "@/styles/components/_pages.module.scss";
import { KeyValueMap } from "@/types/interfaces/KeyValueMap";
import CopyComponent from "./CopyComponent";

export default function HeroPage({ copy }: { copy: KeyValueMap[] }) {
  useGSAP(() => {
    const container = "#hero";
    const paragraphs = gsap.utils.toArray<HTMLParagraphElement>(
      `${container} p`
    );
    const h2s = gsap.utils.toArray<HTMLHtmlElement>(`${container} h2`);
    const title = document.querySelector(`${container} h1`);

    gsap.from([...paragraphs, ...h2s], {
      opacity: 0,
      xPercent: (i) => (i % 2 === 0 ? 50 : -50),
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    if (title) {
      gsap.from(title, {
        opacity: 0,
        duration: 1.8,
        ease: "expo.out",
        delay: 0.5,
      });
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 60%",
          end: "bottom top",
          scrub: true,
        },
      })
      .to([`${container} p`, `${container} h2`], {
        opacity: 0,
        xPercent: (i) => (i % 2 === 0 ? 50 : -50),
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      });
  });

  return (
    <div id="hero" className={styles.fillView}>
      <CopyComponent copy={copy} />
    </div>
  );
}
