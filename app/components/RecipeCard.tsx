'use client';

import Link from 'next/link';
import { Recipe } from '@/types/recipe';
import { useTranslation } from '@/i18n/useTranslation';
import { createRecipeSlug } from '@/utils/slug';

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

const tints = [
  { bg: 'bg-accent-200', blob: 'bg-accent-300', icon: 'text-accent-800' },
  { bg: 'bg-sage-200', blob: 'bg-sage-300', icon: 'text-sage-800' },
  { bg: 'bg-sand-200', blob: 'bg-sand-300', icon: 'text-sand-800' },
];

const blobShapes = [
  '46% 54% 58% 42% / 52% 48% 52% 48%',
  '58% 42% 46% 54% / 48% 56% 44% 52%',
  '50% 50% 42% 58% / 56% 46% 54% 44%',
];

const difficultyTags = {
  easy: 'bg-sage-100 text-sage-800',
  medium: 'bg-accent-100 text-accent-800',
  hard: 'bg-sand-100 text-sand-800',
};

export default function RecipeCard({ recipe, index }: RecipeCardProps) {
  const { t } = useTranslation();
  const tint = tints[index % tints.length];
  const blobShape = blobShapes[index % blobShapes.length];

  return (
    <Link
      href={`/recipes/${createRecipeSlug(recipe)}`}
      className="flex flex-col overflow-hidden rounded-[32px] bg-surface shadow-soft transition-[box-shadow,transform] duration-250 hover:-translate-y-[3px] hover:shadow-lift"
    >
      {/* Recipe Image Placeholder */}
      <div className={`flex h-[148px] items-center justify-center ${tint.bg}`}>
        <div
          className={`flex h-[86px] w-[86px] items-center justify-center ${tint.blob}`}
          style={{ borderRadius: blobShape }}
        >
          <svg
            className={tint.icon}
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 12h20" />
            <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
            <path d="m4 8 16-4" />
            <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
          </svg>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-heading text-[21px] leading-[1.15]">{recipe.title}</h3>
        <p className="flex-1 text-[13.5px] leading-normal text-ink/70">{recipe.description}</p>

        {/* Recipe Meta */}
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-accent-700">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {recipe.totalTime} {t('unit.min')}
          </span>
          <span
            className={`ml-auto rounded-full px-2.5 py-[3px] text-[11px] tracking-wide ${difficultyTags[recipe.difficulty]}`}
          >
            {t(`difficulity.${recipe.difficulty}`)}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {recipe.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="rounded-full bg-sand-100 px-2.5 py-[3px] text-[11px] tracking-wide text-sand-800">
              {t(`tag.${tag}`)}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
