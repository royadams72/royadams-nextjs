import copy from "@/data/copy.json";
import HeroPage from "@/components/HeroPage";
import About from "@/components/About";
import { cards } from "@/data/cards";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <>
      <HeroPage copy={copy.heroPage} />
      <About copy={copy.aboutPage} />
      <Projects cards={cards.projects} />
    </>
  );
}
