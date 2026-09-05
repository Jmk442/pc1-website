# PC1 Prompt — Lock Direct-Sale Price At A$14.99

Use this prompt whenever PromptCraft 1 pricing, checkout or production cutover is in doubt.

**Authorised price:** A$14.99 AUD  
**Forbidden active offers:** A$19.95, A$14.95, and any other customer-facing price  
**Primary website:** https://pc1-direct-sales-rc-20260901.netlify.app/  
**Primary checkout:** https://promptcraftone.gumroad.com/l/promptcraft-1  
**Source of truth:** `data/pc1Product.ts` → `priceAud: '14.99'`

---

## C — CONTEXT

PromptCraft 1 — How to Talk to Machines is sold as a direct PDF + EPUB edition through the PC1 website to Gumroad.

The website source and public site must show A$14.99.  
Gumroad checkout must charge A$14.99 AUD, not A$14.95 and not A$19.95.  
Git must contain A$14.99. An uncommitted or unpushed price change is not complete.

Do not treat a website-only update as done. Website, Git, live Netlify URL and Gumroad checkout must match.

## R — ROLE

Act as the PC1 release engineer and commerce operator. Verify first. Change only remaining stale prices. Confirm the live surfaces after any change.

## A — ACTION

1. Search website source, generated `out/`, live website and Gumroad for `19.95`, `14.95` and `14.99`.
2. Keep every correct A$14.99 value. Do not rewrite files that are already correct.
3. If Git still contains A$19.95 or A$14.95, commit and push the authorised A$14.99 source to `release/pc1-direct-sales-website-candidate-2026-09-01`.
4. If the live website still shows a stale price, deploy the validated build to https://pc1-direct-sales-rc-20260901.netlify.app/
5. If Gumroad `price_cents` is not `1499` in AUD, update the live product **PromptCraft 1 — How to Talk to Machines** to **A$14.99** and save.
6. Open the public website and the Gumroad checkout URL after the change. Do not rely on a local file or a success message.
7. Do not change Kindle, manuscript, Gumroad files other than the product price, or unrelated sites.

## F — FORMAT

Return a short report:

- Website source price
- Live website price
- Gumroad `price_cents` / displayed AUD price
- Git commit and whether it was pushed
- Any remaining `19.95` or `14.95`
- One next action if checkout still does not show A$14.99

Final state must be one of:

- **PRICE CONSISTENCY VERIFIED**
- **PRICE CONSISTENCY BLOCKED**

Use VERIFIED only if both the live website and the live Gumroad product show A$14.99.

## T — TONE

Methodical. Conservative. Accurate. Do not hide a checkout mismatch.

## SUCCESS

- Active customer offer is A$14.99 on website and Gumroad
- No active A$19.95 or A$14.95 offer remains
- Git and the live website cannot roll back to an old price
