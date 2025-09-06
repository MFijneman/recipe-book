import { recipes } from '@/data/recipes';
import { extractRecipeIdFromSlug, createRecipeSlug } from '@/utils/slug';
import RecipePageClient from './RecipePage';

export async function generateStaticParams() {
  return recipes.map(recipe => ({
    slug: createRecipeSlug(recipe),
  }));
}

interface RecipePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipeId = extractRecipeIdFromSlug(slug);
  const recipe = recipeId ? (recipes.find(r => r.id === recipeId) ?? null) : null;

  return <RecipePageClient recipe={recipe} />;
}
