import Image from "next/image";
import ParallaxSection from "@/components/shared/ParallaxSection";
import SocialLinks from "@/components/shared/SocialLinks";
import Breadcrumb from "@/components/shared/Breadcrumb";
//import Button from "@/components/shared/Button";

export default function VirkiProject() {
  const breadcrumbItems = [
    { label: "PROJECTS", href: "/#projects-section" },
    { label: "TIME REPORT - VIRKI" },
  ];

  return (
    <div className="min-h-screen bg-[#DCEBFF] flex flex-col">
      <main className="flex-grow flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Container for the whole page content */}
        <div className="w-full max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="w-full text-left mb-10 mt-20">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Main Title */}
          <div className="w-full text-center mt-16 mb-16">
            <h1 className="text-4xl font-extrabold font-ubuntu-sans text-[#0E0E43]">
              TIME REPORT - VIRKI
            </h1>
          </div>

          {/* Two-column section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-7 mb-16">
            {/* Left: Main image */}
            <Image
              src="/figma-assets/virki-main-image.png"
              alt="Virki Project Main"
              width={704}
              height={292}
              className="object-contain"
              priority
            />

            {/* Right: Project info */}
            <div className="flex flex-col justify-center gap-6">
              <div>
                <p className="text-lg font-kanit font-medium text-black">
                  Client
                </p>
                <p className="text-lg font-kanit font-normal text-black">
                  Virki
                </p>
              </div>
              <div>
                <p className="text-lg font-kanit font-medium text-black">
                  Year
                </p>
                <p className="text-lg font-kanit font-normal text-black">
                  2025 mar - 2025 aug
                </p>
              </div>
              <div>
                <p className="text-lg font-kanit font-medium text-black">
                  Role
                </p>
                <p className="text-lg font-kanit font-normal text-black">
                  UX & UI Design
                </p>
              </div>
            </div>
          </div>

          {/* Project description section */}
          <div className="w-full max-w-4xl mx-auto flex flex-col gap-10 text-left mb-16">
            <p className="text-lg font-ubuntu-sans text-black leading-relaxed">
              <span className="font-bold">Virki</span> is an IT consultancy
              company focused on delivering tailored digital solutions and
              flexible consulting services. With a team of experienced
              professionals well-versed in the latest technologies and trends,
              they help clients boost efficiency and stay competitive. Their
              strong customer focus and commitment to long-term partnerships
              make them a trusted tech partner.
            </p>
            <div>
              <h2 className="text-xl font-ubuntu-sans font-bold text-black mb-4">
                Design Process
              </h2>
              <p className="text-lg font-ubuntu-sans text-black leading-relaxed">
                The goal of this project is to redesign Timerep, Virki&apos;s
                time reporting platform, to better reflect the company&apos;s
                identity and values, while creating a professional and
                user-centered interface that simplifies the reporting process
                for both consultants and administrators.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-ubuntu-sans font-bold text-black mb-4">
                My role as UX/UI designer
              </h2>
              <p className="text-lg font-ubuntu-sans text-black leading-relaxed">
                My work began with gathering insights into the client&apos;s
                needs, goals, and expectations to get a clear picture of what
                they were looking for. Once the foundation was clear, I reviewed
                their updated design system to ensure visual consistency to
                brand guidelines. I am currently working on wireframes and
                layout concepts, which will be brought to the client to refine
                together.
              </p>
            </div>
          </div>

          {/* Blurred "Work in Progress" Image */}
          <div className="w-full flex justify-center mt-8">
            <div className="relative">
              <Image
                src="/figma-assets/Rectangle 23810.svg"
                alt="Work in progress"
                width={839}
                height={363}
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
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
