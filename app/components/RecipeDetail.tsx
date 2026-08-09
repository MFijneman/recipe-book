'use client';

import { useState } from 'react';
import { Recipe } from '@/types/recipe';
import { useTranslation } from '@/i18n/useTranslation';

interface RecipeDetailProps {
  recipe: Recipe;
}

const difficultyTags = {
  easy: 'bg-sage-100 text-sage-800',
  medium: 'bg-accent-100 text-accent-800',
  hard: 'bg-sand-100 text-sand-800',
};

const nutritionUnits: Record<string, string> = {
  calories: ' kcal',
  protein: ' g',
  carbs: ' g',
  fat: ' g',
  fiber: ' g',
};

function sourceLabel(source: string): string {
  try {
    return new URL(source).hostname.replace(/^www\./, '');
  } catch {
    return source;
  }
}

export default function RecipeDetail({ recipe }: RecipeDetailProps) {
  const [servings, setServings] = useState(recipe.servings);
  const { t } = useTranslation();

  const adjustServings = (newServings: number) => {
    setServings(Math.max(1, newServings));
  };

  const baseServings = recipe.servings || 4;
  const scaledIngredients = recipe.ingredients.map(ingredient => {
    let amount = ingredient.amount;
    // Only scale if amount is a number
    if (!isNaN(Number(ingredient.amount)) && baseServings > 0) {
      amount = (Number(ingredient.amount) * (servings / baseServings)).toFixed(2).replace(/\.?0+$/, '');
    }
    return { qty: `${amount} ${ingredient.unit}`.trim(), name: ingredient.name };
  });

  const hasNutrition = recipe.nutrition.calories > 0;

  return (
    <div>
      {/* Recipe Header */}
      <header className="mx-auto flex max-w-[1160px] flex-wrap items-center gap-9 px-4 py-6">
        <div className="flex-[1_1_440px]">
          <div className="mb-3 flex flex-wrap gap-1.5">
            {recipe.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-sage-100 px-2.5 py-[3px] text-[11px] tracking-wide text-sage-800"
              >
                {t(`tag.${tag}`)}
              </span>
            ))}
          </div>
          <h1 className="mb-3 font-heading text-[clamp(32px,4.5vw,50px)] leading-[1.08] tracking-tight text-pretty">
            {recipe.title}
          </h1>
          <p className="max-w-[620px] text-[17px] leading-relaxed text-pretty text-ink/80">{recipe.description}</p>
          {recipe.source && (
            <p className="mt-3 text-[13px] text-ink/55">
              {t('recipe.inspiration')}{' '}
              <a
                href={recipe.source}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-700 underline hover:text-accent-600"
              >
                {sourceLabel(recipe.source)}
              </a>
            </p>
          )}

          {/* Recipe Meta */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex flex-none items-center gap-2 rounded-full bg-surface px-4 py-2 text-[13.5px] font-semibold whitespace-nowrap">
              <svg
                className="text-accent-700"
                width="15"
                height="15"
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
              {t('recipe.prep')} {recipe.prepTime} {t('unit.min')}
            </span>
            <span className="inline-flex flex-none items-center gap-2 rounded-full bg-surface px-4 py-2 text-[13.5px] font-semibold whitespace-nowrap">
              <svg
                className="text-accent-700"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 2v2" />
                <path d="M12 2v2" />
                <path d="M16 2v2" />
                <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Z" />
                <path d="M2 12h20" />
              </svg>
              {t('recipe.total')} {recipe.totalTime} {t('unit.min')}
            </span>
            <span
              className={`inline-flex flex-none items-center rounded-full px-4 py-2 text-[13.5px] font-semibold whitespace-nowrap ${difficultyTags[recipe.difficulty]}`}
            >
              {t(`difficulity.${recipe.difficulty}`)}
            </span>
          </div>
        </div>

        {/* Decorative blob */}
        <div
          aria-hidden="true"
          className="relative hidden min-w-[220px] flex-[0_1_300px] items-center justify-center md:flex"
        >
          <div
            className="flex aspect-square w-[min(270px,100%)] items-center justify-center bg-sage-300"
            style={{ borderRadius: '46% 54% 58% 42% / 52% 48% 52% 48%' }}
          >
            <svg
              className="text-sage-800"
              width="72"
              height="72"
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
          <div className="absolute right-2.5 bottom-1.5 h-16 w-16 rounded-full bg-accent"></div>
        </div>
      </header>

      <main className="mx-auto flex max-w-[1160px] flex-wrap items-start gap-6 px-4 pt-2 pb-9">
        {/* Ingredients */}
        <section className="flex flex-[1_1_300px] flex-col gap-3 rounded-[28px] bg-surface p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-heading text-[26px]">{t('recipe.ingredients')}</h2>
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => adjustServings(servings - 1)}
                aria-label="Fewer servings"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-cream transition-colors hover:bg-ink/5"
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
                  <path d="M5 12h14" />
                </svg>
              </button>
              <span className="min-w-[76px] text-center text-sm font-bold">
                {servings} {t('recipe.servings').toLowerCase()}
              </span>
              <button
                onClick={() => adjustServings(servings + 1)}
                aria-label="More servings"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 bg-cream transition-colors hover:bg-ink/5"
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
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            {scaledIngredients.map((ingredient, index) => (
              <div key={index} className="flex items-baseline gap-2.5 border-b border-ink/15 py-[9px] text-[14.5px]">
                <span className="h-[7px] w-[7px] flex-none self-center rounded-full bg-accent"></span>
                <span className="font-bold whitespace-nowrap">{ingredient.qty}</span>
                <span className="text-ink/80">{ingredient.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-[2_1_440px] flex-col gap-6">
          {/* Instructions */}
          <div>
            <h2 className="mb-4 font-heading text-[26px]">{t('recipe.instructions')}</h2>
            <div className="flex flex-col gap-4">
              {recipe.instructions.map((instruction, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-[50%_50%_50%_12px] bg-accent text-sm font-bold text-cream">
                    {index + 1}
                  </span>
                  <p className="mt-[3px] text-[15px] leading-[1.65] text-pretty text-ink/85">{instruction}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          {recipe.tips.length > 0 && (
            <div className="rounded-[28px] bg-sage-100 p-6">
              <h3 className="mb-3 flex items-center gap-2.5 font-heading text-xl text-sage-800">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
                {t('recipe.tips')}
              </h3>
              <div className="flex flex-col gap-2">
                {recipe.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-sm leading-relaxed text-sage-800">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sage-600"></span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nutrition */}
          {hasNutrition && (
            <div>
              <h2 className="mb-4 font-heading text-[26px]">{t('recipe.nutrition')}</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(104px,1fr))] gap-3">
                {Object.entries(recipe.nutrition).map(([key, value]) => (
                  <div key={key} className="flex flex-col items-center gap-0.5 rounded-[16px] bg-surface px-2 py-4">
                    <span className="font-heading text-2xl">
                      {value}
                      {nutritionUnits[key] ?? ''}
                    </span>
                    <span className="text-xs text-ink/60">{t(`recipe.${key}`)}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-ink/55">{t('recipe.nutrition.disclaimer')}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
