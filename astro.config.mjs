import { defineConfig } from "astro/config";
import vue from '@astrojs/vue';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://petbic.com',
  integrations: [
    tailwind({
      // Example: Permite escribir declaraciones CSS anidadas
      // junto con la sintaxis de Tailwind
      nesting: true,
    }),
    vue()
  ],
});
