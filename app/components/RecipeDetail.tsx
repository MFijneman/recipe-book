'use client';

import { useState } from 'react';
import { Recipe } from '@/types/recipe';
import { useTranslation } from '@/i18n/useTranslation';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

export default function RecipeDetail({ recipe, onBack }: RecipeDetailProps) {
  const [servings, setServings] = useState(4);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions' | 'nutrition'>('ingredients');
  const { t } = useTranslation();

  const adjustServings = (newServings: number) => {
    setServings(Math.max(1, newServings));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white';
      case 'Medium':
        return 'bg-gradient-to-r from-amber-600 to-orange-700 text-white';
      case 'Hard':
        return 'bg-gradient-to-r from-red-600 to-rose-700 text-white';
      default:
        return 'bg-gradient-to-r from-stone-600 to-gray-700 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-stone-200/50 dark:border-gray-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">{t('recipe.back.to.list')}</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Recipe Header */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-stone-200/50 dark:border-gray-700/50 p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recipe Image */}
            <div className="h-80 bg-gradient-to-br from-stone-100 via-neutral-100 to-stone-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white/30 dark:bg-gray-600/30 backdrop-blur-sm rounded-2xl p-6 mb-4">
                  <svg
                    className="mx-auto h-12 w-12 text-stone-700 dark:text-gray-300"
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

            {/* Recipe Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-3">
                  {recipe.title}
                </h1>
                <p className="text-stone-700 dark:text-stone-300 text-lg leading-relaxed">{recipe.description}</p>
                {recipe.source && (
                  <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                    {t('recipe.inspiration')}{' '}
                    <a
                      href={recipe.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-stone-700 dark:hover:text-stone-200"
                    >
                      {recipe.source}
                    </a>
                  </p>
                )}
              </div>

              {/* Recipe Meta */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-stone-100/50 dark:bg-gray-700/50 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg
                      className="w-5 h-5 text-stone-600 dark:text-gray-400"
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
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                      {t('recipe.prep.time')}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-stone-800 dark:text-stone-100">
                    {recipe.prepTime} {t('unit.minutes')}
                  </p>
                </div>

                <div className="bg-stone-100/50 dark:bg-gray-700/50 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg
                      className="w-5 h-5 text-stone-600 dark:text-gray-400"
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
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                      {t('recipe.total.time')}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-stone-800 dark:text-stone-100">
                    {recipe.totalTime} {t('unit.minutes')}
                  </p>
                </div>

                <div className="bg-stone-100/50 dark:bg-gray-700/50 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg
                      className="w-5 h-5 text-stone-600 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                      {t('recipe.servings')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => adjustServings(servings - 1)}
                      className="w-8 h-8 rounded-full bg-stone-200 dark:bg-gray-600 flex items-center justify-center hover:bg-stone-300 dark:hover:bg-gray-500 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-stone-700 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="text-lg font-semibold text-stone-800 dark:text-stone-100 min-w-[2rem] text-center">
                      {servings}
                    </span>
                    <button
                      onClick={() => adjustServings(servings + 1)}
                      className="w-8 h-8 rounded-full bg-stone-200 dark:bg-gray-600 flex items-center justify-center hover:bg-stone-300 dark:hover:bg-gray-500 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-stone-700 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="bg-stone-100/50 dark:bg-gray-700/50 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                      {t('recipe.difficulty')}
                    </span>
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-stone-100 to-neutral-100 dark:from-gray-700 dark:to-gray-600 text-stone-800 dark:text-gray-200 text-xs font-medium rounded-full border border-stone-200 dark:border-gray-600"
                  >
                    {t(`tag.${tag}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Content Tabs */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-stone-200/50 dark:border-gray-700/50 overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-stone-200/50 dark:border-gray-700/50">
            {[
              { id: 'ingredients', label: t('recipe.ingredients'), icon: '🥕' },
              {
                id: 'instructions',
                label: t('recipe.instructions'),
                icon: '📝',
              },
              { id: 'nutrition', label: t('recipe.nutrition'), icon: '📊' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'ingredients' | 'instructions' | 'nutrition')}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-stone-100/50 dark:bg-gray-700/50 text-stone-800 dark:text-stone-100 border-b-2 border-stone-600 dark:border-gray-400'
                    : 'text-stone-600 dark:text-gray-400 hover:text-stone-800 dark:hover:text-stone-200'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'ingredients' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">{t('recipe.ingredients')}</h3>
                <div className="grid gap-3">
                  {recipe.ingredients.map((ingredient, index) => {
                    let scaledAmount = ingredient.amount;
                    const baseServings = recipe.servings || 4;
                    // Only scale if amount is a number
                    if (!isNaN(Number(ingredient.amount)) && baseServings > 0) {
                      scaledAmount = (Number(ingredient.amount) * (servings / baseServings))
                        .toFixed(2)
                        .replace(/\.00$/, '');
                    }
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-3 bg-stone-50/50 dark:bg-gray-700/50 rounded-xl"
                      >
                        <div className="w-2 h-2 bg-stone-400 dark:bg-gray-500 rounded-full"></div>
                        <span className="font-medium text-stone-800 dark:text-stone-100">
                          {scaledAmount} {ingredient.unit}
                        </span>
                        <span className="text-stone-700 dark:text-stone-300">{ingredient.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'instructions' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">
                  {t('recipe.instructions')}
                </h3>
                <div className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-stone-600 dark:bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-stone-700 dark:text-stone-300 leading-relaxed">{instruction}</p>
                    </div>
                  ))}
                </div>

                {/* Tips */}
                <div className="mt-8 p-6 bg-amber-50/50 dark:bg-amber-900/20 rounded-2xl border border-amber-200/50 dark:border-amber-800/50">
                  <h4 className="text-lg font-bold text-amber-800 dark:text-amber-200 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {t('recipe.tips')}
                  </h4>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="text-amber-700 dark:text-amber-300 flex items-start space-x-2">
                        <span className="text-amber-500 dark:text-amber-400 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-stone-800 dark:text-stone-100 mb-4">{t('recipe.nutrition')}</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {Object.entries(recipe.nutrition).map(([key, value]) => (
                    <div key={key} className="bg-stone-100/50 dark:bg-gray-700/50 rounded-2xl p-4 text-center">
                      <p className="text-2xl font-bold text-stone-800 dark:text-stone-100">{value}</p>
                      <p className="text-sm text-stone-600 dark:text-gray-400 capitalize">{key}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-stone-600 dark:text-gray-400 text-center">
                  {t('recipe.nutrition.disclaimer')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
