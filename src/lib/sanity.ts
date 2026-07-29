import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function getPosts() {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, metaDescription, publishedAt, readTime,
      "category": pillarOrCluster,
      "thumbnail": thumbnail.asset->url
    }`
  )
}

export async function getPost(slug: string) {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, metaTitle, metaDescription,
      tldr, body, faq, publishedAt, updatedAt,
      readTime, pillarOrCluster, statSources,
      "thumbnail": thumbnail.asset->url,
      "author": author->{ name, title, credentials },
      "relatedPosts": relatedPosts[]->{ _id, title, slug, "thumbnail": thumbnail.asset->url }
    }`,
    { slug }
  )
}
