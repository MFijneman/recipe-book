import { Recipe } from '@/types/recipe';

const pastaWithSpicyNdujaTomatoSauce: Recipe = {
  id: 7,
  title: "Pasta with Spicy 'Nduja-Tomato Sauce",
  description: "A quick pasta dinner in a spicy, rich 'nduja-tomato sauce that needs only a handful of ingredients.",
  cookTime: 25,
  prepTime: 5,
  totalTime: 30,
  difficulty: 'easy',
  image: 'pasta_with_spicy_nduja_tomato_sauce.jpg',
  tags: ['dinner', 'italian', 'pasta', 'pork', 'spicy', 'quick', 'comfort-food'],
  source: 'https://www.seriouseats.com/spicy-nduja-tomato-sauce',
  ingredients: [
    {
      name: 'olive oil',
      amount: '1',
      unit: 'tbsp',
    },
    {
      name: 'large shallots, thinly sliced',
      amount: '2',
      unit: '',
    },
    {
      name: 'salt',
      amount: 'to taste',
      unit: '',
    },
    {
      name: 'tomato passata (see tips)',
      amount: '700',
      unit: 'g',
    },
    {
      name: "'nduja (see tips)",
      amount: '115',
      unit: 'g',
    },
    {
      name: 'pasta of your choice',
      amount: '450',
      unit: 'g',
    },
    {
      name: 'Pecorino Romano cheese, finely grated',
      amount: '60',
      unit: 'g',
    },
  ],
  instructions: [
    'Heat the olive oil in a large skillet over medium heat until shimmering. Add the shallots, season lightly with salt, and cook, stirring frequently, until softened but not browned, 5-7 minutes.',
    'Add the tomato passata, rinsing out the bottle with a splash of water and adding that too. Bring to a simmer, season lightly with salt, and cook, stirring occasionally, until slightly thickened, 12-15 minutes.',
    "Add the 'nduja and stir it into the sauce, breaking it up, until fully incorporated, about 1 minute.",
    'Meanwhile, cook the pasta in a pot of salted boiling water until just shy of al dente, about 3 minutes less than the package directs. Reserve some of the cooking water, then drain.',
    'Add the pasta to the sauce with a splash of the cooking water. Increase the heat to high and cook, tossing rapidly, until the pasta is al dente and coated in the thickened sauce, about 2 minutes. Add more cooking water as needed.',
    'Remove from the heat and stir in half of the Pecorino Romano cheese. Season to taste with salt and serve immediately, passing the remaining cheese at the table.',
  ],
  servings: 4,
  nutrition: {
    calories: 525,
    protein: 28,
    carbs: 41,
    fat: 29,
    fiber: 6,
  },
  tips: [
    'Since there are a few key ingredients in this dish, using high-quality products will make a noticeable difference in flavor.',
  ],
};

export default pastaWithSpicyNdujaTomatoSauce;
