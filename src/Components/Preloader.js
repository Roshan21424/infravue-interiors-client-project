"use client"

import { useEffect, useState, useRef } from "react"

export default function Preloader({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.onended = () => {
        setIsVisible(false)
        onFinish()
      }
    }
  }, [onFinish])

  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Centered video box */}
      <div className="w-64 sm:w-80 md:w-[28rem] lg:w-[36rem] rounded-xl overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          src="/loader.mp4"
          autoPlay
          muted
          playsInline
          disablePictureInPicture
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback"
          onContextMenu={(e) => e.preventDefault()}
          className="w-full h-full object-contain select-none pointer-events-none"
        />
      </div>
    </div>
  )
}
