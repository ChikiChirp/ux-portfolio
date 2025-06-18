"use client";

import Image from "next/image";
import Link from "next/link";
import MobileFooterSocialLinks from "@/components/shared/MobileFooterSocialLinks";

// Asset paths (ensure these files exist in public/figma-assets/)
const letsConnectMobileImg = "/figma-assets/lets connect.svg";

export default function AboutSectionMobile() {
  return (
    <div className="bg-[#DCEBFF] min-h-screen flex flex-col items-center text-[#0D0D0D] font-['Ubuntu_Sans']">
      {/* Navigation Placeholder - Assuming global navigation handles NQ logo and menu icon */}
      {/* The Figma design shows NQ. and hamburger menu at the top, handled by Navigation.tsx */}
      <div className="w-full h-[70px] shrink-0"></div>{" "}
      {/* Spacer for global nav */}
      <main className="w-full max-w-md px-[30px] py-5 flex flex-col items-center  gap-y-7">
        <h1 className="text-[16px] font-extrabold leading-[100%] tracking-[0.08em] uppercase font-['Ubuntu_Sans'] self-start">
          About
        </h1>

        {/* Education Section - Styles from Figma */}
        <section className="w-full flex flex-col items-start text-left gap-[11px]">
          <h2 className="text-[16px] font-extrabold leading-normal font-['Ubuntu_Sans']">
            Education
          </h2>
          <p className="text-[15px] font-semibold leading-[120%] font-['Ubuntu_Sans']">
            UX/UI designer with frontend skills
          </p>
          <p className="text-[15px] font-medium leading-[120%] font-['Ubuntu_Sans']">
            Chas Academy, Stockholm
          </p>
          <p className="text-[15px] font-normal leading-[120%] font-['Ubuntu_Sans']">
            Sept 2024 - June 2026
          </p>
        </section>

        {/* Work Experience Section - Styles from Figma */}
        <section className="w-full flex flex-col items-start text-left gap-[11px]">
          <h2 className="text-[16px] font-extrabold leading-normal font-['Ubuntu_Sans']">
            Work Expericence
          </h2>
          <div className="font-['Ubuntu_Sans'] font-medium text-[15px] leading-normal">
            <p>Seven years of experience as a licensed Biomedical Scientist</p>
            <p>at Uppsala University Hospital</p>
            <div className="h-[0.75em]"></div>{" "}
            {/* Spacer based on line height normal (1.5 * 15px text = 22.5px line height. 0.5em of text = 7.5px. Let's try 0.75em = ~11px to match gap */}
            <p>
              Dept. of Clinical Physiology and Cardiology/Pulmonary Medicine
            </p>
            <div className="h-[0.75em]"></div> {/* Spacer */}
            <p>Dept. of Nuclearmedicine</p>
          </div>
        </section>

        {/* Professional Skills Section Card */}
        <section className="w-full max-w-[calc(100%-40px)] sm:max-w-[290px] bg-[transparent] p-5 rounded-[5px] border border-[#F8FDFE]/80 mx-auto">
          <div className="flex flex-col">
            <h3 className="font-['Ubuntu_Sans'] font-extrabold text-[16px] text-[#0D0D0D] mb-2.5 text-center">
              Professional skills
            </h3>
            <ul className="font-['Ubuntu_Sans'] font-medium text-[15px] text-[#0D0D0D] leading-relaxed space-y-0.5 self-center mr-[18px]">
              <li>Fast learner</li>
              <li>Business analysis</li>
              <li>Quality-oriented</li>
              <li>Team player</li>
            </ul>
          </div>
        </section>

        {/* Personal Attributes Section Card */}
        <section className="w-full max-w-[calc(100%-40px)] sm:max-w-[290px] bg-[transparent] p-5 rounded-[5px] border border-[#F8FDFE]/80 mx-auto">
          <div className="flex flex-col">
            <h3 className="font-['Ubuntu_Sans'] font-extrabold text-[16px] text-[#0D0D0D] mb-2.5 text-center">
              Personal attributes
            </h3>
            <ul className="font-['Ubuntu_Sans'] font-medium text-[15px] text-[#0D0D0D] leading-relaxed space-y-0.5 ml-[50px]">
              <li>Creative</li>
              <li>Compassionate</li>
              <li>Curious</li>
              <li>Driven</li>
            </ul>
          </div>
        </section>

        {/* 2D Illustrations Section - Styles from Figma */}
        <section className="w-full flex flex-col items-start text-left gap-[5px]">
          <h2 className="text-[16px] font-extrabold leading-normal font-['Ubuntu_Sans']">
            2D illustrations and Animation
          </h2>
          <p className="text-[15px] font-medium leading-[1.5] font-['Ubuntu_Sans']">
            My passion for 2D illustration and animation lives alongside my
            design work. Selected pieces showcased on{" "}
            <Link
              href="https://www.behance.net/nikitaquazi1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#DA0B65] underline"
            >
              Behance
            </Link>
            <span className="text-[#DA0B65]">.</span>
          </p>
        </section>

        {/* Let's Connect Illustration - Centered, specific size from Figma */}
        <div className="w-[235px] h-[235px] shrink-0 my-3">
          <Image
            src={letsConnectMobileImg}
            alt="Let's Connect Illustration"
            width={235}
            height={235}
            className="object-contain"
          />
        </div>

        {/* Resume & Contact Button - Styles from Figma */}
        <p className="text-[14px] font-medium leading-[120%] text-[#D97706] font-['Ubuntu']">
          Full resume available on request
        </p>
        <a
          href="mailto:NIKITA.QUAZI@GMAIL.COM"
          className="w-[290px] h-[51px] flex items-center justify-center box-border border-2 border-[#DA0B65] text-[#FF0364] text-[16px] font-medium rounded-[5px] hover:bg-[#DA0B65]/10 transition-colors duration-150 shadow-md focus:outline-none focus:ring-2 focus:ring-[#DA0B65] focus:ring-opacity-50 font-['Ubuntu_Sans']"
        >
          NIKITA.QUAZI@GMAIL.COM
        </a>
      </main>
      {/* Footer - Styles and icons from Figma */}
      <footer className="w-full mt-auto py-6 px-[30px] bg-gradient-to-b from-[#7a9bd5] from-[23.558%] via-[#9cbaea] via-[67.308%] to-[#bdd9ff] flex flex-col items-center justify-center gap-y-5">
        <MobileFooterSocialLinks />
        <p className="text-[#535354] text-[10px] font-light font-['Ubuntu'] leading-normal">
          Nikita Quazi 2025
        </p>
      </footer>
    </div>
  );
}
