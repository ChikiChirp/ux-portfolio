import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: "oak",
      title: "3D PLANNER - OAK EQUIPMENT",
      category: "UX & UI DESIGN",
      image: "/figma-assets/oak-equipment-mockup.jpg",
      href: "/projects/oak",
      description:
        "A comprehensive 3D planning tool for equipment configuration and visualization.",
    },
    {
      id: "solenia",
      title: "WEBSHOP - SOLENIA",
      category: "WEBSITE DESIGN",
      image: "/figma-assets/solenia-project.jpg",
      href: "/projects/webshop-solenia",
      description:
        "Modern e-commerce platform with clean design and seamless user experience.",
    },
    {
      id: "stalltid",
      title: "BOOKING SYSTEM - STALLTID",
      category: "VISUAL IDENTITY",
      image: "/figma-assets/stalltid-project.jpg",
      href: "/projects/stalltid",
      description:
        "Booking system design with complete visual identity and brand guidelines.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#9ACBFF] to-[#FADDDD] pt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Projects
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore my work across UX/UI design, web development, and visual
            identity projects. Each project represents a unique challenge and
            creative solution.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group cursor-pointer"
            >
              <div className="bg-[#FDFDFD] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[285px] h-[419px] p-[15px_15px_21px]">
                <div className="flex flex-col gap-5 w-[255px]">
                  <div className="flex flex-col items-center gap-0 w-full">
                    <div className="w-full h-[200px] bg-gray-200 rounded overflow-hidden relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-kanit text-[18px] leading-[1.49] text-black w-full mt-4">
                      {project.title}
                    </h3>
                  </div>
                  <div className="bg-[#050526] text-[#FDF7F7] px-[10px] py-[10px] rounded-[5px] w-fit">
                    <span className="font-kanit text-[18px] leading-[1.49]">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-transparent border-[3px] border-[#DA0B65] text-[#FF0364] hover:bg-[#FF0364] hover:text-white transition-all duration-200 rounded-[5px] font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
