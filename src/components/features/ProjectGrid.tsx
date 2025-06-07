"use client";

import ProjectCard from "./ProjectCard";

const featuredProjects = [
  {
    id: 1,
    title: "OAK Creative Studio",
    category: "Branding & Design",
    imageUrl: "https://picsum.photos/400/300?random=1",
    href: "/projects/oak",
    description:
      "A comprehensive brand identity and digital experience for a creative studio.",
  },
  {
    id: 2,
    title: "Virki Platform",
    category: "Web Development",
    imageUrl: "https://picsum.photos/400/300?random=2",
    href: "/projects/virki",
    description:
      "A modern platform for connecting creative professionals and clients.",
  },
  {
    id: 3,
    title: "Solenia Webshop",
    category: "E-commerce",
    imageUrl: "https://picsum.photos/400/300?random=3",
    href: "/projects/webshop-solenia",
    description:
      "A sleek e-commerce solution with modern design and seamless user experience.",
  },
];

export default function ProjectGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B3A] mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my recent work across branding, web
            development, and digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              href={project.href}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
