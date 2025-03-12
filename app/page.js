// app/page.js

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 bg-[url('/noise-texture.png')] bg-blend-overlay text-white">
      {/* Header */}
      <header className="container mx-auto p-4 md:p-6">
        <div className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-50">Advaya</div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-3xl w-full relative text-center">
          {/* Paper Airplane (Positioned for responsiveness) */}
          <div className="absolute left-4 top-[-30px] sm:left-8 sm:top-[-40px] md:left-16 md:top-[-50px]">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              {/* Uncomment Image if needed */}
              {/* <Image src="/paper-airplane.png" alt="Paper airplane" width={120} height={120} className="opacity-90" /> */}
              <div className="absolute bottom-0 left-8 sm:left-12 w-16 sm:w-20 h-16 sm:h-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white opacity-60">
                  <path
                    d="M10,90 Q30,70 40,85 Q50,100 60,80 Q70,60 90,40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            Welcome to
          </h1>
          <div className="flex flex-wrap justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            <span className="text-white lg:text-6xl">#</span>
            <span className="text-orange-500 lg:text-7xl">ADVAY</span>
            <span className="text-orange-500 relative lg:text-7xl">
              THON <span className="text-white">'25</span>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                  {/* Uncomment Image if needed */}
                  {/* <Image src="/bitcoin-icon.png" alt="Bitcoin" width={48} height={48} className="object-contain" /> */}
                </div>
              </span>
            </span>
            {/* <span className="text-orange-500 lg:text-8xl">N</span> */}
            {/* <span className="text-white">'25</span> */}
          </div>

          {/* Description */}
          <div className="mt-6 sm:mt-8 text-center max-w-2xl mx-auto text-gray-200 text-base sm:text-lg">
            <p>
              Join us at Hackathon 2025 at Sri Sairam College of Engineering to innovate in AI, Web Development,
              Blockchain, Cybersecurity, IoT, or Social Impact.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <Link
              href="/register"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
      <section className="relative overflow-hidden py-12 mt-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500  text-center mb-8">Gallery</h2>
        <div className="relative w-full overflow-hidden">
          <div className="scrolling-wrapper flex gap-6 w-max animate-[scrolling_20s_linear_infinite]">
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, index) => (
              <div key={index} className="w-64 h-40 sm:w-80 sm:h-52 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src={`/gallery/image${num}.jpg`}
                  alt={`Gallery Image ${num}`}
                  width={320}
                  height={208}
                  className="w-full h-full object-cover border"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mb-10 mx-auto px-6 py-22 mt-16 bg-zinc-800 rounded-lg shadow-lg text-white">
        {/* About Section */}
        <div className="text-center m-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-orange-500">About Advaython</h2>
          <p className="mt-6 text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Advaython is back, bigger and bolder! This high-energy innovation marathon brings together creative minds, developers,
            designers, and tech enthusiasts to solve real-world challenges through technology. Whether you're a coding expert or a
            passionate problem solver, this is your chance to collaborate, build, and showcase your skills.
          </p>
        </div>

        {/* Divider */}
        <div className="m-12 border-t border-gray-600 w-3/4 mx-auto"></div>

        {/* Venue Section */}
        <div className="mt-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500">Venue</h2>
          <p className="mt-4 text-gray-300 text-lg sm:text-xl">
            <span className="block font-semibold">Sri Sairam College of Engineering</span>
            Anekal, Bengaluru
          </p>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-600 w-3/4 mx-auto"></div>

        {/* Team Limit Section */}
        <div className="mt-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500">Team Limit</h2>
          <p className="mt-4 text-gray-300 text-lg sm:text-xl">
            2 - 4 Members
          </p>
        </div>
      </section>

    </main>
  );
}
