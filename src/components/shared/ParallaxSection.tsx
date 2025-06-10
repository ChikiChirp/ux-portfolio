"use client";

import { useEffect, useRef, useCallback } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  speed?: number;
  className?: string;
  height?: string;
  id?: string;
}

export default function ParallaxSection({
  children,
  backgroundImage,
  speed = 0.5,
  className = "",
  height = "100vh",
  id,
}: ParallaxSectionProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);

  const animate = useCallback(
    (time: number) => {
      if (!parallaxRef.current || !backgroundRef.current || !contentRef.current)
        return;

      if (previousTimeRef.current !== undefined) {
        const element = parallaxRef.current;
        const background = backgroundRef.current;
        const content = contentRef.current;
        const rect = element.getBoundingClientRect();
        const scrolled = window.pageYOffset;

        // Calculate parallax offset based on element position and speed
        const elementTop = element.offsetTop;
        const windowHeight = window.innerHeight;

        // Apply transform when element is in viewport or nearby for smoother effect
        if (rect.bottom >= -200 && rect.top <= windowHeight + 200) {
          const yPos = -(scrolled - elementTop) * speed;

          // Use transform3d for hardware acceleration and better performance
          background.style.transform = `translate3d(0, ${yPos}px, 0)`;

          // Slight different speed for content to create depth
          const contentYPos = -(scrolled - elementTop) * (speed * 0.1);
          content.style.transform = `translate3d(0, ${contentYPos}px, 0)`;
        }
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [speed]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);

    // Passive scroll listener for better performance
    const handleScroll = () => {
      if (!requestRef.current) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animate]);

  return (
    <div
      ref={parallaxRef}
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {backgroundImage && (
        <div
          ref={backgroundRef}
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            willChange: "transform",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            transform: "translate3d(0, 0, 0)", // Force hardware acceleration
          }}
        />
      )}
      <div
        ref={contentRef}
        className="relative z-10 h-full"
        style={{
          willChange: "transform",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          transform: "translate3d(0, 0, 0)", // Force hardware acceleration
        }}
      >
        {children}
      </div>
    </div>
  );
}
