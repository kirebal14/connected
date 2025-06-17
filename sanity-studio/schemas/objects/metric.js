export default {
  name: "metric",
  title: "Metric",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "value",
      title: "Value",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
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
      title: "label",
      subtitle: "value",
    },
  },
}
