import { Recipe } from '@/types/recipe';

const jackfruitTacosAlPastor: Recipe = {
  id: 6,
  title: 'Jackfruit Tacos Al Pastor',
  description:
    'Smoky, juicy plant-based tacos featuring shredded jackfruit in a guajillo chile marinade, topped with charred pineapple, onion, and fresh cilantro.',
  cookTime: 15,
  prepTime: 30,
  totalTime: 45,
  difficulty: 'medium',
  image: 'jackfruit_tacos_al_pastor.jpg',
  tags: ['dinner', 'mexican', 'vegan', 'gluten-free', 'spicy'],
  source: 'https://www.theconsciouscook.au/jackfruit-tacos-al-pastor-vegan-friendly-gluten-free/',
  ingredients: [
    {
      name: 'canned young jackfruit in water or brine',
      amount: '2',
      unit: 'cans',
    },
    {
      name: 'avocado oil',
      amount: '1',
      unit: 'tbsp',
    },
    {
      name: 'dried guajillo chilies, stemmed and deseeded',
      amount: '2',
      unit: '',
    },
    {
      name: 'chipotle pepper in adobo',
      amount: '1',
      unit: '',
    },
    {
      name: 'achiote paste',
      amount: '1',
      unit: 'tbsp',
    },
    {
      name: 'apple cider vinegar',
      amount: '2',
      unit: 'tbsp',
    },
    {
      name: 'pineapple juice',
      amount: '2',
      unit: 'tbsp',
    },
    {
      name: 'soy sauce',
      amount: '2',
      unit: 'tbsp',
    },
    {
      name: 'coconut sugar',
      amount: '1',
      unit: 'tbsp',
    },
    {
      name: 'garlic cloves',
      amount: '2',
      unit: '',
    },
    {
      name: 'smoked paprika',
      amount: '0.5',
      unit: 'tsp',
    },
    {
      name: 'ground coriander',
      amount: '0.5',
      unit: 'tsp',
    },
    {
      name: 'ground cumin',
      amount: '0.5',
      unit: 'tsp',
    },
    {
      name: 'Mexican oregano',
      amount: '0.25',
      unit: 'tsp',
    },
    {
      name: 'ground cinnamon',
      amount: '0.25',
      unit: 'tsp',
    },
    {
      name: 'salt, plus more to taste',
      amount: '0.5',
      unit: 'tsp',
    },
    {
      name: 'broth',
      amount: '120',
      unit: 'ml',
    },
    {
      name: 'corn tortillas, warmed',
      amount: '8',
      unit: '',
    },
    {
      name: 'white or red onion, diced or pickled',
      amount: '1',
      unit: '',
    },
    {
      name: 'fresh pineapple, diced',
      amount: '150',
      unit: 'g',
    },
    {
      name: 'fresh cilantro',
      amount: 'to taste',
      unit: '',
    },
    {
      name: 'lime wedges',
      amount: 'to serve',
      unit: '',
    },
  ],
  instructions: [
    'Heat a dry skillet over medium heat and toast the guajillo chilies for about 30 seconds per side until fragrant. Soak the toasted chilies in hot water for 10-15 minutes until softened.',
    'In a blender, combine the drained chilies, chipotle pepper, achiote paste, apple cider vinegar, pineapple juice, soy sauce, coconut sugar, garlic, smoked paprika, cumin, coriander, oregano, cinnamon, salt, and broth. Blend until smooth, then taste and adjust the seasonings.',
    'Drain and shred the jackfruit, then toss it in the sauce. Marinate for at least 30 minutes, or longer if time allows.',
    'Heat the avocado oil in a large skillet over medium heat. Add the marinated jackfruit and cook for 10-15 minutes, stirring frequently, until the mixture reduces, darkens, and develops crispy edges.',
    'Meanwhile, char the diced pineapple in a separate dry skillet or grill pan for 3-4 minutes, turning occasionally.',
    'Fill the warm tortillas with the jackfruit filling. Top with the diced onion, fresh cilantro, charred pineapple, and a squeeze of lime.',
  ],
  servings: 3,
  nutrition: {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    fiber: 0,
  },
  tips: [
    'The filling improves with time as the flavors develop. Store it in an airtight container in the refrigerator and reheat when ready to serve with freshly warmed tortillas.',
    'Optional toppings: sliced avocado or salsa.',
  ],
};

export default jackfruitTacosAlPastor;
