import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPost, sanityClient } from '@/lib/sanity'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch<{ slug: { current: string } }[]>(
    `*[_type == "post"]{ slug }`
  ).catch(() => [])
  return slugs.map(s => ({ slug: s.slug.current }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug).catch(() => null)
  if (!post) return {}
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription,
    alternates: { canonical: `https://www.opslyco.uk/blog/${slug}` },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

type Post = {
  _id: string
  title: string
  slug: { current: string }
  metaTitle?: string
  metaDescription?: string
  tldr?: string[]
  body: string
  faq?: { question: string; answer: string }[]
  publishedAt?: string
  updatedAt?: string
  readTime?: number
  pillarOrCluster?: string
  thumbnail?: string
  author?: { name: string; title?: string; credentials?: string }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post: Post | null = await getPost(slug).catch(() => null)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: { '@type': 'Person', name: post.author?.name || 'Ayobami Kehinde' },
        publisher: { '@type': 'Organization', name: 'Opsly', url: 'https://www.opslyco.uk' },
      },
      ...(post.faq && post.faq.length > 0 ? [{
        '@type': 'FAQPage',
        mainEntity: post.faq.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }] : []),
    ],
  }

  return (
    <article className="post-wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="post-header">
        {post.pillarOrCluster && <div className="post-eyebrow">{post.pillarOrCluster}</div>}
        <h1 className="post-title">{post.title}</h1>
        <p className="post-meta">
          {post.author?.name && <><strong>{post.author.name}</strong>{post.author.credentials && `, ${post.author.credentials}`} &middot; </>}
          {post.updatedAt && <>Last updated: {formatDate(post.updatedAt)} &middot; </>}
          {post.readTime && <>{post.readTime} min read</>}
        </p>
        {post.thumbnail && (
          <Image src={post.thumbnail} alt={post.title} width={740} height={416}
            style={{ width: '100%', borderRadius: '10px', border: '1px solid var(--border)', marginBottom: '2rem' }} />
        )}
      </header>

      {post.tldr && post.tldr.length > 0 && (
        <div className="post-tldr">
          <h3>TL;DR</h3>
          <ul>{post.tldr.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>
      )}

      {post.body && (
        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.body as string }} />
      )}

      {post.faq && post.faq.length > 0 && (
        <div className="post-faq">
          <h2>Frequently asked questions</h2>
          {post.faq.map((f, i) => (
            <div key={i} className="faq-item-post">
              <h3>{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}
        </div>
      )}

      {post.author && (
        <div className="post-byline">
          Written by <strong>{post.author.name}</strong>
          {post.author.title && `, ${post.author.title}`}
          {post.author.credentials && ` — ${post.author.credentials}`}
        </div>
      )}
    </article>
  )
}
