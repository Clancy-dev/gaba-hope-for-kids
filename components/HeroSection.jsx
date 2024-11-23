'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
// import ShimmerButton from './ui/shimmer-button'

const backgroundImages = [
  '/hero1.png?height=600&width=1200&text=Image1',
  '/hero2.png?height=600&width=1200&text=Image2',
  '/hero3.png?height=600&width=1200&text=Image3',
  '/hero4.png?height=600&width=1200&text=Image4',
  '/hero5.png?height=600&width=1200&text=Image5',
]

const welcomeTexts = [
  { title: "Welcome to Gaba Hope For Kids", subtitle: "Where every child's potential is nurtured" },
  { title: "Empowering Young Lives", subtitle: "Building a foundation for a brighter tomorrow" },
  { title: "Join Our Mission", subtitle: "Together, we can make a difference" },
  { title: "Changing Lives, One Child at a Time", subtitle: "Your support creates lasting impact" },
  { title: "Hope Starts Here", subtitle: "Giving children the chance they deserve" },
]

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTextVisible, setIsTextVisible] = useState(true)

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 6000)

    const textInterval = setInterval(() => {
      setIsTextVisible(false)
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % welcomeTexts.length)
        setIsTextVisible(true)
      }, 500)
    }, 6000)

    return () => {
      clearInterval(imageInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <section className="relative  min-h-[50vh] sm:min-h-[70vh] md:min-h-[90vh] lg:min-h-[100vh] max-w-[100%] overflow-hidden p-6">
      {backgroundImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Background ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0  bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className={`transition-all duration-500 ${isTextVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 p-4 ">{welcomeTexts[currentTextIndex].title}</h1>
            <p className="text-xl md:text-2xl mb-8 ">{welcomeTexts[currentTextIndex].subtitle}</p>
          </div>
          <Button asChild size="lg" className=" border-b-[1px] border-l-[1px]  bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/donate">Donate Now</Link>
            {/* <ShimmerButton className="shadow-2xl"/> */}
          </Button>
        </div>
      </div>
    </section>
  )
}

