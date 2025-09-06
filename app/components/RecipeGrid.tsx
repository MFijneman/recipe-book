import RecipeCard from './RecipeCard';
import { Recipe } from '@/types/recipe';

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-stone-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 border border-stone-200/50 dark:border-gray-700/50 shadow-xl">
          <div className="bg-gradient-to-br from-stone-100 to-neutral-100 dark:from-gray-700 dark:to-gray-600 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <svg
              className="h-10 w-10 text-stone-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
              />
            </svg>
          </div>
          <h3 className="text-xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-2">No recipes found</h3>
          <p className="text-stone-700 dark:text-stone-300">Try adjusting your search terms or filters.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
