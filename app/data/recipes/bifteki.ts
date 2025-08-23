import { Recipe } from '../../types/recipe';

const bifteki: Recipe = {
  "id": 5,
  "title": "Bifteki with Feta",
  "description": "Greek-style minced beef patties stuffed with feta cheese, flavored with garlic, onion, mint, and spices, perfect for a hearty dinner.",
  "cookTime": 10,
  "prepTime": 50,
  "totalTime": 60,
  "difficulty": "medium",
  "image": "bifteki.jpg",
  "tags": [
    "dinner",
    "greek",
    "beef",
    "stuffed"
  ],
  "source": "https://uitpaulineskeuken.nl/recept/bifteki",
  "ingredients": [
    {
      "name": "garlic cloves",
      "amount": "2",
      "unit": ""
    },
    {
      "name": "onion",
      "amount": "1",
      "unit": ""
    },
    {
      "name": "fresh mint",
      "amount": "1",
      "unit": "branch"
    },
    {
      "name": "ground beef",
      "amount": "600",
      "unit": "g"
    },
    {
      "name": "egg",
      "amount": "1",
      "unit": ""
    },
    {
      "name": "cumin",
      "amount": "1",
      "unit": "tsp"
    },
    {
      "name": "oregano",
      "amount": "1",
      "unit": "tbsp"
    },
    {
      "name": "salt",
      "amount": "to taste",
      "unit": ""
    },
    {
      "name": "pepper",
      "amount": "to taste",
      "unit": ""
    },
    {
      "name": "breadcrumbs",
      "amount": "as needed",
      "unit": ""
    },
    {
      "name": "feta cheese",
      "amount": "150",
      "unit": "g"
    }
  ],
  "instructions": [
    "Peel and finely chop the garlic cloves, onion, and fresh mint.",
    "In a bowl, mix the ground beef with the chopped garlic, onion, mint, egg, cumin, oregano, salt, and pepper.",
    "Add breadcrumbs to the mixture as needed to make it drier and easier to shape.",
    "Divide the minced meat into 8 equal portions.",
    "Cut the feta cheese into small cubes, approximately 2.5 x 1 cm.",
    "Place a cube of feta on top of each portion of mince and fold the meat around it to form an elongated burger.",
    "Grill the bifteki for about 10 minutes until golden brown and cooked through.",
  ],
  "servings": 4,
  "nutrition": {
    "calories": 0,
    "protein": 0,
    "carbs": 0,
    "fat": 0,
    "fiber": 0
  },
  "tips": [
    "Ensure the feta is fully enclosed in the meat to prevent it from melting out during cooking.",
  ]
}

export default bifteki;
