'use client'

import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const reviews = [
  {
    id: 1,
    name: 'Sarah Hayes',
    image: '/p3.jpg',
    text: 'Gaba Hope for Kids has made an incredible impact on the lives of so many children. Their dedication is truly inspiring.',
  },
  {
    id: 2,
    name: 'Whitney Clever',
    image: '/p2.jpg',
    text: 'I\'ve seen firsthand the difference Gaba Hope for Kids makes. They provide not just care, but genuine love and hope.',
  },
  {
    id: 3,
    name: 'Murphy Summerville',
    image: '/p1.jpg',
    text: 'The work Gaba Hope for Kids does is nothing short of miraculous. They transform lives every single day.',
  },
]

export default function ReviewSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [inView])

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">What People Are Saying</h2>
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img src={reviews[currentReview].image} alt={reviews[currentReview].name} className="w-12 h-12 rounded-full mr-4" />
                <h3 className="font-semibold text-primary">{reviews[currentReview].name}</h3>
              </div>
              <p className="italic text-primary/80">"{reviews[currentReview].text}"</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

