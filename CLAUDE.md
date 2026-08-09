# CLAUDE.md

Recipe book built with Next.js (App Router), TypeScript, and Tailwind. Recipes are static TypeScript data files — there is no backend or CMS.

## Commands

- `yarn dev` — dev server
- `yarn build` — production build (also validates all recipe pages via `generateStaticParams`)
- `yarn lint` — ESLint
- `yarn format` / `yarn format:check` — Prettier

## How recipes work

- Each recipe is a file in `app/data/recipes/`, typed by `Recipe` in `app/types/recipe.ts`, and registered in `app/data/recipes.ts`.
- Recipe URLs are `<title-slug>-<id>` (see `app/utils/slug.ts`). **Never change the `id` or `title` of a committed recipe** — it breaks its URL.
- `RecipeDetail.tsx` auto-numbers instructions from the array index, and scales ingredient amounts with the servings selector. Several rules below exist because of this.

## Adding a new recipe

1. Create `app/data/recipes/<camelCaseTitle>.ts`:

   ```ts
   import { Recipe } from '@/types/recipe';

   const myRecipe: Recipe = {/* ... */};

   export default myRecipe;
   ```

2. `id`: the next unused integer. Never reuse an id.
3. Register it in `app/data/recipes.ts`: import alphabetically, append to the `recipes` array (array order = homepage order).
4. `tags`: only values from the closed union in `app/types/recipe.ts`. Adding a new tag requires updating `app/types/recipe.ts`, `app/types/tags.ts`, and a `tag.*` entry in `app/i18n/translations.ts`.
5. Use this field order: `id`, `title`, `description`, `cookTime`, `prepTime`, `totalTime`, `difficulty`, `image`, `tags`, `source`, `ingredients`, `instructions`, `servings`, `nutrition`, `tips`.
6. Run `yarn format` before committing.

## Field conventions

- **title**: Title Case with lowercase minor words — "Bifteki with Feta", not "Bifteki With Feta".
- **description**: 1–2 complete sentences ending in a period. No fragments.
- **cookTime / prepTime / totalTime**: minutes; `totalTime = prepTime + cookTime`. Passive time (marinating, resting) counts toward `prepTime` — mention it in the instructions or a tip.
- **servings**: default to 4 unless the source recipe really doesn't divide that way.
- **source**: always credit the origin (URL or book). Never copy source instructions verbatim — rewrite them in the house style below.
- **ingredients**:
  - `name`: lowercase noun (proper nouns keep their caps: "Parmesan cheese"). Preparation goes after a comma: `'shallots, thinly sliced'`. Optional items get an `(optional)` suffix. If prep is in the name, don't repeat it as an instruction step.
  - `amount`: a plain number string — `'0.5'`, **never** `'1/2'` (fractions silently break serving-scaling in `RecipeDetail.tsx`). Prose amounts (`'to taste'`, `'as needed'`, `'dash'`, `'to serve'`) are fine for unscalable items; don't leave it empty.
  - `unit`: metric only — `g`, `ml`, `tbsp`, `tsp`, or `''` for countable items. `cans` and `branch` are allowed where they fit. No `cup`, `oz`, or other imperial units.
- **nutrition**: per serving, best-effort estimates. All zeros only when genuinely unknown.
- **tips**: real tips or `[]` — never `['']` (it renders an empty bullet). Commentary that isn't a cooking action ("Remember that...") belongs here, not in the instructions.
- **image**: snake_case filename placeholder (images aren't rendered yet).

## Instruction style

This is the part that drifts most — follow it closely.

- **One main action per step**, 1–3 short sentences, roughly 5–30 words. Split long steps; merge trivial ones. Aim for 6–12 steps total.
- **Imperative mood**, sentence case, ending in a period.
- Use **"the" before ingredient names**: "Add the passata", not "Add passata".
- **No ingredient quantities in instructions** — the ingredient list owns amounts, and only the list scales with the servings selector. Use relative wording instead: "half of the salt", "a splash of the cooking water". (Physical dimensions like "roll to 7mm thick" or "cut into 2cm cubes" are fine.)
- **Every cooking step gets a timing and/or doneness cue**: "about 8 minutes", "10-15 minutes", "until golden and softened". Ranges use a hyphen ("10-15 minutes", not "10 to 15 minutes"). Metric temperatures only ("200°C").
- **Never number steps in the string** — the UI numbers them. One paragraph per string; no newlines, no markdown.
- Named sub-preparations use a colon prefix: `'Make the beurre manie: mix the flour and softened butter together by hand.'`
- Optional ingredients in prose: "(if using)". Work done in parallel starts with "Meanwhile,".
- **Every ingredient mentioned in the instructions must exist in the ingredient list under the same name**, and every listed ingredient must be used. Water for cooking is exempt from listing.

### Example

Good:

```ts
instructions: [
  'Heat the olive oil in a large skillet over medium heat.',
  'Add the shallots and season lightly with salt. Cook, stirring, until softened but not browned, about 5 minutes.',
  'Stir in the passata and bring to a simmer. Cook until slightly thickened, 12-15 minutes.',
],
```

Bad (quantities in prose, no "the", dual units, "to" ranges, multiple actions crammed into one step):

```ts
instructions: [
  'In a large skillet, heat 1 tbsp olive oil over medium heat until shimmering. Add shallots and 1/4 cup (60ml) water, season with salt, and cook, stirring frequently, until softened but not browned, 5 to 7 minutes, then add passata and simmer.',
],
```
