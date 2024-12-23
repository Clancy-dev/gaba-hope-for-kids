'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Image from 'next/image'

const verifiedCompanies = [
  { name: 'Company A', logo: '/r1.png' },
  { name: 'Company B', logo: '/r2.png' },
  { name: 'Company C', logo: '/r3.jpg' },
  { name: 'Company D', logo: '/r4.png' },
  { name: 'Company E', logo: '/r5.jpg' },
]

export default function FinalSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      ref={ref} 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 paragraph text-gray-700">Accredited</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
        >
          {verifiedCompanies.map((company) => (
            <div key={company.name} className="w-32 h-32 relative">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

