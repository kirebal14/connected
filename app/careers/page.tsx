import CareersPageClient from "./careers-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers - Connected",
  description: "Join our team of innovators and help us build the future. Explore career opportunities at Connected.",
}

export default function CareersPage() {
  return <CareersPageClient />
}
