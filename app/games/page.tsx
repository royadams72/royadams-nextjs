import CardGrid from "@/components/CardGrid";
import { IMAGES } from "@/lib/configs/routes.config";

export default function GamesIndex() {
  const cards = [
    {
      href: "/games/black-jack/index.html",
      label: "Teaser Blackjack Game",
      imgSrc: `${IMAGES.THUMBS_PATH_GAMES}/poker.jpg`,
      isTargetBlank: true,
    },
    {
      href: "/games/mustang/index.html",
      label: "Ford Mustang Game",
      imgSrc: `${IMAGES.THUMBS_PATH_GAMES}/games.jpg`,
      isTargetBlank: true,
    },
    {
      href: "/games/irish/index.html",
      label: "Teaser Slot Game",
      imgSrc: `${IMAGES.THUMBS_PATH_GAMES}/slot.jpg`,
      isTargetBlank: true,
    },
    {
      href: "/games/eco-sport/index.html",
      label: "Ford EcoSport Game",
      imgSrc: `${IMAGES.THUMBS_PATH_GAMES}/eco.jpg`,
      isTargetBlank: true,
    },
  ];

  return <CardGrid cards={cards} />;
}
