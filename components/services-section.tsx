"use client"

import { useState } from "react"
import { Brain, Globe, ShoppingBag, Smartphone, Target, FlaskConical, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesSection() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  const categories = [
    {
      icon: <Brain className="h-8 w-8" />,
      emoji: "🧠",
      title: "AI & Automation",
      description: "Intelligent tools that streamline tasks, boost productivity, and power the future.",
      color: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-500/10 via-violet-500/5 to-purple-500/10",
      borderColor: "border-purple-500/30",
      hoverBg: "hover:bg-purple-500/5",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      emoji: "🌐",
      title: "Digital Platforms",
      description: "Scalable online platforms for modern businesses and communities.",
      color: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-500/10 via-cyan-500/5 to-blue-500/10",
      borderColor: "border-blue-500/30",
      hoverBg: "hover:bg-blue-500/5",
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      emoji: "🛍️",
      title: "E-commerce & Brands",
      description: "Next-gen consumer brands built on culture, identity, and performance.",
      color: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-500/10 via-green-500/5 to-emerald-500/10",
      borderColor: "border-emerald-500/30",
      hoverBg: "hover:bg-emerald-500/5",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      emoji: "📱",
      title: "Content & Media",
      description: "Storytelling that captivates. Media that influences.",
      color: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-500/10 via-rose-500/5 to-pink-500/10",
      borderColor: "border-pink-500/30",
      hoverBg: "hover:bg-pink-500/5",
    },
    {
      icon: <Target className="h-8 w-8" />,
      emoji: "🎯",
      title: "Marketing & Performance",
      description: "Growth-focused solutions powered by data, creativity, and execution.",
      color: "from-orange-500 to-amber-600",
      bgGradient: "from-orange-500/10 via-amber-500/5 to-orange-500/10",
      borderColor: "border-orange-500/30",
      hoverBg: "hover:bg-orange-500/5",
    },
    {
      icon: <FlaskConical className="h-8 w-8" />,
      emoji: "🧪",
      title: "Tech Experiments & Labs",
      description: "Bold innovations and ideas in the making — future ventures born here.",
      color: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-500/10 via-purple-500/5 to-indigo-500/10",
      borderColor: "border-indigo-500/30",
      hoverBg: "hover:bg-indigo-500/5",
    },
  ]

  return (
    <section
      id="services"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center mb-12 sm:mb-16 md:mb-20 mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-4 sm:px-6 py-2 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Focus Areas
            </span>
          </div>

          <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-foreground">What We</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Create
              </span>
            </h2>

            <div className="space-y-2">
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/90">
                Ideas that shape industries.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/90">
                Products that move culture.
              </p>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>
        </div>

        {/* Bold Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`group cursor-pointer transition-all duration-500 border-2 ${category.borderColor} bg-gradient-to-br ${category.bgGradient} ${category.hoverBg} hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 mx-auto w-full max-w-sm sm:max-w-none`}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                {/* Icon & Emoji */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="text-3xl sm:text-4xl">{category.emoji}</div>
                  <div
                    className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${category.color} text-white transition-transform duration-300 ${
                      hoveredCategory === index ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    {category.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">{category.title}</h3>

                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{category.description}</p>
                </div>

                {/* Hover Arrow */}
                <div
                  className={`mt-4 sm:mt-6 transition-all duration-300 text-center sm:text-left ${
                    hoveredCategory === index ? "opacity-100 translate-x-2" : "opacity-0 translate-x-0"
                  }`}
                >
                  <div className="flex items-center gap-2 text-sm font-medium justify-center sm:justify-start">
                    <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>Explore</span>
                    <ArrowRight className={`h-4 w-4 bg-gradient-to-r ${category.color} text-transparent`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent mx-auto"></div>
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed px-4">
                Our goal is to plan, execute, and leave impact with our ventures. We transform bold ideas into
                market-ready solutions that shape industries and move culture forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
