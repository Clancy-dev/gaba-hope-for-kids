"use client"

// import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Marquee from "@/components/ui/marquee";

// Sample data for the cards
const people = [
  { id: 1, name: "Maniragaba Elijah", role: "Founder", image: "/team/team1.jpg?height=100&width=100" },
  { id: 2, name: "Serukundo Selestine", role: "Co-Founder", image: "/team/team2.jpg?height=100&width=100" },
  { id: 3, name: "Nansubuga Bibiana", role: "Treasurer", image: "/team/team3.jpg?height=100&width=100" },
  { id: 4, name: "Maniliho Ruth", role: "Secretary", image: "/team/team4.jpg?height=100&width=100" },
  { id: 5, name: "Asaba Edith", role: "Volunteer", image: "/team/team5.jpg?height=100&width=100" },
  { id: 6, name: "Auma Sharon", role: "Volunteer boss", image: "/team/team6.png?height=100&width=100" }
]

export function MovingCards() {
  

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10">
      <div className="flex">


      <Marquee pauseOnHover className="[--duration:20s]">
        {people.map((person) => (
           <Card key={person.id} className="flex-shrink-0 w-64 mx-4 bg-white">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{person.name}</h3>
              <p className="text-sm text-gray-500 text-center">{person.role}</p>
            </CardContent>
          </Card> 

        ))}
      </Marquee>
   
          
      </div>
    </div>
  )
}

