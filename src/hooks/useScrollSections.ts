"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface ScrollSection {
  id: string;
  slug: string;
}

export const useScrollSections = (sections: ScrollSection[]) => {
  const router = useRouter();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const currentSectionRef = useRef<string>("");

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const sectionId = entry.target.id;
          const section = sections.find((s) => s.id === sectionId);

          if (section && currentSectionRef.current !== section.slug) {
            currentSectionRef.current = section.slug;

            // Update URL without causing page refresh
            const newUrl = section.slug === "/" ? "/" : `/${section.slug}`;
            window.history.replaceState(null, "", newUrl);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: [0.5],
      rootMargin: "-20% 0px -20% 0px",
    });

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections, router]);

  return currentSectionRef.current;
};
