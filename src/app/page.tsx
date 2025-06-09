"use client";

import HeroSection from "@/components/features/HeroSection";
import Image from "next/image";
import Button from "@/components/shared/Button";
import SocialLinks from "@/components/shared/SocialLinks";
import ParallaxSection from "@/components/shared/ParallaxSection";
import EnhancedParallax from "@/components/shared/EnhancedParallax";
import { useScrollSections } from "@/hooks/useScrollSections";

export default function Home() {
  // URL slug update configuration
  const scrollSections = [
    { id: "hero-section", slug: "" },
    { id: "codex-section", slug: "codex" },
    { id: "projects-section", slug: "projects" },
  ];

  // Initialize scroll sections hook
  useScrollSections(scrollSections);

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
    },
  ];

  const schoolProjects = [
    {
      title:
        "UX/UI, Interaction design and Agile workflow\n3D planner - OAK Equipment\n2025 mar - 2025 may",
      image: "/figma-assets/oak-project.png",
      bgColor: "bg-gradient-to-br from-green-100 to-green-200",
      href: "/projects/oak",
    },
    {
      title: "Basic Frontend & React\nWebshop - Solenia\n2025 mar (2 weeks)",
      image: "/figma-assets/solenia-project.png",
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      href: "/projects/webshop-solenia",
    },
    {
      title: "User Interface & Visual Design\nBooking system - Stalltid\n2024",
      image: "/figma-assets/stalltid-project.png",
      bgColor: "bg-gradient-to-br from-pink-100 to-pink-200",
      href: "/projects/stalltid",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-[#FDFDFD] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-32 w-full relative overflow-hidden">
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
      <div className="p-4">
        <p className="text-[18px] font-ubuntu-sans font-normal leading-[1.667] text-black whitespace-pre-line">
          {project.title}
        </p>
        {project.href && (
          <Button
            variant="outline"
            size="sm"
            href={project.href}
            className="mt-3"
          >
            View Project
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div id="hero-section">
        <HeroSection />
      </div>

      {/* CODEX Section */}
      <EnhancedParallax
        id="codex-section"
        className="bg-gradient-to-b from-[#BCD8FF] via-[#DFE7F3] to-[#FAE4DD]"
        height="100vh"
        floatingElements={true}
        intensity="medium"
      >
        <div className="flex items-center justify-center h-full">
          <div className="max-w-[1032px] w-full px-6 sm:px-8">
            {/* Main Content */}
            <div className="flex flex-col items-center gap-6">
              {/* CODEX Title and Skills Section */}
              <div className="flex gap-16 items-end">
                <div className="flex flex-col gap-[58px]">
                  {/* CODEX Title */}
                  <div>
                    <h1 className="text-[32px] font-ubuntu-sans font-extrabold leading-[1.2] text-black">
                      CODEX
                    </h1>
                  </div>

                  {/* Skills Card */}
                  <div className="bg-[#DDEDFF] rounded-lg shadow-[0px_8px_19.3px_2px_rgba(56,164,236,0.07),0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[10px] w-[357px]">
                    <h2 className="text-[24px] font-ubuntu-sans font-semibold leading-[1.2] text-black mb-[10px]">
                      Skills
                    </h2>

                    <div className="flex gap-[46px] items-end">
                      <div className="w-[146px] flex flex-col gap-[6px]">
                        <h3 className="text-[20px] font-ubuntu-sans font-semibold leading-[1.2] text-black">
                          UX
                        </h3>
                        <div className="space-y-0">
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

                      <div className="w-[165px] flex flex-col gap-[3px]">
                        <h3 className="text-[20px] font-ubuntu-sans font-semibold leading-[1.2] text-black">
                          UI
                        </h3>
                        <div className="space-y-0">
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
                </div>

                {/* Tools Section */}
                <div className="w-[297px] h-[271px] relative">
                  <div className="bg-[#DDEDFF] rounded-lg shadow-[0px_8px_19.3px_2px_rgba(42,138,157,0.07),0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[19px_5px_19px_20px] w-full h-full">
                    <div className="absolute inset-0 bg-[#DDEDFF] rounded-lg shadow-[0px_8px_19.3px_2px_rgba(42,138,157,0.07),0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[58px_21px_58px_20px]">
                      <div className="flex flex-col items-center gap-[16px]">
                        <h2 className="text-[24px] font-ubuntu-sans font-semibold leading-[1.2] text-black">
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
                  </div>
                </div>
              </div>

              {/* Description and Button */}
              <div className="flex flex-col items-center gap-[70px] mt-[58px]">
                <div className="text-center max-w-4xl px-3">
                  <p className="text-[20px] font-ubuntu-sans font-normal leading-[1.5] text-black uppercase">
                    I design digital journeys, aiming to connect user needs and
                    product goals,
                    <br />
                    With UX as my foundation, science as my structure and
                    illustration as my creative outlet
                  </p>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  href="/about"
                  className="h-[51px] w-[187px] text-[18px] font-ubuntu-sans font-medium leading-[1.2] border-[5px] border-[#DA0B65] text-[#FF0364] opacity-[0.95]"
                >
                  GET TO KNOW ME
                </Button>
              </div>
            </div>
          </div>
        </div>
      </EnhancedParallax>

      {/* Projects Section */}
      <EnhancedParallax
        id="projects-section"
        className="bg-gradient-to-b from-[#CDE1FB] to-[#EDF5FF]"
        height="auto"
        floatingElements={true}
        intensity="light"
      >
        <div className="flex flex-col items-center gap-[21px] py-20">
          {/* PROJECTS Title */}
          <div className="w-[1457px] h-[154px] bg-gradient-to-r from-[#CDE1FB] to-[#EDF5FF] flex items-center justify-center">
            <h1 className="text-[32px] font-ubuntu-sans font-extrabold leading-[1.2] text-[#1B1B3E] text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              PROJECTS
            </h1>
          </div>

          <div className="w-[1163px] flex flex-col gap-[89px]">
            {/* Contract Work Section */}
            <div className="w-[548px]">
              <div className="flex justify-center mb-[15px]">
                <div className="px-[9px]">
                  <h2 className="text-[32px] font-ubuntu-sans font-bold leading-[1.2] text-black">
                    Contract Work
                  </h2>
                </div>
              </div>
              <div className="grid gap-4">
                {contractProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>

            {/* School Projects Section */}
            <div className="w-full">
              <div className="flex gap-[69px] items-end">
                <div className="w-[548px] flex flex-col gap-[17px]">
                  <div>
                    <h2 className="text-[32px] font-ubuntu-sans font-bold leading-[1.2] text-black px-[9px]">
                      School Projects
                    </h2>
                  </div>
                  <div className="grid gap-4">
                    <ProjectCard project={schoolProjects[0]} />
                  </div>
                </div>

                <div className="flex gap-[32px]">
                  <ProjectCard project={schoolProjects[1]} />
                  <ProjectCard project={schoolProjects[2]} />
                </div>
              </div>
            </div>

            {/* View All Projects Button */}
            <div className="text-center">
              <Button
                variant="outline"
                href="/projects"
                size="lg"
                className="border-[3px] border-[#DA0B65] text-[#FF0364] hover:bg-[#FF0364] hover:text-white"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </EnhancedParallax>

      {/* Footer */}
      <ParallaxSection
        className="bg-gradient-to-b from-[#7A9BD5] via-[#9CBAEA] to-[#BDD9FF] py-16"
        speed={0.1}
        height="auto"
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
