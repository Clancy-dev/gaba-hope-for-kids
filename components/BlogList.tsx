'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/data/blogPosts'

export default function BlogList() {
  const [visiblePosts, setVisiblePosts] = useState<number[]>([])
  const postRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = postRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1 && !visiblePosts.includes(index)) {
              setVisiblePosts((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    postRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visiblePosts])

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
       
      {blogPosts.map((post, index) => (
        <div
          key={post.slug}
          ref={(el) => (postRefs.current[index] = el) as any}
          className={`transform transition-all duration-500 ${
            visiblePosts.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
           
          <Link href={`/blog/${post.slug}`}>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
              <div className="relative h-48 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-2 text-xl font-semibold text-blue-900">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

