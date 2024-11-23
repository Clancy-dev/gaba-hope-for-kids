'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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

const galleryImages = [
  { src: "/Gallery/gallery1.jpg?height=400&width=600", alt: "Children outside classroom", caption: "Education program in action" },
  { src: "/Gallery/gallery2.jpg?height=400&width=600", alt: "Volunteers painting", caption: "Community service day" },
  { src: "/Gallery/gallery3.jpg?height=400&width=600", alt: "Children playing sports", caption: "Youth sports program" },
  { src: "/Gallery/gallery4.jpg?height=400&width=600", alt: "Art class", caption: "Creative arts workshop" },
  { src: "/Gallery/gallery5.jpg?height=400&width=600", alt: "Fundraising event", caption: "Annual charity gala" },
  { src: "/Gallery/gallery6.jpg?height=400&width=600", alt: "Children receiving meals", caption: "Nutrition program" },
  { src: "/Gallery/gallery7.jpg?height=400&width=600", alt: "Computer class", caption: "Technology skills training" },
  { src: "/Gallery/gallery8.jpg?height=400&width=600", alt: "Group photo", caption: "Our amazing volunteers" },
  { src: "/Gallery/gallery9.jpg?height=400&width=600", alt: "Children reading", caption: "Literacy program" },
  { src: "/Gallery/gallery10.jpg?height=400&width=600", alt: "Children reading", caption: "Literacy program" },
  { src: "/Gallery/gallery11.jpg?height=400&width=600", alt: "Children reading", caption: "Literacy program" },
  { src: "/Gallery/gallery12.jpg?height=400&width=600", alt: "Children reading", caption: "Literacy program" },
  { src: "/Gallery/gallery13.jpg?height=400&width=600", alt: "Children reading", caption: "Literacy program" },
  { src: "/Gallery/gallery14.jpg?height=400&width=600", alt: "Children reading", caption: "Literacy program" },
  { src: "/Gallery/gallery15.jpg?height=400&width=600", alt: "Children reading", caption: "Literacy program" },
  { src: "/Gallery/gallery16.jpg?height=400&width=600", alt: "Children reading", caption: "Literacy program" },
  { src: "/Gallery/gallery17.jpg?height=400&width=600", alt: "Children reading", caption: "Literacy program" },
  { src: "/Gallery/gallery18.jpg?height=400&width=600", alt: "Children reading", caption: "Literacy program" },
  { src: "/Gallery/gallery19.jpg?height=400&width=600", alt: "Children reading", caption: "Literacy program" },

]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Explore the moments we've captured in our journey to empower children and youth.
          </p>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Button className="p-0 w-full h-auto">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover rounded-lg transition-transform hover:scale-105"
                      />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>{image.alt}</DialogTitle>
                      <DialogDescription>{image.caption}</DialogDescription>
                    </DialogHeader>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-16 bg-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Share Your Moments</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Have you participated in our programs or events? We'd love to see your photos!
              Share your experiences with us and be featured in our gallery.
            </p>
            {/* <Button>Submit Your Photos</Button> */}
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}