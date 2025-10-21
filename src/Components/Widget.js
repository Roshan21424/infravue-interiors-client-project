"use client"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917478075444" // <-- change to your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center space-x-1 sm:space-x-2 bg-green-500 text-white px-2 sm:px-3 lg:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 text-sm sm:text-base"
    >
      <FaWhatsapp size={20} className="sm:w-6 sm:h-6" />
      <span className="hidden sm:inline font-medium">Let's connect on WhatsApp</span>
    </a>
  )
}
