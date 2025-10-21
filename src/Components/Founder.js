"use client"

import { useEffect, useRef, useState } from "react"

export default function Founder() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <div id="founder" className=" bg-black text-white">
      {/* Founder Section */}
      <section ref={sectionRef} className="px-4 md:px-8 max-w-7xl mx-auto py-10">
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {/* Header */}
          <div className="px-6 md:px-12 text-left">
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Glass Tag */}
              <div className="inline-block px-6 py-2 rounded-full 
                              bg-white backdrop-blur-md 
                              border border-white/20 
                              text-black text-sm font-medium 
                              tracking-wide mb-6 
                              shadow-lg hover:shadow-xl 
                              transition-all duration-300 hover:scale-105">
                People Behind Infravue
              </div>

              {/* Role */}
              <h2 className="text-3xl md:text-5xl font-bold mb-3">
                <span className="text-emerald-400 drop-shadow-md">Founder</span>{" "}
                <span className="text-gray-300 font-light">&</span>{" "}
                <span className="text-emerald-400 drop-shadow-md">CEO</span>
              </h2>

              {/* Name */}
              <p className="italic text-4xl md:text-5xl font-semibold bg-white bg-clip-text text-transparent drop-shadow-lg">
                A. N. Dinesh Chandra{" "}
                <span className="text-xl text-gray-400">(IIT Kharagpur)</span>
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="p-6 md:p-12 text-left">
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                Founded by{" "}
                <span className="font-semibold text-white">
                  A. N. Dinesh Chandra
                </span>, an IIT Kharagpur alumnus, Infravue is driven by a passion
                for creating inspiring spaces. With over{" "}
                <span className="font-semibold text-white">3–4 years of expertise</span>{" "}
                in commercial interiors, we take pride in offering end-to-end solutions —
                from concept to completion — tailored to meet your unique requirements.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Whether it’s transforming corporate environments, enhancing commercial spaces,
                or creating bespoke designs, our commitment is simple:{" "}
                <span className="text-white font-semibold uppercase tracking-wide">
                  Deliver the best, on time, every time.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
