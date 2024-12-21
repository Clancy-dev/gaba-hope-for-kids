'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import ChildDonationCards from '@/components/ChildDonationCards'

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

const programs = [
  {
    title: 'Education Support',
    description: 'We are dedicated to empowering underprivileged children by providing access to quality education and essential learning resources, ensuring every child can reach their full potential. Our programs eliminate barriers to education, such as lack of school supplies and inadequate teaching materials, while offering mentorship, emotional support, and personal development. By investing in education, we create empowered leaders who will contribute to their communities and build a better tomorrow.',
    image: '/education.webp?height=400&width=600',
  },
  {
    title: 'Youth Empowerment',
    description: 'We equip young people with essential skills, leadership training, and confidence to become impactful leaders in their communities. Through youth leadership programs, personal development workshops, and hands-on learning, we help build the skills and self-confidence needed for success and positive change in their communities.',
    image: '/empowerment.webp?height=400&width=600',
  },
  {
    title: 'Health & Nutrition',
    description: 'Ensuring children have access to proper healthcare, nutritious meals, and support for healthy development is central to our mission. We provide affordable healthcare, nutritious food, and wellness programs to promote physical and mental health. Our initiatives help children build a solid foundation for lifelong well-being and success.'
,
    image: '/nutrition.webp?height=400&width=600',
  }
 
 
]

export default function Programs() {
  return (
    <div className="min-h-screen mt-[72px]">
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 heading-font">Our Programs</h1>
          <p className="text-xl text-center max-w-3xl mx-auto paragraph">
            Discover the various ways Gaba Hope For Kids is making a difference in the lives of children and youth.
          </p>
        </div>
      </section>

      {programs.map((program, index) => (
        <AnimatedSection key={program.title}>
          <section className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-yellow-100'}`}>
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div>
                  <h2 className="text-3xl font-bold mb-4 heading-font">{program.title}</h2>
                  <p className="mb-6 text-red-950 paragragh">{program.description}</p>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src={program.image}
                    alt="Gaba Hope For Kids - Charity Images"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      ))}
     

      <AnimatedSection>
        <section className="py-16 bg-blue-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 heading-font">Support Our Programs</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto paragraph">
              Your contribution can help us expand our programs and reach more children in need.
              Together, we can create a brighter future for the next generation.
            </p>
            <ChildDonationCards/>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}