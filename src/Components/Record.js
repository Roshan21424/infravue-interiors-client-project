"use client"

import { motion } from "framer-motion"

// Masked number with custom color
const MaskedNumber = ({ n, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.8 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut", type: "spring", stiffness: 120 }}
    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none select-none text-center md:text-left"
    style={{ color }}
    aria-hidden
  >
    {n}
  </motion.div>
)

// Single step component
const Step = ({ n, title, text, color, reverse }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ duration: 0.6, delay: 0.1 }}
  >
    <div
      className={`flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 bg-slate-50 transition-all duration-500 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <MaskedNumber n={n} color={color} />

      <motion.div
        initial={{ opacity: 0, x: reverse ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl mt-4 md:mt-0"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-economica font-extrabold mb-2">
          {title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm lg:text-base">{text}</p>
      </motion.div>
    </div>
  </motion.div>
)

// Main ProcessSteps component
export default function ProcessSteps() {
  const steps = [
    {
      n: "6+",
      title: "More Than 6 Projects Completed in Just 3 Months",
      text: "Delivered multiple high-quality projects efficiently, ensuring client satisfaction and timely completion.",
      color: "#169976",
    },
    {
      n: "2M sq.ft+",
      title: "2 Million Sq.Ft Site Completion in 3 Months",
      text: "Executed rapid construction workflows while maintaining precision and quality across large-scale sites.",
      color: "#FF0066",
    },
    {
      n: "8cr+",
      title: "More Than 8 Crores Achieved Project Turnover in 3 Months",
      text: "Generated substantial revenue through seamless project execution and efficient resource management.",
      color: "#D50B8B",
    },
  ]

  return (
    <div className="overflow-x-hidden"> {/* Outer wrapper prevents horizontal scrollbars */}
      <section className="py-8 sm:py-12 lg:py-16 bg-slate-50">
        <div className="mb-8 sm:mb-10 lg:mb-12 text-center px-4">
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-black/5 backdrop-blur-md border border-black/10 text-black text-xs sm:text-sm font-medium tracking-wide mb-3">
            achievements
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            A Remarkable <span className="font-extrabold text-[#FF0066]">RECORD</span> In Interior Designing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base px-4">
            A showcase of our rapid, high-quality, and revenue-generating project execution.
          </p>
        </div>

        <div className="grid grid-cols-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {steps.map((s, i) => (
            <Step key={s.n} {...s} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>
    </div>
  )
}
