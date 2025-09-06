'use client';

import { useRouter } from 'next/navigation';
import BasicLayout from '@/components/BasicLayout';
import RecipeDetail from '@/components/RecipeDetail';
import { Recipe } from '@/types/recipe';

interface RecipePageClientProps {
  recipe: Recipe | null;
}

export default function RecipePageClient({ recipe }: RecipePageClientProps) {
  const router = useRouter();

  const handleBackToRecipes = () => {
    router.push('/');
  };

  if (!recipe) {
    return (
      <BasicLayout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-4">Recipe not found</h1>
            <p className="text-stone-600 dark:text-stone-400 mb-6">
              The recipe you&apos;re looking for doesn&apos;t exist.
            </p>
            <button
              onClick={handleBackToRecipes}
              className="px-6 py-3 bg-stone-600 text-white rounded-lg hover:bg-stone-700 transition-colors"
            >
              Back to Recipes
            </button>
          </div>
        </div>
      </BasicLayout>
    );
  }

  return (
    <BasicLayout>
      <RecipeDetail recipe={recipe} onBack={handleBackToRecipes} />
    </BasicLayout>
  );
}
