import Image from "next/image";
import Button from "@/components/shared/Button";

export default function OakProject() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
        {/* Project Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#E6F0FF] text-[#0B0B3A] rounded-full text-sm font-semibold mb-6">
            Branding & Design
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0B0B3A] mb-6">
            OAK Creative Studio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive brand identity and digital experience for a creative
            studio specializing in sustainable design solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">View Live Site</Button>
            <Button variant="secondary">Case Study</Button>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl">
          <Image
            src="https://picsum.photos/1200/500?random=10"
            alt="OAK Creative Studio Project"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#0B0B3A] mb-6">
              Project Overview
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                This project is currently being documented. The OAK Creative
                Studio project involved creating a complete brand identity
                system that reflects their commitment to sustainable and
                innovative design practices.
              </p>
              <p className="mb-4">
                The challenge was to create a visual identity that would appeal
                to environmentally conscious clients while maintaining a
                premium, professional appearance.
              </p>
              <p>
                The solution included logo design, color palette development,
                typography selection, and comprehensive brand guidelines for
                both digital and print applications.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#0B0B3A] mb-4">
              Project Details
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#0B0B3A] mb-1">Client</h4>
                <p className="text-gray-600">OAK Creative Studio</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0B0B3A] mb-1">Services</h4>
                <p className="text-gray-600">
                  Brand Identity, Logo Design, Guidelines
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0B0B3A] mb-1">Timeline</h4>
                <p className="text-gray-600">6 weeks</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0B0B3A] mb-1">Year</h4>
                <p className="text-gray-600">2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-12 border-t border-gray-200">
          <Button variant="outline" href="/projects/stalltid">
            ← Previous Project
          </Button>
          <Button href="/">Back to Home</Button>
          <Button variant="outline" href="/projects/virki">
            Next Project →
          </Button>
        </div>
      </div>
    </div>
  );
}
