'use client'

import React, { useState, useEffect } from 'react'

export default function HeroImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    '/hero1.jpeg?height=1080&width=1920',
    '/hero/hero2.jpg?height=1080&width=1920&text=Image+2',
    '/hero/hero3.jpg?height=1080&width=1920&text=Image+3',
    '/hero/hero4.jpg?height=1080&width=1920&text=Image+4',
    '/hero/hero5.jpg?height=1080&width=1920&text=Image+5',
    '/hero/hero6.jpg?height=1080&width=1920&text=Image+6',
    '/hero/hero7.jpg?height=1080&width=1920&text=Image+7'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 6000) // Change image every 6 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hero-images">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute  inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}