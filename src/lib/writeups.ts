import { getCollection, type CollectionEntry } from 'astro:content';

export type Writeup = CollectionEntry<'writeups'>;
export type WriteupType = 'htb' | 'cve' | 'blog';

// The glob loader builds ids from the file path (e.g. "cve/foo"). We keep
// public URLs flat (/writeups/foo) by using just the final path segment.
export function getSlug(entry: Writeup): string {
  return entry.id.split('/').pop()!;
}

// Rough reading time based on ~200 wpm.
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatDateLong(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Top-level filter tabs shown on the archive + homepage.
export const TYPE_TABS: { id: 'all' | WriteupType; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'htb', label: 'HTB' },
  { id: 'cve', label: 'CVEs' },
  { id: 'blog', label: 'Blog' },
];

export const TYPE_LABELS: Record<WriteupType, string> = {
  htb: 'HTB',
  cve: 'CVE',
  blog: 'Blog',
};

// Accent colour per content type (border + text utility classes).
export function typeColor(type: string): string {
  switch (type) {
    case 'htb':
      return 'text-accent border-accent/30';
    case 'cve':
      return 'text-danger border-danger/30';
    case 'blog':
      return 'text-info border-info/30';
    default:
      return 'text-text-muted border-border';
  }
}

// Severity colour for CVE badges (filled variant).
export function severityColor(severity: string | undefined): string {
  switch ((severity ?? '').toLowerCase()) {
    case 'critical':
      return 'text-danger border-danger bg-danger/5';
    case 'high':
      return 'text-warning border-warning bg-warning/5';
    case 'medium':
      return 'text-info border-info bg-info/5';
    case 'low':
      return 'text-text-muted border-text-muted bg-text-muted/5';
    default:
      return 'text-text-muted border-border bg-bg-elevated';
  }
}

// Difficulty colour for HTB badges.
export function difficultyColor(difficulty: string | undefined): string {
  switch ((difficulty ?? '').toLowerCase()) {
    case 'easy':
      return 'text-accent border-accent/40';
    case 'medium':
      return 'text-warning border-warning/40';
    case 'hard':
      return 'text-danger border-danger/40';
    case 'insane':
      return 'text-danger border-danger';
    default:
      return 'text-text-muted border-border';
  }
}

function byDateDesc(a: Writeup, b: Writeup): number {
  return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
}

// Single source of truth for fetching published writeups (drafts excluded in
// production; pass includeDrafts to preview locally if ever needed).
export async function getPublishedWriteups(includeDrafts = false): Promise<Writeup[]> {
  const all = await getCollection('writeups');
  return all
    .filter((w) => includeDrafts || !w.data.draft)
    .sort(byDateDesc);
}

// All unique tags across published writeups, sorted alphabetically.
export async function getAllTags(): Promise<string[]> {
  const writeups = await getPublishedWriteups();
  const tags = new Set<string>();
  for (const w of writeups) {
    for (const tag of w.data.tags) tags.add(tag);
  }
  return [...tags].sort((a, b) => a.localeCompare(b));
}
