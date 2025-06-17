"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, Lightbulb, Award, Linkedin, Twitter, Mail } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Ikramul Haque Ikram",
    role: "Chairman & Managing Director",
    bio: "Visionary leader with extensive experience in strategic business development and venture building.",
    image: "/professional-ceo-portrait.png",
    linkedin: "#",
    twitter: "#",
    email: "ikram@connected.com",
  },
  {
    name: "Mayeen Rahman",
    role: "Chief Executive Officer (CEO)",
    bio: "Innovative executive focused on scaling businesses and driving sustainable growth across markets.",
    image: "/professional-woman-executive.png",
    linkedin: "#",
    twitter: "#",
    email: "mayeen@connected.com",
  },
  {
    name: "Touhidul Haque",
    role: "Chief Technical Officer (CTO)",
    bio: "Technology leader specializing in cutting-edge solutions and digital transformation initiatives.",
    image: "/professional-cto-portrait.png",
    linkedin: "#",
    twitter: "#",
    email: "touhidul@connected.com",
  },
  {
    name: "Rasel Ahmed Shifat",
    role: "Executive Director & Production Head",
    bio: "Production specialist with expertise in managing complex projects and delivering exceptional results.",
    image: "/production-director-portrait.png",
    linkedin: "#",
    twitter: "#",
    email: "rasel@connected.com",
  },
  {
    name: "Shafin Hayder",
    role: "Creative Director – Social & Visual Media",
    bio: "Creative professional focused on building compelling brand narratives and driving visual excellence.",
    image: "/professional-woman-designer.png",
    linkedin: "#",
    twitter: "#",
    email: "shafin@connected.com",
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We believe in pushing boundaries and exploring new possibilities in every project we undertake.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Success comes from working together, sharing knowledge, and building strong partnerships.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "We focus on measurable outcomes and sustainable growth for all our ventures.",
  },
  {
    icon: Award,
    title: "Excellence Standard",
    description: "We maintain the highest standards in everything we do, from code quality to customer service.",
  },
]

