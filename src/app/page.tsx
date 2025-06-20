"use client";

import HeroSection from "@/components/features/HeroSection";
import Button from "@/components/shared/Button";
import EnhancedParallax from "@/components/shared/EnhancedParallax";
import ParallaxSection from "@/components/shared/ParallaxSection";
import SocialLinks from "@/components/shared/SocialLinks";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useScrollSections } from "@/hooks/useScrollSections";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

// Dynamically import HeroSection components with no SSR
const HeroSectionMobile = dynamic(
  () => import("@/components/features/HeroSectionMobile"),
  { ssr: false }
);

const CodexSectionMobile = dynamic(
  () => import("@/components/features/CodexSectionMobile"),
  { ssr: false }
);

export default function Home() {
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Handle URL query parameters for scrolling to specific sections
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get('section');
      const view = urlParams.get('view');
      
      // If we have section parameters, scroll to the appropriate section
      if (section) {
        // Determine the proper ID based on section and view
        const isMobileView = view === 'mobile';
        let targetId = '';
        
        // Set appropriate target ID based on section and device view
        if (section === 'projects') {
          targetId = isMobileView ? 'projects-section-mobile' : 'projects-section';
        } else if (section === 'codex') {
          targetId = isMobileView ? 'codex-section-mobile' : 'codex-section';
        }
        
        // If we have a valid target, scroll to it after a short delay to ensure elements are rendered
        if (targetId) {
          // Clear the URL parameters without refreshing the page
          const cleanUrl = window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
          
          setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              // Smooth scroll to element
              targetElement.scrollIntoView({ behavior: 'smooth' });
              
              // Apply appropriate offset based on the target
              setTimeout(() => {
                if (section === 'projects') {
                  // For Projects section - reveal the Portfolio heading
                  window.scrollBy({ top: -100, behavior: 'smooth' });
                } else if (section === 'codex') {
                  // For Codex section - reveal both heading and icons
                  window.scrollBy({ top: -40, behavior: 'smooth' });
                }
              }, 500);
            }
          }, 500); // Longer delay to ensure dynamic components are loaded
        }
      }
    }
  }, []);

  // URL slug update configuration
  const scrollSections = [
    { id: "hero-section", slug: "" },
    { id: "codex-section", slug: "codex" },
    { id: "projects-section", slug: "projects" },
  ];

  // Initialize scroll sections hook only on desktop
  useScrollSections(!isMobile ? scrollSections : []);

  const skills = {
    ux: [
      "Design Process",
      "User Research",
      "Gamification",
      "Accessibility",
      "Agile frameworks",
    ],
    ui: [
      "Prototyping",
      "Design System",
      "Interaction Design",
      "Heuristic Evaluation",
      "Responsive Design",
    ],
  };

  const tools = [
    {
      name: "Figma",
      icon: "/figma-assets/figma-icon.svg",
      iconType: "svg" as const,
      width: 42,
    },
    {
      name: "Procreate",
      icon: "/figma-assets/procreate-icon.png",
      iconType: "image" as const,
      width: 55,
    },
    {
      name: "Adobe\nIllustrator",
      icon: "/figma-assets/adobe-illustrator-icon.png",
      iconType: "image" as const,
      width: 61,
    },
    {
      name: "Adobe\nXd",
      icon: "/figma-assets/adobe-xd-icon.svg",
      iconType: "svg" as const,
      width: 52,
    },
    {
      name: "React",
      icon: "/figma-assets/react-icon.svg",
      iconType: "svg" as const,
      width: 36,
    },
    {
      name: "JavaScript",
      icon: "/figma-assets/javascript-icon.svg",
      iconType: "svg" as const,
      width: 57,
    },
    {
      name: "CSS",
      icon: "/figma-assets/css-icon.svg",
      iconType: "svg" as const,
      width: 28,
    },
    {
      name: "HTML5",
      icon: "/figma-assets/html-icon.svg",
      iconType: "svg" as const,
      width: 43,
    },
  ];

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
      title:
        "UX & UI Design\n3D visualizer - OAK Equipment\n2025 mar - 2025 may",
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

  // A flexible ProjectCard that accepts a className to control width and other styles
  const ProjectCard = ({
    project,
    className,
    imageContainerClassName,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    project: any;
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

  if (!isClient) {
    // Render nothing on the server and initial client render
    return null;
  }

  if (isMobile) {
    return (
      <div className="flex flex-col w-full bg-gradient-to-b from-[#BCD8FF] via-[#DFE7F3] to-[#FAE4DD]">
        <HeroSectionMobile />
        <CodexSectionMobile />
      </div>
    );
  }

  // If not mobile, return the full desktop layout:
  return (
    <div className="w-full">
      {/* Hero Section (Desktop) */}
      <div id="hero-section">
        <HeroSection />
      </div>

      {/* CODEX Section */}
      <EnhancedParallax
        id="codex-section"
        className="bg-gradient-to-b from-[#BCD8FF] via-[#DFE7F3] to-[#FAE4DD] flex items-center justify-center py-40"
        height="auto"
        floatingElements={true}
        intensity="medium"
      >
        <div className="max-w-[1032px] w-full px-6 sm:px-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-16 items-start">
              <div className="flex justify-center items-center p-2.5">
                <h1 className="text-[32px] font-ubuntu-sans font-extrabold leading-[1.2] text-black">
                  CODEX
                </h1>
              </div>
              <div className="bg-[#DDEDFF]  shadow-[0px_8px_19.3px_2px_rgba(56,164,236,0.07),0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[15px] pb-[15px] pl-[20px] pr-[20px]  w-[438px] h-[271px]">
                <h2 className="text-[24px] font-ubuntu-sans font-semibold leading-[1.2] text-black mb-[10px]">
                  Skills
                </h2>
                <div className="flex gap-[46px]">
                  <div className="w-[146px]">
                    <h3 className="text-[20px] font-ubuntu-sans font-semibold leading-[1.2] text-black mb-[6px]">
                      UX
                    </h3>
                    <div className="flex flex-col">
                      {skills.ux.map((skill, index) => (
                        <p
                          key={index}
                          className="text-[18px] font-ubuntu-sans font-medium leading-[1.833] text-black"
                        >
                          {skill}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="w-[165px]">
                    <h3 className="text-[20px] font-ubuntu-sans font-semibold leading-[1.2] text-black mb-[3px]">
                      UI
                    </h3>
                    <div className="flex flex-col">
                      {skills.ui.map((skill, index) => (
                        <p
                          key={index}
                          className="text-[18px] font-ubuntu-sans font-medium leading-[1.778] text-black"
                        >
                          {skill}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#DDEDFF] shadow-[0px_8px_19.3px_2px_rgba(42,138,157,0.07),0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[297px] h-[271px] p-[15px_20px]">
                <h2 className="text-[24px] font-ubuntu-sans font-semibold leading-[1.2] text-black mb-[27px]">
                  Tools
                </h2>
                <div className="grid grid-cols-4 gap-x-[16px] gap-y-[12px] justify-items-center">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-[3px] text-center"
                      style={{ width: `${tool.width}px` }}
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        {tool.iconType === "svg" ? (
                          <Image
                            src={tool.icon}
                            alt={tool.name}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        ) : (
                          <Image
                            src={tool.icon}
                            alt={tool.name}
                            width={24}
                            height={24}
                            className="w-6 h-6 object-contain"
                          />
                        )}
                      </div>
                      <span className="text-[12px] font-ubuntu-sans font-medium leading-[1.5] text-black whitespace-pre-line text-center">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[15px] mt-[58px]">
              <div className="w-[1000px] text-center px-3 mb-[15px]">
                <span className="self-stretch text-[20px] font-ubuntu-sans font-normal leading-[1.5] text-black [font-variant:small-caps]">
                  I design digital journeys, aiming to connect user needs and
                  product goals,
                  <br />
                  with UX as my foundation, science as my structure and
                  illustration as my creative outlet
                </span>
              </div>
              <Button
                variant="primary"
                size="lg"
                href="/about"
                className="h-[51px] w-[220px] text-[18px] font-ubuntu-sans font-medium leading-[1.2] border-[5px] border-[#DA0B65] text-[#FF0364] opacity-[0.95] whitespace-nowrap"
              >
                GET TO KNOW ME
              </Button>
            </div>
          </div>
        </div>
      </EnhancedParallax>

      {/* Projects Section - REBUILT TO MATCH FIGMA */}
      {/* Add a spacer div for better section separation */}
      <div className="w-full h-[20vh]"></div>
      <EnhancedParallax
        id="projects-section"
        className="bg-gradient-to-b from-[#CDE1FB] to-[#EDF5FF]"
        height="min-h-screen" /* Ensure minimum full viewport height */
        floatingElements={true}
        intensity="light"
      >
        <div className="flex flex-col items-center gap-[21px] pt-[15vh] pb-[15vh]">
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
