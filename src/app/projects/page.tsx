"use client";

import EnhancedParallax from "@/components/shared/EnhancedParallax";
import ParallaxSection from "@/components/shared/ParallaxSection";
import SocialLinks from "@/components/shared/SocialLinks";
import Image from "next/image";
import Button from "@/components/shared/Button";
import { useEffect, useState } from "react";

// Define projects data locally
const contractProjects = [
  {
    title: "UX & UI Design\nTime report - Virki AB\n2025 apr - 2025 aug",
    image: "/figma-assets/virki-project.png",
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
    href: "/projects/virki",
  },
];

const schoolProjects = [
  {
    title: "UX & UI Design\n3D visualizer - OAK Equipment\n2025 mar - 2025 may",
    image: "/figma-assets/oak-project.png",
    bgColor: "bg-gradient-to-br from-green-100 to-green-200",
    href: "/projects/oak",
  },
  {
    title: "Website Design\nWebshop - Solenia\n2025 mar (2 weeks)",
    image: "/figma-assets/solenia-project.png",
    bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
    href: "/projects/webshop-solenia",
  },
  {
    title: "Visual Identity\nBooking system - Stalltid\n2024",
    image: "/figma-assets/stalltid-project.png",
    bgColor: "bg-gradient-to-br from-pink-100 to-pink-200",
    href: "/projects/stalltid",
  },
];

// ProjectCard component definition
const ProjectCard = ({
  project,
  className,
  imageContainerClassName,
}: {
  project: {
    title: string;
    image: string;
    bgColor: string;
    href?: string;
  };
  className?: string;
  imageContainerClassName?: string;
}) => (
  <div
    className={`group bg-[#FDFDFD] shadow-[0_4px_16px_rgba(0,0,0,0.08)] overflow-hidden transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CDE1FB] ${
      className || ""
    }`}
    tabIndex={0}
    aria-label={project.title}
  >
    <div
      className={`w-full relative overflow-hidden ${
        imageContainerClassName || ""
      }`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      ) : (
        <div
          className={`${project.bgColor} h-full w-full flex items-center justify-center`}
        >
          <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-2xl">📱</span>
          </div>
        </div>
      )}
    </div>
    <div className="px-5 py-4 relative">
      <p className="text-[18px] font-ubuntu-sans leading-[1.667] text-black whitespace-pre-line text-left">
        {(() => {
          const lines = project.title.split("\n");
          return (
            <>
              {lines[0]}
              <br />
              <span className="font-bold">{lines[1]}</span>
              {lines[2] && (
                <>
                  <br />
                  {lines[2]}
                </>
              )}
            </>
          );
        })()}
      </p>
      {project.href && (
        <Button
          size="lg"
          href={project.href}
          className="mt-3 w-full absolute left-0 -translate-x-0 bottom-0 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all duration-200 font-ubuntu-sans font-medium text-lg border-[5px] border-[#DA0B65] group-hover:bg-[#FF0364] group-hover:text-white group-hover:border-[#FF0364]"
        >
          View Project
        </Button>
      )}
    </div>
  </div>
);

export default function ProjectsPage() {
  // Note: Not using isMobile since this is a desktop-only page
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render nothing on the server and initial client render
    return null;
  }

  return (
    <div className="min-h-screen bg-[#CDE1FA] flex flex-col">
      <main className="flex-grow pt-20">
        {/* Projects Section - REBUILT TO MATCH FIGMA */}
        <EnhancedParallax
          id="projects-section"
          className="bg-gradient-to-b from-[#CDE1FB] to-[#EDF5FF]"
          height="min-h-screen" /* Ensure minimum full viewport height */
          floatingElements={true}
          intensity="light"
        >
          <div className="flex flex-col items-center gap-[21px] pt-0 pb-[20]">
            {/* PROJECTS Title - Changed to w-full for full-width banner */}
            <div className="w-full min-h-[15vh] md:min-h-[25vh] bg-gradient-to-r from-[#CDE1FB] to-[#EDF5FF] flex items-center mt-23">
              <div className="w-full max-w-[1032px] mx-auto px-6 sm:px-8">
                <h1 className="text-[32px] font-ubuntu-sans font-extrabold leading-[1.2] text-[#1B1B3E]">
                  PROJECTS
                </h1>
              </div>
            </div>

            {/* Main content area - Change to flex-col for vertical stacking */}
            <div className="w-full max-w-[1032px] flex flex-col items-start gap-[4vh] px-6 sm:px-8">
              {/* Contract Work */}
              <div className="w-full md:w-[80%] lg:w-[60%] xl:w-[55%] flex flex-col gap-[2vh]">
                <div className="px-[9px] w-[183px]">
                  <h2
                    className="text-[32px] font-ubuntu-sans font-bold leading-[1.2] text-black text-left whitespace-nowrap"
                    tabIndex={0}
                    aria-label="Contract Work"
                  >
                    Contract Work
                  </h2>
                </div>
                <ProjectCard
                  project={contractProjects[0]}
                  className="w-full shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                  imageContainerClassName="h-[30vh] md:h-[253px]"
                />
              </div>

              {/* School Projects */}
              <div className="w-full flex flex-col gap-[2vh]">
                <div className="px-[9px]">
                  <h2 className="text-[32px] font-ubuntu-sans font-bold leading-[1.2] text-black">
                    School Projects
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vh] md:gap-[29px]">
                  {/* OAK: top left */}
                  <ProjectCard
                    project={schoolProjects[0]}
                    className="w-full col-start-1 row-start-1"
                    imageContainerClassName="h-[30vh] md:h-[253px]"
                  />
                  {/* SOLENIA: top right */}
                  <ProjectCard
                    project={schoolProjects[1]}
                    className="w-full md:col-start-2 row-start-1"
                    imageContainerClassName="h-[30vh] md:h-[253px]"
                  />
                  {/* STALLTID: bottom left */}
                  <ProjectCard
                    project={schoolProjects[2]}
                    className="w-full md:col-start-1 row-start-2"
                    imageContainerClassName="h-[30vh] md:h-[253px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </EnhancedParallax>
      </main>

      {/* Footer */}
      <ParallaxSection
        className="bg-gradient-to-b from-[#7A9BD5] via-[#9CBAEA] to-[#BDD9FF] py-6"
        speed={0.1}
        height="136px"
      >
        <div className="flex flex-col items-center gap-8">
          <SocialLinks />
          <p className="text-black font-ubuntu font-light text-[15px] leading-[1.149]">
            Nikita Quazi 2025
          </p>
        </div>
      </ParallaxSection>
    </div>
  );
}
