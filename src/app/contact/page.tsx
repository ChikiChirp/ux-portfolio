import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DCEBFF] to-[#9CBAEA] flex flex-col">
      <main className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full flex flex-row items-center justify-center gap-4">
          {/* Left: CONTACT label and Card in a row */}
          <div className="flex flex-row items-start gap-6">
            {/* CONTACT label */}
            <div className="flex flex-col justify-start">
              <h1 className="text-[32px] font-ubuntu-sans font-extrabold text-[#000000] leading-normal">
                CONTACT
              </h1>
            </div>
            {/* Card */}
            <div className="bg-[#e0edffb0] w-[564px] h-[642px] flex flex-col  p-12 rounded-[3px]">
              <div className="flex flex-col gap-[64px] flex-1 justify-between">
                {/* Email Section */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-[45px] h-[45px] bg-[rgba(203,225,255,0.69)] border-[3px] border-[#FF0364] rounded-[22.5px] flex items-center justify-center shadow">
                    <Image
                      src="/figma-assets/social-icon-1.svg"
                      alt="Email icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="font-ubuntu-sans">
                    <h3 className="text-[32px] font-extrabold text-[#1A1A34]">
                      Email
                    </h3>
                    <p className="text-[18px] font-normal text-[#000000] leading-[1.6]">
                      Are you interested in working with me or getting in touch?
                      Do email at
                    </p>
                    <a
                      href="mailto:nikita.quazi@gmail.com"
                      className="text-[20px] text-[#DA0B65] font-semibold underline hover:opacity-80 transition-opacity"
                    >
                      nikita.quazi@gmail.com
                    </a>
                  </div>
                </div>
                {/* LinkedIn Section */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-[45px] h-[45px] bg-[rgba(203,225,255,0.69)] border-[3px] border-[#FF0364] rounded-[22.5px] flex items-center justify-center shadow">
                    <Image
                      src="/figma-assets/social-icon-2.svg"
                      alt="LinkedIn icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="font-ubuntu-sans">
                    <h3 className="text-[32px] font-extrabold text-[#1A1A34]">
                      LinkedIn
                    </h3>
                    <p className="text-[18px] font-normal text-[#000000] leading-[1.6]">
                      Connect with me on Linkedin
                    </p>
                    <a
                      href="https://www.linkedin.com/in/nikita-quazi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[20px] text-[#DA0B65] font-semibold underline hover:opacity-80 transition-opacity"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
                {/* Behance Section */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-[45px] h-[45px] bg-[rgba(203,225,255,0.69)] border-[3px] border-[#FF0364] rounded-[22.5px] flex items-center justify-center shadow">
                    <Image
                      src="/figma-assets/social-icon-3.svg"
                      alt="Behance icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="font-ubuntu-sans">
                    <h3 className="text-[32px] font-extrabold text-[#1A1A34]">
                      Behance
                    </h3>
                    <p className="text-[18px] font-normal text-[#000000] leading-[1.6]">
                      Check out my work on Behance
                    </p>
                    <a
                      href="https://www.behance.net/nikitaquazi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[20px] text-[#DA0B65] font-semibold underline hover:opacity-80 transition-opacity"
                    >
                      View Page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Nikita image and Let's Connect as siblings */}
          <div className="flex flex-col items-center justify-start h-[642px] gap-1">
            <div className="w-[251px] h-[404px] rounded-[3px] overflow-hidden mb-2">
              <Image
                src="/figma-assets/Nikita 1.png"
                alt="Nikita Quazi portrait"
                className="object-cover w-full h-full"
                width={251}
                height={404}
                priority
              />
            </div>
            <div className="w-[240px]  flex items-center justify-center">
              <Image
                src="/figma-assets/lets connect.svg"
                alt="Let's Connect illustration"
                width={240}
                height={0}
                priority
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center py-10">
        <p className="text-[#FDFDFD] font-light text-[15px] font-['Ubuntu']">
          Nikita Quazi 2025
        </p>
      </footer>
    </div>
  );
}
