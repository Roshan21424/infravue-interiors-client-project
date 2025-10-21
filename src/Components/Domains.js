"use client"

const cards = [
  {
    id: 1,
    title: "Offices",
    description: "Modern workstations and ergonomic furniture for productive offices.",
    image: "/Images/DomainsImages/Offices.jpg",
  },
  {
    id: 2,
    title: "Institutions",
    description: "Classrooms, libraries, and common areas designed for collaboration.",
    image: "/Images/DomainsImages/Institutions.jpg",
  },
  {
    id: 3,
    title: "Restaurants",
    description: "Themed interiors and warm lighting to enhance dining experiences.",
    image: "/Images/DomainsImages/Restaurant.jpg",
  },
  {
    id: 4,
    title: "Health Cares",
    description: "Healing-focused spaces with natural light and hygienic design.",
    image: "/Images/DomainsImages/Hospital.jpg",
  },
]

export default function Domains() {
  return (
    <section className="bg-black relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="text-white mb-8 md:mb-12 text-center max-w-7xl mx-auto">
        <div className="inline-block px-3 md:px-4 py-1.5 rounded-full bg-slate-50 backdrop-blur-md border border-black/10 text-black text-xs md:text-sm font-medium tracking-wide mb-3">
          domains
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          We <span className="font-extrabold text-emerald-400">SERVE</span> Across Every Domain.
        </h2>
        <p className="text-white/90 text-sm md:text-base lg:text-lg mt-4 max-w-4xl mx-auto leading-relaxed px-4">
          We proudly serve <span className="font-semibold">hospitals, hotels, restaurants, corporates,</span> and{" "}
          <span className="font-semibold">institutions</span>, bringing innovation, precision, and excellence to every
          project we handle.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, idx) => (
          <FadeCard key={card.id} card={card} index={idx} />
        ))}
      </div>
    </section>
  )
}

// Individual Card Component with hover effects
function FadeCard({ card, index }) {
  return (
    <div
      id="domains"
      className="relative group rounded-xl overflow-hidden bg-gray-800 cursor-pointer hover:scale-105 transition-all duration-700 hover:shadow-2xl h-56 sm:h-64 md:h-72 lg:h-80"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img
        src={card.image || "/placeholder.svg"}
        alt={card.title}
        loading="lazy"
        className="w-full h-full object-cover object-bottom md:object-center transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 flex flex-col justify-end p-3 sm:p-4 md:p-6 transition-all duration-500 group-hover:bg-black/60">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 group-hover:text-emerald-400">
          {card.title}
        </h3>
        <p className="text-white/90 text-xs sm:text-sm md:text-base transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100 leading-relaxed">
          {card.description}
        </p>
      </div>

      {/* Corner Accent */}
      <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[15px] sm:border-l-[20px] md:border-l-[25px] border-l-transparent border-b-[15px] sm:border-b-[20px] md:border-b-[25px] border-b-[#FF0066] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}
