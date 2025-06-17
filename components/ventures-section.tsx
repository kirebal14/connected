"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, Users, TrendingUp } from "lucide-react"

export default function VenturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const ventures = [
    {
      id: 1,
      title: "EcoTech Solutions",
      description: "Sustainable technology platform for environmental monitoring and carbon tracking.",
      status: "Active",
      category: "CleanTech",
      founded: "2024",
      team: "8 members",
      growth: "+150%",
      tags: ["Sustainability", "IoT", "Analytics"],
    },
    {
      id: 2,
      title: "FinFlow",
      description: "Next-generation financial management platform for small businesses and freelancers.",
      status: "Scaling",
      category: "FinTech",
      founded: "2023",
      team: "12 members",
      growth: "+200%",
      tags: ["Finance", "SaaS", "AI"],
    },
    {
      id: 3,
      title: "HealthHub",
      description: "Digital health platform connecting patients with healthcare providers seamlessly.",
      status: "Development",
      category: "HealthTech",
      founded: "2024",
      team: "6 members",
      growth: "New",
      tags: ["Healthcare", "Telemedicine", "Mobile"],
    },
  ]

  return (
    <section
      ref={ref}
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-purple-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12 mx-auto"
        >
          <div className="space-y-2 max-w-4xl mx-auto">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm font-medium text-primary">
              Our Ventures
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Building the Future
            </h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed px-4">
              Discover the innovative ventures we're building across various industries, each designed to solve
              real-world problems and create lasting impact.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-6xl mx-auto">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mx-auto w-full max-w-sm md:max-w-none"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant={
                        venture.status === "Active" ? "default" : venture.status === "Scaling" ? "secondary" : "outline"
                      }
                      className="text-xs"
                    >
                      {venture.status}
                    </Badge>
                    <span className="text-xs sm:text-sm text-muted-foreground">{venture.category}</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{venture.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">{venture.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                        <span>{venture.founded}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                        <span className="truncate">{venture.team}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                        <span>{venture.growth}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {venture.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full" size="sm">
                      <Link href={`/ventures/${venture.id}`}>
                        Learn More <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mx-auto max-w-md"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 shadow-lg">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/ventures">
                View All Ventures <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
