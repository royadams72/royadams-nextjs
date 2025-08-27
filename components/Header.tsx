"use client";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/lib/configs/routes.config";
import styles from "@/styles/components/_header.module.scss";
import { usePathname } from "next/navigation";
Image;
const Header = () => {
  const path = usePathname();
  const title = path.replace("/", "").toUpperCase();

  return path === "/" ? (
    <div className={styles.mainContainer}>
      <Link href={"/"}>
        <Image
          className="Image-fluid"
          src={`${IMAGES.PORTFOLIO_ASSETS}/shared/roy-adams-logo.jpg`}
          alt="Roy Adams"
          fill
          priority
        />
      </Link>
    </div>
  ) : (
    <div className={styles.nav}>
      <div className={styles.navBranding}>
        <Link className="nav-brand-main-link" href="/">
          Roy Adams Portfolio
        </Link>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <Link className="site-mobile-nav-link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="site-mobile-nav-link" href="/ads">
            Online Adds
          </Link>
        </li>

        <li>
          <Link className="site-mobile-nav-link" href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="site-mobile-nav-link" href="/games">
            Games
          </Link>
        </li>
      </ul>
      <h2>{title}</h2>
    </div>
  );
};

export default Header;
