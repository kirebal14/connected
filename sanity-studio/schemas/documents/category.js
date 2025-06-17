export default {
  name: "category",
  title: "Categories",
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
      options: {
        source: "title",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      description: "Hex color code for category badge",
    },
  ],
}
