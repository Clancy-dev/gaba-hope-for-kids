'use client'

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const donationMethods = [
  {
    title: 'MTN Mobile Money',
    image: '/donations/mtn.jpg?height=100&width=100',
    steps: [
      'Dial *165# to access the MTN Mobile Money menu.',
      'Select "Send Money" (usually option 1).',
      'Choose "Send to Bank" (usually option 4).',
      'Select DFCU bank from the list.',
      'Enter the account number: 01280016384408',
      'SWIFT code: DFCUUGKAXXX',
      'Enter the amount you wish to send.',
      'Confirm the details.',
      'Enter your Mobile Money PIN.',
      'You\'ll receive a confirmation message.',
    ],
  },
  {
    title: 'Airtel Money',
    image: '/donations/airtel.jpg?height=100&width=100',
    steps: [
      'Dial *185# to access the Airtel Mobile Money menu.',
      'Choose "Bank Transfer" (usually option 4).',
      'Select DFCU bank from the list.',
      'Enter the account number: 01280016384408',
      'SWIFT code: DFCUUGKAXXX',
      'Enter the amount you want to send.',
      'Confirm the transaction.',
      'Enter your Airtel Money PIN.',
      'You\'ll receive a confirmation message.',
    ],
  },
]

export default function DonationTabs() {
  const [activeTab, setActiveTab] = useState("card")

  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden shadow-lg mt-2 mb-2">
      {/* Apply conditional gradient based on activeTab */}
      <div className={`p-8 text-white ${activeTab === "card" ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-green-400 to-green-600'}`}>
        <CardTitle className="text-4xl mb-3 font-bold">Make a Donation</CardTitle>
        <CardDescription className="text-orange-100 text-lg">Choose your preferred payment method and support our cause.</CardDescription>
      </div>
      <CardContent className="p-0">
        <Tabs defaultValue="card" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 p-2 min-h-[4rem] bg-blue-200">
            <TabsTrigger
              value="card"
              className={`data-[state=active]:bg-blue-600 data-[state=active]:text-white py-3 text-white text-center font-semibold transition-all ${activeTab === 'card' ? 'text-blue-600' : 'text-green-800'}`}
            >
              Card Donation
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className={`data-[state=active]:bg-white data-[state=active]:text-green-600 py-3 text-white font-semibold transition-all ${activeTab === 'mobile' ? 'text-green-600' : 'text-white'}`}
            >
              Mobile Money
            </TabsTrigger>
          </TabsList>

          <TabsContent value="card" className="p-8">
            <div className="space-y-6 text-center">
              <p className="text-xl font-bold">Donate in US Dollars ($)</p>
              
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="p-8 bg-gradient-to-b from-green-50 to-green-100">
            <div className="grid gap-8 md:grid-cols-2">
              {donationMethods.map((method, index) => (
                <Card
                  key={method.title}
                  className="overflow-hidden shadow-lg transition-all hover:shadow-xl"
                >
                  <CardHeader className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6">
                    <div className="flex items-center space-x-4">
                      <Image src={method.image} alt={method.title} width={60} height={60} className="rounded-[5px] border-[2px] border-white" />
                      <CardTitle className="text-2xl">{method.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ol className="list-decimal pl-6 space-y-3">
                      {method.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-gray-700 text-lg">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      {activeTab === "card" && (
        <CardFooter className="flex flex-col items-start space-y-6 bg-gradient-to-r from-blue-100 to-blue-200 p-8">
          <div>
            <strong className="text-xl text-blue-800 block mb-2">Account Information:</strong>
            <p className="text-lg "><strong className="text-blue-800 ">Account Name:</strong> Gaba Hope For Kids</p>
            {/* Bolded account number with responsive font size */}
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-blue-800 mb-1">Account Number: <span className="text-black">01280016384408</span></p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-extrabold text-blue-800"></p>
            <p className="text-lg"><strong className="text-blue-800">SWIFT Code:</strong> DFCUUGKAXXX</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-xl text-blue-800">Additional Information:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li className="text-lg">Donations are processed securely through our payment provider.</li>
              <li className="text-lg">You will receive a confirmation email after your donation is processed.</li>
              <li className="text-lg">For any issues or questions, please contact our support team.</li>
            </ul>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
