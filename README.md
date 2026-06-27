# PC1 Website — How to Talk to Machines

The official website for PromptCraft One (PC1) and "How to Talk to Machines" by John Kenneally.

## What this website does

- Markets the PC1 book ("How to Talk to Machines")
- Sells downloadable products via external checkout (Gumroad / Stripe)
- Hosts the PC1 course library
- Provides a classroom home for educators
- Runs the Start Here quiz and recommendation engine
- Hosts the PC1 library of articles
- Tracks the marketing diary and launch plan
- Provides a dashboard preview (Stage 1 — browser only, no login required)

## Before you start

You need:
- Node.js installed (version 18 or later) — download from nodejs.org
- A terminal (Terminal on Mac, Command Prompt or PowerShell on Windows)

## How to install

Open your terminal. Navigate to this folder:

```
cd pc1-website
```

Install dependencies:

```
npm install
```

## How to run locally

```
npm run dev
```

Open your browser and go to: http://localhost:3000

## How to replace product checkout links

Open the file: `data/products.ts`

Find each product entry. Replace the `checkoutLink` value with your real Gumroad or Stripe Payment Link URL.

Example:
```
checkoutLink: 'https://yourname.gumroad.com/l/pc1-book',
```

## How to add articles to the library

Create a Markdown file in: `content/library/articles/`

Example filename: `what-is-a-prompt.md`

Articles will be integrated into the Library page once the content rendering is wired up.

## How to deploy to Netlify

1. Create a free account at netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Click Deploy

Or use the Netlify CLI:

```
npm install -g netlify-cli
netlify init
netlify deploy --prod
```

## What is Stage 1

Stage 1 is the launchable website. It includes:
- Public pages
- Product cards with external checkout links
- Course library
- Start Here quiz
- Dashboard preview (browser storage only)

No login, no database, no Stripe Checkout integration.

## What requires Stage 2

Stage 2 adds:
- User accounts (Supabase Auth)
- Protected downloads
- Stripe Checkout and webhooks
- Database-backed course progress
- Customer dashboard

## Updating product links

Edit `data/products.ts`. Each product has a `checkoutLink` field. Replace `GUMROAD_LINK_*` placeholders with real URLs.

## Updating the marketing diary

Edit `content/marketing/diary.md` or update the `app/marketing-diary/page.tsx` file directly for now.

## Support

This project was built with Claude Code. For questions, see CLAUDE.md for the project rules and architecture notes.