export default function AboutPageClient() {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Hero section background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-accent/40 to-secondary/30 -top-[120px] -mt-[120px] pt-[120px]">
          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 10,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-primary/8" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(101,41,178,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(101,41,178,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <Header />
        <div className="pt-32 pb-8 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 max-w-7xl">
            <div className="text-center mb-12 mx-auto max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pot-black mb-6 font-syne">
                About Connected
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Connected is a future-driven company that builds, scales, and invests in next-generation ventures. From
                tech and media to lifestyle and digital services, we create what the world will need next. We move fast,
                think big, and operate with one mission: to lead innovation across industries. If it shapes the future,
                it starts here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-pot-black mb-8 font-syne">Our Mission</h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              To create and nurture innovative companies that solve real-world problems and make a positive impact on
              society. We believe in the power of entrepreneurship to drive meaningful change.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center border-none shadow-sm hover:shadow-md transition-shadow mx-auto w-full max-w-sm lg:max-w-none"
                >
                  <CardContent className="p-6">
                    <value.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-lynx-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-pot-black mb-4 font-syne">Meet Our Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate innovators and experienced professionals working together to build the future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-sm hover:shadow-md transition-shadow mx-auto w-full max-w-sm lg:max-w-none"
              >
                <CardContent className="p-6">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-pot-black mb-4 font-syne">Our Impact</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to building successful ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "$10M+",
                label: "Revenue Generated",
                description: "Across current products and services",
              },
              {
                number: "100+",
                label: "Jobs Created",
                description: "Through direct teams, partners, and collaborators",
              },
              {
                number: "4M+",
                label: "Audience Reached",
                description: "Through digital platforms, content, and media",
              },
              {
                number: "16",
                label: "Countries Touched",
                description: "With global users, clients, and partners",
              },
              {
                number: "5/12",
                label: "Ventures Built",
                description: "5 already built and active, 12 in the pipeline",
              },
              {
                number: "$100M+",
                label: "Projected Market Cap",
                description: "Across upcoming ventures",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base font-medium text-pot-black mb-1">{stat.label}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white text-gray-900 relative overflow-hidden">
        {/* Creative background elements */}
        <div className="absolute inset-0 bg-white">
          {/* Animated floating shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/15 rotate-45 animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-accent/20 rounded-full animate-ping"></div>

          {/* Curved lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 400" fill="none">
            <path
              d="M0,200 Q250,100 500,200 T1000,200"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M0,250 Q300,150 600,250 T1000,250"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              opacity="0.2"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Dotted pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(101,41,178,0.15)_1px,transparent_0)] bg-[size:40px_40px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Fire effect container */}
            <div className="relative bg-gradient-to-br from-white via-primary/5 to-secondary/10 rounded-[2rem] p-8 sm:p-12 border-4 border-dashed border-primary/30 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 overflow-hidden">
              {/* Fire flames - organic shapes */}
              <div className="absolute -inset-2 rounded-[2rem] overflow-hidden pointer-events-none">
                {/* Top fire flames */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`flame-top-${i}`}
                    className="absolute bg-gradient-to-t from-primary via-secondary to-accent opacity-70"
                    style={{
                      left: `${15 + i * 12}%`,
                      top: "-20px",
                      width: "12px",
                      height: "30px",
                      clipPath:
                        "polygon(40% 100%, 20% 80%, 30% 60%, 10% 40%, 25% 20%, 45% 30%, 60% 10%, 80% 25%, 70% 45%, 90% 65%, 75% 85%, 55% 75%)",
                    }}
                    animate={{
                      scaleY: [1, 1.8, 1.2, 1.5, 1],
                      scaleX: [1, 0.8, 1.1, 0.9, 1],
                      opacity: [0.5, 0.9, 0.7, 0.8, 0.5],
                      y: [0, -5, 2, -3, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Bottom fire flames */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`flame-bottom-${i}`}
                    className="absolute bg-gradient-to-b from-primary via-secondary to-accent opacity-70"
                    style={{
                      left: `${20 + i * 12}%`,
                      bottom: "-20px",
                      width: "12px",
                      height: "30px",
                      clipPath:
                        "polygon(40% 0%, 20% 20%, 30% 40%, 10% 60%, 25% 80%, 45% 70%, 60% 90%, 80% 75%, 70% 55%, 90% 35%, 75% 15%, 55% 25%)",
                    }}
                    animate={{
                      scaleY: [1, 1.8, 1.2, 1.5, 1],
                      scaleX: [1, 0.8, 1.1, 0.9, 1],
                      opacity: [0.5, 0.9, 0.7, 0.8, 0.5],
                      y: [0, 5, -2, 3, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3 + 0.5,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Left fire flames */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`flame-left-${i}`}
                    className="absolute bg-gradient-to-r from-primary via-secondary to-accent opacity-70"
                    style={{
                      left: "-20px",
                      top: `${25 + i * 15}%`,
                      width: "30px",
                      height: "12px",
                      clipPath:
                        "polygon(100% 40%, 80% 20%, 60% 30%, 40% 10%, 20% 25%, 30% 45%, 10% 60%, 25% 80%, 45% 70%, 65% 90%, 85% 75%, 75% 55%)",
                    }}
                    animate={{
                      scaleX: [1, 1.8, 1.2, 1.5, 1],
                      scaleY: [1, 0.8, 1.1, 0.9, 1],
                      opacity: [0.5, 0.9, 0.7, 0.8, 0.5],
                      x: [0, -5, 2, -3, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Right fire flames */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={`flame-right-${i}`}
                    className="absolute bg-gradient-to-l from-primary via-secondary to-accent opacity-70"
                    style={{
                      right: "-20px",
                      top: `${30 + i * 15}%`,
                      width: "30px",
                      height: "12px",
                      clipPath:
                        "polygon(0% 40%, 20% 20%, 40% 30%, 60% 10%, 80% 25%, 70% 45%, 90% 60%, 75% 80%, 55% 70%, 35% 90%, 15% 75%, 25% 55%)",
                    }}
                    animate={{
                      scaleX: [1, 1.8, 1.2, 1.5, 1],
                      scaleY: [1, 0.8, 1.1, 0.9, 1],
                      opacity: [0.5, 0.9, 0.7, 0.8, 0.5],
                      x: [0, 5, -2, 3, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.4 + 0.7,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Funky corner decorations - minimal */}
              <motion.div
                className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-secondary to-accent rounded-sm"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              {/* Funky inner pattern with animation */}
              <motion.div
                className="absolute inset-4 border-2 border-dotted border-secondary/20 rounded-2xl"
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Ember particles - minimal */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 1, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.8,
                  }}
                />
              ))}

              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-syne text-gray-900 relative z-10">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg sm:text-xl mb-8 text-gray-700 max-w-2xl mx-auto relative z-10">
                Join us in creating the next generation of innovative companies that will shape the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg"
                    asChild
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent shadow-lg"
                    asChild
                  >
                    <Link href="/ventures">View Our Ventures</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
