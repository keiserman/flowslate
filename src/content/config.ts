import { defineCollection, z } from "astro:content";

const components = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    json: z.string(),
  }),
});

export const collections = {
  components: components,
};
