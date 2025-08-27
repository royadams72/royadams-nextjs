"use client";
import { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type BlobProps = {
  radii: string[]; // required
  size?: number | string; // e.g. 300 or "20vw"
  color?: string;
  duration?: number; // seconds per step
  steps?: number; // how many keyframe steps to generate
  ease?: string; // e.g. "power1.inOut"
  yoyo?: boolean;
  repeat?: number; // -1 for infinite
  className?: string;
  style?: React.CSSProperties;
  pauseOnHover?: boolean;
};

function makeShuffledCycler(items: string[]) {
  let pool: string[] = [];
  let last: string | null = null;
  const refill = () => {
    pool = gsap.utils.shuffle([...items]);
    // avoid immediate repeat of the last item across refills
    if (last && pool[0] === last && pool.length > 1) {
      const swap = pool[0];
      pool[0] = pool[1];
      pool[1] = swap;
    }
  };
  refill();
  return () => {
    if (!pool.length) refill();
    const next = pool.shift()!;
    last = next;
    return next;
  };
}

export default function Blob({
  radii,
  size = 300,
  color = "#4ca4e8",
  duration = 3,
  steps = 6,
  ease = "power1.inOut",
  yoyo = true,
  repeat = -1,
  className,
  style,
  pauseOnHover = true,
}: BlobProps) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  const getNextRadius = useMemo(() => makeShuffledCycler(radii), [radii]);

  useGSAP(
    () => {
      if (!elRef.current || !radii?.length) return;

      // Respect reduced motion
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        gsap.set(elRef.current, { borderRadius: radii[0] });
        return;
      }

      // Build keyframes dynamically
      const keyframes = Array.from({ length: steps }, () => ({
        borderRadius: getNextRadius(),
        duration,
      }));
      console.log(keyframes);

      // Use a single tween with keyframes
      tlRef.current = gsap.to(elRef.current, {
        keyframes,
        ease,
        yoyo,
        repeat,
      });
    },
    { dependencies: [radii, duration, steps, ease, yoyo, repeat] }
  );

  const numericSize = typeof size === "number" ? `${size}px` : (size as string);

  return (
    <div
      ref={elRef}
      className={className}
      style={{
        width: numericSize,
        height: numericSize,
        margin: "100px auto 0",
        backgroundColor: color,
        // reasonable default shape in case JS is off
        borderRadius: radii?.[0] ?? "28% 72% 22% 78% / 39% 23% 77% 61%",
        ...style,
      }}
      onMouseEnter={() => pauseOnHover && tlRef.current?.pause()}
      onMouseLeave={() => pauseOnHover && tlRef.current?.resume()}
    />
  );
}
