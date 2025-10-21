export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Hero Section */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <img src="/Images/Landing.jpg" alt="Furnishing" className="absolute inset-0 w-full h-full object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl px-4 sm:px-6 lg:px-8 text-left text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-econominca font-light tracking-tight mb-4 sm:mb-6">
            Best <br />
            <span className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              INTERIOR DESIGNING
            </span>{" "}
            & <br />
            <span className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">CONSTRUCTION</span>{" "}
            Company In India.
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-4xl">
            Infravue transforms offices, corporations, hospitals, restaurants, and institutions into inspiring spaces
            with innovative design and flawless execution across India.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <p className="text-sm sm:text-base lg:text-lg font-light text-white/60">Follow us:</p>
            <div className="flex space-x-4 sm:space-x-6">
              {["instagram", "facebook", "whatsapp"].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100"
                >
                  <img src={`/Images/Socials/${platform}.png`} alt={platform} className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
