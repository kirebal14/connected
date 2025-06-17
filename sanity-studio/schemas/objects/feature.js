export default {
  name: "feature",
  title: "Feature",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Feature Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Lucide icon name",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
}
