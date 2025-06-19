import Image from "next/image";

export default function ContactSectionMobile() {
  return (
    <div className="w-full min-h-screen bg-[#dcebff] flex flex-col">
      {/* Main contact section with padding to match other mobile components */}
      <main className="w-full max-w-md px-[30px] py-5 flex flex-col items-center text-[#0D0D0D]">
        {/* Contact Heading */}
        <h1 className="text-[16px] font-extrabold leading-[100%] tracking-[0.08em] uppercase font-['Ubuntu'] self-start mb-[18px] pt-[66px] pl-[16px]">
          Contact
        </h1>
        {/* Profile image and Let's Connect section */}
        <div className="flex flex-row gap-[21px] items-center justify-center mt-4 mb-4">
          {/* Profile Image - scaled down by 20% */}
          <div
            className="h-[156px] w-[125px] rounded-[3px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/figma-assets/Nikita 1.png')" }}
          />

          {/* Let's Connect Image - scaled down by 20% */}
          <div className="relative h-[134px] w-[131px]">
            <Image
              src="/figma-assets/lets connect.svg"
              alt="Let's Connect"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        {/* Contact Card with proper background from Figma */}
        <div className="w-full max-w-[360px] min-w-[360px] h-[599px] bg-[rgba(238,245,255,0.69)] rounded-[3px] p-5 gap-[67px] flex flex-col">
          {/* Email Section - Pixel perfect from Figma */}
          <div className="w-full flex items-start gap-3 mb-8 mt-[50px]">
            <div className="flex-shrink-0 w-[45px] h-[45px] bg-[rgba(203,225,255,0.69)] border-[3px] border-[#FF0364] rounded-[22.5px] flex items-center justify-center shadow-md">
              <Image
                src="/figma-assets/social-icon-1.svg"
                alt="Email icon"
                width={24}
                height={24}
              />
            </div>
            <div className="font-['Ubuntu_Sans']">
              <h3 className="text-[16px] font-bold text-[#1A1A34] font-['Ubuntu_Sans'] leading-normal">
                Email
              </h3>
              <p className="text-[14px] font-normal text-[#000000] leading-[1.61]">
                Are you interested in working with me or getting in touch?
                <br />
                <span className="mt-[7px]">Do email at</span>
              </p>
              <div className="mt-[7px]">
                <a
                  href="mailto:nikita.quazi@gmail.com"
                  className="text-[16px] text-[#FF0364] font-normal hover:opacity-80 transition-opacity"
                >
                  nikita.quazi@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Section - Pixel perfect from Figma */}
          <div className="w-full flex items-start gap-3 mb-8">
            <div className="flex-shrink-0 w-[45px] h-[45px] bg-[rgba(203,225,255,0.69)] border-[3px] border-[#FF0364] rounded-[22.5px] flex items-center justify-center shadow-md">
              <Image
                src="/figma-assets/social-icon-2.svg"
                alt="LinkedIn icon"
                width={24}
                height={24}
              />
            </div>
            <div className="font-['Ubuntu_Sans']">
              <h3 className="text-[16px] font-bold text-[#1A1A34] font-['Ubuntu_Sans'] leading-normal">
                LinkedIn
              </h3>
              <p className="text-[14px] font-normal text-[#000000] leading-[1.61]">
                Connect with me on Linkedin
              </p>
              <div className="mt-[7px]">
                <a
                  href="https://www.linkedin.com/in/nikita-quazi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] text-[#FF0364] font-normal hover:opacity-80 transition-opacity"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>

          {/* Behance Section - Pixel perfect from Figma */}
          <div className="w-full flex items-start gap-3 mb-8">
            <div className="flex-shrink-0 w-[45px] h-[45px] bg-[rgba(203,225,255,0.69)] border-[3px] border-[#FF0364] rounded-[22.5px] flex items-center justify-center shadow-md">
              <Image
                src="/figma-assets/social-icon-3.svg"
                alt="Behance icon"
                width={24}
                height={24}
              />
            </div>
            <div className="font-['Ubuntu_Sans']">
              <h3 className="text-[16px] font-bold text-[#1A1A34] font-['Ubuntu_Sans'] leading-normal">
                Behance
              </h3>
              <p className="text-[14px] font-normal text-[#000000] leading-[1.61]">
                Check out my work on Behance
              </p>
              <div className="mt-[7px]">
                <a
                  href="https://www.behance.net/nikitaquazi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] text-[#FF0364] font-normal hover:opacity-80 transition-opacity"
                >
                  View Page
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End of contact card div */}
      </main>

      {/* Footer with gradient background from Figma */}
      <footer className="mt-auto bg-gradient-to-b from-[#7a9bd5] from-[23.558%] via-[#9cbaea] via-[67.308%] to-[#bdd9ff]">
        <div className="py-4 text-center text-[10px] font-['Ubuntu:Light',_sans-serif] text-[rgba(255,255,255,0.8)]">
          Nikita Quazi 2025
        </div>
      </footer>
    </div>
  );
}
