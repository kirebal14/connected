import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { inter, satoshi, syne } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "Connected - Empowering Bold Ideas",
  description:
    "Connected is a forward-thinking company that empowers bold ideas across tech, digital, and lifestyle industries.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${satoshi.variable} ${syne.variable} flex flex-col min-h-screen bg-white text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
