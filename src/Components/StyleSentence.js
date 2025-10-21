"use client"

import { useState, useEffect } from "react"

const items = [
  { id: "classic", label: "Classic", description: "Timeless Elegance & Tradition.", font: "font-classic" },
  { id: "minimalist", label: "Minimalist", description: "Simplicity, Calm, & Clutter-Free Spaces.", font: "font-minimalist" },
  { id: "industrial", label: "Industrial", description: "Raw Textures, Bold Lines & Edgy Vibes.", font: "font-industrial" },
  { id: "modern", label: "Modern", description: "Clean Lines & Contemporary Comfort.", font: "font-modern" },
  { id: "contemporary", label: "Contemporary", description: "Trendy Designs That Are Functional.", font: "font-contemporary" },
  { id: "luxury", label: "Luxury", description: "Opulent, High-End Interiors With Wow Factor.", font: "font-luxury" },
]

const fontClasses = {
  "font-classic": "font-['Cormorant_Garamond']",
  "font-minimalist": "font-['Work_Sans']",
  "font-industrial": "font-['Bebas_Neue']",
  "font-modern": "font-['Raleway']",
  "font-contemporary": "font-['Quicksand']",
  "font-luxury": "font-['Trajan_Pro']",
}

export default function StyleSentence() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % items.length), 2000)
    return () => clearInterval(interval)
  }, [])

  const current = items[index]

  return (
    <div className="my-8 sm:my-12 lg:my-16 flex flex-col items-center gap-4 sm:gap-6 max-w-6xl mx-auto text-center px-4">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-economica font-extrabold">
        Choose The{" "}
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase font-extrabold block sm:inline">
          Style & Theme
        </span>{" "}
        <span className="block sm:inline">you Wish</span>
      </h1>

      <div className="inline-flex gap-0 overflow-hidden">
        {current.label.split("").map((letter, i) => (
          <span
            key={letter + i + current.id}
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase font-bold tracking-tighter text-[#FF0066] ${fontClasses[current.font]}`}
            style={{ transitionDelay: `${i * 50}ms`, opacity: 1 }}
          >
            {letter}
          </span>
        ))}
      </div>

      <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center max-w-2xl">{current.description}</p>
    </div>
  )
}
