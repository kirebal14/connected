"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navItems = [
  { name: "About", href: "/about" },
  { name: "Ventures", href: "/ventures" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-50 p-2 sm:p-4 md:p-6 print:hidden">
      <div
        className={cn(
          "relative w-full max-w-[1172px] h-[70px] sm:h-[80px] md:h-[86px] mx-auto",
          "bg-primary/15 backdrop-blur-xl border border-primary/20",
          "rounded-[20px] sm:rounded-[28px] md:rounded-[32px] transition-all duration-300 shadow-sm",
        )}
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex h-[70px] sm:h-[80px] md:h-[86px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo/connected-horizontal.svg"
                alt="Connected Logo"
                width={120}
                height={32}
                className="h-6 sm:h-7 md:h-8 w-auto transition-all duration-300 group-hover:opacity-80"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium font-satoshi text-gray-900 hover:text-gray-700 transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900/30 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}

              {/* CTA Button */}
              <Button
                variant="outline"
                size="sm"
                className="ml-4 bg-[#6529b2] border-[#6529b2] text-white hover:bg-[#5a24a0] hover:border-[#5a24a0] transition-all duration-300 font-satoshi"
              >
                Let's Talk
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:bg-gray-900/10 transition-all duration-300 h-8 w-8 sm:h-9 sm:w-9"
              >
                {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={cn(
            "lg:hidden absolute left-2 right-2 sm:left-4 sm:right-4 mt-2 shadow-2xl z-20",
            "max-w-screen-lg xl:max-w-screen-xl mx-auto",
            "bg-primary/20 backdrop-blur-2xl border border-primary/25",
            "rounded-xl overflow-hidden",
          )}
        >
          <nav className="flex flex-col p-4 sm:p-6 space-y-3 sm:space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base sm:text-lg font-medium font-satoshi text-pot-black hover:text-gray-700 transition-all duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 sm:pt-4 border-t border-white/20">
              <Button
                variant="outline"
                className="w-full bg-[#6529b2] border-[#6529b2] text-white hover:bg-[#5a24a0] hover:border-[#5a24a0] transition-all duration-300 font-satoshi"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
