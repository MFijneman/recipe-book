import { Recipe } from '@/types/recipe';

const creamySalmonPasta: Recipe = {
  id: 9,
  title: 'Creamy Salmon Pasta',
  description: 'Roasted salmon, spinach, and capers tossed with pasta in a creamy white wine sauce.',
  cookTime: 25,
  prepTime: 15,
  totalTime: 40,
  difficulty: 'easy',
  image: 'creamy_salmon_pasta.jpg',
  tags: ['dinner', 'fish', 'pasta', 'quick', 'comfort-food'],
  source: 'https://foxeslovelemons.com/creamy-salmon-pasta/',
  ingredients: [
    {
      name: 'olive oil',
      amount: 'as needed',
      unit: '',
    },
    {
      name: 'salmon fillets',
      amount: '340',
      unit: 'g',
    },
    {
      name: 'salt, plus more for pasta water',
      amount: 'to taste',
      unit: '',
    },
    {
      name: 'ground black pepper, divided',
      amount: '1',
      unit: 'tsp',
    },
    {
      name: 'chilli flakes, divided',
      amount: '0.5',
      unit: 'tsp',
    },
    {
      name: 'onion powder',
      amount: '0.5',
      unit: 'tsp',
    },
    {
      name: 'garlic powder',
      amount: '0.5',
      unit: 'tsp',
    },
    {
      name: 'linguine',
      amount: '340',
      unit: 'g',
    },
    {
      name: 'unsalted butter',
      amount: '2',
      unit: 'tbsp',
    },
    {
      name: 'garlic cloves, minced',
      amount: '3',
      unit: '',
    },
    {
      name: 'heavy cream',
      amount: '300',
      unit: 'ml',
    },
    {
      name: 'dry white wine',
      amount: '120',
      unit: 'ml',
    },
    {
      name: 'chicken stock powder',
      amount: '1',
      unit: 'tsp',
    },
    {
      name: 'lemon, zest of',
      amount: '0.5',
      unit: '',
    },
    {
      name: 'baby spinach',
      amount: '140',
      unit: 'g',
    },
    {
      name: 'capers',
      amount: '2',
      unit: 'tbsp',
    },
    {
      name: 'lemon wedges (optional)',
      amount: 'to serve',
      unit: '',
    },
  ],
  instructions: [
    'Preheat the oven to 175°C and bring a large pot of water to a boil. Spray a rimmed baking pan with the olive oil.',
    'Place the salmon on the pan and season generously with salt, half of the pepper, half of the chilli flakes, the onion powder, and the garlic powder. Bake for 16-18 minutes, until the salmon is nearly opaque and the internal temperature reaches 63°C.',
    'Meanwhile, add a generous pinch of salt to the boiling water and cook the linguine until al dente according to the package directions. Reserve about 80 ml of the pasta water before draining.',
    'While the pasta cooks, heat the butter in a large high-sided skillet over medium heat. Add the garlic and cook for 1 minute, stirring constantly.',
    'Add the cream, wine, lemon zest, chicken stock powder, and the remaining pepper and chilli flakes. Bring to a boil over medium-high heat, then reduce to medium and cook for 5-6 minutes until thickened, stirring frequently. Stir in the reserved pasta water for extra thickness and reduce the heat to low.',
    'Add the spinach and capers to the skillet. Drain the pasta and add it on top of the spinach. Cook over low heat for 1-2 minutes, tossing frequently, until the spinach wilts.',
    'Remove the salmon from the oven, remove and discard the skin, and break the flesh into large chunks. Place the salmon on top of the pasta and serve with the lemon wedges if desired.',
  ],
  servings: 4,
  nutrition: {
    calories: 777,
    protein: 31,
    carbs: 69,
    fat: 39,
    fiber: 4,
  },
  tips: [
    "Don't substitute the heavy cream with a lighter option, it prevents the sauce from curdling.",
    'Best served immediately; not recommended for reheating or freezing.',
  ],
};

export default creamySalmonPasta;
