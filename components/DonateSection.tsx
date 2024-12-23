'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'


export default function DonateSection() {
  return (
    <section className="donate-section py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Make a Difference Today</h2>
          <p className="text-lg sm:text-xl text-black">You can donate through the following channels:</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-8"
        >
          <Link href="https://www.mchanga.africa/fundraiser/101468" passHref>
            <div className="image-container bg-white">
              <Image
                src="/donate1.jpg"
                alt="Donate Now"
                layout="fill"
                objectFit="cover"
                className="pulsing-image"
              />
            </div>
          </Link>
          <Link href="https://africagiving.org/organisations/339" passHref>
            <div className="image-container bg-white">
              <Image
                src="/donate3.png"
                alt="Support Us"
                layout="fill"
                objectFit="cover"
                className="pulsing-image"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

