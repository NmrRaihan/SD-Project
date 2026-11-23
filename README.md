# Brillance — Custom Contract Billing Landing Page

A responsive SaaS landing page built with **Next.js (App Router)** and **Tailwind CSS v4**, featuring modular UI components, data-driven sections, custom SVG icons, and an interactive testimonial switcher.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** JavaScript / JSX
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"`)
- **Image Optimization:** `next/image`

---

## Features & Architecture

- **Modular Section Components:** Separate components for `Header`, `Hero`, `Services`, `Testimonials`, `Features`, `Pricing`, and `Footer`.
- **Reusable UI Primitives:** Shared building blocks (`SectionHeader`, `SectionBadge`, `DiagonalPattern`, `ServiceCard`, `FeatureCard`, `PricingCard`, and `FooterColumn`) driven by props.
- **Data-Driven Rendering:** Content, pricing plans, testimonials, and footer links are decoupled into structured data arrays inside `src/data/` and rendered dynamically via `.map()`.
- **Interactive Testimonials:** Client-side state (`useState`) allows users to switch between multiple customer testimonials using avatar thumbnails.
- **Custom SVG Icon Components:** Dedicated, reusable SVG icon components stored in `src/components/icons/`.
- **Responsive Design:** Adapts cleanly across mobile (`375px`), tablet (`768px`), and desktop (`1280px+`) viewports.

---

## Project Structure

```text
brillance/
├── public/
│   └── assets/
│       └── images/
│           ├── avatar/          # Testimonial profile avatars
│           └── services/        # Service and feature dashboard illustrations
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind CSS v4 import & global styles
│   │   ├── layout.js            # Root layout & font configuration
│   │   └── page.js              # Main landing page assembling all sections
│   ├── components/
│   │   ├── icons/               # Custom SVG icon components
│   │   │   ├── CheckIcon.jsx
│   │   │   ├── GithubIcon.jsx
│   │   │   ├── LinkedinIcon.jsx
│   │   │   ├── PricingBadgeIcon.jsx
│   │   │   ├── ServicesBadgeIcon.jsx
│   │   │   ├── TestimonialsBadgeIcon.jsx
│   │   │   └── TwitterIcon.jsx
│   │   ├── ui/                  # Reusable UI cards and layout helpers
│   │   │   ├── DiagonalPattern.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── FooterColumn.jsx
│   │   │   ├── PricingCard.jsx
│   │   │   ├── SectionBadge.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   └── ServiceCard.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Pricing.jsx
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   └── data/                    # Static data arrays for sections
│       ├── features.js
│       ├── footer.js
│       ├── pricing.js
│       ├── services.js
│       └── testimonials.js
├── next.config.mjs
└── package.json
```

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production

```bash
npm run lint
npm run build
npm run start
```