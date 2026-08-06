import type { MetadataRoute } from 'next'
import { sanityClient } from '@/lib/sanity'

type SitemapPost = { slug: { current: string }; updatedAt?: string }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await sanityClient
    .fetch<SitemapPost[]>(`*[_type == "post"]{ slug, updatedAt }`)
    .catch((): SitemapPost[] => [])

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: 'https://www.opslyco.uk',         lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
    { url: 'https://www.opslyco.uk/about',   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.opslyco.uk/work',    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.opslyco.uk/modules', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.opslyco.uk/blog',    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map(p => ({
    url: `https://www.opslyco.uk/blog/${p.slug.current}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...postRoutes]
}
