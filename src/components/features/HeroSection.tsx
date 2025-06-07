"use client";

import Image from "next/image";
import Button from "../shared/Button";
import SocialLinks from "../shared/SocialLinks";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#9ACBFF] to-[#FADDDD] relative overflow-hidden pt-20">
      <div className="max-w-[1140px] mx-auto px-6 sm:px-8 h-full">
        <div className="flex items-end gap-[63px] pb-16">
          {/* Left Column - Personal Introduction (361px width) */}
          <div className="w-[361px] space-y-5">
            <div className="space-y-4">
              <h1 className="font-ubuntu font-semibold text-[50px] leading-[1.2] text-black">
                Nikita Quazi
                <br />
                UX/UI designer
                <br />
                with front-end skills
              </h1>

              <p className="font-ubuntu text-[16px] leading-[1.8125] text-black -tracking-[0.01em]">
                What draws me to UX design is how it combines analytical
                thinking with creative expression to create accessible and
                engaging experiences.
              </p>
            </div>

            <div className="mt-5">
              <SocialLinks />
            </div>
          </div>

          {/* Right Column - Creative Elements (241px × 295px) */}
          <div className="w-[241px] h-[295px] flex flex-col justify-center items-center -space-y-[7px]">
            {/* Mind Full of Creativity */}
            <div className="flex flex-col gap-[1px] py-[9px]">
              <p className="font-ubuntu font-medium text-[10px] leading-[1.2] tracking-[0.47em] text-black">
                MIND FULL OF
              </p>
              <h2 className="font-sansita font-bold text-[18px] leading-[1.2] tracking-[0.34em] uppercase text-black">
                Creativity
              </h2>
            </div>

            {/* 01.png Image */}
            <div className="flex justify-center">
              <Image
                src="/figma-assets/01.png"
                alt="01"
                width={120}
                height={80}
                className="rounded-[5px]"
                priority
              />
            </div>

            {/* Heart Filled with Empathy */}
            <div className="w-[241px] flex flex-col justify-end items-end">
              <p className="font-ubuntu font-medium text-[10px] leading-[1.2] tracking-[0.12em] text-black text-right">
                HEART FILLED WITH
              </p>
              <h2 className="font-sansita font-bold text-[20px] leading-[1.2] tracking-[0.36em] uppercase text-black text-right">
                Empathy
              </h2>
            </div>
          </div>
        </div>

        {/* Project Preview Section */}
        <div className="flex items-center gap-6 pb-16 mt-16">
          {/* Left - Project Preview Info */}
          <div className="bg-[rgba(210,224,241,0.61)] p-[18px_10px_10px_12px] rounded-lg w-[216px] h-[419px]">
            <div className="space-y-[21px]">
              <h2 className="font-ubuntu font-extrabold text-2xl leading-[1.2] text-black">
                PROJECT PREVIEW
              </h2>
              <p className="font-ubuntu font-medium text-base leading-[1.67] text-black">
                In PROJECTS you can view all of my work or click on one of these
                projects to learn more about them
              </p>
            </div>
          </div>

          {/* Right - Three Project Cards */}
          <div className="flex gap-6">
            {/* OAK Equipment Project - Large Card */}
            <div className="bg-[rgba(183,181,177,0.55)] p-[15px_15px_21px] rounded-lg w-[285px] h-[419px]">
              <div className="flex flex-col gap-5 w-[255px]">
                <div className="flex flex-col items-center gap-0 w-full">
                  <div className="w-full h-[200px] bg-gray-200 rounded overflow-hidden relative">
                    <Image
                      src="/figma-assets/oak-equipment-mockup.jpg"
                      alt="3D Planner - OAK Equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-kanit text-[18px] leading-[1.49] text-black w-full mt-4">
                    3D PLANNER - OAK EQUIPMENT
                  </h3>
                </div>
                <div className="bg-[#050526] text-[#FDF7F7] px-[10px] py-[10px] rounded-[5px] w-fit">
                  <span className="font-kanit text-[18px] leading-[1.49]">
                    UX & UI DESIGN
                  </span>
                </div>
              </div>
            </div>

            {/* Solenia Project - Medium Card */}
            <div className="bg-[rgba(218,216,208,0.89)] p-[15px_15px_21px] rounded-lg w-[285px] h-[419px]">
              <div className="flex flex-col gap-5 w-[255px]">
                <div className="flex flex-col items-center gap-0 w-full">
                  <div className="w-full h-[200px] bg-gray-200 rounded overflow-hidden relative">
                    {/* Base image */}
                    <Image
                      src="/figma-assets/solenia-base-image.jpg"
                      alt="Solenia Base"
                      fill
                      className="object-stretch"
                    />
                    {/* Overlay SVG */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/figma-assets/solenia-overlay.svg"
                        alt="Solenia Overlay"
                        width={120}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="font-kanit text-[18px] leading-[1.49] text-black w-full mt-4">
                    WEBSHOP - SOLENIA
                  </h3>
                </div>
                <div className="bg-[#050526] text-[#FDF7F7] px-[10px] py-[10px] rounded-[5px] w-fit">
                  <span className="font-kanit text-[18px] leading-[1.49]">
                    WEBSITE DESIGN
                  </span>
                </div>
              </div>
            </div>

            {/* Stalltid Project - Medium Card */}
            <div className="bg-[rgba(233,232,226,0.65)] p-[15px_15px_21px] rounded-lg w-[285px] h-[419px]">
              <div className="flex flex-col gap-5 w-[255px]">
                <div className="flex flex-col items-center gap-0 w-full">
                  <div className="w-full h-[200px] bg-gray-200 rounded overflow-hidden relative">
                    <Image
                      src="/figma-assets/stalltid-project.jpg"
                      alt="Booking System - Stalltid"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-kanit text-[18px] leading-[1.49] text-black w-full mt-4">
                    BOOKING SYSTEM - STALLTID
                  </h3>
                </div>
                <div className="bg-[#050526] text-[#FDF7F7] px-[10px] py-[10px] rounded-[5px] w-fit">
                  <span className="font-kanit text-[18px] leading-[1.49]">
                    VISUAL IDENTITY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pb-16">
          <Button variant="primary" size="lg">
            LET&apos;S EXPLORE
          </Button>
          <div className="mt-4">
            <svg
              className="w-6 h-6 text-[#FF0364] mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
