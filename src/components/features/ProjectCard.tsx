"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  href: string;
  description?: string;
}

export default function ProjectCard({
  title,
  category,
  imageUrl,
  href,
  description,
}: ProjectCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
        {/* Project Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-[#0B0B3A] bg-[#E6F0FF] rounded-full">
              {category}
            </span>
          </div>

          <h3 className="text-xl font-bold text-[#0B0B3A] mb-2 group-hover:text-[#FF1F8E] transition-colors duration-200">
            {title}
          </h3>

          {description && (
            <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          )}

          {/* Hover Arrow */}
          <div className="flex items-center mt-4 text-[#FF1F8E] opacity-0 group-hover:opacity-100 transition-all duration-200">
            <span className="text-sm font-medium mr-2">View Project</span>
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
  );
}
