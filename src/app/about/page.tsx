import ParallaxSection from "@/components/shared/ParallaxSection";
import SocialLinks from "@/components/shared/SocialLinks";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[#DCEBFF] flex flex-col">
      <main className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full flex flex-row items-start justify-center gap-16">
          {/* Left Column */}
          <div className="w-1/2 flex flex-col gap-10">
            <h1 className="text-4xl font-ubuntu-sans font-extrabold leading-[1.2] text-[#0E0E43]">
              ABOUT
            </h1>

            {/* Education */}
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold font-ubuntu-sans text-black">
                Education
              </h2>
              <p className="text-lg font-ubuntu-sans font-semibold text-black">
                UX/UI designer with frontend skills
              </p>
              <p className="text-lg font-ubuntu-sans font-medium text-black">
                Chas Academy, Stockholm
              </p>
              <p className="text-lg font-ubuntu-sans text-black">
                Sept 2024 - June 2026
              </p>
            </div>

            {/* Work Experience */}
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold font-ubuntu-sans text-black">
                Work Experience
              </h2>
              <p className="text-lg font-ubuntu-sans font-medium text-black">
                Seven years of experience as a licensed Biomedical Scientist at
                Uppsala University Hospital
              </p>
              <p className="text-lg font-ubuntu-sans font-medium text-black">
                Dept. of Clinical Physiology and Cardiology/Pulmonary Medicine
              </p>
              <p className="text-lg font-ubuntu-sans font-medium text-black">
                Dept. of Nuclearmedicine
              </p>
            </div>

            {/* Skills & Attributes */}
            <div className="flex flex-row gap-24">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold font-ubuntu-sans text-black">
                  Professional skills
                </h2>
                <ul className="list-none text-lg font-ubuntu-sans font-medium text-black">
                  <li>Fast learner</li>
                  <li>Business analysis</li>
                  <li>Quality-oriented</li>
                  <li>Team player</li>
                </ul>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold font-ubuntu-sans text-black">
                  Personal attributes
                </h2>
                <ul className="list-none text-lg font-ubuntu-sans font-medium text-black">
                  <li>Creative</li>
                  <li>Compassionate</li>
                  <li>Curious</li>
                  <li>Driven</li>
                </ul>
              </div>
            </div>

            {/* 2D Illustrations */}
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-extrabold font-ubuntu-sans text-black">
                2D illustrations and Animation
              </h2>
              <p className="text-lg font-ubuntu-sans font-medium text-black">
                My passion for 2D illustration and animation lives alongside my
                design work. Selected pieces showcased on{" "}
                <a
                  href="https://www.behance.net/nikitaquazi1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF1F8E] underline font-medium hover:opacity-80 transition-opacity"
                >
                  Behance.
                </a>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/3 flex flex-col items-center gap-6 pt-8">
            <Image
              src="/figma-assets/lets connect.svg"
              alt="Let's Connect Illustration"
              width={300}
              height={300}
            />
            <p className="text-lg font-ubuntu-sans text-[#D3750A]">
              Full resume available on request
            </p>
            <a
              href="mailto:NIKITA.QUAZI@GMAIL.COM"
              className="border-4 border-[#DA0B65] text-[#FF0364] font-bold py-3 px-6 rounded-lg text-lg"
            >
              NIKITA.QUAZI@GMAIL.COM
            </a>
          </div>
        </div>
      </main>
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
