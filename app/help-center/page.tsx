"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

const HelpCenterPage = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* Hero section background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-accent/40 to-secondary/30 -top-[120px] -mt-[120px] pt-[120px]">
          {/* Floating particles */}
          {[...Array(25)].map((_, i) => (
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pot-black mb-6 font-syne">Help Center</h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Welcome to the Help Center! Here you'll find resources to help you get started and make the most of our
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-7xl">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="mb-4">
              Welcome to the Help Center! Here you'll find resources to help you get started and make the most of our
              platform.
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Account Setup Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Understanding the Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
            <p className="mb-4">Having trouble? Check out these common issues and their solutions:</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Login Problems
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Payment Issues
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Technical Difficulties
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
            <p className="mb-4">If you can't find the answer you're looking for, please contact us:</p>
            <ul className="space-y-2">
              <li>
                Email:{" "}
                <a href="mailto:hello@weareconnected.io" className="text-blue-500 hover:underline">
                  hello@weareconnected.io
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default HelpCenterPage
