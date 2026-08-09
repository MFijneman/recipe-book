import { Recipe } from '@/types/recipe';

const onePanOrzo: Recipe = {
  id: 4,
  title: 'One-Pan Orzo with Chicken and Spinach',
  description:
    'A quick and easy one-pan dinner featuring orzo, chicken, fresh spinach, and tomatoes, finished with Parmesan cheese.',
  cookTime: 20,
  prepTime: 5,
  totalTime: 25,
  difficulty: 'easy',
  image: 'one_pan_orzo.jpg',
  tags: ['dinner', 'quick', 'one-pan', 'chicken', 'pasta'],
  source: 'https://www.lekkerensimpel.com/eenpansgerecht-met-orzo/',
  ingredients: [
    {
      name: 'onions',
      amount: '2',
      unit: '',
    },
    {
      name: 'tomatoes',
      amount: '4',
      unit: '',
    },
    {
      name: 'fresh spinach',
      amount: '500',
      unit: 'g',
    },
    {
      name: 'butter',
      amount: '1',
      unit: 'tbsp',
    },
    {
      name: 'garlic cloves',
      amount: '1',
      unit: '',
    },
    {
      name: 'orzo',
      amount: '300',
      unit: 'g',
    },
    {
      name: 'vegetable broth',
      amount: '700',
      unit: 'ml',
    },
    {
      name: 'dried basil',
      amount: '2',
      unit: 'tbsp',
    },
    {
      name: 'chicken breast',
      amount: '500',
      unit: 'g',
    },
    {
      name: 'Parmesan cheese, grated',
      amount: '150',
      unit: 'g',
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
    'Chop the onions, dice the tomatoes, and roughly chop the fresh spinach.',
    'Heat the butter in a frying pan and fry the onions with the crushed garlic for 2 minutes.',
    'Add the tomatoes and fry for 2-3 minutes until softened.',
    'Add the orzo and mix well, cooking for 1 minute.',
    'Pour in the vegetable broth and add the dried basil. Bring to a boil and cook the orzo for about 8 minutes, stirring occasionally.',
    'Meanwhile, cook the chicken breast in a separate pan until cooked through, then slice it.',
    'Add the spinach to the orzo and cook for a few more minutes until wilted.',
    'Turn off the heat and stir in the Parmesan cheese. Season to taste with salt and pepper.',
    'Serve immediately, topped with the sliced chicken.',
  ],
  servings: 4,
  nutrition: {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
  },
  tips: [],
};

export default onePanOrzo;
