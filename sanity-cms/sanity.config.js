import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { codeInput } from "@sanity/code-input"
import { schemaTypes } from "./schemas"

export default defineConfig({
  name: "connected-website",
  title: "Connected Website CMS",

  // Replace with YOUR actual project ID from Sanity dashboard
  projectId: "your-project-id-here", // Get this from sanity.io/manage
  dataset: "production",

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content Management")
          .items([
            // Blog section
            S.listItem()
              .title("📝 Blog")
              .child(
                S.list()
                  .title("Blog Management")
                  .items([
                    S.listItem().title("Posts").child(S.documentTypeList("blog").title("Blog Posts")),
                    S.listItem().title("Authors").child(S.documentTypeList("author").title("Authors")),
                    S.listItem().title("Categories").child(S.documentTypeList("category").title("Categories")),
                  ]),
              ),

            // Careers section
            S.listItem()
              .title("💼 Careers")
              .child(S.documentTypeList("career").title("Job Listings")),

            // Services section
            S.listItem()
              .title("🛠️ Services")
              .child(S.documentTypeList("service").title("Services")),

            // Ventures section
            S.listItem()
              .title("🚀 Ventures")
              .child(S.documentTypeList("venture").title("Ventures")),

            // Team section
            S.listItem()
              .title("👥 Team")
              .child(S.documentTypeList("teamMember").title("Team Members")),

            // Site Settings
            S.listItem()
              .title("⚙️ Site Settings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
          ]),
    }),
    visionTool(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
