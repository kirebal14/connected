export default {
  name: "teamMember",
  title: "Team Members",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
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
    },
    {
      name: "role",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: [
          { title: "Leadership", value: "leadership" },
          { title: "Engineering", value: "engineering" },
          { title: "Design", value: "design" },
          { title: "Marketing", value: "marketing" },
          { title: "Product", value: "product" },
          { title: "Business", value: "business" },
          { title: "Operations", value: "operations" },
        ],
      },
    },
    {
      name: "bio",
      title: "Biography",
      type: "blockContent",
    },
    {
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      title: "Profile Image",
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
      name: "socialLinks",
      title: "Social Links",
      type: "socialLinks",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "joinedDate",
      title: "Joined Date",
      type: "date",
    },
    {
      name: "isActive",
      title: "Active Team Member",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
}
