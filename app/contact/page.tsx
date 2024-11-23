'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { Label } from '@/components/ui/label'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
// import { Mail, Phone, MapPin } from 'lucide-react'

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
  return (
    <div className="min-h-screen">
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
        Being Worked on......
      </AnimatedSection>

      {/* <AnimatedSection>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="johndoe@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help?" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message here..." required />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Send Message</Button>
                </CardFooter>
              </Card>
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p>info@gabahopeforkids.org</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p>+1 (123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p>123 Hope Street, City, Country</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection> */}

      <AnimatedSection>
        <section className="py-16 bg-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { q: "How can I volunteer?", a: "Visit our Get Involved page to learn about volunteer opportunities." },
                { q: "Where does my donation go?", a: "Your donation directly supports our programs for children and youth." },
                { q: "Can I sponsor a child?", a: "Yes, we offer child sponsorship programs. Contact us for more information." },
                { q: "Do you offer internships?", a: "We occasionally offer internships. Check our Careers page for current openings." },
              ].map((faq, index) => (
                <div key={index} className="text-left">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}