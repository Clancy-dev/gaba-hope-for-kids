'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const statements = [
  "Gaba Hope For Kids helps provide love and care through a Christian environment to vulnerable children and this helps to improve their lives.",
  "Your donation can make a lasting impact on a child's life, giving them hope for a brighter future.",
  "Together, we can create a world where every child feels loved, valued, and supported."
]

export default function HeroDonate() {
  const [currentStatement, setCurrentStatement] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatement((prev) => (prev + 1) % statements.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative lg:h-[90vh] md:h-[90vh] sm:h-[70vh] h-[40vh] mt-[72px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('/donate-hero.jpg')",
          backgroundBlendMode: "overlay",
          // backgroundColor: "rgba(0, 0, 128, 0.6)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-secondary/50 z-10" />
      <div className="relative z-20 text-white text-center px-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentStatement}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-semibold italic max-w-3xl"
          >
            {statements[currentStatement]}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  )
}

