import { defineConfig } from 'astro/config'

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://sbrvme.github.io',
  base: 'msphoto',
  integrations: [react()],
})