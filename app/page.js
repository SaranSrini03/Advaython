import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 bg-[url('/noise-texture.png')] bg-blend-overlay text-white">
      {/* Header */}
      <header className="container mx-auto p-6">
        <div className="text-xl md:text-2xl font-semibold text-amber-50">Advaya</div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="max-w-4xl mx-auto relative">
          {/* Paper Airplane */}
          <div className="absolute -left-16 -top-20 md:-left-24 md:-top-16">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              {/* <Image src="/paper-airplane.png" alt="Paper airplane" width={120} height={120} className="opacity-90" /> */}
              <div className="absolute bottom-0 left-16 w-20 h-20">
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
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Welcome to</h1>
            <div className="flex items-center justify-center text-5xl md:text-6xl lg:text-7xl font-extrabold">
              <span className="text-white">#</span>
              <span className="text-orange-500">ADVAY</span>
              <span className="text-orange-500 relative">
                THO
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-10 h-10 md:w-12 md:h-12">
                    {/* <Image src="/bitcoin-icon.png" alt="Bitcoin" width={48} height={48} className="object-contain" /> */}
                  </div>
                </span>
              </span>
              <span className="text-orange-500">N</span>
              <span className="text-white">'25</span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 text-center max-w-2xl mx-auto text-gray-200 text-lg">
            <p>
              Join us Hackathon 2025 at Sri Sairam College of Engineering to innovate in AI, Web Development,
              Blockchain, Cybersecurity, IoT, or Social Impact.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/register"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

