"use client"

import React from "react"

// Reusable Card Component with enhanced animations
const Card = ({ image, title, description, flexSize = 1, contentPosition = "center", index }) => {
  const positionClasses = {
    "top-left": "justify-start items-start text-left",
    "top-center": "justify-start items-center text-center",
    "top-right": "justify-start items-end text-right",
    "center-left": "justify-center items-start text-left",
    center: "justify-center items-center text-center",
    "center-right": "justify-center items-end text-right",
    "bottom-left": "justify-end items-start text-left",
    "bottom-center": "justify-end items-center text-center",
    "bottom-right": "justify-end items-end text-right",
  }

  return (
    <div
      className={`relative rounded-xl overflow-hidden h-64 sm:h-72 md:h-80 flex-[${flexSize}] group cursor-pointer animate-slide-in-up hover:scale-105 transition-all duration-700 hover:shadow-2xl`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div
        className={`absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 flex flex-col p-4 sm:p-6 ${positionClasses[contentPosition]} transition-all duration-500 group-hover:bg-black/60`}
      >
        <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-economica font-extrabold mb-2 sm:mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 group-hover:text-[#64E2B7]">
          {title.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h2>

        <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
          {description.split("\n").map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>

        <div className="mt-2 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-4 group-hover:translate-y-0">
          <div className="inline-flex items-center gap-2 text-[#64E2B7] text-xs sm:text-sm font-medium">
            <span>Explore</span>
            <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#64E2B7] rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-[#64E2B7] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] sm:border-l-[25px] lg:border-l-[30px] border-l-transparent border-b-[20px] sm:border-b-[25px] lg:border-b-[30px] border-b-[#FF0066] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}

// Card Grid Component
const CardGrid = () => {
  const topRowCards = [
    {
      image: "/Images/ExpertiesImages/OnTimeDelivery.jpg",
      title: "On-Time Project Completion",
      description: "Every project delivered within the promised timeline with full accountability.",
      flexSize: 1.7,
      contentPosition: "center-left",
    },
    {
      image: "/Images/ExpertiesImages/Premium.jpg",
      title: "Premium Finishes at Cost-Effective Prices",
      description: "Luxury results without exceeding your budget. Every detail refined.",
      flexSize: 1,
      contentPosition: "center",
    },
    {
      image: "/Images/ExpertiesImages/3DAndVR.jpg",
      title: "3D Renders & VR Walkthroughs",
      description: "Visualize and approve your project virtually before construction.",
      flexSize: 1,
      contentPosition: "center",
    },
  ]

  const bottomRowCards = [
    {
      image: "/Images/ExpertiesImages/MileStone.jpg",
      title: "Clear Process & Milestone Handovers",
      description: "Step-by-step updates to keep you informed and in control.",
      flexSize: 1,
      contentPosition: "center",
    },
    {
      image: "/Images/ExpertiesImages/EcoFriendly.jpg",
      title: "Eco-Friendly Materials & Energy-Efficient Designs",
      description: "Sustainable materials and designs that reduce costs and respect nature.",
      flexSize: 1,
      contentPosition: "center",
    },
    {
      image: "/Images/ExpertiesImages/DesignAndTrunkey.jpg",
      title: "Seamless Collaboration of Designers, Engineers & Managers",
      description: "A unified team ensures smooth project execution from concept to completion.",
      flexSize: 1.7,
      contentPosition: "center-right",
    },
  ]

  return (
    <div id="expertise" className="bg-black relative flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-[#64E2B7] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-[#FF0066] rounded-full blur-3xl animate-pulse-slow-delayed"></div>
      </div>

      <div className="text-white mb-8 sm:mb-12 lg:mb-16 text-left mx-auto relative z-10 animate-fade-in-up max-w-7xl">
        <div className="inline-block px-4 sm:px-6 py-2 rounded-full bg-slate-50 backdrop-blur-md border border-white/20 text-black text-xs sm:text-sm font-medium tracking-wide mb-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          expertise
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4 sm:mb-6">
          Absolute <span className="font-extrabold text-[#FF0066] animate-fade-slide">PERFECTION</span> From Start To
          End.
        </h2>

        <p className="text-white/90 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 leading-relaxed max-w-6xl">
          From timely delivery to cutting-edge visualization and eco-conscious practices, we combine{" "}
          <span className="font-semibold text-[#FF0066]">professional expertise</span> with{" "}
          <span className="font-semibold text-[#FF0066]">client-first values</span>. Our process ensures transparency,
          precision, and quality at every stage, making us a trusted partner for businesses and individuals alike.
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {topRowCards.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
          {bottomRowCards.map((card, index) => (
            <Card key={index} {...card} index={index + 3} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.1; transform: scale(1.1); }
        }

        @keyframes pulse-slow-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1.1); }
          50% { opacity: 0.05; transform: scale(1); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow-delayed {
          animation: pulse-slow-delayed 6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  )
}

export default CardGrid
