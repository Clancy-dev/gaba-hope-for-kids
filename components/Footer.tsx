"use client"
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Gaba Hope For Kids</h3>
            <p className="mb-4">Empowering children and youth since 2023</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-yellow-300 transition-colors">
                <Facebook />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-yellow-300 transition-colors">
                <Twitter />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-yellow-300 transition-colors">
                <Instagram />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-yellow-300 transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-yellow-300 transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-yellow-300 transition-colors">Our Programs</Link></li>
              <li><Link href="/get-involved" className="hover:text-yellow-300 transition-colors">Get Involved</Link></li>
              <li><Link href="/blog" className="hover:text-yellow-300 transition-colors">Blog</Link></li>
              <li><Link href="/gallery" className="hover:text-yellow-300 transition-colors">Gallery</Link></li>
              <li><Link href="/donate" className="hover:text-yellow-300 transition-colors">Donate</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact Us</Link></li>
              <li><Link href="/find-us" className="hover:text-yellow-300 transition-colors">Find Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2" />
                <a href="mailto:info@gabahopeforkids.org" className="hover:text-yellow-300 transition-colors">gabahopeforkids@gmail.com</a>
              </li>
              
              <li className="flex items-center">
                <Phone className="mr-2" />
                <a href="tel:+11234567890" className="hover:text-yellow-300 transition-colors">+256 708 856553/ +256 787 343415</a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2" />
                <span>P.O Box 115207, Wakiso. Mutundwe Uganda</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Blog</h4>
            <p className="mb-4">Stay updated with our latest news and events.</p>
            
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>&copy; {new Date().getFullYear()} Gaba Hope For Kids. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="text-sm hover:text-yellow-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-sm hover:text-yellow-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}