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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "fullDescription",
      title: "Full Description",
      type: "blockContent",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "feature" }],
    },
    {
      name: "startingPrice",
      title: "Starting Price",
      type: "string",
      description: 'e.g., "Starting at $5,000"',
    },
    {
      name: "timeline",
      title: "Timeline",
      type: "string",
      description: 'e.g., "4-6 weeks"',
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
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "gallery",
      title: "Portfolio Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "process",
      title: "Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Step Title",
              type: "string",
            },
            {
              name: "description",
              title: "Step Description",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "testimonial" }],
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which service appears on page",
    },
    {
      name: "isActive",
      title: "Active Service",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      order: "order",
    },
    prepare(selection) {
      const { title, order } = selection
      return Object.assign({}, selection, {
        subtitle: `Order: ${order || "Not set"}`,
      })
    },
  },
}
