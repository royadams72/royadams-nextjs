"use client";
import { useRef, useMemo, RefObject, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import getRandomInt from "@/lib/utils/getRandomInt";
import makeNonRepeatingPicker from "@/lib/utils/makeNonRepeatingPicker";
import styles from "@/styles/components/_blob.module.scss";
import useScreenSize from "@/hooks/useScreenSize";

gsap.registerPlugin(useGSAP);

type BlobProps = {
  startX?: number;
  startY?: number;
  radii: string[];
  sizeRange?: { min: number; max: number };
  colors?: string[][];
  durationRange?: { min: number; max: number };
  stepsRange?: { min: number; max: number };
  ease?: string;
  yoyo?: boolean;
  repeat?: number;
  className?: string;
  style?: React.CSSProperties;
  pauseOnHover?: boolean;
};

function setColour(colors: string[][]) {
  if (!colors || colors.length === 0) return ["#a7b4ef", "#5675ff"];

  const index = getRandomInt(0, colors.length - 1);
  return colors[index];
}

function setDirection(windowWidth: number, windowHeight: number, size: number) {
  const directionDown = getRandomInt(1, 2) === 1 ? true : false;
  const startLeft = getRandomInt(1, 2) === 1 ? true : false;
  const randomX = startLeft
    ? getRandomInt(0, windowWidth - size)
    : getRandomInt(windowWidth - size, 0);

  const randomY = directionDown
    ? getRandomInt(0, windowHeight - size)
    : getRandomInt(windowHeight - size, 0);

  return { randomY, randomX };
}

function mapInverted(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) {
  return outMax - ((value - inMin) * (outMax - outMin)) / (inMax - inMin);
}

export default function Blob({
  startX = 0,
  startY,
  radii,
  sizeRange = { min: 100, max: 400 },
  colors = [["#a7b4ef", "#5675ff"]],
  ease = "power1.inOut",
  durationRange = { min: 2, max: 4 },
  stepsRange = { min: 6, max: 9 },
  yoyo = true,
  repeat = -1,
  className,
  style,
  pauseOnHover = true,
}: BlobProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);
  let { height: windowHeight, width: windowWidth } = useScreenSize() ?? {
    width: 0,
    height: 0,
  };

  const sizeRef = useRef({ w: windowWidth, h: windowHeight });
  useEffect(() => {
    sizeRef.current = { w: windowWidth, h: windowHeight };
  }, [windowWidth, windowHeight]);
  // Set window width and height incase we have a header etc.
  const topOverlap = startY ?? 0; // header height or 0
  const minY = -topOverlap; // allow travel up into header space
  const minX = startX;

  const pickRadius = useMemo(() => makeNonRepeatingPicker(radii), [radii]);
  const initialSizePx = `${Math.min(sizeRange.min, sizeRange.max)}px`; // SSR-stable

  useGSAP(
    () => {
      const el = elRef.current;
      const container = containerRef.current;
      if (!el || !radii?.length || !container) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

      // Randomize AFTER mount (avoids hydration mismatch)
      const duration = getRandomInt(durationRange.min, durationRange.max);
      const steps = getRandomInt(stepsRange.min, stepsRange.max);
      const size = getRandomInt(sizeRange.min, sizeRange.max);
      const initialBorderRadius = pickRadius();
      const [colour1, colour2] = setColour(colors);

      gsap.set(container, {
        rotation: 0,
        width: `${size}px`,
        height: `${size}px`,
        y: getRandomInt(minY, windowHeight - size),
        x: getRandomInt(minX, windowWidth - size),
        position: "absolute",
        visibility: "visible",
      });

      gsap.set(el, {
        width: `${size}px`,
        height: `${size}px`,
        opacity: 0.2,
        backgroundColor: "#5675ff",
        borderRadius: initialBorderRadius,
        backgroundImage: `linear-gradient(to bottom right, ${colour1}, ${colour2})`,
      });

      if (prefersReduced) return;

      // Build keyframes; picker guarantees no immediate repeats
      const keyframes = Array.from({ length: steps }, () => ({
        borderRadius: pickRadius(),
        duration,
      }));

      tlRef.current = gsap.to([el, container], {
        keyframes,
        ease,
        yoyo,
        repeat,
      });

      function setAnim() {
        const { w: windowWidth, h: windowHeight } = sizeRef.current;
        console.log(windowHeight);
        const { randomX, randomY } = setDirection(
          windowWidth,
          windowHeight,
          size
        );
        const duration = mapInverted(size, sizeRange.min, sizeRange.max, 3, 15);
        tlRef.current = gsap.to(el, {
          rotation: getRandomInt(0, 190),
          duration,
          onComplete: setAnim,
        });

        tlRef.current = gsap.to(container, {
          x: randomX,
          y: randomY,
          duration,
        });
      }
      setAnim();

      return () => tlRef.current?.kill();
    },
    {
      dependencies: [
        radii,
        ease,
        yoyo,
        repeat,
        sizeRange.min,
        sizeRange.max,
        durationRange.min,
        durationRange.max,
        stepsRange.min,
        stepsRange.max,
        containerRef,
      ],
    }
  );

  return (
    <div ref={containerRef} className={styles.blobWrap}>
      <div
        ref={elRef}
        className={`${styles.blob} ${className}`}
        style={{
          width: initialSizePx,
          height: initialSizePx,
          ...style,
        }}
        onMouseEnter={() => pauseOnHover && tlRef.current?.pause()}
        onMouseLeave={() => pauseOnHover && tlRef.current?.resume()}
      />
    </div>
  );
}
