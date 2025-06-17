export default {
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Author Role",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "image",
      title: "Author Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    },
  ],
  preview: {
    select: {
      title: "author",
      subtitle: "role",
      media: "image",
    },
  },
}
