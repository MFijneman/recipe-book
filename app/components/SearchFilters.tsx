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
  setSelectedDifficulty
}: SearchFiltersProps) {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-stone-100/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-stone-200/50 dark:border-gray-700/50 p-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Box */}
          <div className="flex-1">
            <div className="relative group">
              <input
                type="text"
                id="search"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-stone-50/80 dark:bg-gray-700/80 backdrop-blur-sm border border-stone-200/50 dark:border-gray-600/50 rounded-2xl focus:ring-4 focus:ring-stone-500/20 dark:focus:ring-gray-500/20 focus:border-stone-600 dark:focus:border-gray-500 transition-all duration-300 text-stone-800 dark:text-stone-200 placeholder-stone-600/60 dark:placeholder-gray-400/60"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-stone-600 dark:text-gray-400 group-focus-within:text-stone-700 dark:group-focus-within:text-gray-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-stone-700 dark:bg-gray-600 hover:bg-stone-800 dark:hover:bg-gray-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Difficulty Filter */}
          <div className="lg:w-48">
            <select
              id="difficulty"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-4 bg-stone-50/80 dark:bg-gray-700/80 backdrop-blur-sm border border-stone-200/50 dark:border-gray-600/50 rounded-2xl focus:ring-4 focus:ring-stone-500/20 dark:focus:ring-gray-500/20 focus:border-stone-600 dark:focus:border-gray-500 transition-all duration-300 text-stone-800 dark:text-stone-200 appearance-none cursor-pointer"
            >
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
} 