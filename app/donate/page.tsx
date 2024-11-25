'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import ThankYouMessage from '@/components/ThankYouMessage'
import DonationMethods from '@/components/DonationMethods'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState('50')
  const [customAmount, setCustomAmount] = useState('')

  const handleDonationChange = (value: string) => {
    setDonationAmount(value)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setDonationAmount('custom')
  }

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Donate to Gaba Hope For Kids</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Your generous donation helps us continue our mission of empowering children and youth.
            Every contribution, no matter the size, makes a difference.
          </p>
        </div>
      </section>

      <AnimatedSection>
      <main className="min-h-screen bg-white">
      <Hero />
      <DonationMethods />
      <ThankYouMessage />
      <FAQ />
    </main>
      </AnimatedSection>


      
    </div>
  )
}