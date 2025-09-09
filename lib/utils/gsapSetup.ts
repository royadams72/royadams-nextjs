"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText, ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollToPlugin);

export { gsap, SplitText, ScrollTrigger, ScrollToPlugin, useGSAP };
