import { Metadata } from 'next'
import { blogPosts } from '@/data/blogPosts'
import Link from 'next/link'
import Image from 'next/image'

// Define the type for the params
type Params = {
  slug: string;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: any }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  return {
    title: post ? `${post.title} | GABA Hope for Kids Blog` : 'Blog Post Not Found',
    description: post?.excerpt || 'Blog post not found',
  }
}

export default function BlogPost({ params }: { params: Params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <main className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <Link href="/blog" className="mb-4 inline-block text-blue-600 hover:underline">
          &larr; Back to Blog
        </Link>
        <article className="overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="relative h-64 w-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h1 className="mb-4 text-3xl font-bold text-blue-900">{post.title}</h1>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </div>
    </main>
  )
}
