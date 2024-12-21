'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'

const galleryImages = [
  { src: "/new/new1.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new2.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new3.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new4.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new5.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new6.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new7.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new8.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new9.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new10.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new11.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new12.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new13.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new14.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new15.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new16.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new17.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new18.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new19.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new20.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new21.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new22.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new23.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new24.png?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new25.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new26.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new27.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new28.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new29.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new30.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new31.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new32.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new33.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new34.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new35.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new36.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new37.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new38.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new39.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new40.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new41.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new42.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new43.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new44.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new46.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new47.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new48.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new49.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new50.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new51.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new52.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new53.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/new/new54.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery1.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery2.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery3.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery4.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery5.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery6.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery7.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery8.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery9.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery10.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery11.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery12.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery13.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery14.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery15.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery16.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery17.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery18.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },
  { src: "/Gallery/gallery19.jpg?height=400&width=600", alt: "Gaba Hope For Kids: Children engrossed in reading colorful books in a cozy library corner" },



]

const AnimatedImage = ({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) => {
  const ref = useRef(null)
  const [hasRotated, setHasRotated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRotated) {
          setHasRotated(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasRotated])

  return (
    <motion.div
      ref={ref}
      initial={{ rotate: hasRotated ? 0 : 720 }}
      animate={{ rotate: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-64 object-cover rounded-lg cursor-pointer"
      />
    </motion.div>
  )
}

const Lightbox = ({ image, onClose, onPrev, onNext, totalImages, currentIndex }: {
  image: typeof galleryImages[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  totalImages: number;
  currentIndex: number;
}) => {
  const [scale, setScale] = useState(1)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center heading-font"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <motion.div
          className="relative"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            className="max-w-full max-h-[80vh] object-contain"
            style={{ transform: `scale(${scale})` }}
          />
          <div className="absolute top-4 right-4 text-white">
            <p className="text-sm">{currentIndex + 1} / {totalImages}</p>
          </div>
        </motion.div>
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 text-white" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 text-white" onClick={onPrev}>
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 text-white" onClick={onNext}>
          <ChevronRight className="h-8 w-8" />
        </Button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          <Button variant="ghost" size="icon" className="text-white" onClick={() => setScale(Math.max(1, scale - 0.1))}>
            <ZoomOut className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white" onClick={() => setScale(Math.min(3, scale + 0.1))}>
            <ZoomIn className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImageIndex(index)
  const closeLightbox = () => setSelectedImageIndex(null)
  const goToPrevImage = () => setSelectedImageIndex((prev) => (prev === null || prev === 0) ? galleryImages.length - 1 : prev - 1)
  const goToNextImage = () => setSelectedImageIndex((prev) => (prev === null || prev === galleryImages.length - 1) ? 0 : prev + 1)

  return (
    <div className="min-h-screen bg-gradient-to-b mt-[72px] from-blue-50 to-green-50">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Our Gallery of Hope</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-600">
            Witness the transformative power of compassion through these captured moments of joy, growth, and community.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <AnimatedImage
                key={index}
                src={image.src}
                alt={image.alt}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImageIndex !== null && (
          <Lightbox
            image={galleryImages[selectedImageIndex]}
            onClose={closeLightbox}
            onPrev={goToPrevImage}
            onNext={goToNextImage}
            totalImages={galleryImages.length}
            currentIndex={selectedImageIndex}
          />
        )}
      </AnimatePresence>

      <section className="py-16 bg-green-100 heading-font">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-800">Inspiring Change, One Child at a Time</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
            At Gaba Hope for Kids, we believe in the power of opportunity. Every smile, every achievement, and every life
            touched is a testament to the incredible impact we can make when we come together. Join us in our mission to
            create a brighter future for children in need.
          </p>
         
        </div>
      </section>
    </div>
  )
}

