import React from "react";
import blobRadii from "@/data/blobRadii.json";

import Blob from "../components/Blob";

const Navigation = () => {
  return (
    <Blob
      radii={blobRadii}
      color="#4ca4e8"
      ease="power2.inOut"
      yoyo
      repeat={-1}
    />
  );
};

export default Navigation;
