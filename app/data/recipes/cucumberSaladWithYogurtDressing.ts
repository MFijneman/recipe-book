import { Recipe } from '@/types/recipe';

const cucumberSaladWithYogurtDressing: Recipe = {
  id: 8,
  title: 'Cucumber Salad with Fresh Yogurt Dressing',
  description:
    'A fresh and crunchy cucumber salad with green apple, red onion, and toasted pine nuts, tossed in a creamy yogurt-dill dressing.',
  cookTime: 0,
  prepTime: 20,
  totalTime: 20,
  difficulty: 'easy',
  image: 'cucumber_salad_with_yogurt_dressing.jpg',
  tags: ['lunch', 'vegetarian', 'gluten-free', 'healthy', 'quick', 'easy'],
  source: 'https://www.leukerecepten.nl/recepten/komkommersalade/',
  ingredients: [
    {
      name: 'cucumber',
      amount: '1',
      unit: '',
    },
    {
      name: 'red onion',
      amount: '1',
      unit: '',
    },
    {
      name: 'pine nuts',
      amount: '2',
      unit: 'tbsp',
    },
    {
      name: 'green apple',
      amount: '1',
      unit: '',
    },
    {
      name: 'Greek yogurt',
      amount: '3',
      unit: 'tbsp',
    },
    {
      name: 'water',
      amount: '1',
      unit: 'tbsp',
    },
    {
      name: 'lime',
      amount: '0.5',
      unit: '',
    },
    {
      name: 'fresh dill',
      amount: '5',
      unit: 'g',
    },
    {
      name: 'garlic clove',
      amount: '1',
      unit: '',
    },
    {
      name: 'salt',
      amount: 'to taste',
      unit: '',
    },
    {
      name: 'pepper',
      amount: 'to taste',
      unit: '',
    },
  ],
  instructions: [
    'Toast the pine nuts briefly in a dry skillet over medium heat until lightly golden, then set aside to cool.',
    'Halve the cucumber lengthwise, scrape out the seeds with a spoon, and cut into half-moons.',
    'Slice the red onion into thin rings and cut the green apple into small cubes. Combine with the cucumber in a bowl.',
    'Make the dressing: press the garlic, finely chop the dill, and squeeze the lime. Mix the Greek yogurt with the water, lime juice, garlic, and dill, and season with salt and pepper.',
    'Add the dressing to the cucumber mixture and toss well.',
    'Top with the toasted pine nuts just before serving.',
  ],
  servings: 4,
  nutrition: {
    calories: 78,
    protein: 3,
    carbs: 8,
    fat: 4,
    fiber: 2,
  },
  tips: [
    'The salad keeps for about 2 days in the refrigerator. Add the dressing just before serving to keep it fresh.',
    'To prevent a watery salad, remove the cucumber seeds. Optionally sprinkle the cucumber with salt and let it drain for 10 minutes before serving.',
  ],
};

export default cucumberSaladWithYogurtDressing;
