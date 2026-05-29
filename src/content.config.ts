import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Fields shared by every kind of writeup.
const base = {
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
};

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writeups' }),
  // A discriminated union on `type` lets each content kind carry its own
  // metadata while still living in one collection / one render pipeline.
  schema: z.discriminatedUnion('type', [
    // General blog posts.
    z.object({
      type: z.literal('blog'),
      ...base,
      series: z.string().optional(),
    }),
    // HackTheBox / CTF machine writeups.
    z.object({
      type: z.literal('htb'),
      ...base,
      box: z.string().optional(),
      difficulty: z.enum(['easy', 'medium', 'hard', 'insane']).optional(),
      os: z.enum(['linux', 'windows', 'other']).optional(),
      platform: z.string().default('HackTheBox'),
    }),
    // CVE / vulnerability research writeups.
    z.object({
      type: z.literal('cve'),
      ...base,
      cveId: z.string().optional(),
      cvss: z.string().optional(),
      severity: z.enum(['critical', 'high', 'medium', 'low']).optional(),
      vendor: z.string().optional(),
      product: z.string().optional(),
      affected: z.string().optional(),
      patched: z.string().optional(),
      advisoryUrl: z.string().url().optional(),
    }),
  ]),
});

export const collections = { writeups };
