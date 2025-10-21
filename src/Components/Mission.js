"use client"

import { useEffect, useRef } from "react"

export default function ParallaxScroll() {
  const textRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY
      if (textRef.current) textRef.current.style.transform = `translateY(${value * 0.5}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const socials = [
    { name: "instagram", href: "https://www.instagram.com/infra_vue/?igsh=MWJucTAwOTcwdHM4dQ%3D%3D#" },
    { name: "whatsapp", href: "https://wa.me/917478075444" },
  ]

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden text-white">
      {/* Background video */}
      <video
        src="/landing.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-[-50px] left-0 w-full h-[120%] z-0 object-cover"
      />

      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Main content */}
      <div
        ref={textRef}
        className="relative z-20 flex flex-col justify-center h-full max-w-6xl mx-auto px-4 sm:px-6 text-left text-white"
      >
        <h1 className="flex flex-wrap justify-start items-center gap-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold py-2 sm:py-4">
          <span>YOUR</span>
          <span className="uppercase font-extrabold rounded-xl px-3 sm:px-5 py-1 sm:py-3 bg-white/10 backdrop-blur-sm">
            SPACE
          </span>
          <span>OUR</span>
          <span className="uppercase font-extrabold rounded-xl px-3 sm:px-5 py-1 sm:py-3 bg-white/10 backdrop-blur-sm">
            Promise
          </span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-4 sm:mb-6 max-w-lg">
          Infravue transforms offices, corporations, hospitals, restaurants, and institutions into inspiring spaces with
          innovative design and flawless execution across India.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <p className="text-xs sm:text-sm font-light text-white/60 underline">
            Follow us:
          </p>
          {socials.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100"
            >
              <img src={`/Images/Socials/${name}.png`} alt={name} className="w-5 sm:w-6 h-5 sm:h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
