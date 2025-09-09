import copy from "@/data/copy.json";
import HeroPage from "@/components/HeroPage";
import { cards } from "@/data/cards";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <HeroPage copy={copy.heroPage} />
      <Section container="about" copy={copy.aboutPage} />
      <Section container="ads" cards={cards.ads} copy={copy.ads} />
      <Section
        container="projects"
        cards={cards.projects}
        copy={copy.projects}
      />
      <Section container="games" cards={cards.games} copy={copy.games} />
    </>
  );
}
