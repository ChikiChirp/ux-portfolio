"use client";

import Image from "next/image";
import ParallaxSection from "@/components/shared/ParallaxSection";
import SocialLinks from "@/components/shared/SocialLinks";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function StalltidProject() {
  const isMobile = useIsMobile();
  const breadcrumbItems = [
    { label: "PROJECTS", href: "/#projects-section" },
    { label: "BOOKING SYSTEM - STALLTID" },
  ];

  return (
    <div className="min-h-screen bg-[#DCEBFF] flex flex-col">
      <main
        className={`flex-grow flex flex-col items-center py-12 ${
          isMobile ? "px-0" : "px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div className={`w-full ${isMobile ? "" : "max-w-6xl mx-auto"}`}>
          <div
            className={`${isMobile ? "px-4" : "w-full"} text-left mb-10 mt-20`}
          >
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Conditionally render mobile or desktop view */}
          {isMobile ? (
            /* Mobile View with SVG */
            <div className="w-screen mt-8 mb-12">
              <Image
                src="/figma-assets/Stalltid-mobile.svg"
                alt="Stalltid Project Mobile View"
                width={1000}
                height={1000}
                className="w-screen h-auto object-contain max-w-none"
                priority
              />
            </div>
          ) : (
            /* Desktop View with original content */
            <>
              <div className="w-full text-center mt-16 mb-16">
                <h1 className="text-4xl font-extrabold font-ubuntu-sans text-[#0E0E43]">
                  BOOKING SYSTEM - STALLTID
                </h1>
              </div>

              <div className="flex flex-col md:flex-row items-start justify-end gap-7">
                <Image
                  src="/figma-assets/Rectangle_stalltid.png"
                  alt="Stalltid Project Main"
                  width={704}
                  height={292}
                  className="object-contain"
                  priority
                />

                <div className="flex flex-col justify-center gap-6">
                  <div>
                    <p className="text-lg font-kanit font-medium text-black">
                      School Project
                    </p>
                    <p className="text-lg font-kanit font-normal text-black">
                      User Interface & Visual Design
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-kanit font-medium text-black">
                      Year
                    </p>
                    <p className="text-lg font-kanit font-normal text-black">
                      2024, 5 weeks
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-kanit font-medium text-black">
                      Role
                    </p>
                    <p className="text-lg font-kanit font-normal text-black">
                      UX/UI design & Visual Identity
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="w-full max-w-4xl mx-auto flex flex-col gap-10 my-8 px-4 sm:px-0">
            <p className="text-lg font-ubuntu-sans text-black leading-relaxed">
              <span className="font-bold">Overview</span> - Stalltid&apos;s
              purpose is to offer people a chance to unwind from everyday life
              and reconnect with nature through horseback riding experiences.
              These nature-based moments are meant to be shared with loved ones,
              creating memories together in a calm and scenic environment. The
              product was conducted in a pair of two UX-designers.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8 my-16">
            <div className="bg-[#04342A] p-8">
              <Image
                src="/figma-assets/stalltid-design-system.png"
                alt="Stalltid Design System"
                width={1027}
                height={550}
              />
            </div>
            <div className="bg-[#FFF6E7] p-8">
              <Image
                src="/figma-assets/stalltid_typography.png"
                alt="Stalltid Typography"
                width={1027}
                height={550}
              />
            </div>
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-10 my-8 px-10 sm:px-0">
              <p className="text-lg font-ubuntu-sans text-black leading-relaxed">
                <span className="font-bold">The solution concept</span> was to
                create a platform that makes it easy to book group activities
                and join guided trail rides in scenic locations such as
                Österlen, Åre, or Visby, wherever the experience feels most
                appealing. The platform was created responsive for both mobile
                and desktop.
              </p>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto my-16">
            <h2 className="text-3xl font-bold font-ubuntu-sans text-black mb-4">
              Result
            </h2>
            <div className="bg-[#D8D0C3] p-8">
              <Image
                src="/figma-assets/Rectangle 23816.png"
                alt="Stalltid Results"
                width={1027}
                height={500}
              />
            </div>
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
