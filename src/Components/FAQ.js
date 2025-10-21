"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What services does Infravue provide?",
    answer:
      "At Infravue, we transform spaces into stunning realities! From offices to restaurants, hospitals to corporate setups, we handle interior design and construction with creativity, precision, and flair.",
  },
  {
    question: "Which areas or states do you cover?",
    answer:
      "We’re everywhere you need us! Our expert team delivers high-quality interiors across all states in India, making sure your space shines no matter the location.",
  },
  {
    question: "What makes Infravue stand out?",
    answer:
      "Our strength lies in our vast, talented team and years of hands-on experience. We combine innovative design, smart construction, and flawless execution to make every project extraordinary.",
  },
  {
    question: "How can I get in touch with Infravue?",
    answer:
      "Connecting with us is easy! Reach out via email or phone, and our team will guide you from consultation to project completion with personalized attention.",
  },
  {
    question: "Do you handle full project execution or only design?",
    answer:
      "We do it all! From concept and 3D visualization to complete construction and final interiors, Infravue ensures a seamless, worry-free experience.",
  },
  {
    question: "Can Infravue manage large-scale commercial projects?",
    answer:
      "Absolutely! With our experienced team and proven track record, we handle projects of any scale, delivering premium quality, on time and within budget.",
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-12 bg-gradient-to-b from-black via-neutral-900 to-black relative overflow-hidden text-white">
      {/* Background Blur Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-pink-500/10 blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-5 py-2 rounded-full border bg-slate-50 border-gray-500 text-black text-sm font-medium tracking-wide mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl md:text-5xl text-white leading-tight">
            Common{" "}
            <span className="font-extrabold text-[#FF0066] uppercase">
              Questions
            </span>{" "}
            About Infravue
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="mb-20">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-6"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className={`flex justify-between items-center p-4 cursor-pointer  rounded-lg transition-colors duration-300 ${
                  activeIndex === index
                    ? "bg-white/10 border-b border-white/20"
                    : "bg-white/5 border-b border-white/10"
                }`}
              >
                <h3 className="text-sm md:text-xl font-medium pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-2 rounded-full ${
                    activeIndex === index ? "bg-white/20" : "bg-white/10"
                  }`}
                >
                  <ChevronDown className="h-6 w-6 text-white" />
                </motion.div>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden backdrop-blur-md bg-white/5 rounded-b-xl"
                  >
                    <div className="p-6 text-lg md:text-xl text-gray-200 font-light leading-relaxed">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
