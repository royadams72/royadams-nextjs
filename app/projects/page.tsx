import CardGrid from "@/components/CardGrid";
import { IMAGES } from "@/lib/configs/routes.config";

export default function GamesIndex() {
  const cards = [
    {
      href: "https://www.gyft-now.co.uk",
      label: "Get Your Fit Together React 19",
      imgSrc: `${IMAGES.THUMBS_PATH_PROJECTS}/gyft.jpg`,
      isTargetBlank: true,
    },
    {
      href: "https://www.geekedout.co.uk",
      label: "Geeked out React 19",
      imgSrc: `${IMAGES.THUMBS_PATH_PROJECTS}/geekedout.jpg`,
      isTargetBlank: true,
    },
    {
      href: "/landing-pages/pixies-screen.png",
      label: "Gala Bingo Landing page1",
      imgSrc: `${IMAGES.THUMBS_PATH_PROJECTS}/splash.jpg`,
      isTargetBlank: true,
    },
    {
      href: "/landing-pages/gb-bingo.png",
      label: "Gala Bingo Landing page2",
      imgSrc: `${IMAGES.THUMBS_PATH_PROJECTS}/gb.png`,
      isTargetBlank: true,
    },
    {
      href: "/landing-pages/gamesetscratch.png",
      label: "Gala Bingo Landing page3",
      imgSrc: `${IMAGES.THUMBS_PATH_PROJECTS}/game-set.png`,
      isTargetBlank: true,
    },
    {
      href: "/landing-pages/alice-screen.png",
      label: "Gala Bingo Landing page4",
      imgSrc: `${IMAGES.THUMBS_PATH_PROJECTS}/alice.png`,
      isTargetBlank: true,
    },
  ];

  return <CardGrid cards={cards} />;
}
