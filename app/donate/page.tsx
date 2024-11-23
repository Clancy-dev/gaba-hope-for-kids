'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
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
        Being Worked On......
      </AnimatedSection>

      {/* <AnimatedSection>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Make a Donation</CardTitle>
                  <CardDescription>Choose an amount or enter a custom donation</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <RadioGroup value={donationAmount} onValueChange={handleDonationChange} className="grid grid-cols-3 gap-4 mb-4">
                      {['25', '50', '100', '250', '500', '1000'].map((amount) => (
                        <div key={amount}>
                          <RadioGroupItem value={amount} id={`amount-${amount}`} className="peer sr-only" />
                          <Label
                            htmlFor={`amount-${amount}`}
                            className="flex items-center justify-center h-12 rounde d-md border-2 border-muted bg-popover hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          >
                            ${amount}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount">Custom Amount</Label>
                      <Input
                        type="number"
                        id="custom-amount"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Donate Now</Button>
                </CardFooter>
              </Card>
              <div>
                <h2 className="text-3xl font-bold mb-4">Your Impact</h2>
                <p className="mb-6">
                  Your donation directly supports our programs and initiatives, helping us to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Provide educational resources and support to underprivileged children</li>
                  <li>Offer health and nutrition programs to ensure children's well-being</li>
                  <li>Empower youth through leadership and skill-building workshops</li>
                  <li>Expand our reach to more communities in need</li>
                </ul>
                <p className="mb-6">
                  We are committed to transparency and accountability. You can trust that your donation
                  will be used effectively to create positive change in the lives of children and youth.
                </p>
                <Button variant="outline">View Our Financial Reports</Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection> */}

      {/* <AnimatedSection>
        <section className="py-16 bg-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Other Ways to Give</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Giving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Become a sustaining donor and provide ongoing support to our programs.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Corporate Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Double your impact by checking if your employer offers donation matching.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Check Eligibility</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Planned Giving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Leave a lasting legacy by including Gaba Hope For Kids in your estate planning.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection> */}
    </div>
  )
}