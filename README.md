# Recipe Book

This project brings together two of my interests: cooking and web development. It's a curated collection of recipes I love, presented through a modern, responsive web interface with best practices.

## Live Demo

Hosted at: [recipe.zebraflow.nl](https://recipe.zebraflow.nl)

## Features

- Browse and search recipes
- Filter by tags and categories
- Responsive design
- Internationalization support

## Project Structure

```
recipe-book/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── data/              # Recipe data and content
│   ├── i18n/              # Internationalization
│   └── types/             # TypeScript type definitions
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## Getting Started

1. Clone the repository
2. Install dependencies: `yarn install`
3. Add the precommit hooks: `yarn setup`
4. Run the development server: `yarn dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Commands

- `yarn dev` - Start development server
- `yarn build` - Static build for production
- `yarn setup` - Installs precommit hook
- `yarn format` - Run ESLint
