# Embedded Systems Engineer Portfolio

## Overview
A modern, dark-themed portfolio website for a Senior Embedded Systems Engineer specializing in firmware, embedded Linux, IoT, and PCB design.

## Tech Stack
- **Frontend:** React, Tailwind CSS, shadcn/ui, Wouter (routing), TanStack Query
- **Backend:** Express.js, Node.js
- **Database:** PostgreSQL with Drizzle ORM
- **Styling:** Dark mode tech-inspired aesthetic with custom CSS utilities (grid patterns, glow effects)

## Architecture
Single-page portfolio with sections (Upwork-compliant — no contact info or social links):
- **Navbar** — Fixed top nav with smooth scroll anchors, "HIRE_ME()" CTA
- **Hero** — Title, value proposition, tech highlights (7 fields)
- **Services** — 6 core embedded engineering services
- **Skills** — 5 categorized skill cards with unified cyan theme
- **Portfolio** — 9 projects (6 shown, Load More for rest), multi-media slider per card, click-to-expand modal with prev/next project navigation
- **Industries** — Industry badges
- **Hire CTA** — Upwork-friendly call-to-action (replaces contact form)
- **Footer** — Navigation links, "Available on Upwork" status

## Routing
- `/` — Homepage with all sections
- `/project/:slug` — Opens homepage with project modal pre-opened (shareable project links)
- Project slugs: `industrial-iot-gateway`, `ble-wearable-fitness-tracker`, `smart-energy-bms-controller`, `factory-test-flash-station`, `wifi-connected-thermostat`, `motor-control-pcb-robotics`, `lora-environmental-sensor-network`, `automotive-can-bus-diagnostic-tool`, `custom-embedded-linux-sbc`

## Key Files
- `src/pages/home.tsx` — Main page composing all sections
- `src/components/sections/` — All section components
- `src/components/layout/Navbar.tsx` — Navigation
- `src/index.css` — Theme variables, grid patterns, glow utilities
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
