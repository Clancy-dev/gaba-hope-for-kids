'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import NumberTicker from '@/components/ui/number-ticker'
import { MovingCards } from "@/components/MovingCards"

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

export default function About() {
  return (
    <div className="min-h-screen mt-[72px]">
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 heading-font">About Gaba Hope For Kids</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Founded in 2021, Gaba Hope For Kids is dedicated to improving the lives of children and youth
            through education, health initiatives, and empowerment programs.
          </p>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="mb-4">
                  Gaba Hope For Kids was born out of a passion to make a difference in the lives of underprivileged
                  children and youth. Our founders witnessed firsthand the challenges faced by young people in
                  communities lacking resources and opportunities.
                </p>
                <p>
                  Inspired by the resilience and potential of these children, we set out to create an organization
                  that would provide support, education, and hope for a brighter future.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/about.jpg?height=400&width=600"
                  alt="Gaba Hope For Kids founders"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <main className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-8">Our Team</h1>
          <MovingCards />
        </main>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-16 bg-yellow-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Compassion', description: 'We approach our work with empathy and understanding.' },
                { title: 'Integrity', description: 'We uphold the highest ethical standards in all our actions.' },
                { title: 'Innovation', description: 'We seek creative solutions to complex challenges.' },
              ].map((value) => (
                <div key={value.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: 1000, description: 'Children Supported' },
                { number: 50, description: 'Community Partners' },
                { number: 10, description: 'Educational Programs' },
                { number: 5, description: 'Countries Reached' },
              ].map((stat) => (
                <div key={stat.description} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <NumberTicker value={stat.number} />
                  </div>
                  <div>{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
