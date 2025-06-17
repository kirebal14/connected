import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Case Studies | Connected",
  description: "Discover how Connected has helped businesses scale and achieve transformative growth.",
}

const caseStudies = [
  {
    id: "fintech-startup",
    title: "FinTech Startup Scales to $50M Valuation",
    client: "PayFlow Technologies",
    industry: "Financial Technology",
    duration: "18 months",
    investment: "$2.5M",
    results: {
      revenue: "400% increase",
      users: "100K+ active users",
      valuation: "$50M Series A",
    },
    image: "/fintech-logo.png",
    description:
      "How we helped a payment processing startup scale from MVP to market leader through strategic investment and business development.",
    tags: ["FinTech", "Series A", "Payment Processing"],
    metrics: [
      { label: "Revenue Growth", value: "400%", icon: TrendingUp },
      { label: "Active Users", value: "100K+", icon: Users },
      { label: "Valuation", value: "$50M", icon: DollarSign },
      { label: "Time to Scale", value: "18 months", icon: Clock },
    ],
  },
  {
    id: "healthtech-platform",
    title: "HealthTech Platform Revolutionizes Patient Care",
    client: "MediConnect",
    industry: "Healthcare Technology",
    duration: "24 months",
    investment: "$3.8M",
    results: {
      revenue: "600% increase",
      users: "50K+ healthcare providers",
      expansion: "15 states",
    },
    image: "/health-tech-logo.png",
    description:
      "Transforming healthcare delivery through innovative telemedicine platform and strategic market expansion.",
    tags: ["HealthTech", "Telemedicine", "B2B SaaS"],
    metrics: [
      { label: "Revenue Growth", value: "600%", icon: TrendingUp },
      { label: "Healthcare Providers", value: "50K+", icon: Users },
      { label: "Market Expansion", value: "15 States", icon: DollarSign },
      { label: "Development Time", value: "24 months", icon: Clock },
    ],
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform Achieves Market Leadership",
    client: "ShopSphere",
    industry: "E-commerce & Retail",
    duration: "12 months",
    investment: "$1.8M",
    results: {
      revenue: "300% increase",
      merchants: "25K+ active merchants",
      gmv: "$100M+ GMV",
    },
    image: "/ecommerce-logo.png",
    description:
      "Building a comprehensive e-commerce ecosystem that empowers small businesses to compete with industry giants.",
    tags: ["E-commerce", "Marketplace", "SMB"],
    metrics: [
      { label: "Revenue Growth", value: "300%", icon: TrendingUp },
      { label: "Active Merchants", value: "25K+", icon: Users },
      { label: "GMV", value: "$100M+", icon: DollarSign },
      { label: "Market Entry", value: "12 months", icon: Clock },
    ],
  },
  {
    id: "saas-productivity",
    title: "SaaS Productivity Tool Reaches Enterprise Scale",
    client: "WorkFlow Pro",
    industry: "Enterprise Software",
    duration: "20 months",
    investment: "$4.2M",
    results: {
      revenue: "500% increase",
      enterprises: "500+ enterprise clients",
      arr: "$25M ARR",
    },
    image: "/abstract-saas-logo.png",
    description:
      "Scaling a productivity platform from startup to enterprise-grade solution serving Fortune 500 companies.",
    tags: ["SaaS", "Enterprise", "Productivity"],
    metrics: [
      { label: "Revenue Growth", value: "500%", icon: TrendingUp },
      { label: "Enterprise Clients", value: "500+", icon: Users },
      { label: "ARR", value: "$25M", icon: DollarSign },
      { label: "Scale Timeline", value: "20 months", icon: Clock },
    ],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 font-syne">Case Studies</h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Discover how Connected has helped businesses achieve transformative growth and market leadership through
                strategic investment and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center max-w-4xl mx-auto">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Companies Scaled</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">$500M+</div>
                <div className="text-sm sm:text-base text-muted-foreground">Total Investment</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">400%</div>
                <div className="text-sm sm:text-base text-muted-foreground">Avg. Revenue Growth</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">18</div>
                <div className="text-sm sm:text-base text-muted-foreground">Avg. Months to Scale</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 sm:py-20 bg-lynx-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="text-center mb-12 mx-auto max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-syne">Success Stories</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Real results from real partnerships. See how we've helped companies transform their industries.
              </p>
            </div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <Card key={study.id} className="overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <Image src={study.image || "/placeholder.svg"} alt={study.client} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
                    </div>
                    <div className="p-6 sm:p-8 lg:p-12">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 font-syne">{study.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{study.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.metrics.map((metric) => (
                          <div key={metric.label} className="flex items-center gap-2">
                            <metric.icon className="h-4 w-4 text-primary" />
                            <div>
                              <div className="font-bold text-sm sm:text-base">{metric.value}</div>
                              <div className="text-xs sm:text-sm text-muted-foreground">{metric.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Button asChild>
                        <Link href={`/case-studies/${study.id}`}>
                          Read Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="text-center mb-12 mx-auto max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-syne">Industries We Transform</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Our expertise spans across multiple industries, driving innovation and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {[
                {
                  industry: "Financial Technology",
                  companies: "12+ companies",
                  totalInvestment: "$45M+",
                  avgGrowth: "350%",
                },
                {
                  industry: "Healthcare Technology",
                  companies: "8+ companies",
                  totalInvestment: "$32M+",
                  avgGrowth: "420%",
                },
                {
                  industry: "E-commerce & Retail",
                  companies: "15+ companies",
                  totalInvestment: "$28M+",
                  avgGrowth: "280%",
                },
                {
                  industry: "Enterprise Software",
                  companies: "10+ companies",
                  totalInvestment: "$38M+",
                  avgGrowth: "390%",
                },
                {
                  industry: "Consumer Technology",
                  companies: "6+ companies",
                  totalInvestment: "$22M+",
                  avgGrowth: "310%",
                },
                {
                  industry: "Digital Marketing",
                  companies: "9+ companies",
                  totalInvestment: "$18M+",
                  avgGrowth: "260%",
                },
              ].map((industry) => (
                <Card key={industry.industry} className="mx-auto w-full max-w-sm lg:max-w-none">
                  <CardHeader>
                    <CardTitle className="text-lg">{industry.industry}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Portfolio:</span>
                        <span className="font-medium">{industry.companies}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investment:</span>
                        <span className="font-medium">{industry.totalInvestment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Avg. Growth:</span>
                        <span className="font-medium text-green-600">{industry.avgGrowth}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-syne">Ready to Write Your Success Story?</h2>
              <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join the ranks of successful companies that have transformed their industries with Connected's support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Start Your Journey</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  asChild
                >
                  <Link href="/ventures">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
