export default {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "startingPrice",
      title: "Starting Price",
      type: "string",
      description: 'e.g., "Starting at $5,000"',
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      description: 'Lucide icon name (e.g., "code", "palette")',
    },
    {
      name: "image",
      title: "Service Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which service appears on page",
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
}
