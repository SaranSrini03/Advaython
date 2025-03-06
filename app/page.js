import { Poppins } from "next/font/google";
import Image from "next/image";
import "@/app/globals.css";
import Header from "./components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "900"] });

export default function Home() {
  return (
    <div className={`bg-noise full-screen text-[#FFA500] ${poppins.className}`}>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen text-center px-4 sm:px-6 relative">
        
        {/* Rocket Image - Only visible on desktop (lg and above) */}
        <Image 
          src="/rocket.png" 
          alt="Rocket Image" 
          width={2000} 
          height={2000} 
          className="absolute left-0 lg:left-[-350px] top-100 transform -translate-y-1/2 hidden lg:block"
        />

        {/* Welcome Text */}
        <p className="text-3xl sm:text-5xl md:text-[90px] tracking-tighter font-bold text-white leading-none">
          Welcome to
        </p>

        {/* Advaython Text */}
        <h1 className="text-5xl sm:text-7xl md:text-[150px] font-bold text-[#FD5402] tracking-tighter leading-none whitespace-nowrap">
          ADVAYTHON <span className="text-white font-extrabold">'25</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-md md:text-lg text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl mt-4 leading-tight text-center px-2 sm:px-0">
          Join us for <span className="text-white font-medium">Hackathon 2025</span> at
          <span className="text-white font-semibold"> Sri Sairam College of Engineering</span> to
          innovate in <span className="text-white font-semibold">AI, Web Development, Blockchain,
          Cybersecurity, IoT, or Social Impact.</span>
        </p>

        {/* Hash Image - Only visible on desktop (lg and above) */}
        <Image 
          src="/hash.png" 
          alt="Hash Symbol" 
          width={1000} 
          height={1000} 
          className="mt-4 absolute left-0 lg:left-[160px] top-106 transform -translate-y-1/2 hidden lg:block"
        />

        {/* Register Now Button */}
        <button className="mt-4 sm:mt-6 px-5 sm:px-8 py-3 sm:py-4 w-40 sm:w-56 h-12 sm:h-16 bg-[#ffffff] text-[#FD5402] font-semibold rounded-2xl shadow-md hover:bg-white transition cursor-pointer">
          Register Now
        </button>

      </div>
    </div>
  );
}
