/**
 * Converts a blog post title into a URL-friendly slug.
 * e.g. "Hello World! It's a Test" → "hello-world-its-a-test"
 */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/['']/g, "") // strip apostrophes (no hyphen for contractions)
    .replace(/[^a-z0-9\s-]/g, "") // remove remaining non-alphanumeric chars
    .trim()
    .replace(/\s+/g, "-") // spaces → hyphens
    .replace(/-+/g, "-"); // collapse consecutive hyphens
}
