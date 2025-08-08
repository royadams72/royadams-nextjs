import Image from "next/image";
import { IMAGES } from "@/lib/configs/routes.config";
import styles from "@/styles/components/_header.module.scss";
Image;
const Header = () => {
  return (
    <div className={styles.container}>
      <Image
        className="Image-fluid"
        src={`${IMAGES.PORTFOLIO_ASSETS}/shared/roy-adams-logo.jpg`}
        alt="Roy Adams"
        fill
        priority
      />
    </div>
  );
};

export default Header;
