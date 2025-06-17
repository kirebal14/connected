// Document schemas
import blog from "./documents/blog"
import author from "./documents/author"
import category from "./documents/category"
import career from "./documents/career"
import service from "./documents/service"
import venture from "./documents/venture"
import teamMember from "./documents/teamMember"
import homepage from "./documents/homepage"
import aboutPage from "./documents/aboutPage"
import contactPage from "./documents/contactPage"
import siteSettings from "./documents/siteSettings"

// Object schemas
import blockContent from "./objects/blockContent"
import seo from "./objects/seo"
import socialLinks from "./objects/socialLinks"
import testimonial from "./objects/testimonial"
import metric from "./objects/metric"
import feature from "./objects/feature"

export const schemaTypes = [
  // Documents
  blog,
  author,
  category,
  career,
  service,
  venture,
  teamMember,
  homepage,
  aboutPage,
  contactPage,
  siteSettings,

  // Objects
  blockContent,
  seo,
  socialLinks,
  testimonial,
  metric,
  feature,
]
