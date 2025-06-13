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
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useLayoutEffect(() => {
    // Wait for DOM to be ready
    const timeout = setTimeout(() => {
      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        // Track visibility of all sections
        const visibility: Record<string, number> = {};
        entries.forEach((entry) => {
          visibility[entry.target.id] = entry.intersectionRatio;
        });

        // Find the projects and codex sections
        const projectsSection = sections.find((s) => s.slug === "projects");
        const codexSection = sections.find((s) => s.slug === "codex");
        const projectsRatio = projectsSection
          ? visibility[projectsSection.id] || 0
          : 0;
        const codexRatio = codexSection ? visibility[codexSection.id] || 0 : 0;

        // Only update to 'projects' if projects is 100% in view and codex is not visible
        if (
          projectsSection &&
          codexSection &&
          projectsRatio === 1 &&
          codexRatio === 0
        ) {
          if (currentSection !== projectsSection.slug) {
            if (debounceRef.current) clearTimeout(debounceRef.current);
            debounceRef.current = setTimeout(() => {
              setCurrentSection(projectsSection.slug);
              const newUrl = `/${projectsSection.slug}`;
              window.history.replaceState(null, "", newUrl);
            }, 200);
          }
          return;
        }

        // Otherwise, use the default logic for other sections
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            const sectionId = entry.target.id;
            const section = sections.find((s) => s.id === sectionId);

            if (section && currentSection !== section.slug) {
              if (debounceRef.current) clearTimeout(debounceRef.current);
              debounceRef.current = setTimeout(() => {
                setCurrentSection(section.slug);
                const newUrl = section.slug === "/" ? "/" : `/${section.slug}`;
                window.history.replaceState(null, "", newUrl);
              }, 200);
            }
          }
        });
      };

      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: [0.5],
        rootMargin: "-30% 0px -30% 0px",
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
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [sections, router, currentSection]);

  return currentSection;
};
