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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={project.href} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-[#050526] text-[#FDF7F7] px-3 py-1 rounded text-sm font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#FF0364] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center mt-4 text-[#FF0364] opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <span className="text-sm font-medium mr-2">
                      View Project
                    </span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
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
