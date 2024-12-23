'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function EnhancedDonateButton() {
  const [isPulsing, setIsPulsing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true)
      setTimeout(() => setIsPulsing(false), 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Button
      asChild
      size="lg"
      className={`
        relative overflow-hidden 
        bg-gradient-to-r from-orange-500 to-orange-600
        hover:from-orange-600 hover:to-orange-700
        text-white font-semibold
        border-b-2 border-l-2 border-white
        rounded-md shadow-lg
        transition-all duration-300 ease-in-out
        ${isPulsing ? 'animate-pulse' : ''}
      `}
    >
      <Link href="/donate" className="z-10 relative">
        Donate Now
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 subtle-shimmer" />
      </Link>
    </Button>
  )
}

