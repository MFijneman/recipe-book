export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'dessert' | 'snack';
export type Cuisine = 'greek' | 'french' | 'italian' | 'mediterranean' | 'asian' | 'mexican' | 'indian' | 'american';
export type Ingredient = 'beef' | 'chicken' | 'pasta' | 'vegetarian' | 'vegan' | 'fish' | 'pork' | 'lamb' | 'seafood';
export type CookingMethod = 'stew' | 'stuffed' | 'traybake' | 'one-pan' | 'homemade' | 'grilled' | 'baked' | 'fried' | 'roasted';
export type Attribute = 'quick' | 'easy' | 'healthy' | 'comfort-food' | 'gluten-free' | 'dairy-free' | 'spicy' | 'sweet' | 'savory';

export type RecipeTag = MealType | Cuisine | Ingredient | CookingMethod | Attribute;

export interface Recipe {
  id: number;
  title: string;
  description: string;
  cookTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  image: string;
  tags: RecipeTag[];
  source: string;
  ingredients: {
    name: string;
    amount: string;
    unit: string;
  }[];
  instructions: string[];
  prepTime: number;
  totalTime: number;
  servings: number;
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  tips: string[];
}