'use client'

import { useState, useEffect } from 'react'
import { Home, Briefcase, Info, Heart, BookOpen, Search, Phone, Menu, X, LucideImage } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const links = [
  { name: 'Home', icon: <Home className="w-4 h-4" />, href: '/' },
  { name: 'What we do', icon: <Briefcase className="w-4 h-4" />, href: '/programs' },
  { name: 'Gallery', icon: <LucideImage className="w-4 h-4" />, href: '/gallery' },
  { name: 'About', icon: <Info className="w-4 h-4" />, href: '/about' },
  { 
    name: 'Donate', 
    icon: (
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-600 animate-pulse">
        <Heart className="w-4 h-4 text-white" />
      </div>
    ), 
    href: '/donate' 
  },
  { name: 'Blog', icon: <BookOpen className="w-4 h-4" />, href: '/blog' },
  { name: 'Find us', icon: <Search className="w-4 h-4" />, href: '/find-us' },
  { name: 'Contact us', icon: <Phone className="w-4 h-4" />, href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[72px] w-[100%]">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/logo1.png" alt="Gaba Hope For Kids Logo" width={60} height={40} className="w-auto h-10" />
            <h1 className="text-blue-900 sm:text-[1.2rem] md:text-2xl lg:text-2xl font-bold font">Gaba Hope For Kids</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 rounded-md font-bold transition-colors",
                  pathname === link.href
                    ? "text-white bg-blue-900 border-b-2 border-orange-600"
                    : "text-blue-900 hover:bg-blue-100"
                )}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
          <button
            className="md:hidden bg-blue-900 text-white p-2 rounded-md transition-transform duration-1000 ease-in-out hover:rotate-360"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)}>
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" style={{ top: '64px' }} />
          </div>
          <nav className="fixed top-[64px] left-0 bottom-0 w-3/4 bg-white p-4 overflow-y-auto z-50">
            <div className="space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center space-x-2 p-2 rounded-md font-bold border-b border-blue-200",
                    pathname === link.href
                      ? "text-white bg-blue-900 border-b-2 border-orange-600"
                      : "text-blue-900 hover:bg-blue-100"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  )
}














