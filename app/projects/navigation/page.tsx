import React from "react";
import blobRadii from "@/data/blobRadii.json";

import Blob from "../components/Blob";

const Navigation = () => {
  return (
    <Blob
      radii={blobRadii}
      size={320}
      color="#4ca4e8"
      duration={2.5}
      steps={8}
      ease="power2.inOut"
      yoyo
      repeat={-1}
    />
  );
};

export default Navigation;
