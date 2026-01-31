# Property Pulse — Next.js

A modern property listing app built with Next.js (App Router), NextAuth, MongoDB and Cloudinary. This repository implements a small real-world property marketplace with authentication, property CRUD, image uploads, messaging, bookmarking and search.

**Status:** Development

**Tech stack:** Next.js (App Router), React, Tailwind CSS, NextAuth, MongoDB (Mongoose), Cloudinary

**Live demo:** https://property-pulse-nextjs-mx5m.vercel.app/

**Contents**

- **Overview:** What this project is and what it demonstrates.
- **Features:** Key user-facing features.
- **Requirements:** prereqs and environment variables.
- **Quick start:** how to run locally.
- **Important files & structure** with pointers to core code.
- **Deployment & notes** for production readiness.

**Overview**

Property Pulse is a sample full-stack Next.js application that demonstrates building a listings marketplace. It focuses on integrating authentication via Google, storing data in MongoDB, handling file uploads to Cloudinary, and implementing typical listing functionality (create/edit/delete, search, pagination) along with a lightweight messaging system.

**Features**

- **Authentication:** Sign in with Google using NextAuth (`utils/authOptions.js`).
- **Property management:** Add, update and delete properties (`app/properties/*`, `components/PropertyAddForm.jsx`).
- **Image uploads:** Images stored on Cloudinary (`config/cloudinary.js`).
- **Messaging:** Contact form and message inbox (`models/Message.js`, `components/PropertyContactForm.jsx`).
- **Bookmarks / Saved properties**: Save listings for later.
- **Search & pagination:** Property search and paginated results.

**Requirements**

- `Node.js` (v18+ recommended) and `npm` or `pnpm`/`yarn`.
- A MongoDB instance (Atlas or local).
- A Cloudinary account for image uploads.
- Google OAuth credentials for NextAuth.

Environment variables

Create a `.env.local` in the project root (do NOT commit secrets). The project expects these environment variables (names used in the code):

- `MONGODB_URL` : MongoDB connection string used by `config/database.js`.
- `GOOGLE_CLIENT_ID` : Google OAuth Client ID used by `utils/authOptions.js`.
- `GOOGLE_CLIENT_SECRET` : Google OAuth Client Secret.
- `NEXTAUTH_URL` : Public URL where your app is served (e.g. `http://localhost:3000`).
- `NEXTAUTH_URL_INTERNAL` : Internal URL used by NextAuth server-side (usually same as `NEXTAUTH_URL`).
- `NEXTAUTH_SECRET` : Secret for NextAuth session signing.
- `CLOUDINARY_CLOUD_NAME` : Cloudinary cloud name (`config/cloudinary.js`).
- `CLOUDINARY_API_KEY` : Cloudinary API key.
- `CLOUDINARY_API_SECRET` : Cloudinary API secret.
- `NEXT_PUBLIC_DOMAIN` : Public domain for the site (used when building share links).
- `NEXT_PUBLIC_API_DOMAIN` : Base URL for client-side API calls (used by `utils/request.js`).
- `NEXT_PUBLIC_GEOCODING_API` : Optional geocoding API key if geolocation is used.

Example `.env.local` (replace placeholder values):

```env
MONGODB_URL=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=supersecret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
NEXT_PUBLIC_DOMAIN=http://localhost:3000
NEXT_PUBLIC_API_DOMAIN=http://localhost:3000/api
NEXT_PUBLIC_GEOCODING_API=optional_key
```

**Quick start (local)**

1. Install dependencies

```bash
npm install
# or `pnpm install` / `yarn`
```

2. Add environment variables as described above in `.env.local`.

3. Run development server

```bash
npm run dev
```

The app will be available at `http://localhost:3000` by default.

Build and start (production-like)

```bash
npm run build
npm start
```

**Database & Storage**

- The project uses MongoDB with Mongoose. Connection handling is in [config/database.js](config/database.js).
- Images are uploaded to Cloudinary via the configuration in [config/cloudinary.js](config/cloudinary.js).

**Authentication**

- Google OAuth is configured in [utils/authOptions.js](utils/authOptions.js) using `next-auth`. Make sure `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_URL` and `NEXTAUTH_SECRET` are set.

**API routes & actions**

- All server actions and API endpoints are inside the `app` directory under `app/api` and `app/action` — e.g., `app/api/auth/[...nextauth]/route.js` for authentication.
- Server-side helper actions for properties and messages live in `app/action/` (e.g., `addProperty.js`, `deleteProperty.js`).

**Project structure (high level)**

- `app/` — Next.js App Router pages and route handlers.
- `components/` — React components used across pages.
- `config/` — configuration helpers (`database.js`, `cloudinary.js`).
- `models/` — Mongoose models for `User`, `Property`, `Message`.
- `utils/` — helper utilities like `authOptions.js`, `request.js`.

Important files

- [app/page.jsx](app/page.jsx) — Home page
- [app/properties/page.jsx](app/properties/page.jsx) — Properties listing
- [components/PropertyCard.jsx](components/PropertyCard.jsx) — Listing card
- [config/database.js](config/database.js) — MongoDB connection
- [config/cloudinary.js](config/cloudinary.js) — Cloudinary config
- [utils/authOptions.js](utils/authOptions.js) — NextAuth configuration

**Deployment notes**

- Configure environment variables on your hosting platform (Vercel, Netlify, etc.).
- Use secure values for `NEXTAUTH_SECRET` and `MONGODB_URL`.
- For production, set `NEXT_PUBLIC_DOMAIN` to your real domain and `NEXT_PUBLIC_API_DOMAIN` to your deployed API base path.

**Troubleshooting**

- MongoDB connection errors: verify `MONGODB_URL` and network access/whitelist for Atlas.
- Auth sign-in issues: ensure Google OAuth redirect URIs include your `NEXTAUTH_URL`.
- Cloudinary upload failures: verify Cloudinary credentials.

**Testing & linting**

- Lint: `npm run lint` (project includes a basic ESLint setup).

**Contributing**

- Open an issue or PR for small improvements. Follow the existing project patterns for components and server actions.

**License**

This repository does not include a license by default. Add one if you plan to share publicly.


