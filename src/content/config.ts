import { defineCollection, z } from "astro:content";

const components = defineCollection({
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.array(z.enum(["Hero", "Navbar", "Footer"])),
    json: z.string(),
  }),
});

export const collections = {
  components: components,
};
