'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function ThankYouSectionDonate() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-accent/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-green-700">Thank You for Your Support</h2>
          <p className="text-xl max-w-2xl mx-auto text-primary/80">
            Your generosity makes a world of difference in the lives of vulnerable children. 
            With your help, we can continue to provide love, care, and hope to those who need it most. 
            From the bottom of our hearts, thank you for being a part of the Gaba Hope for Kids family.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

