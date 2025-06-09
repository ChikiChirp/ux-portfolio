"use client";

import Image from "next/image";
import Button from "@/components/shared/Button";
import SocialLinks from "@/components/shared/SocialLinks";
import ParallaxSection from "@/components/shared/ParallaxSection";

export default function CodexPage() {
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
    { name: "Figma", icon: "🎨" },
    { name: "Procreate", icon: "✏️" },
    { name: "Adobe\nIllustrator", icon: "🎨" },
    { name: "Adobe\nXd", icon: "🎨" },
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "💻" },
    { name: "CSS", icon: "🎨" },
    { name: "HTML5", icon: "🌐" },
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        className="bg-gradient-to-b from-[#BCD8FF] via-[#DFE7F3] to-[#FAE4DD] pt-20"
        speed={0.3}
        height="100vh"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-[32px] font-ubuntu-sans font-extrabold leading-[1.2] text-black">
              CODEX
            </h1>
          </div>
        </div>
      </ParallaxSection>

      {/* Skills Section */}
      <ParallaxSection
        className="bg-gradient-to-b from-[#FAE4DD] to-[#EDF5FF] py-20"
        speed={0.4}
        height="auto"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-end">
            <div className="flex gap-16 items-start">
              {/* Skills Card */}
              <div className="bg-[#DDEDFF] rounded-lg shadow-lg p-6 w-[357px]">
                <h2 className="text-[24px] font-ubuntu-sans font-semibold leading-[1.2] text-black mb-4">
                  Skills
                </h2>

                <div className="flex gap-12">
                  <div className="w-[146px]">
                    <h3 className="text-[20px] font-ubuntu-sans font-semibold leading-[1.2] text-black mb-2">
                      UX
                    </h3>
                    <ul className="space-y-1">
                      {skills.ux.map((skill, index) => (
                        <li
                          key={index}
                          className="text-[18px] font-ubuntu-sans font-medium leading-[1.833] text-black"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="w-[165px]">
                    <h3 className="text-[20px] font-ubuntu-sans font-semibold leading-[1.2] text-black mb-1">
                      UI
                    </h3>
                    <ul className="space-y-1">
                      {skills.ui.map((skill, index) => (
                        <li
                          key={index}
                          className="text-[18px] font-ubuntu-sans font-medium leading-[1.778] text-black"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tools Section */}
              <div className="w-[297px]">
                <div className="bg-[#DDEDFF] rounded-lg shadow-lg p-5 h-[271px]">
                  <h2 className="text-[24px] font-ubuntu-sans font-semibold leading-[1.2] text-black mb-4 text-center">
                    Tools
                  </h2>

                  <div className="grid grid-cols-4 gap-4 justify-items-center">
                    {tools.map((tool, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-2 text-center"
                      >
                        <div className="w-6 h-6 flex items-center justify-center text-lg">
                          {tool.icon}
                        </div>
                        <span className="text-[12px] font-ubuntu-sans font-medium leading-[1.5] text-black whitespace-pre-line">
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
      </ParallaxSection>

      {/* About Section */}
      <ParallaxSection
        className="bg-gradient-to-b from-[#EDF5FF] to-[#CDE1FB] py-20"
        speed={0.3}
        height="auto"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-center gap-[70px]">
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
              className="h-[51px] w-[187px] text-[18px]"
            >
              GET TO KNOW ME
            </Button>
          </div>
        </div>
      </ParallaxSection>

      {/* Projects Section */}
      <ParallaxSection
        className="bg-gradient-to-b from-[#CDE1FB] to-[#BDD9FF] py-20"
        speed={0.5}
        height="auto"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* PROJECTS Title */}
          <div className="bg-gradient-to-r from-[#CDE1FB] to-[#EDF5FF] w-full h-[154px] flex items-center justify-center mb-8 rounded-lg">
            <h1 className="text-[32px] font-ubuntu-sans font-extrabold leading-[1.2] text-[#1B1B3E] text-center drop-shadow-md">
              PROJECTS
            </h1>
          </div>

          <div className="flex flex-col gap-[89px]">
            {/* Contract Work Section */}
            <div className="w-[548px]">
              <div className="flex justify-center mb-4">
                <div className="px-2">
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
              <div className="flex justify-between items-start gap-[69px]">
                <div className="w-[548px]">
                  <div className="mb-4">
                    <h2 className="text-[32px] font-ubuntu-sans font-bold leading-[1.2] text-black">
                      School Projects
                    </h2>
                  </div>
                  <div className="grid gap-4">
                    <ProjectCard project={schoolProjects[0]} />
                  </div>
                </div>

                <div className="flex gap-8">
                  <ProjectCard project={schoolProjects[1]} />
                  <ProjectCard project={schoolProjects[2]} />
                </div>
              </div>
            </div>

            {/* View All Projects Button */}
            <div className="text-center">
              <Button variant="outline" href="/projects" size="lg">
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Footer */}
      <ParallaxSection
        className="bg-gradient-to-b from-[#7A9BD5] via-[#9CBAEA] to-[#BDD9FF] py-16"
        speed={0.2}
        height="auto"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center gap-8">
          <SocialLinks />
          <p className="text-white font-ubuntu-sans font-light text-[15px] leading-[1.149]">
            Nikita Quazi 2025
          </p>
        </div>
      </ParallaxSection>
    </main>
  );
}
