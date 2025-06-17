import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getService } from "@/lib/data"
import ServicePageContent from "@/components/service-page-content"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  // Replace with your actual service slugs
  return [
    { slug: "web-development" },
    { slug: "mobile-app-development" },
    { slug: "ui-ux-design" },
    { slug: "digital-marketing" },
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getService(params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const service = await getService(params.slug)

  if (!service) {
    notFound()
  }

  return <ServicePageContent service={service} />
}
