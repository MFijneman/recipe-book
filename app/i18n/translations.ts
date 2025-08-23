export interface Translations {
  [key: string]: {
    en: string;
    nl: string;
  };
}

export const translations: Translations = {
  // Header and Navigation
  'app.title': {
    en: 'RecipeBook',
    nl: 'Receptenboek',
  },
  'header.title': {
    en: 'Discover the Best Recipes',
    nl: 'Ontdek de Beste Recepten',
  },
  'header.subtitle': {
    en: "Discover a curated collection of tried and tested recipes that are sure to impress. Whether you're looking for quick weeknight dinners or elaborate weekend feasts, find inspiration and step-by-step guides to recreate delicious meals.",
    nl: 'Ontdek een zorgvuldig samengestelde collectie van beproefde recepten die zeker zullen imponeren. Of je nu op zoek bent naar snelle weekdagmaaltijden of uitgebreide weekendfeesten, vind inspiratie en stap-voor-stap gidsen om heerlijke maaltijden te bereiden.',
  },
  'recipes.found': {
    en: 'recipe found',
    nl: 'recept gevonden',
  },
  'recipes.found.plural': {
    en: 'recipes found',
    nl: 'recepten gevonden',
  },

  // Search and Filters
  'search.placeholder': {
    en: 'Search recipes...',
    nl: 'Zoek recepten...',
  },
  'search.button': {
    en: 'Search',
    nl: 'Zoeken',
  },
  'filter.all.difficulties': {
    en: 'All Difficulties',
    nl: 'Alle Moeilijkheidsgraden',
  },
  'filter.easy': {
    en: 'Easy',
    nl: 'Makkelijk',
  },
  'filter.medium': {
    en: 'Medium',
    nl: 'Gemiddeld',
  },
  'filter.hard': {
    en: 'Hard',
    nl: 'Moeilijk',
  },
  // Recipe Cards
  'recipe.cook.time': {
    en: 'Cook Time',
    nl: 'Kooktijd',
  },
  'recipe.prep.time': {
    en: 'Prep Time',
    nl: 'Voorbereidingstijd',
  },
  'recipe.total.time': {
    en: 'Total Time',
    nl: 'Totale Tijd',
  },
  'recipe.difficulty': {
    en: 'Difficulty',
    nl: 'Moeilijkheidsgraad',
  },
  'difficulity.easy': {
    en: 'Easy',
    nl: 'Makkelijk',
  },
  'difficulity.medium': {
    en: 'Medium',
    nl: 'Gemiddeld',
  },
  'difficulity.hard': {
    en: 'Hard',
    nl: 'Moeilijk',
  },
  'recipe.servings': {
    en: 'Servings',
    nl: 'Porties',
  },
  'recipe.view.details': {
    en: 'View Recipe',
    nl: 'Bekijk Recept',
  },

  // Recipe Detail
  'recipe.back.to.list': {
    en: 'Back to Recipes',
    nl: 'Terug naar Recepten',
  },
  'recipe.ingredients': {
    en: 'Ingredients',
    nl: 'Ingrediënten',
  },
  'recipe.instructions': {
    en: 'Instructions',
    nl: 'Bereidingswijze',
  },
  'recipe.nutrition': {
    en: 'Nutrition',
    nl: 'Voedingswaarden',
  },
  'recipe.tips': {
    en: 'Tips',
    nl: 'Tips',
  },
  'recipe.source': {
    en: 'Source',
    nl: 'Bron',
  },
  'recipe.calories': {
    en: 'Calories',
    nl: 'Calorieën',
  },
  'recipe.protein': {
    en: 'Protein',
    nl: 'Eiwit',
  },
  'recipe.carbs': {
    en: 'Carbs',
    nl: 'Koolhydraten',
  },
  'recipe.fat': {
    en: 'Fat',
    nl: 'Vet',
  },
  'recipe.fiber': {
    en: 'Fiber',
    nl: 'Vezels',
  },
  'recipe.nutrition.disclaimer': {
    en: '*Nutrition information is per serving and may vary based on ingredients used.',
    nl: '*Voedingsinformatie is per portie en kan variëren afhankelijk van de gebruikte ingrediënten.',
  },
  'recipe.inspiration': {
    en: 'Inspiration:',
    nl: 'Inspiratie:',
  },

  // Common units
  'unit.minutes': {
    en: 'minutes',
    nl: 'minuten',
  },
  'unit.g': {
    en: 'g',
    nl: 'g',
  },
  'unit.kg': {
    en: 'kg',
    nl: 'kg',
  },
  'unit.ml': {
    en: 'ml',
    nl: 'ml',
  },
  'unit.l': {
    en: 'l',
    nl: 'l',
  },
  'unit.tbsp': {
    en: 'tbsp',
    nl: 'eetl',
  },
  'unit.tsp': {
    en: 'tsp',
    nl: 'theel',
  },
  'unit.cup': {
    en: 'cup',
    nl: 'kop',
  },
  'unit.piece': {
    en: '',
    nl: '',
  },
  'unit.pieces': {
    en: '',
    nl: '',
  },
  'unit.to.serve': {
    en: 'to serve',
    nl: 'om te serveren',
  },
  'unit.dash': {
    en: 'dash',
    nl: 'scheutje',
  },

  // Recipe tags
  'tag.breakfast': {
    en: 'breakfast',
    nl: 'ontbijt',
  },
  'tag.lunch': {
    en: 'lunch',
    nl: 'lunch',
  },
  'tag.dinner': {
    en: 'dinner',
    nl: 'diner',
  },
  'tag.dessert': {
    en: 'dessert',
    nl: 'dessert',
  },
  'tag.snack': {
    en: 'snack',
    nl: 'tussendoortje',
  },

  // Cuisines
  'tag.greek': {
    en: 'Greek',
    nl: 'Grieks',
  },
  'tag.french': {
    en: 'French',
    nl: 'Frans',
  },
  'tag.italian': {
    en: 'Italian',
    nl: 'Italiaans',
  },
  'tag.mediterranean': {
    en: 'Mediterranean',
    nl: 'Mediterraans',
  },
  'tag.asian': {
    en: 'Asian',
    nl: 'Aziatisch',
  },
  'tag.mexican': {
    en: 'Mexican',
    nl: 'Mexicaans',
  },
  'tag.indian': {
    en: 'Indian',
    nl: 'Indiaas',
  },
  'tag.american': {
    en: 'American',
    nl: 'Amerikaans',
  },

  // Ingredients
  'tag.beef': {
    en: 'beef',
    nl: 'rundvlees',
  },
  'tag.chicken': {
    en: 'chicken',
    nl: 'kip',
  },
  'tag.pasta': {
    en: 'pasta',
    nl: 'pasta',
  },
  'tag.vegetarian': {
    en: 'vegetarian',
    nl: 'vegetarisch',
  },
  'tag.vegan': {
    en: 'vegan',
    nl: 'veganistisch',
  },
  'tag.fish': {
    en: 'fish',
    nl: 'vis',
  },
  'tag.pork': {
    en: 'pork',
    nl: 'varkensvlees',
  },
  'tag.lamb': {
    en: 'lamb',
    nl: 'lamsvlees',
  },
  'tag.seafood': {
    en: 'seafood',
    nl: 'zeevruchten',
  },

  // Cooking Methods
  'tag.stew': {
    en: 'stew',
    nl: 'stoofpot',
  },
  'tag.stuffed': {
    en: 'stuffed',
    nl: 'gevuld',
  },
  'tag.traybake': {
    en: 'traybake',
    nl: 'ovenschotel',
  },
  'tag.one-pan': {
    en: 'one-pan',
    nl: 'één-pan',
  },
  'tag.homemade': {
    en: 'homemade',
    nl: 'zelfgemaakt',
  },
  'tag.grilled': {
    en: 'grilled',
    nl: 'gegrild',
  },
  'tag.baked': {
    en: 'baked',
    nl: 'gebakken',
  },
  'tag.fried': {
    en: 'fried',
    nl: 'gebakken',
  },
  'tag.roasted': {
    en: 'roasted',
    nl: 'geroosterd',
  },

  // Attributes
  'tag.quick': {
    en: 'quick',
    nl: 'snel',
  },
  'tag.easy': {
    en: 'easy',
    nl: 'makkelijk',
  },
  'tag.healthy': {
    en: 'healthy',
    nl: 'gezond',
  },
  'tag.comfort-food': {
    en: 'comfort food',
    nl: 'comfort food',
  },
  'tag.gluten-free': {
    en: 'gluten-free',
    nl: 'glutenvrij',
  },
  'tag.dairy-free': {
    en: 'dairy-free',
    nl: 'lactosevrij',
  },
  'tag.spicy': {
    en: 'spicy',
    nl: 'pikant',
  },
  'tag.sweet': {
    en: 'sweet',
    nl: 'zoet',
  },
  'tag.savory': {
    en: 'savory',
    nl: 'hartig',
  },

  // Tag Categories
  'category.mealTypes': {
    en: 'Meal Types',
    nl: 'Maaltijdtypes',
  },
  'category.cuisines': {
    en: 'Cuisines',
    nl: 'Keukens',
  },
  'category.ingredients': {
    en: 'Ingredients',
    nl: 'Ingrediënten',
  },
  'category.cookingMethods': {
    en: 'Cooking Methods',
    nl: 'Bereidingsmethoden',
  },
  'category.attributes': {
    en: 'Attributes',
    nl: 'Eigenschappen',
  },

  // Language names
  'language.english': {
    en: 'English',
    nl: 'Engels',
  },
  'language.dutch': {
    en: 'Dutch',
    nl: 'Nederlands',
  },
};

export function getTranslation(key: string, language: string): string {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  return translation[language as keyof typeof translation] || translation.en;
}

export function getPluralTranslation(key: string, count: number, language: string): string {
  if (count === 1) {
    return getTranslation(key, language);
  }
  return getTranslation(`${key}.plural`, language);
}
