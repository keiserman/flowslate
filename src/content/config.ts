import { defineCollection, z } from "astro:content";

const components = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    copy: z.string(),
    image: image(),
    json: z.string(),
  }),
});

export const collections = {
  components: components,
};
