import { Recipe } from '@/types/recipe';

const chickenSummerRolls: Recipe = {
  id: 10,
  title: 'Chicken Summer Rolls',
  description:
    'Light, fresh Vietnamese-style rolls filled with caramelized lemongrass chicken, crunchy vegetables, and herbs, served with a peanut dipping sauce.',
  cookTime: 6,
  prepTime: 40,
  totalTime: 46,
  difficulty: 'medium',
  image: 'chicken_summer_rolls.jpg',
  tags: ['lunch', 'snack', 'asian', 'chicken', 'healthy'],
  source: 'https://www.recipetineats.com/lemongrass-chicken-rice-paper-rolls/',
  ingredients: [
    {
      name: 'boneless chicken thighs, thinly sliced',
      amount: '350',
      unit: 'g',
    },
    {
      name: 'fish sauce (or light soy sauce)',
      amount: '1.5',
      unit: 'tbsp',
    },
    {
      name: 'brown sugar',
      amount: '2',
      unit: 'tbsp',
    },
    {
      name: 'lemongrass, finely grated (or paste)',
      amount: '1',
      unit: 'tbsp',
    },
    {
      name: 'lime juice',
      amount: '1',
      unit: 'tbsp',
    },
    {
      name: 'garlic clove, finely grated',
      amount: '1',
      unit: '',
    },
    {
      name: 'neutral oil, for cooking',
      amount: '1',
      unit: 'tbsp',
    },
    {
      name: 'round rice paper sheets (~22cm)',
      amount: '10',
      unit: '',
    },
    {
      name: 'dried vermicelli noodles',
      amount: '70',
      unit: 'g',
    },
    {
      name: 'green cabbage, finely sliced',
      amount: '70',
      unit: 'g',
    },
    {
      name: 'red cabbage, finely sliced',
      amount: '70',
      unit: 'g',
    },
    {
      name: 'carrot, julienned',
      amount: '1',
      unit: '',
    },
    {
      name: 'coriander, chopped',
      amount: '10',
      unit: 'g',
    },
    {
      name: 'mint leaves',
      amount: '15',
      unit: 'g',
    },
    {
      name: 'natural peanut butter (for the sauce)',
      amount: '1.5',
      unit: 'tbsp',
    },
    {
      name: 'hoisin sauce (for the sauce)',
      amount: '2',
      unit: 'tbsp',
    },
    {
      name: 'white vinegar (for the sauce)',
      amount: '1',
      unit: 'tbsp',
    },
    {
      name: 'milk (for the sauce)',
      amount: '60-80',
      unit: 'ml',
    },
    {
      name: 'small garlic clove, finely grated (for the sauce)',
      amount: '1',
      unit: '',
    },
    {
      name: 'brown sugar (for the sauce)',
      amount: '2',
      unit: 'tsp',
    },
    {
      name: 'salt (for the sauce)',
      amount: '1',
      unit: 'pinch',
    },
    {
      name: 'chilli paste (for the sauce, optional)',
      amount: '0.5',
      unit: 'tsp',
    },
  ],
  instructions: [
    'Combine the chicken with the fish sauce, brown sugar, lemongrass, lime juice, and garlic. Let marinate for 15 minutes.',
    'Meanwhile, make the peanut sauce: mix all the sauce ingredients in a bowl until smooth, adjusting the milk for your desired consistency.',
    'Cover the vermicelli noodles with hot water for 2 minutes, then drain thoroughly and let cool completely.',
    'Heat the oil in a large non-stick pan over high heat. Cook the chicken in batches for about 3 minutes, stirring constantly, until caramelized. Let cool on a plate before using.',
    'Fill a bowl with warm tap water. Submerge a rice paper sheet for 2-3 seconds, then place it smooth-side down on a cutting board; it will continue to soften as you work.',
    'Layer the fillings just below the center of the sheet: coriander, chicken, carrot, cabbage, mint, then a neat bundle of noodles on top to weigh the filling down.',
    "Fold the bottom over the filling, fold the sides inward, and roll up firmly to seal. Don't worry if they're a bit wonky! Repeat with the remaining sheets.",
    'Arrange the rolls on a plate without stacking them and serve with the peanut sauce for dipping.',
  ],
  servings: 10,
  nutrition: {
    calories: 163,
    protein: 7,
    carbs: 18,
    fat: 7,
    fiber: 1,
  },
  tips: [
    'Chicken thighs caramelize better and stay juicier than breast.',
    'Fresh lemongrass is best, but frozen or paste works too. Grate it finely to avoid tough fibers.',
    'Make-ahead: wrap the rolls individually in plastic wrap and refrigerate for up to 6-8 hours.',
    'Fun DIY option: set out all the components and let everyone assemble their own rolls at the table.',
  ],
};

export default chickenSummerRolls;
