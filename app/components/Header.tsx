interface HeaderProps {
  recipeCount: number;
}

export default function Header({ recipeCount }: HeaderProps) {
  return (
    <header className="bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-800 dark:text-stone-100 mb-6">
            Discover the Best Recipes
          </h1>
          <p className="text-stone-700 dark:text-stone-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover a curated collection of tried and tested recipes that are sure to impress. Whether you&#39;re looking for quick weeknight dinners or elaborate weekend feasts, find inspiration and step-by-step guides to recreate delicious meals.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="bg-stone-100/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl px-6 py-3 border border-stone-200/50 dark:border-gray-600/50">
              <span className="text-stone-800 dark:text-stone-200 font-semibold">
                {recipeCount} recipe{recipeCount !== 1 ? 's' : ''} found
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 