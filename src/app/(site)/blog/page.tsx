import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from '@/lib/sanity'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Blog | Opsly',
  description: 'Revenue operations insights, AI automation guides, and B2B sales infrastructure articles from the Opsly team.',
  alternates: { canonical: 'https://opslyco.uk/blog' },
}

type Post = {
  _id: string
  title: string
  slug: { current: string }
  metaDescription: string
  publishedAt: string
  readTime: number
  category: string
  thumbnail: string | null
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default async function BlogPage() {
  const posts: Post[] = await getPosts().catch(() => [])

  return (
    <>
      <div className="blog-hero">
        <div className="blog-hero-inner">
          <div className="section-label">Insights</div>
          <h1>Revenue operations, demystified</h1>
          <p>Practical guides on fixing the gaps between your revenue system and the results it should be producing.</p>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="section-wrap" style={{ textAlign: 'center', color: 'var(--muted)' }}>
          <p>Articles coming soon.</p>
        </div>
      ) : (
        <div className="blog-grid">
          {posts.map(post => (
            <Link key={post._id} href={`/blog/${post.slug.current}`} className="blog-card">
              {post.thumbnail && (
                <div className="blog-card-img">
                  <Image src={post.thumbnail} alt={post.title} width={640} height={360} />
                </div>
              )}
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-card-cat">{post.category || 'RevOps'}</span>
                  {post.publishedAt && <span className="blog-card-date">{formatDate(post.publishedAt)}</span>}
                </div>
                <h2>{post.title}</h2>
                {post.metaDescription && <p>{post.metaDescription}</p>}
                <span className="blog-card-cta">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
