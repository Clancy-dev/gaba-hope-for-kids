'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { Button } from '@/components/ui/button'
import { ErrorBoundary } from 'react-error-boundary'
import Link from 'next/link'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Sample data (replace with your actual data)
const childrenData = [
  { id: 1, name: 'Iratuzi Promise', image: '/children/child1.jpg?height=300&width=200&text=Emma', background: 'We found her when she is not studying just staying home and moving on streets we showed her love and provide for her some basic needs. She is currently in Primary 3. Your support can really push her to greater heights.' },
  { id: 2, name: 'Aisha Naluwugge', image: '/children/child2.jpg?height=300&width=200&text=Liam', background: 'Her mother had abandoned her and shw was no longer studying. She was living in the slum areas of Kiragwe we interviend and brought her heart back to school and she is now in Primary 3' },
  { id: 3, name: 'Kaweest Shamin', image: '/children/child3.jpg?height=300&width=200&text=Sophia', background: 'He was living in the steets after his parents failed to raise money to take him to school so we offered a hand and we brought him back to school.' },
  { id: 4, name: 'Ayinamanyi Marvin', image: '/children/child4.jpg?height=300&width=200&text=Noah', background: 'His mother is a poor lady who cannot support them to attain education so due to our carrying heart we ashered in a hand to support him to continue with his studies.' },
  { id: 5, name: 'Kigozi Livingston', image: '/children/child5.jpg?height=300&width=200&text=Ava', background: 'He is now in Primary 1. We thank God. Her mother fries cassava where she cannot afford to pay rent, educate the little boy and brothers so we helped him to educate the boy and push him up.' },
  { id: 6, name: 'Tulinawe Emmanuel', image: '/children/child6.jpg?height=300&width=200&text=Ethan', background: 'His parents are hand capped and cannot do anything to educate the boy. We found him looking for bottles to sell, we welcomed him and attracted him to education to Gaba Hope for Kids so he is now studying and abit happy. ' },
  { id: 7, name: 'Gawalane Sulait', image: '/children/child7.jpg?height=300&width=200&text=Mia', background: 'He lives with an old grandmother and she is handcapped, cannot afford even to feed them at home so Sulait is now in Primary 3 and we believe he will be a strong citizen.' },
  { id: 8, name: 'Gawalane Alinansi', image: '/children/child8.jpg?height=300&width=200&text=Oliver', background: 'He comes from  a very humble background with no one to support him and we found him sitted home and we offered a helping hand.We hope to see you shine out there.' },
  { id: 9, name: 'Akampumpa Rakeli', image: '/children/child9.jpg?height=300&width=200&text=Isabella', background: 'She is a young briliant girl coming from a very humble background. H er parents are peasant farmers and hardly could offer in a hand to help her now she is in middle class. Rakeli you must shine.' },
  { id: 10, name: 'Kato Kalyago', image: '/children/child10.jpg?height=300&width=200&text=Lucas', background: 'We found him rearing cows of the neighbours, having wounds  and on the shoes and the parent had abandoned him so we cleaned him, gave him clothes, books, food and put him back into school. Kato keep it up. God is there for you.' },
  { id: 11, name: 'Sempijja Jeremiah', image: '/children/child11.jpg?height=300&width=200&text=Lucas', background: 'He is an orphan having no one to help him we found him leaving in the street and we became a home for him he is now in Primary 1.' },
  { id: 12, name: 'Miracle Isaiah', image: '/children/child12.jpg?height=300&width=200&text=Lucas', background: 'His mom got pregant and the husband abandoned them she lost hope and could really eat food so she brought the little boy at Gaba Hope For kids and he is now three years. Next year he will start studying.' },
  { id: 13, name: 'Natukunda Dorreen', image: '/children/child13.jpg?height=300&width=200&text=Lucas', background: 'She has a beautiful voice and aspires to be a singer to bring joy to others.' },
  { id: 14, name: 'Twaweeba Jemimah', image: '/children/child14.jpg?height=300&width=200&text=Lucas', background: 'Is a kind 7-year-old who enjoys helping in the community garden.' },
  { id: 15, name: 'Natukunda Jovia', image: '/children/child15.jpg?height=300&width=200&text=Lucas', background: 'She, 9, is a talented artist who dreams of having her own gallery one day.' },
  { id: 16, name: 'Nantale Amara', image: '/children/child16.jpg?height=300&width=200&text=Lucas', background: 'She is a curious 5-year-old who loves nature and wants to be a scientist.' },
  { id: 17, name: 'Muduuwa Aisha', image: '/children/child17.jpg?height=300&width=200&text=Lucas', background: 'She is an 8-year-old math whiz who dreams of becoming an engineer.' },
  { id: 18, name: 'Nadeebe Aminah', image: '/children/child18.jpg?height=300&width=200&text=Lucas', background: 'She has a gift for languages and wants to be a translator.' },
  { id: 19, name: 'Lubega Abdullah', image: '/children/child19.jpg?height=300&width=200&text=Lucas', background: 'He has a problem with eyes and he lived with only her mother who is a single poor mom. She cannot even provide food to him. We hope to continue supporting him.' },
  { id: 20, name: 'Adam Aziz', image: '/children/child20.jpg?height=300&width=200&text=Lucas', background: 'He is a creative 5-year-old who loves building things and aspires to be an architect.' },
  { id: 21, name: 'Kalinda Chosen', image: '/children/child21.jpg?height=300&width=200&text=Lucas', background: 'He is an energetic 6-year-old with a passion for sports and helping others.' },
  { id: 22, name: 'Mutaagubya Robert', image: '/children/child22.jpg?height=300&width=200&text=Lucas', background: 'He loves animals and hopes to become a veterinarian to help them.' },
  { id: 23, name: 'Mukisa Elijah', image: '/children/child23.jpg?height=300&width=200&text=Lucas', background: 'He also has a gift for languages and wants to be a translator.' },
  { id: 24, name: 'Kazibwe Rodney', image: '/children/child24.jpg?height=300&width=200&text=Lucas', background: 'He is a creative 9-year-old who loves building things and aspires to be an architect.' },
]

function ChildCard({ child }: { child: typeof childrenData[0] }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={child.image}
          alt={`Photo of ${child.name}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl text-orange-500 font-semibold text-center mb-2 font">{child.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{child.background}</p>
        <Link href="/donate">
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">     
              Donate to {child.name}
        </Button>
        </Link>
      </div>
    </div>
  )
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert" className="text-red-500">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default function ChildDonationCards() {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <section className="w-full max-w-8xl mx-auto py-12 px-4" aria-label="Child Donation Cards">
      <h2 className="text-3xl font-bold text-center mb-8 text-white font">Help a Child Today</h2>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {domLoaded && (
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            {childrenData.map((child) => (
              <SwiperSlide key={child.id}>
                <ChildCard child={child} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </ErrorBoundary>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": childrenData.map((child, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Person",
              "name": child.name,
              "description": child.background
            }
          }))
        })
      }} />
    </section>
  )
}

