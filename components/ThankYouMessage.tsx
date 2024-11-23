'use client'

import { useEffect, useRef, useState } from 'react'

export default function ThankYouMessage() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section
      ref={ref}
      className={`bg-yellow-100 py-16 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-4xl font-bold text-yellow-800">Thank You for Your Donation!</h2>
        <p className="text-xl text-yellow-700">
          Your generosity helps us continue our mission to support and empower children in need. Together, we can make
          a lasting difference in their lives.
        </p>
      </div>
    </section>
  )
}

