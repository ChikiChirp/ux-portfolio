"use client";

import Image from "next/image";
import ParallaxSection from "@/components/shared/ParallaxSection";
import SocialLinks from "@/components/shared/SocialLinks";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function OakProject() {
  const isMobile = useIsMobile();
  const breadcrumbItems = [
    { label: "PROJECTS", href: "#projects-section", isAnchor: true },
    { label: "3D PLANNER - OAK EQUIPMENT" },
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
                src="/figma-assets/Oak-mobile.svg"
                alt="OAK Project Mobile View"
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
                  3D PLANNER - OAK EQUIPMENT
                </h1>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-7 mb-16">
                <Image
                  src="/figma-assets/oak-main-image.png"
                  alt="OAK Project Main"
                  width={704}
                  height={292}
                  className="object-contain"
                  priority
                />

                <div className="flex flex-col justify-center gap-6">
                  <div>
                    <p className="text-lg font-kanit font-medium text-black">
                      Client
                    </p>
                    <p className="text-lg font-kanit font-normal text-black">
                      Oak Equipment
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-kanit font-medium text-black">
                      Year
                    </p>
                    <p className="text-lg font-kanit font-normal text-black">
                      2025 apr - 2025 may
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
            </>
          )}

          <div className="w-full max-w-4xl mx-auto flex flex-col gap-10 text-left mb-16 px-10 sm:px-0">
            <p className="text-lg font-ubuntu-sans text-black leading-relaxed">
              <span className="font-bold">OAK Equipment</span> designs and sells
              gym solutions for both businesses and private customers. Offers
              high-quality fitness equipment at competitive prices, with a
              strong focus on thoughtful design and functionality.
            </p>
            <div>
              <h2 className="text-xl font-ubuntu-sans font-bold text-black mb-2">
                Assignment
              </h2>
              <p className="text-lg font-ubuntu-sans text-black leading-relaxed">
                As part of a multidisciplinary team consisting of two UX/UI
                designers, frontend developers, and DevOps specialists, we
                collaborated as an agency for OAK Equipment. Our collective
                assignment was to develop a desktop-based 3D visualizer tool
                that enables customers to plan and visualize their gym spaces in
                a three-dimensional environment before making a potential
                investment.
              </p>
              <p className="text-lg font-ubuntu-sans text-black leading-relaxed mt-4">
                After the collaborative project, I was assigned to individually
                enhance the tool based on user research and client feedback. My
                individual work is showcased here on this page.
              </p>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto my-16">
            <div className="mb-8">
              <Image
                src="/figma-assets/oak-banner.png"
                alt="OAK Banner"
                width={1046}
                height={294}
              />
            </div>
            <div className="bg-[#DFEBD6] p-8">
              <Image
                src="/figma-assets/oak-design-system.png"
                alt="OAK Design System"
                width={1046}
                height={550}
              />
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto my-16">
            <h2 className="text-3xl font-bold font-ubuntu-sans text-black mb-4">
              Results
            </h2>
            <div className="bg-[#2C2B2B] p-8">
              <Image
                src="/figma-assets/oak-results.png"
                alt="OAK Results"
                width={1026}
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
