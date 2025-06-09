"use client";

import { useEffect, useRef } from "react";

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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current || !contentRef.current) return;

      const element = parallaxRef.current;
      const content = contentRef.current;
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;

      // Calculate parallax offset based on element position and speed
      const elementTop = element.offsetTop;
      const windowHeight = window.innerHeight;

      // Apply transform when element is in viewport or nearby for smoother effect
      if (rect.bottom >= -200 && rect.top <= windowHeight + 200) {
        const yPos = -(scrolled - elementTop) * speed;

        // Apply transform to content for smoother effect with hardware acceleration
        content.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    // Use requestAnimationFrame for smooth scrolling
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

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener("scroll", optimizedHandleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={parallaxRef}
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
        />
      )}
      <div
        ref={contentRef}
        className="relative z-10 h-full"
        style={{
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
}
