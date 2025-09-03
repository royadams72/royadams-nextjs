"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

export { gsap, SplitText, ScrollTrigger, useGSAP };
