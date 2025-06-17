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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "experience",
      title: "Experience Level",
      type: "string",
      options: {
        list: [
          { title: "Entry Level", value: "entry" },
          { title: "1+ years", value: "1-years" },
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
      type: "blockContent",
    },
    {
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "salaryRange",
      title: "Salary Range",
      type: "object",
      fields: [
        {
          name: "min",
          title: "Minimum Salary",
          type: "number",
        },
        {
          name: "max",
          title: "Maximum Salary",
          type: "number",
        },
        {
          name: "currency",
          title: "Currency",
          type: "string",
          options: {
            list: ["USD", "BDT", "EUR"],
          },
          initialValue: "USD",
        },
      ],
    },
    {
      name: "isActive",
      title: "Active Position",
      type: "boolean",
      description: "Uncheck to hide from careers page",
      initialValue: true,
    },
    {
      name: "applicationDeadline",
      title: "Application Deadline",
      type: "date",
    },
    {
      name: "postedAt",
      title: "Posted Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
  preview: {
    select: {
      title: "title",
      department: "department",
      location: "location",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, department, location, isActive } = selection
      return {
        title: title,
        subtitle: `${department} • ${location} ${!isActive ? "(Inactive)" : ""}`,
        media: isActive ? "✅" : "❌",
      }
    },
  },
}
