import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.enum(['web', 'pwn', 'crypto', 'forensics', 'misc', 'cve', 'htb', 'reverse']),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writeups };
