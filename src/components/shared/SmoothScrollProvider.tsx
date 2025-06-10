"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings for smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2, // Smooth transition duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing curve
      lerp: 0.1, // Linear interpolation amount (smoothness)
      infinite: false,
      gestureOrientation: "vertical", // The orientation of gestures
      touchMultiplier: 2, // Multiplier for touch events
      // wheelMultiplier is not a valid option in Lenis, removing it
    });

    // Animation loop for smooth scrolling
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  // Expose lenis instance globally for GSAP ScrollTrigger integration
  useEffect(() => {
    if (lenisRef.current) {
      // Make lenis available for ScrollTrigger
      window.lenis = lenisRef.current;
    }
  }, []);

  return <div id="smooth-wrapper">{children}</div>;
}
