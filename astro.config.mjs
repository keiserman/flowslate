import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import DecapCMS from "astro-decap-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    DecapCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        editor: {
          preview: false,
        },
        collections: [
          {
            name: "components",
            label: "Components",
            folder: "src/content/components",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Title" },
              { name: "description", widget: "string", label: "Description" },
              {
                name: "category",
                label: "Category",
                widget: "select",
                options: ["Navbar", "Hero", "Footer"],
              },
              { name: "image", widget: "image", label: "Image" },
              { name: "json", widget: "string", label: "JSON" },
            ],
          },
        ],
      },
    }),
  ],
});
