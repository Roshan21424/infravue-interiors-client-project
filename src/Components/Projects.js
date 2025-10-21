"use client"
import { useState, useCallback, useEffect } from "react"

export default function Projects() {
  const projects = [
    
        {
      id: "p1",
      title: "NxtWave Institute Of Advanced Technology(Chevella)  ",
      description: "40,000 sq.ft Site At Chevella.",
      images: [
        "/Images/Projects/NIAT2/1.jpg",
        "/Images/Projects/NIAT2/2.jpg",
        "/Images/Projects/NIAT2/3.jpg",
        "/Images/Projects/NIAT2/4.jpg",
        "/Images/Projects/NIAT2/5.jpg",
        "/Images/Projects/NIAT2/6.jpg",
        "/Images/Projects/NIAT2/7.jpg",
        "/Images/Projects/NIAT2/8.jpg",
        "/Images/Projects/NIAT2/9.jpg",
        "/Images/Projects/NIAT2/10.jpg",
        "/Images/Projects/NIAT2/11.jpg",


       
      ],
    },{
      id: "p2",
      title: "NxtWave Institute Of Advanced Technology(pune)  ",
      description: "16,500 sq.ft Site At Pune,Maharastra.",
      images: [
        "/Images/Projects/NIAT/1.jpg",
        "/Images/Projects/NIAT/2.jpg",
        "/Images/Projects/NIAT/3.jpg",
        "/Images/Projects/NIAT/4.jpg",
      ],
    },
    {
      id: "p3",
      title: "First Source",
      description: "40,000 sq.ft Site At Kondapur.",
      images: [
        "/Images/Projects/firstsource/1.jpg",
        "/Images/Projects/firstsource/2.jpg",
        "/Images/Projects/firstsource/3.jpg",
        "/Images/Projects/firstsource/4.jpg",
        "/Images/Projects/firstsource/5.jpg",
        "/Images/Projects/firstsource/6.jpg",
        "/Images/Projects/firstsource/7.jpg",
        "/Images/Projects/firstsource/8.jpg",
        "/Images/Projects/firstsource/9.jpg",
        "/Images/Projects/firstsource/10.jpg",
        "/Images/Projects/firstsource/11.jpg",
        "/Images/Projects/firstsource/12.jpg",
        "/Images/Projects/firstsource/13.jpg",
        "/Images/Projects/firstsource/14.jpg",
      ],
    },
    {
      id: "p4",
      title: "Sesola",
      description: "3,200 SQ.FT Site At Kondapur.",
      images: [
        "/Images/Projects/Sesola/1.jpg",
        "/Images/Projects/Sesola/2.jpg",
        "/Images/Projects/Sesola/3.jpg",
        "/Images/Projects/Sesola/4.jpg",
        "/Images/Projects/Sesola/5.jpg",
        "/Images/Projects/Sesola/6.jpg",
        "/Images/Projects/Sesola/7.jpg",
        "/Images/Projects/Sesola/8.jpg",
      ],
    },
    {
      id: "p5",
      title: "Uncode",
      description: "A 4,000 SQ.FT Site At Kondapur.",
      images: [
        "/Images/Projects/Uncode/1.jpg",
        "/Images/Projects/Uncode/2.jpg",
        "/Images/Projects/Uncode/3.jpg",
        "/Images/Projects/Uncode/4.jpg",
        "/Images/Projects/Uncode/5.jpg",
        "/Images/Projects/Uncode/6.jpg",
      ],
    },
    {
      id: "p6",
      title: "Unisoft",
      description: "A 2,500 SQ.FT site at Hi-Tech City",
      images: [
        "/Images/Projects/Unisoft/1.jpg",
        "/Images/Projects/Unisoft/2.jpg",
        "/Images/Projects/Unisoft/3.jpg",
        "/Images/Projects/Unisoft/4.jpg",
        "/Images/Projects/Unisoft/5.jpg",
        "/Images/Projects/Unisoft/6.jpg",
      ],
    },
    {
      id: "p7",
      title: "Socrates",
      description: "An 8,500 SQ.FT site at Kothaguda",
      images: [
        "/Images/Projects/Unisoft/1.jpg",
        "/Images/Projects/Unisoft/2.jpg",
        "/Images/Projects/Unisoft/3.jpg",
        "/Images/Projects/Unisoft/4.jpg",
        "/Images/Projects/Unisoft/5.jpg",
        "/Images/Projects/Unisoft/6.jpg",
      ],
    },{
      id: "p8",
      title: "Chaitanya Deemed To Be University",
      description: "An 40000 SQ.FT site at Himayatnagar,Moinabad",
      images: [
        "/Images/Projects/CDU/1.jpg",
        "/Images/Projects/CDU/2.jpg",
        "/Images/Projects/CDU/3.jpg",
        "/Images/Projects/CDU/4.jpg",
        "/Images/Projects/CDU/5.jpg",
        "/Images/Projects/CDU/6.jpg",
        "/Images/Projects/CDU/7.jpg",
        "/Images/Projects/CDU/8.jpg",
        "/Images/Projects/CDU/9.jpg",
      ],
    },
    {
      id: "p9",
      title: "Srias Lifespaces",
      description: "An 8,000 SQ.FT site at Dondapur",
      images: [
        "/Images/Projects/Srias/1.jpg",
        "/Images/Projects/Srias/2.jpg",
        "/Images/Projects/Srias/3.jpg",
          "/Images/Projects/Srias/4.jpg",
          "/Images/Projects/Srias/5.jpg",
          "/Images/Projects/Srias/6.jpg",
      
      ],
    },
     {
      id: "p10",
      title: "Wavity",
      description: "An 3,100 SQ.FT site at Madhapur",
      images: [
        "/Images/Projects/Wavity/1.jpg",
        "/Images/Projects/Wavity/2.jpg",
        "/Images/Projects/Wavity/3.jpg",
          "/Images/Projects/Wavity/4.jpg",
          "/Images/Projects/Wavity/5.jpg",
          "/Images/Projects/Wavity/6.jpg",
      
      ],
    },
    {
      id: "p11",
      title: "NETS",
      description: "An 2,500 SQ.FT site at Kondapur",
      images: [
        "/Images/Projects/NETS/1.jpg",
        "/Images/Projects/NETS/2.jpg",
        "/Images/Projects/NETS/3.jpg",
          "/Images/Projects/NETS/4.jpg",
      
      ],
    },
     {
      id: "p12",
      title: "Observant",
      description: "An 3,500 SQ.FT site at Jubilee hills",
      images: [
        "/Images/Projects/Observant/1.jpg",
        "/Images/Projects/Observant/2.jpg",
        "/Images/Projects/Observant/3.jpg",      
      ],
    }, {
      id: "p13",
      title: "Dental Speciality",
      description: "An 1,500 SQ.FT site at Ameerpet",
      images: [
        "/Images/Projects/Dentist/1.jpg",
        "/Images/Projects/Dentist/2.jpg",
        "/Images/Projects/Dentist/3.jpg",      
        "/Images/Projects/Dentist/4.jpg",      
        "/Images/Projects/Dentist/5.jpg",      

      ],
    },
    
  ]

  const [indices, setIndices] = useState({})
const [visibleProjects, setVisibleProjects] = useState(projects.length)

  const setIndexFor = useCallback((id, next) => {
    setIndices((prev) => ({ ...prev, [id]: next }))
  }, [])

  const go = useCallback(
    (id, dir, n) => {
      const current = indices[id] ?? 0
      const next = (current + dir + n) % n
      setIndexFor(id, next)
    },
    [indices, setIndexFor],
  )

  const handleViewMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 5, projects.length))
  }

  // helper to compute relative distance
  const dist = (i, index, n) => {
    const raw = i - index
    const half = Math.floor(n / 2)
    return ((raw + n + half) % n) - half
  }

  // 🔥 Auto-scroll effect for each project
  useEffect(() => {
    const visibleProjectsList = projects.slice(0, visibleProjects)
    const timers = visibleProjectsList.map((project) => {
      const n = project.images.length
      return setInterval(() => {
        go(project.id, 1, n) // move right every 3 seconds
      }, 2000)
    })

    return () => timers.forEach(clearInterval)
  }, [projects, go, visibleProjects])

  return (
    <main
      id="projects"
      className="flex flex-col items-center py-10 gap-12 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden"
    >
      <div className="mb-6 text-center animate-fade-in-up">
        <div className="inline-block px-6 py-2 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 text-gray-800 text-sm font-medium tracking-wide mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          our projects
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl py-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Showcasing Our <span className="font-extrabold text-[#64E2B7] animate-fade-slide">WORK & CREATIVITY</span>
        </h2>
        <p className="mt-6 max-w-6xl mx-auto text-slate-600 text-lg leading-relaxed px-4">
          A collection of the amazing projects we've delivered — blending design, innovation, and functionality to
          create spaces people love.
        </p>
      </div>

      <div className="w-full px-4 flex flex-col gap-16 overflow-x-hidden">
        {projects.slice(0, visibleProjects).map((project, projectIndex) => {
          const n = project.images.length
          const index = indices[project.id] ?? 0

          return (
            <section
              key={project.id}
              className="w-full max-w-[95vw] mx-auto animate-slide-in-up"
              style={{ animationDelay: `${projectIndex * 0.2}s` }}
            >
              <div className="mb-1 text-center">
                <div className="relative inline-block">
                  <span
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                     text-[120px] md:text-[200px] font-extrabold text-[#FFDE63] 
                     opacity-50 select-none pointer-events-none -z-10 leading-none"
                  >
                    {projectIndex + 1}
                  </span>
                  <h2
                    className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase 
                   text-[#FF0066] mb-1 cursor-default px-4"
                  >
                    {project.title}
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-gray-600 font-medium px-4">{project.description}</p>
              </div>

              <div className="relative h-[300px] sm:h-[350px] md:h-[450px] my-2 overflow-hidden">
                {project.images.map((img, i) => {
                  const d = dist(i, index, n)
                  if (Math.abs(d) > 1) return null

                  const scale = d === 0 ? 1 : 0.85
                  const offset = d * (typeof window !== "undefined" && window.innerWidth < 768 ? 150 : 250)
                  const z = 100 - Math.abs(d)
                  const isActive = d === 0

                  return (
                    <article
                      key={`${project.id}-${i}`}
                      className="absolute top-1/2 left-1/2 w-[240px] sm:w-[280px] md:w-[520px] h-[160px] sm:h-[200px] md:h-[340px] rounded-xl shadow-2xl transition-all duration-500 ease-out bg-cover bg-center cursor-pointer hover:shadow-3xl group"
                      style={{
                        zIndex: z,
                        transform: `translate(-50%, -50%) translateX(${offset}px) scale(${scale})`,
                        backgroundImage: `url(${img})`,
                        filter: isActive ? "none" : "brightness(0.7) saturate(0.8)",
                      }}
                      onClick={() => (isActive ? null : go(project.id, d > 0 ? 1 : -1, n))}
                    >
                      <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        {!isActive && (
                          <div className="text-white text-xs sm:text-sm font-medium bg-black/50 px-3 sm:px-4 py-2 rounded-full">
                            Click to view
                          </div>
                        )}
                      </div>
                    </article>
                  )
                })}
              </div>

              <div className="flex items-center justify-center gap-4 sm:gap-8 select-none">
                <button
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 text-xl sm:text-2xl hover:text-[#FF0066] hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  onClick={() => go(project.id, -1, n)}
                >
                  ‹
                </button>

                <div className="flex gap-2">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        i === index ? "bg-[#FF0066] scale-125" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => setIndexFor(project.id, i)}
                    />
                  ))}
                </div>

                <button
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg border border-gray-200 text-gray-600 text-xl sm:text-2xl hover:text-[#FF0066] hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  onClick={() => go(project.id, 1, n)}
                >
                  ›
                </button>
              </div>
            </section>
          )
        })}
      </div>

      {visibleProjects < projects.length && (
        <div className="mt-8 text-center">
          <button
            onClick={handleViewMore}
            className="px-8 py-4 bg-gradient-to-r from-[#FF0066] to-[#FF3366] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
          >
            View More Projects
          </button>
        </div>
      )}
    </main>
  )
}
