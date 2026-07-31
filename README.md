# Serene Collective Elevate

https://www.theserenecollective.com/  This is the reference website and you have to follow these instructions """PROJECT BRIEF

Build a premium, multi-page marketing website for The Serene Collective, a veteran-operated real estate investment company based in Texas. This is a full rebuild of an existing single-page site into a polished, multi-page Next.js application. Keep the same brand identity, color palette, imagery style, and content   but elevate the UI to feel like a high-end investment/real estate agency (think: Ritz-Carlton meets a fintech startup), with smooth motion design and a genuinely unique, memorable feel   not a generic template.

Non-negotiable constraints:

Same overall theme, brand voice, and content as the reference site (do not invent a different business).

Multi-page architecture (not a single scrolling page).

Auto-playing hero cover slider on the homepage.

Redesigned, modern navbar.

Rich, tasteful motion/animation throughout   nothing gimmicky or laggy.

Must feel "extra professional"   enterprise-grade polish, not a template flip.

TECH STACK

Framework: Next.js 14+ (App Router)

Language: TypeScript (strict mode)

Styling: Tailwind CSS with a custom design token theme

Components: shadcn/ui as the base component library (Button, Accordion, Card, Sheet, Dialog, Form, Input, Tabs, NavigationMenu, Carousel)

Animation: Framer Motion for all transitions, scroll-reveals, hover states, and the hero slider

Forms: react-hook-form + zod validation for the contact/consultation form

Icons: lucide-react

Fonts: Google Fonts   pair a confident serif/display font for headings (e.g. "Fraunces" or "Playfair Display") with a clean modern sans (e.g. "Inter" or "Manrope") for body text   this replaces the current default web-safe fonts and is a major upgrade lever

Images: next/image with lazy loading, blur placeholders, and responsive srcsets

BRAND SYSTEM

Colors (extract and formalize from the current site   deep navy, warm cream, soft steel blue, gold accent):

--navy-950:  #0f2438   /* darkest navy, footer/hero overlays */
--navy-900:  #16324f   /* primary navy, section backgrounds */
--navy-700:  #2c4c70   /* secondary navy */
--steel-500: #6f95b8   /* accent blue, used in headings & links */
--steel-300: #a9c2da   /* light accent, badges/dividers */
--cream-100: #f4efe4   /* warm background sections */
--cream-50:  #faf8f3   /* lightest background */
--gold-500:  #c9a84c   /* accent gold   key icon, CTAs on dark bg */
--white:     #ffffff
--ink-900:   #1b1f24   /* body copy on light backgrounds */

Typography scale: Display (hero) 56–72px / H1 40px / H2 32px / H3 24px / Body 16–18px / Small 14px. Generous line-height (1.5–1.7) on body copy, tight (1.05–1.15) on display headings.

Motifs to preserve and elevate:

The ornate gold key icon from the hero   keep it, but animate it (gentle float/rotate on load).

The gold padlock icon on the "Flexible Financing" section   reuse as a recurring "security/trust" motif across pages.

Navy + cream contrast blocks as alternating section backgrounds (this rhythm is a strength of the current design   keep it, just refine the spacing/grid).

Interior real-estate photography (bright, high-ceiling homes, natural light) as the consistent image style throughout   source or generate images matching this aesthetic for every new page.

SITE MAP / PAGES

Home (/)

Auto-playing hero cover slider (3–5 slides of interior real-estate photography, ~6s per slide, smooth crossfade + subtle Ken Burns zoom, pause-on-hover, manual arrow + dot controls, swipeable on mobile)

Overlay headline: "Smart Real Estate Investments, With Peace of Mind" with staggered fade/slide-up text animation on load

"Invest with Confidence, Grow with Purpose" statement band

About Us preview (condensed, with "Learn More" → /about)

Services preview grid (4 icon cards: Property Acquisition, Portfolio Management, Strategic Partnerships, Exit Strategies) linking to /services

Stats/impact band (animated counting numbers on scroll-into-view, e.g. "+122% average portfolio growth")

Testimonials/social proof carousel (new addition   placeholder content)

CTA band → /contact

About (/about)

Full founder/company story (veteran-operated, Texas-based, mission-driven)

Timeline or values section (Service, Discipline, Integrity) as animated scroll cards

