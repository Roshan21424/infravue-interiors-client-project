"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-9 py-3 sm:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/favicon.jpg" // Replace with your actual image path
              alt="Infravue Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full shadow-md"
            />
            <span className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl font-economica">INFRAVUE</span>
          </div>

          <div className="hidden md:flex space-x-6 lg:space-x-10">
            <button
              onClick={() => scrollToSection("home")}
              className="relative text-white text-base lg:text-lg font-medium cursor-pointer transition-all group"
            >
              Home
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("aboutus")}
              className="relative text-white text-base lg:text-lg font-medium cursor-pointer transition-all group"
            >
              About Us
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("domains")}
              className="relative text-white text-base lg:text-lg font-medium cursor-pointer transition-all group"
            >
              Industries
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("founder")}
              className="relative text-white text-base lg:text-lg font-medium cursor-pointer transition-all group"
            >
              Founder
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="relative text-white text-base lg:text-lg font-medium cursor-pointer transition-all group"
            >
              Contact
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-400 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/10">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  scrollToSection("home")
                  setIsMenuOpen(false)
                }}
                className="text-white text-base font-medium hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollToSection("aboutus")
                  setIsMenuOpen(false)
                }}
                className="text-white text-base font-medium hover:text-white transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  scrollToSection("domains")
                  setIsMenuOpen(false)
                }}
                className="text-white text-base font-medium hover:text-white transition-colors text-left"
              >
                Domains
              </button>
              <button
                onClick={() => {
                  scrollToSection("founder")
                  setIsMenuOpen(false)
                }}
                className="text-white text-base font-medium hover:text-white transition-colors text-left"
              >
                Founder
              </button>
              <button
                onClick={() => {
                  scrollToSection("contacts")
                  setIsMenuOpen(false)
                }}
                className="text-white text-base font-medium hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
