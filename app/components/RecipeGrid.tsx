import RecipeCard from './RecipeCard';
import { Recipe } from '@/types/recipe';

interface RecipeGridProps {
  recipes: Recipe[];
}

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  if (recipes.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 px-4 py-9 text-center">
        <div
          className="flex h-[92px] w-[92px] items-center justify-center bg-sage-200"
          style={{ borderRadius: '46% 54% 58% 42% / 52% 48% 52% 48%' }}
        >
          <svg
            className="text-sage-700"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <h3 className="font-heading text-[26px]">No recipes found</h3>
        <p className="text-[15px] text-ink/70">Try adjusting your search terms or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(258px,1fr))] gap-[18px]">
      {recipes.map((recipe, index) => (
        <RecipeCard key={recipe.id} recipe={recipe} index={index} />
      ))}
    </div>
  );
}
