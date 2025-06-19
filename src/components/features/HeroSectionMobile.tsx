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
  bgColor: string;
}

const ProjectCardMobile: React.FC<ProjectCardMobileProps> = ({
  href,
  imageSrc,
  imageAlt,
  title,
  tag,
  bgColor,
}) => {
  return (
    <Link
      href={href}
      className={`block w-[290px] h-[368px] ${bgColor} p-4 shadow-md transition-transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#DA0B65] focus:ring-opacity-50`}
    >
      <div className="w-full h-[220px] relative overflow-hidden">
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
      <h3 className="font-['Kanit',_sans-serif] text-base text-[#030303] uppercase mt-6 font-semibold tracking-tight">
        {title}
      </h3>
      <div className="bg-[#050526] text-[#fdf7f7] rounded-[5px] px-[10px] py-[10px] mt-4 inline-block">
        <p className="font-['Kanit',_sans-serif] text-[15px] whitespace-pre leading-normal">
          {tag}
        </p>
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
            Nikita Quazi <br />
            <span className="text-[#DA0B65]">UX/UI designer</span>
            <br />
            with front-end skills
          </h1>

          <p className="text-[#1A1A1A] text-base font-normal mb-2 mt-[20px] w-[90%]">
            What draws me to UX design is how it combines analytical thinking
            with creative expression to create accessible and engaging
            experiences.
          </p>
        </div>

        {/* Profile Image with Creativity/Empathy - Using composed Figma asset */}
        <div className="flex justify-center mb-8">
          <Image
            src="/figma-assets/Frame 5018.svg"
            alt="Profile display with Creativity and Empathy labels"
            width={240}
            height={190}
            className="object-contain"
            priority
          />
        </div>

        {/* Social Buttons under Image */}
        <div className="flex gap-15 justify-center mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-15 h-15 rounded-full border-2 border-[#DA0B65] flex items-center justify-center hover:bg-[#DA0B65]/10 transition-colors"
              aria-label={social.name}
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={20}
                height={20}
                className="w-6 h-6 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Portfolio Section */}
        <div id="projects-section-mobile" className="mt-16 px-1 w-full">
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
              bgColor="bg-[#DFD1C399]"
            />
            <ProjectCardMobile
              href="/projects/oak"
              imageSrc="/figma-assets/oak-equipment-mockup.jpg"
              imageAlt="3D PLANNER – OAK EQUIPMENT"
              title="3D PLANNER – OAK EQUIPMENT"
              tag="UX & UI DESIGN"
              bgColor="bg-[#B0BFD399]"
            />
            <ProjectCardMobile
              href="/projects/webshop-solenia"
              imageSrc="/figma-assets/solenia-base-image.svg"
              imageAlt="WEBSHOP – SOLENIA"
              title="WEBSHOP – SOLENIA"
              tag="WEBSITE DESIGN"
              bgColor="bg-[#DAD8D099]"
            />
            <ProjectCardMobile
              href="/projects/stalltid"
              imageSrc="/figma-assets/stalltid-project-image.png"
              imageAlt="BOOKING SYSTEM – STALLTID"
              title="BOOKING SYSTEM – STALLTID"
              tag="VISUAL IDENTITY"
              bgColor="bg-[#D3D6D099]"
            />
          </div>
        </div>

        {/* Codex Section */}
      </motion.div>
    </section>
  );
}
