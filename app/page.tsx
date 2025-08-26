import { IMAGES } from "@/lib/configs/routes.config";
import CardGrid from "@/components/CardGrid";
import { CardProps } from "@/types/CardProps";

export default function Home() {
  const cards: CardProps[] = [
    {
      href: "/ads",
      label: "Online Ads",
      imgSrc: `${IMAGES.THUMBS_PATH_ADS}/ateca.jpg`,
    },
    {
      href: "/projects",
      label: "Projects",
      imgSrc: `${IMAGES.THUMBS_PATH_PROJECTS}/geekedout.jpg`,
    },
    {
      href: "/games",
      label: "Games",
      imgSrc: `${IMAGES.THUMBS_PATH_GAMES}/games.jpg`,
    },
  ];
  console.log("Home cards:", cards[0]);

  return <CardGrid cards={cards} />;
}
