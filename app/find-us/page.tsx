'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import { BorderBeam } from '@/components/ui/border-beam'
// import Particles from '@/components/ui/particles'


interface AnimatedSectionProps {
  children: React.ReactNode
}


const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
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

export default function FindUs() {
  // const color="red"

  return (
    <div className="min-h-screen mt-[72px]">
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Find Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Visit our office or reach out to us. We're always here to help and answer any questions you may have about Gaba Hope For Kids.
          </p>
        </div>
      </section>

      <AnimatedSection>
     
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Card className='relative'> 
                <BorderBeam size={250} duration={12} delay={9} />      
                  <CardHeader>
                    <CardTitle>Our Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 ">  
                        <div>
                          <h3 className="font-semibold flex"><MapPin className="text-blue-600" />Address</h3>
                          <p>P.O Box 115207</p>
                          <p>Wakiso District</p>
                          <p>Sub-county: Makindye Sabbagabo</p>
                          <p>County: Mutundwe</p>
                          <p>Division: Bunamwaya</p>

                        </div>
                        
                      </div>
                      <div className="flex items-center space-x-4">
                        <Phone className="text-blue-600" />
                        <div>
                          <h3 className="font-semibold">Phone</h3>
                          <p>+256 708 856553/ +256 787 343415</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Mail className="text-blue-600" />
                        <div>
                          <h3 className="font-semibold">Email</h3>
                          <p>gabahopeforkids@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="mt-8 relative">
                <BorderBeam size={250} duration={12} delay={9} />  
                  <CardHeader>
                    <CardTitle>Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li><span className="font-semibold">Monday - Sunday:</span> Open 24 hours</li>
                      
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="h-[400px] md:h-full w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1618.0130505286274!2d32.5431150948258!3d0.2744863907755801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbdbee59fa053%3A0x97e8cb94ada27143!2sGaba%20Hope%20for%20kids%20Uganda!5e0!3m2!1sen!2sug!4v1732093169188!5m2!1sen!2sug" 
                  className="w-full h-full border-0" 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-16 bg-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Get Directions</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Planning to visit us? Use the map above or click the button below to get directions to our office.
            </p>
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=Gaba+Hope+for+kids+Uganda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Get Directions
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}