import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: true,
  apiVersion: "2023-05-03",
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Blog post queries
export async function getBlogPosts() {
  return sanityClient.fetch(`
    *[_type == "blog"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      author,
      category,
      readTime,
      image
    }
  `)
}

export async function getBlogPost(slug: string) {
  return sanityClient.fetch(
    `
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      author,
      category,
      readTime,
      image
    }
  `,
    { slug },
  )
}

// Job listing queries
export async function getJobListings() {
  return sanityClient.fetch(`
    *[_type == "job"] | order(_createdAt desc) {
      _id,
      title,
      department,
      location,
      type,
      salary,
      description,
      requirements,
      responsibilities,
      benefits,
      _createdAt
    }
  `)
}

export async function getJobListing(id: string) {
  return sanityClient.fetch(
    `
    *[_type == "job" && _id == $id][0] {
      _id,
      title,
      department,
      location,
      type,
      salary,
      description,
      requirements,
      responsibilities,
      benefits,
      _createdAt
    }
  `,
    { id },
  )
}
