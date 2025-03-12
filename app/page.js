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
            <span className="text-white">#</span>
            <span className="text-orange-500">ADVAY</span>
            <span className="text-orange-500 relative">
              THO
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
                  {/* Uncomment Image if needed */}
                  {/* <Image src="/bitcoin-icon.png" alt="Bitcoin" width={48} height={48} className="object-contain" /> */}
                </div>
              </span>
            </span>
            <span className="text-orange-500">N</span>
            <span className="text-white">'25</span>
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
    </main>
  );
}
