export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F0FF] via-[#F8F0FF] to-[#FFE6F7] pt-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0B0B3A] mb-8">
            About Me
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            This page is coming soon. I&apos;m working on creating an amazing
            experience to share my story, skills, and passion for design and
            development.
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0B0B3A] mb-4">
              What to Expect
            </h2>
            <ul className="text-left text-gray-600 space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#FF1F8E] rounded-full mr-3"></span>
                My journey as a creative professional
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#FF1F8E] rounded-full mr-3"></span>
                Skills and expertise overview
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#FF1F8E] rounded-full mr-3"></span>
                Design philosophy and approach
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#FF1F8E] rounded-full mr-3"></span>
                Personal interests and inspirations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
