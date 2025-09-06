'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TopHeader from '@/components/TopHeader';
import RecipeDetail from '@/components/RecipeDetail';
import { Recipe } from '@/types/recipe';

interface RecipePageClientProps {
  recipe: Recipe | null;
}

export default function RecipePageClient({ recipe }: RecipePageClientProps) {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleBackToRecipes = () => {
    router.push('/');
  };

  if (!recipe) {
    return (
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDarkMode
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
            : 'bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100'
        }`}
      >
        <TopHeader isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
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
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100'
      }`}
    >
      <TopHeader isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <RecipeDetail recipe={recipe} onBack={handleBackToRecipes} />
    </div>
  );
}
