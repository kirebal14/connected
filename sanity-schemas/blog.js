export default {
  name: "blog",
  title: "Blog Posts",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
  ],
}
