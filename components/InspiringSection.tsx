import { Heart, Mail, Phone } from 'lucide-react'

export default function InspiringSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-100 to-pink-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-purple-800 heading-font">Your Message Can Change Lives</h2>
        <p className="text-lg mb-8 text-gray-700">
          Every inquiry, every message, and every call is a step towards bringing hope to a child in need. 
          Your communication could be the beginning of a beautiful journey of change and support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Heart className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-purple-800">Show You Care</h3>
            <p className="text-gray-600">Your interest means the world to the children we support.</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-purple-800">Start a Conversation</h3>
            <p className="text-gray-600">Your message could be the first step in changing a child's life.</p>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-purple-800">Be the Difference</h3>
            <p className="text-gray-600">Your call might be the support a child has been waiting for.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

