import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="mb-4">Gaba Hope For Kids is dedicated to improving the lives of children in need through education, healthcare, and community support.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-300">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-blue-300">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-blue-300">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link href="/programs" className="hover:text-blue-300">What we do</Link></li>
              <li><Link href="/gallery" className="hover:text-blue-300">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-blue-300">About</Link></li>
              <li><Link href="/donate" className="hover:text-blue-300">Donate</Link></li>
              <li><Link href="/blog" className="hover:text-blue-300">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <address className="not-italic">
              <p>P.O Box 115207</p>
              <p>Wakiso District</p>
              <p>Sub-county: Makindye Sabbagabo</p>
              <p>County: Mutundwe</p>
              <p>Division: Bunamwaya</p>
              <p className="mt-4">
                <strong>Phone:</strong><br />
                +256 708 856553 / +256 787 343415
              </p>
              <p className="mt-2">
                <strong>Email:</strong><br />
                <a href="mailto:gabahopeforkids@gmail.com" className="hover:text-blue-300">gabahopeforkids@gmail.com</a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-500 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Gaba Hope For Kids. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

