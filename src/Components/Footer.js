"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer id="contacts" className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-left">
          {/* Brand & Address */}
          <div className="space-y-6">
            <a href="/" className="flex items-center space-x-3 group">
              <img
                src="/favicon.jpg"
                alt="Infravue Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-white text-xl sm:text-3xl lg:text-4xl font-bold tracking-wide transition-colors duration-300 group-hover:text-emerald-300">
                INFRAVUE
              </span>
            </a>

            <p className="text-gray-400 text-base sm:text-lg font-bold">
              📍 10-3-347, Abhyudaya Nagar colony, Gandipet Mandal, RR District
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              Shaping the future of spaces with innovation, creativity, and flawless execution across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("aboutus")}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                >
                  Who Are We
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("domains")}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                >
                  Domains
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("expertise")}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                >
                  Why Trust Us?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                >
                  Work Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("partners")}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                >
                  Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Business Verticals */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Business Verticals</h4>
            <ul className="space-y-3">
              {["Corporations", "Offices", "Hospitals", "Restaurants", "Institutions"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/infra_vue/?igsh=MWJucTAwOTcwdHM4dQ%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
              >
                <img src="/Images/Socials/instagram.png" alt="Instagram" className="w-7 h-7 object-contain" />
              </a>
              <a
                href="https://wa.me/917478075444"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
              >
                <img src="/Images/Socials/whatsapp.png" alt="WhatsApp" className="w-7 h-7 object-contain" />
              </a>
            </div>

            <div className="text-gray-300 text-sm sm:text-base font-medium space-y-1">
              <p className="hover:text-emerald-300 transition-colors duration-300">info@infravueinterior.com</p>
              <p className="hover:text-emerald-300 transition-colors duration-300">+91 7478075444</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm">&copy; {currentYear} Infravue. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-gray-400 hover:text-emerald-300 text-xs sm:text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-300 text-xs sm:text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-300 text-xs sm:text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
