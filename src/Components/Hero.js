"use client"

import { useEffect, useState } from "react"

export default function InfravueBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { value: "20+", label: "Projects Delivered" },
    { value: "4", label: "States Covered" },
  ]

  return (
    <section id="aboutus" className="py-6 sm:py-8 md:py-16 relative overflow-hidden bg-white text-gray-900">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-gray-200/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-rose-200/20 to-transparent rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-6 relative z-10 max-w-6xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            <div className="flex flex-col justify-start space-y-3 sm:space-y-4 md:space-y-6 text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl xl:text-4xl leading-tight">
                <span className="font-extrabold font-economica text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-[#FF0066] block mb-2">
                  Infravue
                </span>
                <span className="text-base sm:text-lg md:text-xl xl:text-2xl">
                  — Designing, Styling & Building Spaces That Inspire
                </span>
              </h2>

              <div className="text-sm sm:text-base md:text-lg xl:text-xl space-y-2 sm:space-y-3 text-gray-700 font-light leading-relaxed">
                <p>
                  At Infravue, we bring your vision to life with world-class{" "}
                  <span className="font-medium text-[#239BA7] uppercase">interior designing & construction</span>{" "}
                  services. From offices and corporates to restaurants and hospitals, we craft timeless spaces across
                  India.
                </p>
                <p>
                  With decades of experience and mastery in{" "}
                  <span className="font-medium text-[#239BA7] uppercase">all styles & aesthetics</span>, we design,
                  style, and build interiors that reflect your brand and inspire everyone who walks in.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="rounded-lg p-2 sm:p-3 md:p-4 text-center sm:text-left">
                    <div className="text-lg sm:text-xl md:text-3xl xl:text-5xl font-bold text-[#FE7743] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 sm:mt-4 md:mt-6">
  <a
    href="https://wa.me/917478075444?text=Hi!%20I%20want%20to%20build%20my%20vision%20with%20you."
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="group relative px-3 sm:px-4 md:px-6 py-2 md:py-2.5 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-all duration-300 text-sm md:text-base">
      <span className="relative z-10 group-hover:mr-2 transition-all duration-300">
        Let's Build Your Vision
      </span>
      <span className="relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
    </button>
  </a>
  <p className="text-gray-500 text-xs md:text-sm mt-2 font-light">
    Get in touch today to start your project.
  </p>
</div>

            </div>

            <div className="flex justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0">
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/Hero.jpg"
                  alt="Infravue Interior Design"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <div className="absolute bottom-2 sm:bottom-3 md:bottom-5 left-2 sm:left-3 md:left-5 text-white z-10 text-left">
                  <h3 className="text-base sm:text-lg md:text-xl font-light">
                    Spaces <span className="font-medium">Redefined</span>
                  </h3>
                  <p className="text-xs md:text-sm font-light tracking-wide">
                    Interior Design & Construction by Infravue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