Team/leadership section (placeholder cards if no photos supplied)

Services (/services)

Deep-dive on the 4 service pillars (Property Acquisition, Portfolio Management, Strategic Partnerships, Exit Strategies), each with icon, description, and supporting image

Alternating left/right image-text layout with scroll-triggered reveals

How It Works (/how-it-works)

Rebuild the accordion (Consultation → Acquisition → Management → Growth) as an animated vertical stepper/timeline with icons, progress indicator, and the "+122%" growth stat visualized as an animated bar chart

"Flexible Financing" section with the gold padlock motif

Contact / Let's Talk (/contact)

Rebuilt lead-gen form (First name, Last name, Email, Phone, Investment goals textarea) using react-hook-form + zod, shadcn Form components, inline validation, animated success state

Contact details (email, phone) and a map or office visual

Sticky/floating "Get a Free Consultation" CTA button site-wide (bottom-right, appears after scroll)

NAVBAR REQUIREMENTS (redesign)

Sticky top navbar that transitions from transparent (over the hero) to solid navy with shadow on scroll   animate the background/blur with Framer Motion, not a hard jump cut.

Logo left, nav links center/right: Home, About, Services, How It Works, Contact.

Active-route underline/indicator that slides between links (layoutId animation).

Right-aligned "Get a Free Consultation" button, gold-accented, always visible.

Mobile: shadcn Sheet slide-in drawer with staggered link entrance animations, large tap targets, and the CTA button pinned at the bottom of the drawer.

ANIMATION SPEC (Framer Motion)

Page transitions: fade + slight vertical shift between route changes (App Router layout transition).

Scroll reveals: whileInView fade-up for section headings, staggered children for card grids and lists (stagger 0.08–0.12s).

Hero slider: crossfade + slow scale (Ken Burns), text staggered in with staggerChildren.

Stat counters: animate number count-up when scrolled into view (use a small custom hook, not a heavy library).

Buttons/links: micro-interactions   scale 1.03 + shadow lift on hover, tap scale 0.97.

Accordion/stepper on How It Works: animated height + icon rotate, active step highlighted with a moving indicator line.

Respect prefers-reduced-motion   provide a reduced-motion fallback (fades only, no parallax/zoom) for accessibility.

UNIQUE / DIFFERENTIATING FEATURES TO ADD

These go beyond the original site and should make it feel "extra professional" and distinct from a template:

Interactive ROI/Investment Calculator widget (on Home or How It Works)   sliders for investment amount and timeframe, animated projected-return output, styled as a card with the navy/gold palette.

Live-feel property/portfolio showcase   a filterable grid or carousel of "featured acquisitions" with hover-reveal details (address, type, status)   even as placeholder data, this signals credibility.

Trust bar   animated logo/badge strip (licensing, veteran-owned certification, BBB, etc.   placeholders) beneath the hero.

Dark/parallax "Our Process" scroll section on How It Works, with pinned visuals as the user scrolls through steps (subtle scroll-linked animation using useScroll/useTransform).

Custom cursor or key-icon hover states on the hero to echo the gold key motif in an unexpected, tasteful way.

Loading/route-transition micro-animation using the key or padlock icon as a brand-consistent loader.

TECHNICAL & QUALITY REQUIREMENTS

Fully responsive: mobile-first, test at 375px, 768px, 1024px, 1440px.

Accessibility: semantic HTML, proper heading hierarchy, alt text on all images, keyboard-navigable nav/menus/forms, visible focus states, WCAG AA contrast (verify cream-on-navy and gold-on-navy combos).

Performance: optimized images, no layout shift from the hero slider, lazy-load below-the-fold sections.

SEO: per-page metadata (title/description/OG tags), clean semantic structure, sitemap.

Code quality: componentized (e.g. components/hero-slider.tsx, components/navbar.tsx, components/stat-counter.tsx, components/section-reveal.tsx), typed props, no any.

Footer consistent across all pages: logo, contact info (email/phone), quick links, copyright.

DELIVERABLE

A fully functional, deployable Next.js + TypeScript + Tailwind + shadcn/ui + Framer Motion multi-page website matching the above spec, using the existing Serene Collective brand content and imagery style, elevated to a premium, animation-rich, professional experience.""'

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2dc9fe85-86de-407c-b4df-03ef6a5eaae2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm   [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
