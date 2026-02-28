# Embedded Systems Engineer Portfolio

## Overview
A modern, dark-themed portfolio website for a Senior Embedded Systems Engineer specializing in firmware, embedded Linux, IoT, and PCB design.

## Tech Stack
- **Frontend:** React, Tailwind CSS, shadcn/ui, Wouter (routing), TanStack Query
- **Backend:** Express.js, Node.js
- **Database:** PostgreSQL with Drizzle ORM
- **Styling:** Dark mode tech-inspired aesthetic with custom CSS utilities (grid patterns, glow effects)

## Architecture
Single-page portfolio with sections:
- **Navbar** — Fixed top nav with smooth scroll anchors
- **Hero** — Title, value proposition
- **Services** — 6 core embedded engineering services
- **Skills** — Categorized technical skills
- **Portfolio** — 6 featured project cards with tech tags and highlights
- **Industries** — Industry badges
- **Contact** — Form submitting to `/api/messages` (stored in PostgreSQL)
- **Footer**

## Key Files
- `client/src/pages/home.tsx` — Main page composing all sections
- `client/src/components/sections/` — All section components
- `client/src/components/layout/Navbar.tsx` — Navigation
- `client/src/index.css` — Theme variables, grid patterns, glow utilities
- `server/routes.ts` — API routes (POST /api/messages)
- `server/storage.ts` — Database storage layer
- `shared/schema.ts` — Drizzle schema (messages table)
- `shared/routes.ts` — Shared API contract with Zod validation

## Fonts
- **Sans:** Inter
- **Display:** Outfit
- **Mono:** JetBrains Mono

## Color Palette
- Background: Very dark slate (240 10% 4%)
- Primary accent: Electric cyan (183 100% 50%)
- Secondary: Deep blue (224 71% 25%)
