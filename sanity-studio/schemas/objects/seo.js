export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (Rule) => Rule.max(60),
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(160),
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "Image for social media sharing",
      options: {
        hotspot: true,
      },
    },
    {
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      description: "Prevent search engines from indexing this page",
      initialValue: false,
    },
  ],
}
