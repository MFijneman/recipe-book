'use client';

import { useTranslation } from '@/i18n/useTranslation';

interface HeaderProps {
  recipeCount: number;
}

export default function Header({ recipeCount }: HeaderProps) {
  const { t } = useTranslation();
  return (
    <header className="bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">
            {t('header.title')}
          </h1>
          <p className="text-stone-700 dark:text-stone-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('header.subtitle')}
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-stone-100/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl px-6 py-3 border border-stone-200/50 dark:border-gray-600/50">
              <span className="text-stone-800 dark:text-stone-200 font-semibold">
                {recipeCount} {t('recipes.found', { count: recipeCount })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
