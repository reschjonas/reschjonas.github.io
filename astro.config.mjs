// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import shikiTheme from './src/styles/shiki-theme.json';

// https://astro.build/config
export default defineConfig({
  site: 'https://reschj.one',
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['math'],
    },
    shikiConfig: {
      theme: shikiTheme,
      wrap: false,
    },
  },

  integrations: [mdx(), sitemap()]
});
