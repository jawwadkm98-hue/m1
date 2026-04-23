# Mumin Distributors Website

A production-ready React + Vite website for Mumin Distributors.

## Setup

```bash
npm install
npm run dev       # Development
npm run build     # Production build
```

## Deployment (Cloudflare Workers)

1. Push to GitHub
2. Connect repo in Cloudflare Pages/Workers
3. Build command: `npm run build`
4. Build output: `dist`

The `_redirects` file handles SPA routing so page refreshes work correctly.

## Admin Login

URL: `/admin`
Username: `admin@mumindistributors.com`
Password: `Mum!nD1str!butors#2024`

**Change the password in `src/context/AuthContext.jsx` before going live.**

## HubSpot Integration

Add your HubSpot Private App token to environment variables as `VITE_HUBSPOT_TOKEN` when ready.
