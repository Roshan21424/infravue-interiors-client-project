"use client"

import { useState, useEffect } from "react"

const defaultItems = [
  {
    id: "classic",
    label: "Classic",
    headline: "Timeless Classic",
    subhead: "The Beauty of Tradition",
    description: "Symmetry, rich materials, and refined detail. Classic interiors balance craftsmanship.",
    image: "/Images/Catalog/Classical.jpg",
  },
  {
    id: "minimalist",
    label: "Minimalist",
    headline: "Quiet Minimalism",
    subhead: "Less, but Better",
    description: "Calm palettes, purposeful objects, and generous negative space create clarity and focus.",
    image: "/Images/Catalog/Minimalist.jpg",
  },
  {
    id: "industrial",
    label: "Industrial",
    headline: "Raw Industrial",
    subhead: "Form Follows Function",
    description: "Exposed brick, steel, and concrete—utility turned into bold, honest aesthetics.",
    image: "/Images/Catalog/Industrial.jpg",
  },
  {
    id: "modern",
    label: "Modern",
    headline: "Sleek Modern",
    subhead: "Contemporary Elegance",
    description: "Clean lines, functional layouts, and polished materials for stylish, modern interiors.",
    image: "/Images/Catalog/Modern.jpg",
  },
  {
    id: "contemporary",
    label: "Contemporary",
    headline: "Fresh Contemporary",
    subhead: "Trendy and Functional",
    description: "Current trends meet functionality, with neutral bases and bold accent choices.",
    image: "/Images/Catalog/Contemporary.jpg",
  },
  {
    id: "luxury",
    label: "Luxury",
    headline: "Opulent Luxury",
    subhead: "Bold and Elegant",
    description: "Premium materials, statement pieces, and exquisite detailing for high-end spaces.",
    image: "/Images/Catalog/Luxury.jpg",
  },
]

export default function InteriorsShowcase({ items = defaultItems, autoPlay = true, autoPlayMs = 6000 }) {
  const [index, setIndex] = useState(0)
  const total = items.length
  const active = items[index]
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!autoPlay || paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % total), autoPlayMs)
    return () => clearInterval(id)
  }, [autoPlay, autoPlayMs, total, paused])

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % total)
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + total) % total)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [total])

  return (
    <section
      className="relative overflow-hidden bg-black text-white rounded-lg shadow-xl m-6 px-6 md:px-12 lg:px-20"
      style={{ minHeight: "calc(100vh - 7rem)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        <img
          key={active.id}
          src={active.image || "/placeholder.svg"}
          alt={active.label}
          className="absolute inset-0 h-full w-full object-cover rounded-2xl transition-opacity duration-1000"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)" }}
      />

      {/* Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-12 h-full">
        {/* Titles (Left Column) */}
        <div className="col-span-1 grid grid-cols-2 grid-rows-3 gap-4">
          {items.map((it, i) => (
            <button
              key={it.id}
              onClick={() => setIndex(i)}
              className={`p-2 rounded transition-all duration-300 text-left hover:scale-110 ${
                i === index ? "text-amber-400 font-bold text-lg shadow-lg" : "text-white/70 hover:text-white/90"
              }`}
            >
              {it.label}
            </button>
          ))}
        </div>

        {/* Details (Right Column, spans 2 columns) */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-start text-left">
          <div key={active.id} className="space-y-2 max-w-xl transition-all duration-800">
            {active.subhead && <p className="italic text-white/80">{active.subhead}</p>}
            <h2 className="text-3xl md:text-5xl font-bold">{active.headline}</h2>
            <p className="text-sm md:text-base text-white/80">{active.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
