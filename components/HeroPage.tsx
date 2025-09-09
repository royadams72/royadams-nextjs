"use client";
import { gsap, useGSAP } from "@/lib/utils/gsapSetup";
import styles from "@/styles/components/_section.module.scss";
import { KeyValueMap } from "@/types/interfaces/KeyValueMap";
import CopyComponent from "./CopyComponent";
import { useRef } from "react";

export default function HeroPage({ copy }: { copy: KeyValueMap[] }) {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!container.current) return;
    const paragraphs = gsap.utils.toArray<HTMLParagraphElement>(
      container.current.querySelectorAll(`p`)
    );
    const h2s = gsap.utils.toArray<HTMLHtmlElement>(
      container.current.querySelectorAll(`h2`)
    );
    const title = gsap.utils.toArray<HTMLHtmlElement>(
      container.current.querySelector(`h1`)
    );

    gsap.set(title, { marginTop: "120px" });
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
          trigger: container.current,
          start: "top 60%",
          end: "bottom top",
          scrub: true,
        },
      })
      .to([...paragraphs, ...h2s], {
        opacity: 0,
        xPercent: (i) => (i % 2 === 0 ? 50 : -50),
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,
        delay: 1,
      });
  }, []);

  return (
    <div id="hero" className={styles.fillView} ref={container}>
      <CopyComponent copy={copy} />
    </div>
  );
}
