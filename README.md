# PC1 Website — PromptCraft 1

The official website for PromptCraft 1 — How to Talk to Machines by John Kenneally.

## What this website does

- Sells PromptCraft 1 (PDF + EPUB) via a single Gumroad checkout point
- Explains the C.R.A.F.T. method
- Hosts a small resources area for prompt-literacy articles
- Collects update-list interest (provider connection comes later)

## Before you start

You need:

- Node.js 18 or later — download from nodejs.org
- A terminal

## How to install

```
cd pc1-website
npm install
```

## How to run locally

```
npm run dev
```

Open: http://localhost:3000

## How to connect Gumroad later

Open `data/pc1Product.ts`.

Set:

```
gumroadUrl: 'https://yourname.gumroad.com/l/your-product',
checkoutStatus: 'live',
```

Do not put checkout URLs anywhere else.

## How to add a resource article

1. Add a Markdown file in `content/resources/`
2. Add matching metadata in `data/articles.ts`

## How to deploy (later)

Build command: `npm run build`

Publish directory: `out`

Do not promote production without the owner approval phrase.

## Support

See CLAUDE.md for project rules.
