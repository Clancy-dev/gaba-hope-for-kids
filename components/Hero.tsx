'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
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
    <section className="bg-white heading-font">
      <div className="container mx-auto">
        <div
          ref={ref}
          className={` relative overflow-hidden rounded-lg shadow-xl transition-opacity duration-1000 reduce-hero sm:h-[300px] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ height: '400px'}}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-pink-500">
            <Image
              src="/donations/handst.png?height=400&width=900"
              alt="Gaba Hope For Kids"
              layout="fill"
              objectFit="cover"
              className="mix-blend-overlay"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="mb-4 text-4xl font-bold"></h1>
              <p className="text-xl"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

