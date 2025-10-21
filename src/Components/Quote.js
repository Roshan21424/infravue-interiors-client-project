const Quote = () => {
  return (
    <div className="bg-black py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-2 sm:gap-4">
      {/* Top Section (Main Quote) */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-6">
        {/* Line before DESIGN - hidden on mobile */}
        <div className="hidden sm:flex flex-1 h-[2px] bg-white mx-2 lg:mx-4"></div>

        {/* DESIGN Text */}
        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold font-economica text-white leading-none text-center">
          DESIGN
        </div>

        {/* BUILD + DELIVER Text */}
        <div className="flex flex-col items-center sm:items-start justify-center gap-0">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-economica font-semibold text-white leading-none">
            BUILD
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-economica font-bold text-white leading-none">
            DELIVER
          </div>
        </div>

        {/* Line after BUILD DELIVER - hidden on mobile */}
        <div className="hidden sm:flex flex-1 h-[2px] bg-white mx-2 lg:mx-4"></div>
      </div>

      {/* Bottom Tagline */}
      <div className="w-full text-center mt-4 sm:mt-2">
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light text-gray-300 tracking-wide uppercase">
          We'll be waiting for your call
        </p>
      </div>
    </div>
  )
}

export default Quote
