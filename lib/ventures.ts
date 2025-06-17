export const getVentureBySlug = async (slug: string) => {
  // This would typically fetch from a database or API
  // For now, we'll return mock data
  return {
    id: "1",
    slug: slug,
    title: "TechFlow",
    description: "A SaaS platform revolutionizing workflow automation",
    fullDescription:
      "TechFlow is our flagship SaaS product that helps teams streamline their workflows and automate repetitive tasks. Built with the latest technologies, it integrates with popular tools and provides powerful analytics.",
    image: "/placeholder.svg?height=500&width=1000",
    logo: "/placeholder.svg?height=150&width=150",
    founded: "2022",
    team: "12 people",
    category: "SaaS",
    status: "Active",
    metrics: [
      { label: "Active Users", value: "10,000+" },
      { label: "Projects Managed", value: "50,000+" },
      { label: "Time Saved", value: "2M+ hours" },
      { label: "Customer Satisfaction", value: "4.8/5" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Redis"],
  }
}
