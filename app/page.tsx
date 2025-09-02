import copy from "@/data/copy.json";
import HeroPage from "@/components/HeroPage";
export default function Home() {
  return (
    <>
      <HeroPage copy={copy.heroPage} />
    </>
  );
}
