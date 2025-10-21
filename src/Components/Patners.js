"use client"

const companies = [
  "FirstSource",
  "BRCo",
  "LiquidNitro Games",
  "NIAT",
  "NXTWave",
  "Optim",
  "RockWell Groups",
  "Sesola",
  "SoftWorld Technologies",
  "Wavity",
]

export default function Partners() {
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <div id="partners" className="relative overflow-hidden w-full bg-slate-50 py-12 sm:py-16 lg:py-20">
      {/* Heading */}
      <div className="mb-8 sm:mb-10 lg:mb-12 text-center px-4">
        <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-black/5 backdrop-blur-md border border-black/10 text-black text-xs sm:text-sm font-medium tracking-wide mb-3 shadow-sm">
          collaborations
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
          Allied <span className="font-extrabold text-[#64E2B7] drop-shadow-lg">PARTNERS</span>
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm sm:text-base px-4">
          We have a diverse collaboration with various institutions and corporations
        </p>
      </div>

      {/* Gradient fade edges */}
      <div className="absolute top-0 left-0 h-full w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 right-0 h-full w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10"></div>

      {/* Scrolling Word Marquee */}
      <div
        className="flex items-center animate-scroll"
        style={{
          animation: "scroll 20s linear infinite",
        }}
      >
        {duplicatedCompanies.map((name, index) => (
          <div
            key={index}
            className="mr-6 sm:mr-8 lg:mr-12 flex-shrink-0 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-[#000000] hover:text-[#FF0066] hover:font-semibold transition-colors duration-300 drop-shadow-sm hover:scale-110 hover:-translate-y-1 "
          >
            {name}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
