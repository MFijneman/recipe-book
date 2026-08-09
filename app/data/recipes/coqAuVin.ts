import { Recipe } from '@/types/recipe';

const coqAuVin: Recipe = {
  id: 1,
  title: 'Coq Au Vin',
  description: 'A classic French chicken stew braised with wine, mushrooms, and pearl onions, inspired by Julia Child.',
  cookTime: 120,
  prepTime: 30,
  totalTime: 150,
  difficulty: 'medium',
  image: 'coq_au_vin.jpg',
  tags: ['dinner', 'french', 'chicken', 'stew'],
  source: 'https://www.theendlessmeal.com/julia-childs-coq-au-vin/',
  ingredients: [
    {
      name: 'chicken thighs',
      amount: '4',
      unit: '',
    },
    {
      name: 'drumsticks',
      amount: '4',
      unit: '',
    },
    {
      name: 'wine (Pinot Noir)',
      amount: '350',
      unit: 'ml',
    },
    {
      name: 'chicken stock',
      amount: '250',
      unit: 'ml',
    },
    {
      name: 'brandy (optional)',
      amount: '60',
      unit: 'ml',
    },
    {
      name: 'bacon or pancetta strips',
      amount: '4',
      unit: '',
    },
    {
      name: 'onion',
      amount: '1',
      unit: '',
    },
    {
      name: 'carrots',
      amount: '4',
      unit: '',
    },
    {
      name: 'garlic cloves',
      amount: '4',
      unit: '',
    },
    {
      name: 'tomato paste',
      amount: '2',
      unit: 'tbsp',
    },
    {
      name: 'fresh thyme',
      amount: '2',
      unit: 'tbsp',
    },
    {
      name: 'mushrooms',
      amount: '250',
      unit: 'g',
    },
    {
      name: 'pearl onions',
      amount: '250',
      unit: 'g',
    },
    {
      name: 'flour',
      amount: '2',
      unit: 'tbsp',
    },
    {
      name: 'softened butter',
      amount: '2',
      unit: 'tbsp',
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
    'Place the chicken thighs and drumsticks in a medium-sized bowl and pour the wine, chicken stock, and brandy (if using) over the top. Set aside to marinate while you prep.',
    'Slice the onion, chop the carrots, and mince the garlic.',
    'Cook the bacon in a large, high-sided pan or braiser over medium-high heat until crispy, about 8 minutes, then remove it with a slotted spoon.',
    'Remove the chicken from the marinade (save the marinade) and pat it dry with paper towels.',
    'Sear the chicken in the bacon fat, skin side down and in batches if needed, until golden on both sides, about 5 minutes per side. Remove the chicken and pour off most of the fat into a heatproof dish, leaving a thin layer in the pan.',
    'Add the onion and carrots and cook until the onion is golden brown, 7-8 minutes. Add the garlic and cook for 1 minute more.',
    'Push the vegetables to the side, add the tomato paste, and cook until fragrant and slightly darkened, about 1 minute. Pour in the reserved marinade, scraping the bottom to loosen any stuck-on bits.',
    'Nestle the chicken into the pan and sprinkle the fresh thyme over top. Cover, turn the heat to low, and simmer for 20 minutes.',
    'Meanwhile, heat a little of the reserved fat in a large skillet and saute the mushrooms over medium-high heat until browned, about 10 minutes.',
    'Rinse the pearl onions several times in water, then add them to the pan with the chicken and cook for 10 minutes more.',
    'Make the beurre manie: mix the flour and softened butter together by hand in a small bowl. Remove the chicken from the pan, stir the beurre manie into the sauce, and let it thicken. Season to taste with salt and pepper.',
    'Return the chicken to the pan and top with the bacon and mushrooms. Sprinkle with a little fresh thyme and serve.',
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

export default coqAuVin;
