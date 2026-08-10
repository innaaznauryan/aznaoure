# Aznaoure Art - Frontend

**Your Story in a Piece of Jewelry.**

TypeScript/React.js frontend for Aznaoure Art, an Armenian heritage jewelry brand.  
Live website: [www.aznaoure.com](https://www.aznaoure.com).  
Backend repo: `aznaoure-backend`.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript, built with Vite |
| Styling | Tailwind CSS + shadcn/ui (Radix UI primitives) |
| Routing | React Router v6 |
| Animation | Framer Motion |
| Forms & Validation | React Hook Form |
| Data Fetching / Caching | TanStack Query (React Query) |
| Internationalization | i18next + react-i18next (Armenian + English) |
| SEO | react-helmet-async |
| Auth | JWT (email/password) + Google OAuth (`@react-oauth/google`) |
| Notifications | Sonner (toasts) |
| Testing | Vitest + Testing Library |
| Hosting | Vercel |

The backend is a separate FastAPI + SQLAlchemy + Alembic service (see `aznaoure-backend`).

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Access to the backend API (local instance or the hosted dev backend)

### Installation

```bash
git clone https://github.com/innaaznauryan/aznaoure-frontend.git
cd aznaoure-frontend
npm install
```

### Environment Variables
Create an `.env` file in the project root, using the configs below as a reference:

```env
VITE_CLIENT_URL=http://localhost:8080
VITE_API_URL=http://localhost:8000
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
VITE_GOOGLE_CLIENT_ID=xxxx...apps.googleusercontent.com
```

### Run Locally

```bash
npm run dev
```

The app runs on `http://localhost:8080` by default and expects the backend API to be reachable at `VITE_API_URL`.

## Core Features

### Authentication
- Email/password and Google OAuth sign-in, with Google accounts linking to existing password accounts by email match.

### Favorites
- Heart-button overlay on `ProductCard.tsx` to save/unsave products.

### Internationalization (i18n)
- Full Armenian (Eastern Armenian dialect) and English support via i18next.

### SEO
- `SEO.tsx` is a reusable component applying per-route dynamic meta tags via `react-helmet-async`.
- Public pages (home, product, collection pages) get full Open Graph tags + canonical URLs.
- Auth/account pages are set to `noindex`.

## Deployment

The app is deployed on **Vercel**, connected to both the `dev` and `main` branches for automatic preview and production deployments respectively.
