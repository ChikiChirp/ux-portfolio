import Image from "next/image";
import ParallaxSection from "@/components/shared/ParallaxSection";
import SocialLinks from "@/components/shared/SocialLinks";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function WebshopSoleniaProject() {
  const breadcrumbItems = [
    { label: "PROJECTS", href: "/#projects-section" },
    { label: "WEBSHOP - SOLENIA" },
  ];

  return (
    <div className="min-h-screen bg-[#DCEBFF] flex flex-col">
      <main className="flex-grow flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="w-full text-left mb-10 mt-20">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="w-full text-center mt-16 mb-16">
            <h1 className="text-4xl font-extrabold font-ubuntu-sans text-[#0E0E43]">
              WEBSHOP - SOLENIA
            </h1>
          </div>

          <div className="w-full max-w-4xl mx-auto flex flex-col gap-10 mb-16">
            <div className="flex flex-col md:flex-row items-start justify-start gap-7">
              <Image
                src="/figma-assets/solenia-main-image.png"
                alt="Solenia Project Main"
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
                    Basic Frontend & React
                  </p>
                </div>
                <div>
                  <p className="text-lg font-kanit font-medium text-black">
                    Year
                  </p>
                  <p className="text-lg font-kanit font-normal text-black">
                    2025 mar, 2 weeks
                  </p>
                </div>
                <div>
                  <p className="text-lg font-kanit font-medium text-black">
                    Role
                  </p>
                  <p className="text-lg font-kanit font-normal text-black whitespace-nowrap">
                    Branding, UI Design & Website Design
                  </p>
                </div>
                <div>
                  <p className="text-lg font-kanit font-medium text-black">
                    Website
                  </p>
                  <p className="text-lg font-kanit font-light text-black">
                    <a
                      href="http://www.solenia.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      www.solenia.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <p className="text-lg font-ubuntu-sans text-black leading-relaxed">
              <span className="font-bold">The assignment</span> involved
              designing and developing a small e-commerce application where
              users could browse products, view details, and manage a shopping
              cart. In a team of five UX/UI designers, the process began with
              wireframes and mockups created in Figma to define the structure
              and the visual identity. The final design was implemented using
              Vite, with a focus on delivering a smooth and user-centered
              experience in both desktop and mobile.
            </p>
            <p className="text-lg font-ubuntu-sans text-black leading-relaxed">
              I was responsible for designing the product cards in each category
              view. For the desktop view, I added a hover effect to the
              &quot;Add to Cart&quot; action, a smoothly expanding button that
              slides out to create a sense of engagement and excitement for the
              customer.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8 my-16">
            <Image
              src="/figma-assets/solenia-banner.png"
              alt="Solenia Banner"
              width={1027}
              height={300}
              className="rounded-xl shadow-lg"
            />
            <div className="bg-[#E9E7E7] p-8 rounded-xl">
              <Image
                src="/figma-assets/solenia-visual.png"
                alt="Solenia Visual"
                width={1027}
                height={550}
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto my-16">
            <h2 className="text-3xl font-bold font-ubuntu-sans text-black mb-4">
              Result
            </h2>
            <div className="bg-[#F4EFEA] p-8 rounded-xl">
              <Image
                src="/figma-assets/solenia-results.png"
                alt="Solenia Results"
                width={1027}
                height={500}
                className="rounded-xl"
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
