/**
 * Converts a string to a URL-friendly slug
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Creates a slug from recipe title and ID for unique
 */
export function createRecipeSlug(recipe: { id: number; title: string }): string {
  const titleSlug = createSlug(recipe.title);
  return `${titleSlug}-${recipe.id}`;
}

/**
 * Extracts recipe ID from a slug
 */
export function extractRecipeIdFromSlug(slug: string): number | null {
  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];
  const id = parseInt(lastPart);
  return isNaN(id) ? null : id;
}
