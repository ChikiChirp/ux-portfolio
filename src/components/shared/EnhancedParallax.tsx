"use client";

import { useEffect, useRef } from "react";

interface EnhancedParallaxProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
  id?: string;
  floatingElements?: boolean;
  intensity?: "light" | "medium" | "heavy";
}

export default function EnhancedParallax({
  children,
  className = "",
  height = "100vh",
  id,
  floatingElements = false,
  intensity = "medium",
}: EnhancedParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  const intensityConfig = {
    light: { layer1: 0.1, layer2: 0.05, layer3: 0.02 },
    medium: { layer1: 0.3, layer2: 0.15, layer3: 0.08 },
    heavy: { layer1: 0.5, layer2: 0.25, layer3: 0.12 },
  };

  const speeds = intensityConfig[intensity];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const elementTop = element.offsetTop;
      const windowHeight = window.innerHeight;

      // Only apply transform when element is in or near viewport
      if (rect.bottom >= -300 && rect.top <= windowHeight + 300) {
        const baseOffset = -(scrolled - elementTop);

        // Apply different speeds to different layers for depth effect
        if (layer1Ref.current) {
          const yPos = baseOffset * speeds.layer1;
          layer1Ref.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }

        if (layer2Ref.current) {
          const yPos = baseOffset * speeds.layer2;
          layer2Ref.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }

        if (layer3Ref.current) {
          const yPos = baseOffset * speeds.layer3;
          layer3Ref.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      }
    };

    let ticking = false;
    const optimizedHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", optimizedHandleScroll);
    };
  }, [speeds]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Background Layer - slowest */}
      <div
        ref={layer3Ref}
        className="absolute inset-0 parallax-element"
        style={{ willChange: "transform" }}
      >
        {floatingElements && (
          <>
            <div className="absolute top-20 left-10 w-4 h-4 bg-white/10 rounded-full float-animation" />
            <div className="absolute top-40 right-20 w-6 h-6 bg-white/5 rounded-full float-animation" />
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/15 rounded-full float-animation" />
            <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-white/8 rounded-full float-animation" />
          </>
        )}
      </div>

      {/* Middle Layer - medium speed */}
      <div
        ref={layer2Ref}
        className="absolute inset-0 parallax-element"
        style={{ willChange: "transform" }}
      >
        {floatingElements && (
          <>
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full float-animation" />
            <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-white/12 rounded-full float-animation" />
          </>
        )}
      </div>

      {/* Foreground Layer - fastest */}
      <div
        ref={layer1Ref}
        className="relative z-10 h-full parallax-element"
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
