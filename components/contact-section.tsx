"use client"

import Link from "next/link"
import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", company: "", message: "" })
    setIsSubmitting(false)
    alert("Thank you for your message! We'll get back to you within 24 hours.")
  }

  return (
    <section ref={ref} id="contact" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12 mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pot-black mb-4 sm:mb-6 font-syne">
            Get in Touch
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 mx-auto lg:mx-0 max-w-2xl lg:max-w-none"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center lg:text-left">Let's Talk</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center lg:text-left">
                Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
                Our team of experts is ready to discuss your vision and provide tailored solutions.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Our Office",
                  content: (
                    <>
                      1234 Innovation Drive, Suite 500
                      <br />
                      San Francisco, CA 94107
                      <br />
                      United States
                    </>
                  ),
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: (
                    <>
                      General: hello@connected.com
                      <br />
                      Business: business@connected.com
                      <br />
                      Careers: careers@connected.com
                    </>
                  ),
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: (
                    <>
                      +1 (415) 555-0164
                      <br />
                      Mon-Fri: 9:00 AM - 6:00 PM (PST)
                    </>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-3 sm:space-x-4 justify-center lg:justify-start text-center lg:text-left"
                >
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">{item.title}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-4 sm:pt-6 text-center lg:text-left"
            >
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h4>
              <div className="flex space-x-3 sm:space-x-4 justify-center lg:justify-start">
                {[
                  { icon: Instagram, href: "https://instagram.com/connected" },
                  { icon: Twitter, href: "https://twitter.com/connected" },
                  { icon: Linkedin, href: "https://linkedin.com/company/connected" },
                  { icon: Facebook, href: "https://facebook.com/connected" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 rounded-full bg-accent hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="sr-only">{social.icon.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 bg-accent/50 p-4 sm:p-6 md:p-8 rounded-xl mx-auto lg:mx-0 max-w-2xl lg:max-w-none w-full"
          >
            {[
              { name: "name", label: "Full Name *", type: "text", placeholder: "Your full name" },
              { name: "email", label: "Email Address *", type: "email", placeholder: "your.email@company.com" },
              { name: "company", label: "Company Name", type: "text", placeholder: "Your company name" },
            ].map((field) => (
              <div key={field.name} className="space-y-2">
                <label htmlFor={field.name} className="text-sm font-medium">
                  {field.label}
                </label>
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.label.includes("*")}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  className="text-sm sm:text-base"
                />
              </div>
            ))}

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Your Message *
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your inquiry, how we can help you, or share your message with us..."
                required
                className="min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              By submitting this form, you agree to our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
