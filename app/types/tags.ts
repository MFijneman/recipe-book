import { RecipeTag, MealType, Cuisine, Ingredient, CookingMethod, Attribute } from './recipe';

export const TAG_CATEGORIES = {
  mealTypes: ['breakfast', 'lunch', 'dinner', 'dessert', 'snack'] as MealType[],
  cuisines: ['greek', 'french', 'italian', 'mediterranean', 'asian', 'mexican', 'indian', 'american'] as Cuisine[],
  ingredients: ['beef', 'chicken', 'pasta', 'vegetarian', 'vegan', 'fish', 'pork', 'lamb', 'seafood'] as Ingredient[],
  cookingMethods: ['stew', 'stuffed', 'traybake', 'one-pan', 'homemade', 'grilled', 'baked', 'fried', 'roasted'] as CookingMethod[],
  attributes: ['quick', 'easy', 'healthy', 'comfort-food', 'gluten-free', 'dairy-free', 'spicy', 'sweet', 'savory'] as Attribute[]
} as const;

export function getTagCategory(tag: RecipeTag): keyof typeof TAG_CATEGORIES {
  if (TAG_CATEGORIES.mealTypes.includes(tag as MealType)) return 'mealTypes';
  if (TAG_CATEGORIES.cuisines.includes(tag as Cuisine)) return 'cuisines';
  if (TAG_CATEGORIES.ingredients.includes(tag as Ingredient)) return 'ingredients';
  if (TAG_CATEGORIES.cookingMethods.includes(tag as CookingMethod)) return 'cookingMethods';
  if (TAG_CATEGORIES.attributes.includes(tag as Attribute)) return 'attributes';
  throw new Error(`Unknown tag category for tag: ${tag}`);
}

export function getAllTags(): RecipeTag[] {
  return [
    ...TAG_CATEGORIES.mealTypes,
    ...TAG_CATEGORIES.cuisines,
    ...TAG_CATEGORIES.ingredients,
    ...TAG_CATEGORIES.cookingMethods,
    ...TAG_CATEGORIES.attributes
  ];
}

export function getTagsByCategory(category: keyof typeof TAG_CATEGORIES): RecipeTag[] {
  return TAG_CATEGORIES[category];
} 