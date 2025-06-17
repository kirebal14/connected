import type { Metadata } from "next"
import VenturesClientPage from "./VenturesClientPage"

export const metadata: Metadata = {
  title: "Our Ventures - Connected",
  description:
    "Discover the innovative companies and projects we've built and nurtured across tech, digital, and lifestyle industries.",
}

export default function VenturesPage() {
  return <VenturesClientPage />
}
