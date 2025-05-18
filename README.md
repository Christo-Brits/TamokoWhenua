This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# Tamoko Whenua Development Collective

Foundational site structure for Tamoko Whenua Development Collective using Next.js. This structure includes all required pages, hubs, and parent/child relationships as specified.

## Pages & Hierarchy

- Home (`/`)
- About Us (`/about-us`)
- Our Story (`/our-story`)
- Footpath Construction & Renewals (hub) (`/footpath-construction/`)
  - Concrete Footpaths (`/footpath-construction/concrete-footpaths`)
  - Kerb & Channel Installation (`/footpath-construction/kerb-channel-installation`)
- Earthworks & Site Levelling (hub) (`/earthworks/`)
  - Subdivision Pads (`/earthworks/subdivision-pads`)
  - Papakāinga Groundwork (`/earthworks/papakainga-groundwork`)
- Minor Roading & Pavement Repairs (hub) (`/roading/`)
  - Road Patching (`/roading/road-patching`)
  - Pavement Reinstatement (`/roading/pavement-reinstatement`)
  - Traffic Services (`/roading/traffic-services`)
- Drainage & Utilities Trenches (hub) (`/drainage/`)
  - Stormwater Drainage (`/drainage/stormwater-drainage`)
  - Sewer & Water Mains (`/drainage/sewer-water-mains`)
- Subdivisions (hub) (`/subdivisions/`)
  - Site Preparation (`/subdivisions/site-preparation`)
  - Utilities Installation (`/subdivisions/utilities-installation`)
- Retaining Walls (hub) (`/retaining-walls/`)
  - Timber Retaining Walls (`/retaining-walls/timber-retaining-walls`)
  - Concrete Retaining Walls (`/retaining-walls/concrete-retaining-walls`)
- Apprenticeship/Workforce Development (hub) (`/workforce-development/`)
  - Māori & Pasifika Trades Training (`/workforce-development/maori-pasifika-trades-training`)
  - Youth Employment Pathways (`/workforce-development/youth-employment-pathways`)
- Areas We Serve (hub) (`/areas-we-serve/`)
  - Far North District (`/areas-we-serve/far-north-district`)
  - Whangarei District (`/areas-we-serve/whangarei-district`)
  - Kaipara District (`/areas-we-serve/kaipara-district`)
- Blog (`/blog/`)
- Contact Us (`/contact-us`)
- Partner with Us (`/partner-with-us`)

## Instructions
- All pages are placeholders. No content or styling is included.
- Hubs are parent routes with child directories.
- Slugs are lower-case and hyphen-separated.
- Built with Next.js 14+ for modern, accessible routing.
