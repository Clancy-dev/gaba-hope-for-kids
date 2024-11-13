'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Heart, Book, Home, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSentence, setCurrentSentence] = useState(0)

  const sentences = [
    "Together, we can make a difference.",
    "Empowering communities, changing lives.",
    "Your support creates lasting impact."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const services = [
    { icon: Heart, title: 'Healthcare', description: 'Providing essential medical care to those in need.' },
    { icon: Book, title: 'Education', description: 'Empowering communities through knowledge and learning.' },
    { icon: Home, title: 'Housing', description: 'Building safe and comfortable homes for families.' },
  ]

  const testimonials = [
    { name: 'John Doe', role: 'Volunteer', quote: 'Working with this charity has been an incredibly rewarding experience.', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Jane Smith', role: 'Beneficiary', quote: 'The support I received changed my life. I\'m forever grateful.', image: '/placeholder.svg?height=100&width=100' },
    { name: 'Mike Johnson', role: 'Donor', quote: 'I\'ve seen firsthand the impact of my donations. It\'s truly inspiring.', image: '/placeholder.svg?height=100&width=100' },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-orange-500">CharityName</a>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className="md:flex space-y-2 md:space-y-0 md:space-x-4">
              <li><a href="#services" className="hover:text-orange-500">Services</a></li>
              <li><a href="#testimonials" className="hover:text-orange-500">Testimonials</a></li>
              <li><a href="#about" className="hover:text-orange-500">About</a></li>
              <li><a href="#donate" className="hover:text-orange-500">Donate</a></li>
              <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 h-24 transition-all duration-500 ease-in-out">
            {sentences[currentSentence]}
          </h1>
          <a href="#donate" className="bg-white text-orange-500 px-8 py-3 rounded-full font-bold hover:bg-orange-100 transition duration-300">Donate Now</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <service.icon className="w-16 h-16 mx-auto mb-4 text-orange-500" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <blockquote className="text-center italic mb-4">{testimonial.quote}</blockquote>
                <p className="text-center font-semibold">{testimonial.name}, {testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="mb-4">We are a dedicated charity organization committed to making a positive impact in our community. Our mission is to provide support, resources, and hope to those in need.</p>
            <p>With over 20 years of experience, we've helped thousands of individuals and families overcome challenges and build better lives.</p>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg?height=400&width=600" alt="About Us" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="bg-orange-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
          <p className="mb-8">Your donation can change lives. Every contribution, no matter how small, helps us continue our mission.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[10, 25, 50, 100].map((amount) => (
              <button key={amount} className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition duration-300">
                ${amount}
              </button>
            ))}
            <button className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition duration-300">
              Other
            </button>
          </div>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition duration-300">
            Donate Now
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">CharityName</h3>
              <p>123 Charity Street, City, Country</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@charityname.org</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-orange-500">Services</a></li>
                <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#donate" className="hover:text-orange-500">Donate</a></li>
                <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-orange-500"><Facebook /></a>
                <a href="#" className="hover:text-orange-500"><Twitter /></a>
                <a href="#" className="hover:text-orange-500"><Instagram /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} CharityName. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}