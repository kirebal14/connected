export default {
  name: "venture",
  title: "Ventures",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Venture Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (Rule) => Rule.max(100),
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
      name: "logo",
      title: "Logo",
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
      name: "featuredImage",
      title: "Featured Image",
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
      title: "Image Gallery",
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
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "active" },
          { title: "In Development", value: "development" },
          { title: "Launched", value: "launched" },
          { title: "Acquired", value: "acquired" },
          { title: "Discontinued", value: "discontinued" },
        ],
      },
      initialValue: "active",
    },
    {
      name: "founded",
      title: "Founded Year",
      type: "string",
    },
    {
      name: "team",
      title: "Team Size",
      type: "string",
      description: 'e.g., "12 people"',
    },
    {
      name: "growth",
      title: "Growth Rate",
      type: "string",
      description: 'e.g., "+150% YoY"',
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "SaaS", value: "saas" },
          { title: "Agency", value: "agency" },
          { title: "Analytics", value: "analytics" },
          { title: "E-commerce", value: "ecommerce" },
          { title: "Fintech", value: "fintech" },
          { title: "Healthtech", value: "healthtech" },
        ],
      },
    },
    {
      name: "website",
      title: "Website URL",
      type: "url",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "metrics",
      title: "Key Metrics",
      type: "array",
      of: [{ type: "metric" }],
    },
    {
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "string" }],
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
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tagline",
      media: "logo",
      status: "status",
    },
    prepare(selection) {
      const { title, subtitle, status } = selection
      return Object.assign({}, selection, {
        subtitle: `${subtitle || ""} • ${status}`,
      })
    },
  },
}
