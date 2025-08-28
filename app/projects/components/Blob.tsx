"use client";
import { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import getRandomInt from "@/lib/utils/getRandomInt";
import makeNonRepeatingPicker from "@/lib/utils/makeNonRepeatingPicker";

gsap.registerPlugin(useGSAP);

type BlobProps = {
  radii: string[];
  sizeRange?: { min: number; max: number };
  color?: string;
  durationRange?: { min: number; max: number };
  stepsRange?: { min: number; max: number };
  ease?: string;
  yoyo?: boolean;
  repeat?: number;
  className?: string;
  style?: React.CSSProperties;
  pauseOnHover?: boolean;
};

export default function Blob({
  radii,
  sizeRange = { min: 100, max: 400 },
  color = "#4ca4e8",
  ease = "power1.inOut",
  durationRange = { min: 2, max: 4 },
  stepsRange = { min: 6, max: 9 },
  yoyo = true,
  repeat = -1,
  className,
  style,
  pauseOnHover = true,
}: BlobProps) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  const pickRadius = useMemo(() => makeNonRepeatingPicker(radii), [radii]);
  const initialSizePx = `${Math.min(sizeRange.min, sizeRange.max)}px`; // SSR-stable

  useGSAP(
    () => {
      const el = elRef.current;
      if (!el || !radii?.length) return;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

      // Randomize AFTER mount (avoids hydration mismatch)
      const duration = getRandomInt(durationRange.min, durationRange.max);
      const steps = getRandomInt(stepsRange.min, stepsRange.max);
      const size = getRandomInt(sizeRange.min, sizeRange.max);
      gsap.set(el, { width: `${size}px`, height: `${size}px` });

      const initial = pickRadius();
      gsap.set(el, { borderRadius: initial });

      if (prefersReduced) return;

      // Build keyframes; picker guarantees no immediate repeats
      const keyframes = Array.from({ length: steps }, () => ({
        borderRadius: pickRadius(),
        duration,
      }));

      tlRef.current = gsap.to(el, {
        keyframes,
        ease,
        yoyo,
        repeat,
      });

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
      ],
    }
  );

  return (
    <div
      ref={elRef}
      className={className}
      style={{
        width: initialSizePx, // SSR-stable
        height: initialSizePx, // SSR-stable
        margin: "100px auto 0",
        backgroundColor: color,
        borderRadius: radii[0], // SSR fallback; will be replaced on mount
        ...style,
      }}
      onMouseEnter={() => pauseOnHover && tlRef.current?.pause()}
      onMouseLeave={() => pauseOnHover && tlRef.current?.resume()}
    />
  );
}
