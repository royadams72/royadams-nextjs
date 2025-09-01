"use client";

import { useEffect, useState } from "react";
import blobRadii from "@/data/blobRadii.json";
import coloursArray from "@/data/coloursArray.json";
import Blob from "@/components/Blob";

export default function HeroPage() {
  const [headerH, setHeaderH] = useState(0);

  useEffect(() => {
    const header = document.querySelector(
      "[data-header]"
    ) as HTMLElement | null;
    if (!header) return;
    const ro = new ResizeObserver(([entry]) => {
      setHeaderH(Math.round(entry.contentRect.height));
    });
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  return (
    <div>
      {Array.from({ length: 10 }, (_, i) => (
        <Blob
          key={i}
          radii={blobRadii}
          startY={headerH} // now the measured header height
          colors={coloursArray}
        />
      ))}
    </div>
  );
}
