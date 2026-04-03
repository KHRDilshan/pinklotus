"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Lottie from "lottie-react"

import lotusBoomAnimation from "@/public/lotus.json"
import starsAnimation from "@/public/Fire works.json"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showStars, setShowStars] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      window.scrollTo({ top: 0, behavior: "auto" })

      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)

          // show stars before exit
          setShowStars(true)

          setTimeout(() => setIsLoading(false), 1200)
          return 100
        }
        return prev + Math.random() * 12
      })
    }, 120)

    return () => clearInterval(interval)
  }, [])

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(6px)" }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
          <div className="text-center relative">

            {/* 🌸 Lotus Lottie */}
            <div className="relative w-64 h-64 mx-auto mb-6">
              <Lottie
                animationData={lotusBoomAnimation}
                loop={false}
                autoplay
                onComplete={() => setShowStars(true)}
              />

              {/* {showStars && (
                <div className="absolute inset-0">
                  <Lottie
                    animationData={starsAnimation}
                    loop={false}
                    autoplay
                  />
                </div>
              )} */}
            </div>

       <p className="text-2xl font-serif tracking-widest text-pink-600 uppercase -mt-20 animate-fadeUp">
          PINK LOTUS RESIDENCES
        </p>

        
            {/* ✨ Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-500 mt-2 tracking-[0.3em] text-sm"
            >
              LUXURY EXPERIENCE AWAITS
            </motion.p>

          
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}