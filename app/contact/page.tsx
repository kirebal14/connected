import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact | Connected",
  description: "Get in touch with our team to discuss your next project or venture.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
