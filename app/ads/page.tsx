import CardGrid from "@/components/CardGrid";
import { IMAGES } from "@/lib/configs/routes.config";

export default function GamesIndex() {
  const cards = [
    {
      href: "/banners/c4-picasso/index.html",
      label: "C4 Picasso Rich Media Ad",
      imgSrc: `${IMAGES.THUMBS_PATH_ADS}/picasso.jpg`,
      isTargetBlank: true,
    },
    {
      href: "/banners/kuga-sustain/index.html",
      label: "Ford Kuga Interactive Ad",
      imgSrc: `${IMAGES.THUMBS_PATH_ADS}/kuga.jpg`,
      isTargetBlank: true,
    },
    {
      href: "/banners/focus-rs/index.html",
      label: "Ford Focus RS",
      imgSrc: `${IMAGES.THUMBS_PATH_ADS}/fordRs.jpg`,
      isTargetBlank: true,
    },
    {
      href: "/banners/wtw/index.html",
      label: "Ford S-MAX",
      imgSrc: `${IMAGES.THUMBS_PATH_ADS}/smax.jpg`,
      isTargetBlank: true,
    },
    {
      href: "/banners/mustang-yellow/index.html",
      label: "Ford Mustang",
      imgSrc: `${IMAGES.THUMBS_PATH_ADS}/mustang.jpg`,
      isTargetBlank: true,
    },
  ];

  return <CardGrid cards={cards} />;
}
