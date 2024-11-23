'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const donationMethods = [
  {
    title: 'MTN Mobile Money',
    image: '/donations/mtn.jpg?height=100&width=100',
    steps: [
      'Dial *165# to access the MTN Mobile Money menu.',
      'Select "Send Money" (usually option 1).',
      'Choose "Send to Bank" (usually option 4).',
      'Select DFCU bank from the list.',
      'Enter the account number: 01280016384408',
      'SWIFT code: DFCUUGKAXXX',
      'Enter the amount you wish to send.',
      'Confirm the details.',
      'Enter your Mobile Money PIN.',
      'You\'ll receive a confirmation message.',
    ],
  },
  {
    title: 'Airtel Money',
    image: '/donations/airtel.jpg?height=100&width=100',
    steps: [
      'Dial *185# to access the Airtel Mobile Money menu.',
      'Choose "Bank Transfer" (usually option 4).',
      'Select DFCU bank from the list.',
      'Enter the account number: 01280016384408',
      'SWIFT code: DFCUUGKAXXX',
      'Enter the amount you want to send.',
      'Confirm the transaction.',
      'Enter your Airtel Money PIN.',
      'You\'ll receive a confirmation message.',
    ],
  },
]

export default function DonationMethods() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(donationMethods.length).fill(false))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section className="bg-blue-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-4xl font-bold text-blue-900">Donation Methods</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {donationMethods.map((method, index) => (
            <Card
              key={method.title}
              ref={(el) => (cardRefs.current[index] = el) as any}
              className={`transition-all duration-1000 ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image src={method.image} alt={method.title} width={50} height={50} />
                  <CardTitle>{method.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <ol className="list-decimal pl-5 font-bold">
                    {method.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="mb-2">
                        {step}
                      </li>
                    ))}
                  </ol>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

