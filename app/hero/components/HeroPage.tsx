"use client";

import useScreenSize from "@/hooks/useScreenSize";

const HeroPage = () => {
  const screenSize = useScreenSize();
  console.log(screenSize);

  return <div>HeroPage</div>;
};

export default HeroPage;
