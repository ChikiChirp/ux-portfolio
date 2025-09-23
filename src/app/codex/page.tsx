"use client";

import EnhancedParallax from "@/components/shared/EnhancedParallax";
import ParallaxSection from "@/components/shared/ParallaxSection";
import SocialLinks from "@/components/shared/SocialLinks";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import Button from "@/components/shared/Button";
import CodexSectionMobile from "@/components/features/CodexSectionMobile";

// Define skills and tools locally since they're not imported from a data file
const skills = {
  ux: [
    "Design Thinking",
    "User Research",
    "Workshops",
    "Accessibility",
    "Agile frameworks",
  ],
  ui: [
    "Prototyping",
    "Design System",
    "Interaction Design",
    "Wireframe",
    "Responsive Design",
  ],
};

// Using the combined tools.svg instead of individual icons
const toolsSvg = "/figma-assets/tools.svg";
export default function CodexPage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="flex flex-col w-full">
        <CodexSectionMobile />
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

  return (
    <div className="min-h-screen bg-[#CDE1FA] flex flex-col">
      <main className="flex-grow pt-20">
        {/* CODEX Section - Using existing code from homepage */}
        <EnhancedParallax
          id="codex-section"
          className="bg-gradient-to-b from-[#BCD8FF] via-[#DFE7F3] to-[#F2E4E2] flex items-center justify-center py-57"
          height="min-h-screen"
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
                <div className="bg-[#DDEDFF] shadow-[0px_8px_19.3px_2px_rgba(56,164,236,0.07),0px_4px_4px_0px_rgba(0,0,0,0.25)] pt-[15px] pb-[15px] pl-[20px] pr-[20px] w-[438px] h-[271px]">
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
                  <div className="flex items-center justify-center">
                    <Image
                      src={toolsSvg}
                      alt="Tools"
                      width={141}
                      height={76}
                      className="w-full h-auto max-w-[257px]"
                    />
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
