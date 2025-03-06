import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Header() {
    return (
        <header className={`fixed top-0 left-0 w-full bg-transparent text-white  ${poppins.className}`}>
            <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4 border-b border-white w-full">
                {/* Left: Text Logo */}
                <div className="text-xl md:text-2xl font-extrabold tracking-wide">Advaython</div>

                {/* Right: Contact Us Glass Button */}
                <button className="px-4 md:px-5 py-2 text-white backdrop-blur-lg bg-white/10 rounded-lg shadow-lg transition hover:bg-white/20 text-sm md:text-base cursor-pointer">
                    Contact Us
                </button>

            </div>
        </header>
    );
}
