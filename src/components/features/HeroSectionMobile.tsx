"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Added Link import

const socialLinks = [
  {
    name: "Mail",
    icon: "/figma-assets/social-icon-1.svg",
    href: "mailto:nikita.quazi@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: "/figma-assets/social-icon-2.svg",
    href: "https://www.linkedin.com/in/nikita-quazi-a3a7a0234/",
  },
  {
    name: "Behance",
    icon: "/figma-assets/social-icon-3.svg",
    href: "https://www.behance.net/nikitaquazi1",
  },
];

// Helper component for Project Cards
interface ProjectCardMobileProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  tag: string;
}

const ProjectCardMobile: React.FC<ProjectCardMobileProps> = ({ href, imageSrc, imageAlt, title, tag }) => {
  return (
    <Link href={href} className="block w-[270px] bg-white p-4 rounded-xl shadow-md transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#DA0B65] focus:ring-opacity-50">
      <div className="w-full h-[175px] relative overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="font-['Kanit',_sans-serif] text-base text-[#030303] uppercase mt-4 font-semibold tracking-tight">
        {title}
      </h3>
      <div className="bg-[#050526] text-[#fdf7f7] px-3 py-1.5 rounded-md text-sm font-['Kanit',_sans-serif] mt-3 inline-block font-normal leading-tight">
        {tag}
      </div>
    </Link>
  );
};

export default function HeroSectionMobile() {
  // Removed mobile menu logic. Only hero content remains.

  return (
    <section className="min-h-screen relative overflow-hidden font-ubuntu-sans">
      {/* Main Content */}
      <motion.div
        className="px-4 pt-24 pb-10 flex flex-col gap-5 max-w-[375px] mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Main Heading and Subtitle */}
        <div className="text-left">
          <h1 className="text-[28px] font-extrabold leading-tight text-[#1A1A1A] mb-1 tracking-tight">
            Nikita Quazi
          </h1>
          <p className="text-[#DA0B65] text-base font-semibold mb-2">
            UX/UI designer with front-end skills
          </p>
          <p className="text-[#333333] text-[13px] leading-[1.5] mb-4">
            What draws me to UX design is how it combines analytical thinking
            with creative expression to create accessible and engaging
            experiences.
          </p>
        </div>

        {/* Profile Image with Creativity/Empathy - Using composed Figma asset */}
        <div className="flex justify-center my-8">
          <Image
            src="/figma-assets/Frame 5018.png"
            alt="Profile display with Creativity and Empathy labels"
            width={200} 
            height={158} /* Adjusted height to maintain aspect ratio of Figma image (approx 200x158) */
            className="object-contain" /* Use object-contain to ensure full image is visible */
            priority
          />
        </div>

        {/* Social Buttons under Image */}
        <div className="flex gap-3 justify-center mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[#F8B195] flex items-center justify-center hover:bg-[#F8B195]/10 transition-colors"
              aria-label={social.name}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={18}
                height={18}
                className="w-4 h-4 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Portfolio Section */}
        <div className="mt-16 px-1 w-full">
          <h2 className="font-['Ubuntu_Sans_Condensed_Bold',_sans-serif] text-xl leading-none text-[#030303] uppercase text-left mb-8 font-bold pl-2">
            Portfolio
          </h2>
          <div className="flex flex-col items-center gap-10 pb-10">
            <ProjectCardMobile
              href="/projects/virki" 
              imageSrc="/figma-assets/virki-project.png"
              imageAlt="TIME REPORT – VIRKI AB"
              title="TIME REPORT – VIRKI AB"
              tag="UX & UI DESIGN"
            />
            <ProjectCardMobile
              href="/projects/oak"
              imageSrc="/figma-assets/oak-equipment-mockup.jpg"
              imageAlt="3D PLANNER – OAK EQUIPMENT"
              title="3D PLANNER – OAK EQUIPMENT"
              tag="UX & UI DESIGN"
            />
            <ProjectCardMobile
              href="/projects/webshop-solenia"
              imageSrc="/figma-assets/solenia-base-image.svg"
              imageAlt="WEBSHOP – SOLENIA"
              title="WEBSHOP – SOLENIA"
              tag="WEBSITE DESIGN"
            />
            <ProjectCardMobile
              href="/projects/stalltid"
              imageSrc="/figma-assets/stalltid-project-image.png"
              imageAlt="BOOKING SYSTEM – STALLTID"
              title="BOOKING SYSTEM – STALLTID"
              tag="VISUAL IDENTITY"
            />
          </div>
        </div>

        {/* Codex Section */}

      </motion.div>
    </section>
  );
}
