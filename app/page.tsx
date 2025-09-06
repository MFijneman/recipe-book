'use client';

import { useState } from 'react';
import BasicLayout from '@/components/BasicLayout';
import Header from '@/components/Header';
import SearchFilters from '@/components/SearchFilters';
import RecipeGrid from '@/components/RecipeGrid';
import { recipes } from '@/data/recipes';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;

    return matchesSearch && matchesDifficulty;
  });

  // Show recipe list view
  return (
    <BasicLayout>
      <Header recipeCount={filteredRecipes.length} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
        />

        <RecipeGrid recipes={filteredRecipes} />
      </div>
    </BasicLayout>
  );
}
