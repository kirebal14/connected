import { createClient } from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

// Super simple data fetching
export async function getBlogPosts() {
  const entries = await client.getEntries({
    content_type: "blogPost",
    order: "-sys.createdAt",
  })

  return entries.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    slug: item.fields.slug,
    content: item.fields.content,
    author: item.fields.author,
    publishedAt: item.fields.publishedAt,
    featuredImage: item.fields.featuredImage?.fields.file.url,
  }))
}

export async function getCareers() {
  const entries = await client.getEntries({
    content_type: "career",
    "fields.isActive": true,
  })

  return entries.items.map((item) => ({
    id: item.sys.id,
    title: item.fields.title,
    department: item.fields.department,
    location: item.fields.location,
    requirements: item.fields.requirements,
    // ... other fields
  }))
}
