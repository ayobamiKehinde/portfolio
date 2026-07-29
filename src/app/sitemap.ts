import type { MetadataRoute } from 'next'
import { sanityClient } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await sanityClient.fetch<{ slug: { current: string }; updatedAt?: string }[]>(
    `*[_type == "post"]{ slug, updatedAt }`
  ).catch(() => [])

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: 'https://opslyco.uk',         lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
    { url: 'https://opslyco.uk/about',   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://opslyco.uk/work',    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://opslyco.uk/modules', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://opslyco.uk/blog',    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map(p => ({
    url: `https://opslyco.uk/blog/${p.slug.current}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...postRoutes]
}
