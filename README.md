# Zenith Protective Services website

Marketing site for **Zenith Protective Services Inc.**, a BSIS licensed security guard company (PPO #122193) in Hawthorne, California.

Live site: https://www.zenithprotectiveservice.site

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, webpack) with React 19 and TypeScript
- styled-components for styling, framer-motion for section animations
- [Supabase](https://supabase.com) for services, blog posts and contact-form leads
- EmailJS to email each contact-form submission

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

If the dev server shows a hydration warning or stale content after files change, stop it, delete `.next`, start it again and hard-refresh the browser.

### Environment variables

Create `.env.local` (never commit it):

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | yes | Supabase public (anon) key |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | no | GA4 ID (`G-…`). Google Analytics loads only when this is set |
| `NEXT_PUBLIC_GTM_ID` | no | Google Tag Manager ID (`GTM-…`). GTM loads only when this is set |

Use one of GA4 or GTM, not both, unless GTM is not already sending GA4.

## Where content lives

| Content | Source |
|---|---|
| Services (cards, service pages, footer list, quote-form dropdown) | Supabase `services` table, `status = 'active'` |
| Blog posts | Supabase `blog_posts` table, `status = 'published'`. URL is the `slug` column |
| Contact-form leads | Supabase `form_submissions` table (+ EmailJS email) |
| Phone, address, license number | `src/utils/company.ts` |
| Location landing pages | `src/utils/locations.ts` |
| FAQ page | `src/utils/faqs.ts` |
| Testimonials (hidden until real ones exist) | `src/utils/data.ts` (`SHOW_TESTIMONIALS`) |
| Page titles, descriptions, canonicals, Open Graph | `metadata` / `generateMetadata` in each `page.tsx`; helper in `src/utils/seo.ts` |
| Organization structured data (JSON-LD) | `src/app/layout.tsx` |

### Blog slugs

New posts get a `slug` automatically from the title (database trigger, capped at 80 characters, made unique with `-2`, `-3`…). Editing a title does **not** change the URL. To change a URL on purpose, edit the `slug` field and add a redirect from the old URL in `next.config.ts`.

### Database security

Row Level Security is on for every table:

- Visitors (anon) can read active services and published posts, and can only **insert** contact-form leads.
- Reading leads and editing services or posts requires a signed-in account with `user_profiles.is_admin = true`.

The public site never reads leads. Do admin work from the CMS with an admin account.

## Project structure

```
src/
  app/
    (services)/services/          Services index and /services/[serviceId]
    (locations)/                  City landing pages (/security-guard-service-<city>-ca)
    (legal)/                      Terms and privacy policy
    about/ blog/ contact/ faq/    Static pages; blog/[slug] for posts
    layout.tsx                    Root layout, site-wide metadata, JSON-LD, analytics, fonts
    sitemap.ts robots.ts          Built from routes plus live services, posts and locations
    opengraph-image.png           Default share image
  components/                     Page sections and UI components
  lib/supabase/                   Data access (services, blog posts, form submissions)
  styles/                         styled-components styles per area
  utils/                          Company info, locations, FAQs, SEO helper
  assets/                         Images and self-hosted Switzer font
```

## Adding pages

- **A new city page:** add an entry to `LOCATIONS` in `src/utils/locations.ts` and a small `page.tsx` in `src/app/(locations)/security-guard-service-<city>-ca/` (copy an existing one). The sitemap and footer pick it up automatically.
- **Any other new standalone page:** give it `metadata` with a title, description, `alternates.canonical` and `openGraph: pageOpenGraph(...)`, then add it to the static routes in `src/app/sitemap.ts`.

## Deployment

The build uses `output: "standalone"`. After deploying, check `/sitemap.xml` and resubmit it in Google Search Console when pages are added or removed. Search Console is verified with `public/google3cfb27c699fa6524.html`; keep that file.

## Fonts

Switzer by Indian Type Foundry, free under the ITF Free Font License from [Fontshare](https://www.fontshare.com/fonts/switzer). It is self-hosted from `src/assets/fonts` through `next/font/local`.
