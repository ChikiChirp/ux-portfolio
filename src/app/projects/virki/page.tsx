import Image from "next/image";
import Button from "@/components/shared/Button";

export default function VirkiProject() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#E6F0FF] text-[#0B0B3A] rounded-full text-sm font-semibold mb-6">
            Web Development
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0B0B3A] mb-6">
            Virki Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A modern platform for connecting creative professionals and clients
            with seamless project management.
          </p>
        </div>

        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl">
          <Image
            src="https://picsum.photos/1200/500?random=11"
            alt="Virki Platform Project"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            Project details coming soon...
          </p>
          <Button href="/">Back to Home</Button>
        </div>
      </div>
    </div>
  );
}
