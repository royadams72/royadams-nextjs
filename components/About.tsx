"use client";
import styles from "@/styles/components/_pages.module.scss";
import { gsap, useGSAP } from "@/lib/utils/gsapSetup";
import { KeyValueMap } from "@/types/interfaces/KeyValueMap";
import CopyComponent from "./CopyComponent";

const About = ({ copy }: { copy: KeyValueMap[] }) => {
  useGSAP(() => {
    const container = "#about";
    const paragraphs = gsap.utils.toArray<HTMLParagraphElement>(
      `${container} p`
    );
    const ul = gsap.utils.toArray<HTMLHtmlElement>("ul")[1];
    const h2s = gsap.utils.toArray<HTMLHtmlElement>(`${container} h2`);
    const title = document.querySelector(`${container} h1`);

    gsap.fromTo(
      [...paragraphs, ...h2s],
      {
        opacity: 0,
        xPercent: (i: number) => (i % 2 === 0 ? 50 : -50),
      },
      {
        opacity: 1,
        xPercent: 0,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    if (title) {
      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          ease: "expo.out",
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }

    // Animate the UL
    if (ul) {
      gsap.fromTo(
        ul,
        {
          opacity: 0,
          yPercent: 50,
        },
        {
          opacity: 1,
          yPercent: 0,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ul,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }
  });
  return (
    <div id="about" className={styles.fillView}>
      <CopyComponent copy={copy} />
    </div>
  );
};

export default About;
