"use client";

import Image from "next/image";
import Link from "next/link";
import MobileFooterSocialLinks from "../shared/MobileFooterSocialLinks";

// Updated skills data to match the main pages
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

// Using the combined tools.svg instead of static image
const toolsSvg = "/figma-assets/tools.svg";

export default function CodexSectionMobile() {
  return (
    <div
      id="codex-section-mobile"
      className="min-h-screen flex flex-col items-center bg-[#DCEBFF]"
    >
      {/* Main content section */}
      <section className="w-full max-w-md px-[30px] py-10 flex flex-col items-center gap-y-7">
        <h2 className="text-[#030303] text-lg font-ubuntu-sans-condensed-bold font-bold uppercase tracking-wider mb-8 text-center">
          CODEX
        </h2>

        {/* Tools Section - Using tools.svg */}
        <div className="mb-8 bg-[#DDEDFF] p-4 rounded-[5px] border border-[#F8FDFE]/80 w-full max-w-[290px]">
          <h3 className="text-[16px] font-ubuntu-sans font-extrabold text-center mb-4 text-[#0D0D0D]">
            Tools
          </h3>
          <div className="flex items-center justify-center">
            <Image
              src={toolsSvg}
              alt="Tools including Figma, Procreate, Adobe Illustrator, Adobe XD, React, JavaScript, CSS, and HTML5"
              width={141}
              height={76}
              className="w-full h-auto max-w-[250px]"
            />
          </div>
        </div>

        {/* Skills Section - Dynamic Content */}
        <div className="space-y-4 mb-8 w-full max-w-[290px]">
          {/* UX Skills Card */}
          <div className="bg-[#DDEDFF] p-4 rounded-[5px] border border-[#F8FDFE]/80">
            <h3 className="text-[16px] font-ubuntu-sans font-extrabold text-center mb-3 text-[#0D0D0D]">
              UX Skills
            </h3>
            <ul className="font-ubuntu-sans font-medium text-[15px] text-[#0D0D0D] leading-relaxed space-y-1 text-center">
              {skills.ux.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* UI Skills Card */}
          <div className="bg-[#DDEDFF] p-4 rounded-[5px] border border-[#F8FDFE]/80">
            <h3 className="text-[16px] font-ubuntu-sans font-extrabold text-center mb-3 text-[#0D0D0D]">
              UI Skills
            </h3>
            <ul className="font-ubuntu-sans font-medium text-[15px] text-[#0D0D0D] leading-relaxed space-y-1 text-center">
              {skills.ui.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Descriptive Paragraph */}
        <span className=" text-[#000000] text-[15px] font-ubuntu-sans font-normal leading-[1.5] text-center flex items-center justify-center">
          I design digital journeys, aiming to connect user needs and product
          goals, with ux as my foundation, science as my structure and
          illustration as my creative outlet.
        </span>

        {/* GET TO KNOW ME Button */}
        <div className="text-center">
          <Link
            href="/about" // Assuming this link, update if different
            className="inline-flex items-center justify-center w-[187px] h-[51px] bg-[#DA0B65] border-[3px] border-[#DA0B65] rounded-[5px] text-[#FDFDFD] text-base font-ubuntu-sans font-medium whitespace-nowrap opacity-95 hover:bg-[#DA0B65]/10 transition-colors duration-150 shadow-md focus:outline-none focus:ring-2 focus:ring-[#DA0B65] focus:ring-opacity-50"
          >
            GET TO KNOW ME
          </Link>
        </div>
      </section>

      {/* Footer: direct child of root div, with mt-auto */}
      <footer className="w-full mt-auto py-6 px-[30px] bg-gradient-to-b from-[#7a9bd5] from-[23.558%] via-[#9cbaea] via-[67.308%] to-[#bdd9ff] flex flex-col items-center justify-center gap-y-5">
        <MobileFooterSocialLinks />
        <p className="text-[#535354] text-[10px] font-light font-['Ubuntu'] leading-normal">
          Nikita Quazi 2025
        </p>
      </footer>
    </div>
  );
}
