export default {
  name: "career",
  title: "Careers",
  type: "document",
  fields: [
    {
      name: "title",
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
      name: "location",
      title: "Location",
      type: "string",
      options: {
        list: [
          { title: "Dhaka, Bangladesh", value: "dhaka" },
          { title: "Remote", value: "remote" },
          { title: "Hybrid", value: "hybrid" },
        ],
      },
    },
    {
      name: "type",
      title: "Job Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Contract", value: "contract" },
          { title: "Internship", value: "internship" },
        ],
      },
    },
    {
      name: "experience",
      title: "Experience Level",
      type: "string",
      options: {
        list: [
          { title: "Entry Level", value: "entry" },
          { title: "2+ years", value: "2-years" },
          { title: "3+ years", value: "3-years" },
          { title: "5+ years", value: "5-years" },
          { title: "Senior Level", value: "senior" },
        ],
      },
    },
    {
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 4,
    },
    {
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "isActive",
      title: "Active Position",
      type: "boolean",
      description: "Uncheck to hide from careers page",
    },
    {
      name: "applicationDeadline",
      title: "Application Deadline",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "title",
      department: "department",
      location: "location",
    },
    prepare(selection) {
      const { title, department, location } = selection
      return {
        title: title,
        subtitle: `${department} • ${location}`,
      }
    },
  },
}
