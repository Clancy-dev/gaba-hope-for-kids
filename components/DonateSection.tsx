'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DonateSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (inView && imageRef.current) {
      imageRef.current.classList.add('animate-pulse-slow')
    }
  }, [inView])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4 text-primary">Make a Difference Today</h2>
          <p className="text-xl text-primary/80">You can donate through the following channels:</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Link href="https://www.mchanga.africa/fundraiser/101468" passHref>
            <img
              ref={imageRef}
              src="/donate1.jpg"
              alt="Donate Now"
              className="w-64 h-64 object-cover rounded-lg shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

