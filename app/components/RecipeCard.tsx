'use client';

import Link from 'next/link';
import { Recipe } from '@/types/recipe';
import { useTranslation } from '@/i18n/useTranslation';
import { createRecipeSlug } from '@/utils/slug';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { t } = useTranslation();
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white';
      case 'medium':
        return 'bg-gradient-to-r from-amber-600 to-orange-700 text-white';
      case 'hard':
        return 'bg-gradient-to-r from-red-600 to-rose-700 text-white';
      default:
        return 'bg-gradient-to-r from-stone-600 to-gray-700 text-white';
    }
  };

  return (
    <div className="group bg-stone-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-stone-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      {/* Recipe Image Placeholder */}
      <div className="h-56 bg-gradient-to-br from-stone-100 via-neutral-100 to-stone-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-200/30 dark:from-gray-600/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-white/30 dark:bg-gray-600/30 backdrop-blur-sm rounded-2xl p-4 mb-3">
              <svg
                className="mx-auto h-8 w-8 text-stone-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-stone-800 dark:text-gray-200">Recipe Image</p>
          </div>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-3 group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-colors duration-300">
          {recipe.title}
        </h3>
        <p className="text-stone-700 dark:text-stone-300 text-sm mb-4 leading-relaxed line-clamp-2">
          {recipe.description}
        </p>

        {/* Recipe Meta */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-stone-700 dark:text-stone-300 bg-stone-100/50 dark:bg-gray-700/50 rounded-full px-3 py-1">
            <svg
              className="h-4 w-4 mr-2 text-stone-600 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {recipe.totalTime} {t('unit.minutes')}
          </div>
          <span
            className={`px-3 py-1 text-xs font-bold rounded-full shadow-lg ${getDifficultyColor(recipe.difficulty)}`}
          >
            {t(`difficulity.${recipe.difficulty}`)}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {recipe.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-stone-100 to-neutral-100 dark:from-gray-700 dark:to-gray-600 text-stone-800 dark:text-gray-200 text-xs font-medium rounded-full border border-stone-200 dark:border-gray-600"
            >
              {t(`tag.${tag}`)}
            </span>
          ))}
        </div>

        {/* View Recipe Button */}
        <Link
          href={`/recipes/${createRecipeSlug(recipe)}`}
          className="block w-full bg-gradient-to-r from-stone-600 to-stone-700 dark:from-gray-600 dark:to-gray-700 text-white py-3 px-6 rounded-2xl font-semibold hover:from-stone-700 hover:to-stone-800 dark:hover:from-gray-700 dark:hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
        >
          {t('recipe.view.details')}
        </Link>
      </div>
    </div>
  );
}
