# PC1 Website — CLAUDE.md

## What this project is
This is the official PC1 website — the public and commercial home for "How to Talk to Machines" by John Kenneally.

PC1 = PromptCraft One. The method is C.R.A.F.T. (Context, Role, Action, Format, Tone) plus D.E.T. (Dependencies, Environment, Testing) for technical tasks.

## Stage 1 — what is and is not here
- Public marketing website
- Book sales page (links to external checkout)
- Paid download product cards (external Gumroad/Stripe links only)
- Course library pages
- Classroom page
- Dashboard preview (localStorage only, no auth)
- Library and articles structure (Markdown-ready)
- Marketing diary and plan
- Cheat sheet page
- Start Here quiz (recommendation engine)

## Stage 2 — what comes later
- User accounts (Supabase Auth)
- Stripe Checkout + webhooks
- Protected downloads (Supabase Storage)
- Database-backed course progress
- Customer dashboard with real data
- Admin content management

## Rules for future Claude Code sessions
1. Do NOT invent final book content. Use placeholders.
2. Preserve chapter titles EXACTLY as listed in data/bookToc.ts.
3. Do NOT fake paid-content security. Stage 1 uses external checkout only.
4. Checkout links are placeholders in data/products.ts — replace with real URLs.
5. Keep README beginner-friendly.
6. Check all navigation links before finishing any change.
7. Content lives in content/ — do not hardcode article text in page files.
8. The dashboard uses localStorage with prefix pc1_ — no backend in Stage 1.

## Naming
- Book title: "How to Talk to Machines"
- Method: C.R.A.F.T.
- Extension: D.E.T.
- Brand: PromptCraft One / PC1
- Author: John Kenneally
- Do NOT use "PromptCraft Prime" or "PCP" in public-facing content.
