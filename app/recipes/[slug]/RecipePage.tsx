'use client';

import { useRouter } from 'next/navigation';
import BasicLayout from '@/components/BasicLayout';
import RecipeDetail from '@/components/RecipeDetail';
import { Recipe } from '@/types/recipe';
import { useTranslation } from '@/i18n/useTranslation';

interface RecipePageClientProps {
  recipe: Recipe | null;
}

export default function RecipePageClient({ recipe }: RecipePageClientProps) {
  const router = useRouter();
  const { t } = useTranslation();

  const handleBackToRecipes = () => {
    router.push('/');
  };

  const backButton = (
    <button
      onClick={handleBackToRecipes}
      className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 font-heading text-sm transition-colors hover:bg-ink/5"
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
      {t('recipe.back.to.list')}
    </button>
  );

  if (!recipe) {
    return (
      <BasicLayout topHeaderActions={backButton}>
        <div className="mx-auto max-w-[1160px] px-4 py-9 text-center">
          <h1 className="mb-3 font-heading text-[26px]">Recipe not found</h1>
          <p className="mb-6 text-[15px] text-ink/70">The recipe you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={handleBackToRecipes}
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 font-heading text-sm text-cream transition-colors hover:bg-accent-600"
          >
            {t('recipe.back.to.list')}
          </button>
        </div>
      </BasicLayout>
    );
  }

  return (
    <BasicLayout topHeaderActions={backButton}>
      <RecipeDetail recipe={recipe} />
    </BasicLayout>
  );
}
