"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/utils/gsapSetup";
import styles from "@/styles/components/_header.module.scss";
import { usePathname } from "next/navigation";
Image;
const Header = () => {
  const path = usePathname();
  const title = path.replace("/", "").toUpperCase();
  const [divId, setDivId] = useState("");
  const headerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    console.log(headerRef.current?.getClientRects()[0].height);
    if (!divId) return;
    const headerHeight = headerRef.current?.getClientRects()[0].height;
    gsap.to(window, {
      scrollTo: {
        y: divId,
        offsetY: headerHeight,
      },
      duration: 1,
      ease: "power1.inOut",
      autokill: true,
    });
  }, [divId]);

  return (
    <div data-header className={styles.nav} ref={headerRef}>
      <div className={styles.navBranding}>
        <Link className="nav-brand-main-link" href="/">
          <span className={styles.navBrandingText}>Roy Adams Portfolio</span>
        </Link>
        <span className={styles.navBrandingBG}></span>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <Link
            className="site-mobile-nav-link"
            onClick={() => setDivId("#hero")}
            href="#hero"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="site-mobile-nav-link"
            href="#ads"
            onClick={() => setDivId("#ads")}
          >
            Online Adds
          </Link>
        </li>

        <li>
          <Link
            className="site-mobile-nav-link"
            onClick={() => setDivId("#projects")}
            href="#projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="site-mobile-nav-link"
            href="#games"
            onClick={() => setDivId("#games")}
          >
            Games
          </Link>
        </li>
      </ul>
      <h2>{title}</h2>
    </div>
  );
};

export default Header;
