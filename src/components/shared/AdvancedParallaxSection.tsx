"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AdvancedParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  className?: string;
  height?: string;
  id?: string;
  speed?: number;
  scaleRange?: [number, number];
  rotationRange?: [number, number];
  opacityRange?: [number, number];
}

export default function AdvancedParallaxSection({
  children,
  backgroundImage,
  className = "",
  height = "100vh",
  id,
  speed = 0.5,
  scaleRange = [1, 1.2],
  rotationRange = [0, 0],
  opacityRange = [1, 1],
}: AdvancedParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const background = backgroundRef.current;
    const content = contentRef.current;

    // Set up ScrollTrigger with Lenis integration
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value: number | undefined) {
        if (arguments.length) {
          window.lenis?.scrollTo(value as number, { immediate: true });
        }
        return window.lenis?.scroll ?? window.pageYOffset;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Background parallax with zoom and rotation
    if (background) {
      gsap.fromTo(
        background,
        {
          yPercent: -50 * speed,
          scale: scaleRange[0],
          rotation: rotationRange[0],
          opacity: opacityRange[0],
        },
        {
          yPercent: 50 * speed,
          scale: scaleRange[1],
          rotation: rotationRange[1],
          opacity: opacityRange[1],
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }

    // Content parallax with subtle movement
    if (content) {
      gsap.fromTo(
        content,
        {
          yPercent: -20 * speed * 0.3,
        },
        {
          yPercent: 20 * speed * 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }

    // Refresh ScrollTrigger when Lenis updates
    const handleLenisScroll = () => {
      ScrollTrigger.update();
    };

    if (window.lenis) {
      window.lenis.on("scroll", handleLenisScroll);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });

      if (window.lenis) {
        window.lenis.off("scroll", handleLenisScroll);
      }
    };
  }, [speed, scaleRange, rotationRange, opacityRange]);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {backgroundImage && (
        <div
          ref={backgroundRef}
          className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transformOrigin: "center center",
          }}
        />
      )}
      <div
        ref={contentRef}
        className="relative z-10 h-full will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
