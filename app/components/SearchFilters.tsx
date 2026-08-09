'use client';

import { useTranslation } from '@/i18n/useTranslation';

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
}

export default function SearchFilters({
  searchTerm,
  setSearchTerm,
  selectedDifficulty,
  setSelectedDifficulty,
}: SearchFiltersProps) {
  const { t } = useTranslation();

  const difficulties = [
    { value: 'All', label: t('filter.all') },
    { value: 'Easy', label: t('filter.easy') },
    { value: 'Medium', label: t('filter.medium') },
    { value: 'Hard', label: t('filter.hard') },
  ];

  return (
    <div className="mb-6 flex flex-wrap items-center gap-3">
      {/* Search Box */}
      <div className="relative flex-[1_1_260px]">
        <svg
          className="pointer-events-none absolute top-1/2 left-[17px] -translate-y-1/2 text-accent-700"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          id="search"
          placeholder={t('search.placeholder')}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="min-h-12 w-full rounded-full border border-transparent bg-surface py-2.5 pr-5 pl-[46px] text-[15px] caret-accent placeholder:text-ink/50 focus-visible:border-accent focus-visible:outline-none"
        />
      </div>

      {/* Difficulty Filter */}
      <div
        className="inline-flex overflow-hidden rounded-full bg-surface"
        role="group"
        aria-label={t('recipe.difficulty')}
      >
        {difficulties.map((difficulty, index) => (
          <button
            key={difficulty.value}
            onClick={() => setSelectedDifficulty(difficulty.value)}
            aria-pressed={selectedDifficulty === difficulty.value}
            className={`px-5 py-[13px] text-sm transition-colors ${index > 0 ? 'border-l border-ink/15' : ''} ${
              selectedDifficulty === difficulty.value ? 'bg-accent text-cream' : 'hover:bg-ink/5'
            }`}
          >
            {difficulty.label}
          </button>
        ))}
      </div>
    </div>
  );
}
