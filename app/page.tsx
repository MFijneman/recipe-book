'use client';

import { useState, useEffect } from 'react';
import TopHeader from '@/components/TopHeader';
import Header from '@/components/Header';
import SearchFilters from '@/components/SearchFilters';
import RecipeGrid from '@/components/RecipeGrid';
import RecipeDetail from '@/components/RecipeDetail';
import { recipes } from '@/data/recipes';
import { Recipe } from '@/types/recipe';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

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

  const handleViewRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToRecipes = () => {
    setSelectedRecipe(null);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;

    return matchesSearch && matchesDifficulty;
  });

  // Show recipe detail view if a recipe is selected
  if (selectedRecipe) {
    return (
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDarkMode
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
            : 'bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100'
        }`}
      >
        <TopHeader isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        <RecipeDetail recipe={selectedRecipe} onBack={handleBackToRecipes} />
      </div>
    );
  }

  // Show recipe list view
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100'
      }`}
    >
      <TopHeader isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />

      <Header recipeCount={filteredRecipes.length} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />

        <RecipeGrid recipes={filteredRecipes} onViewRecipe={handleViewRecipe} />
      </div>
    </div>
  );
}
