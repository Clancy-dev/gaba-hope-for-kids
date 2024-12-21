'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import HeroSection from '@/components/HeroSection'
import { BorderBeam } from '@/components/ui/border-beam'

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

export default function Home() {
  return (
    <div className="min-h-screen mt-[72px]">
      <HeroSection />

      <AnimatedSection>
        <section className="py-16 bg-yellow-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 heading-font">Our Mission</h2>
            <p className="text-xl text-center max-w-3xl mx-auto">
              At Gaba Hope For Kids, we strive to create a world where every child has the opportunity to thrive,
              learn, and build a bright future. Through our programs and your support, we're making a difference
              in the lives of children and youth every day.
            </p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 heading-font">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
              {[
                { title: 'Education Support', icon: '🎓', word:'We provide education support through quality learning resources, mentorship, and access to education for underprivileged children.' },
                { title: 'Health & Nutrition', icon: '🍎', word:'We deliver healthcare assistance through nutritious sustenance, wellness programs, and medical accessibility for underserved children.'},
                { title: 'Youth Empowerment', icon: '💪', word:'We empower disenfranchised youth through leadership development, personal growth initiatives, and community engagement opportunities.'},
              ].map((program) => (
                <div key={program.title} className="relative text-center p-6 shadow-mdflex min-h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl ">
                  <BorderBeam size={250} duration={12} delay={9} /> 
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p>{program.word}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-16 bg-yellow-100 text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Make a Difference Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your support can change lives. Join us in our mission to bring hope and opportunities to children in need.
            </p>
            <div className="flex justify-center space-x-4">
  
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}

