"use client";

import Image from "next/image";
import Link from "next/link";
import MobileFooterSocialLinks from "../shared/MobileFooterSocialLinks";

export default function CodexSectionMobile() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#DCEBFF]">
      {/* Main content section */}
      <section className="w-full max-w-md px-[30px] py-10 flex flex-col items-center gap-y-7">
        <h2 className="text-[#030303] text-lg font-ubuntu-sans-condensed-bold font-bold uppercase tracking-wider mb-8 text-center">
          CODEX
        </h2>

        {/* Tools Section - Using Static Figma Image */}
        <div className="mb-8">
          <Image
            src="/figma-assets/Frame 1000004342.svg"
            alt="A grid of tool icons including Figma, Procreate, Adobe Illustrator, Adobe XD, React, JavaScript, CSS, and HTML5"
            width={310} // Adjusted to fit container width with padding
            height={190} // Adjusted to maintain aspect ratio
            className="object-contain mx-auto"
          />
        </div>

        {/* Skills Section - Using Static Figma Images */}
        <div className="space-y-4 mb-8">
          <Image
            src="/figma-assets/Skills_UX_Frame.svg"
            alt="UX Skills including Design Process, User Research, Gamification, Accessibility, and Agile Frameworks"
            width={310}
            height={160}
            className="object-contain mx-auto"
          />
          <Image
            src="/figma-assets/Skills_UI_Frame.svg"
            alt="UI Skills including Prototyping, Design System, Interaction Design, Heuristic Evaluation, and Responsive Design"
            width={310}
            height={160}
            className="object-contain mx-auto"
          />
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
