"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pot-black mb-6 font-syne">Get in Touch</h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to start your next venture or have questions about our services? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="mx-auto w-full">
              <CardHeader>
                <CardTitle className="text-2xl font-syne">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleChange("subject", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="investment">Investment Opportunity</SelectItem>
                        <SelectItem value="careers">Careers</SelectItem>
                        <SelectItem value="press">Press & Media</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 mx-auto w-full">
              <div>
                <h2 className="text-2xl font-bold text-pot-black mb-6 font-syne">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@weareconnected.io</p>
                      <p className="text-muted-foreground">press@weareconnected.io</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (415) 555-0123</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        1234 Innovation Drive
                        <br />
                        Suite 500
                        <br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM PST
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-pot-black font-syne">Quick Contact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">General Inquiries</h4>
                      <p className="text-sm text-muted-foreground">hello@weareconnected.io</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-1">Call Us</h4>
                      <p className="text-sm text-muted-foreground">+1 (415) 555-0123</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-lynx-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
          <div className="text-center mb-12 mx-auto max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-pot-black mb-4 font-syne">Visit Our Office</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of San Francisco's innovation district.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">San Francisco Office</h3>
                  <p className="text-muted-foreground">
                    1234 Innovation Drive, Suite 500
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
