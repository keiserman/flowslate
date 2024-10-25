import { defineCollection, z } from "astro:content";

// Define the 'components' collection schema
const components = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    copy: z.string(),
    image: image(), // Ensure this is correct to handle images
  }),
});

export const collections = {
  components: components,  // Register the 'components' collection
};
