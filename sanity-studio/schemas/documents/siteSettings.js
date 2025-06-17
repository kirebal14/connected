export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "favicon",
      title: "Favicon",
      type: "image",
    },
    {
      name: "socialLinks",
      title: "Social Media Links",
      type: "socialLinks",
    },
    {
      name: "contactInfo",
      title: "Contact Information",
      type: "object",
      fields: [
        {
          name: "email",
          title: "Email",
          type: "string",
        },
        {
          name: "phone",
          title: "Phone",
          type: "string",
        },
        {
          name: "address",
          title: "Address",
          type: "text",
        },
      ],
    },
    {
      name: "seo",
      title: "Default SEO",
      type: "seo",
    },
  ],
}
