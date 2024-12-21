'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'
import InspiringSection from '@/components/InspiringSection'
import ContactForm from '@/components/ContactForm'

// Define the type for the form submission handler
type FormData = {
  // Define the expected shape of your form data here
  name: string;
  email: string;
  message: string;
};

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

export default function Contact() {
  const router = useRouter()

  // Typing the form data argument to match the expected shape
  const handleSubmit = async (formData: FormData) => {
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    
    // Simulate a 4-second loading time
    await new Promise(resolve => setTimeout(resolve, 4000))
    
    // Redirect to the thank you page
    router.push('/thank-you')
  }

  return (
    <div className="min-h-screen mt-[72px]">
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question about our programs,
            want to volunteer, or are interested in partnering with us, please don't hesitate to reach out.
          </p>
        </div>
      </section>
     
      <AnimatedSection>
        <div className="container mx-auto p-2 bg-gradient-to-br from-yellow-100 via-orange-200 to-blue-300">
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <InspiringSection />
      </AnimatedSection>
    </div>
  )
}
