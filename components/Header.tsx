"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/utils/gsapSetup";
import { navigation } from "@/data/navigation";
import styles from "@/styles/components/_header.module.scss";

const Header = () => {
  const path = usePathname();
  const title = path.replace("/", "").toUpperCase();
  const [divId, setDivId] = useState("");
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!divId) return;
    const headerHeight =
      headerRef.current && headerRef.current?.getClientRects()[0]?.height + 50;
    gsap.to(window, {
      scrollTo: {
        y: divId,
        offsetY: headerHeight || 300,
      },
      duration: 1,
      ease: "power1.inOut",
      autokill: true,
    });
  }, [divId]);

  return (
    <div data-header className={styles.nav} ref={headerRef}>
      <div className={styles.navBranding}>
        <Link href="/">
          <span className={styles.navBrandingText}>Roy Adams Portfolio</span>
          <span className={styles.navBrandingBG}></span>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <ul>
          {navigation &&
            navigation.map((navItem) => (
              <li key={navItem.label}>
                <Link
                  onClick={() => setDivId(navItem.href)}
                  href={navItem.href}
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <h2>{title}</h2>
    </div>
  );
};

export default Header;
