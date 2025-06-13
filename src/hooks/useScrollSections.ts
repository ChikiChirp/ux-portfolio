"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface ScrollSection {
  id: string;
  slug: string;
}

export const useScrollSections = (sections: ScrollSection[]) => {
  const router = useRouter();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [currentSection, setCurrentSection] = useState<string>("");

  useLayoutEffect(() => {
    // Wait for DOM to be ready
    const timeout = setTimeout(() => {
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const sectionId = entry.target.id;
            const section = sections.find((s) => s.id === sectionId);

            if (section && currentSection !== section.slug) {
              setCurrentSection(section.slug);
              // Update URL without causing page refresh
              const newUrl = section.slug === "/" ? "/" : `/${section.slug}`;
              window.history.replaceState(null, "", newUrl);
            }
          }
        });
      };

      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: [0.3],
        rootMargin: "0px",
      });

      // Observe all sections
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && observerRef.current) {
          observerRef.current.observe(element);
        }
      });
    }, 100); // Delay to ensure DOM is ready

    return () => {
      clearTimeout(timeout);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections, router, currentSection]);

  return currentSection;
};
