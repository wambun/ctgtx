# Product Requirements Document (PRD)
## Connect Technology Group - Website Redesign

**Version:** 1.0
**Date:** January 15, 2026
**Project:** Full Multi-Page Website Redesign

---

## 1. Executive Summary

This PRD outlines the complete redesign of the Connect Technology Group (CTG) website, transforming the legacy multi-page site into a modern, premium experience following the design cues from the Brentor construction template. The redesign will maintain all existing content while applying a fresh, professional visual identity.

---

## 2. Sitemap - Derived from client/old

### Primary Navigation Structure

```
/                           # Homepage
├── /about                  # About Section
│   ├── /about/why-ctg      # Why CTG
│   └── /about/leadership   # Leadership/Team
│
├── /services               # Services Landing
│   ├── /services/audio-visual
│   ├── /services/electrical
│   ├── /services/security
│   └── /services/cabling
│
├── /projects               # Portfolio/Projects
│   ├── /projects/[slug]    # Individual Project Pages (17 projects)
│   │   ├── sager-electronics
│   │   ├── lightbeam-health-solutions
│   │   ├── alphabroder
│   │   ├── city-of-carrollton-city-hall
│   │   ├── micron
│   │   ├── equipment-depot
│   │   ├── car-parts
│   │   ├── the-city-of-carrollton
│   │   ├── fairway-mortgage
│   │   ├── fort-worth-zoo
│   │   ├── goosehead-insurance
│   │   ├── bio-pappell
│   │   ├── trinity-private-equity
│   │   ├── crowne-plaza
│   │   ├── nuvodesk
│   │   ├── medsynergies
│   │   └── huawei
│   └── /projects/archive   # Project Archives
│
├── /partners               # Partners Page
│   └── /partners/[slug]    # Individual Partner Pages (26 partners)
│
├── /blog                   # Blog Landing
│   └── /blog/[slug]        # Individual Blog Posts (5 posts)
│       ├── cold-snaps-and-heat-waves
│       ├── office-prepared-for-presentations
│       ├── network-cabling-highways
│       ├── ev-charging-stations
│       └── automated-security-gates
│
├── /testimonials           # Client Testimonials
├── /resources              # Resources (Tech Talk, Downloads)
├── /contact                # Contact Page
└── /free-consultation      # Free Consultation Form
```

### Utility Pages
```
├── /thank-you/consultation  # Thank You - Consultation
├── /thank-you/contact       # Thank You - Contact
└── /404                     # 404 Page
```

### Total Pages: ~60+ pages (including dynamic routes)

---

## 3. Visual Analysis - Design Target (Brentor Template)

### 3.1 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Orange | `#F26522` | CTAs, accents, highlights, section labels |
| Navy Blue | `#1A2B4A` | Headers, backgrounds, primary text |
| White | `#FFFFFF` | Backgrounds, button text, cards |
| Light Gray | `#F5F5F5` | Section backgrounds |
| Dark Gray | `#6B7280` | Body text, descriptions |

### 3.2 Typography

| Element | Style |
|---------|-------|
| H1 Headlines | Large serif-style, ~48-64px, Navy |
| H2 Section Titles | ~36-42px, Navy |
| Section Labels | Small caps/uppercase, Orange, ~14px |
| Body Text | Sans-serif, 16-18px, Gray |
| Button Text | Medium weight, 14-16px |

### 3.3 Key Design Patterns

#### Navigation
- **Sticky header** with white background
- Logo on left, nav items centered
- Primary CTA button ("Contact us") on right - orange with white text, rounded
- Active nav item highlighted in orange

#### Hero Section
- Full-width hero image with overlay
- Large headline + supporting text
- Two CTAs: Primary (white bg, orange text) + Secondary (text link with arrow)

#### Section Structure
- **Section Label**: Small orange uppercase text (e.g., "About us", "Our services")
- **Section Headline**: Large navy text, often with orange highlighted phrases
- Generous white space between sections

#### Cards
- **Service Cards**: Image top, title, description, "Learn More >" link with orange arrow
- **Project Cards**: Image with hover effect, title overlay or below
- **Team Cards**: Large portrait image, name, title below
- **Testimonial Cards**: Large photo left, quote right, navigation arrows

#### Buttons
- **Primary**: Orange background, white text, rounded, arrow icon
- **Secondary**: White background, orange text/border, arrow icon
- **Text Link**: Underline on hover, orange arrow

#### Statistics/Metrics
- Large white numbers on navy background
- Small label text below

#### Footer
- Navy or white background
- Logo + tagline
- Multi-column link sections
- Newsletter signup with email input
- Contact info with icons
- Copyright bar

### 3.4 Micro-interactions & Animations

| Element | Animation |
|---------|-----------|
| Buttons | Scale on hover, color transition |
| Cards | Subtle lift shadow on hover |
| Links | Underline slide in from left |
| Page transitions | Fade in on load |
| Scroll | Parallax on hero images |
| Stats | Count-up animation on scroll |
| Navigation | Smooth scroll to sections |

---

## 4. Content Mapping: Old → New Design Components

### 4.1 Homepage

| Old Content | New Component |
|-------------|---------------|
| Video header + mission statement | Hero section with video/image background |
| Services grid (4 items) | Services card grid (3-column) |
| Featured project (Crowne Plaza) | Featured project with large image |
| Testimonials carousel | Testimonial section with navigation |
| Blog preview | Blog card section |
| Partners logos | Logo carousel/grid |
| Contact CTA | Full-width CTA section (orange) |

### 4.2 Services Pages

| Old Content | New Component |
|-------------|---------------|
| Service hero + intro | Page hero with label + headline |
| Feature lists | Feature cards with icons |
| Related projects | Project grid section |
| Partner logos | Partner logo grid |
| CTA | Full-width CTA section |

### 4.3 Portfolio/Projects

| Old Content | New Component |
|-------------|---------------|
| Portfolio hero | Page hero with label + headline |
| Project grid | Masonry/grid project cards |
| Project detail pages | Project detail layout with gallery |
| Testimonial link | Testimonial preview section |

### 4.4 About Section

| Old Content | New Component |
|-------------|---------------|
| Why CTG values | Values cards with icons |
| Leadership team | Team grid with photos |
| Company mission | Mission statement section |
| Working with us | Benefits list section |

### 4.5 Partners

| Old Content | New Component |
|-------------|---------------|
| Partner grid | Partner card grid with logos |
| Partner descriptions | Partner detail cards |

### 4.6 Contact

| Old Content | New Component |
|-------------|---------------|
| Contact info | Contact info cards with icons |
| Map | Embedded map section |
| Contact form | Modern form with validation |

---

## 5. Technical Implementation

### 5.1 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Content**: MDX/JSON for static content

### 5.2 Project Structure

```
/app
├── layout.tsx                 # Root layout with nav/footer
├── page.tsx                   # Homepage
├── about/
│   ├── page.tsx               # About landing
│   ├── why-ctg/page.tsx
│   └── leadership/page.tsx
├── services/
│   ├── page.tsx               # Services landing
│   ├── audio-visual/page.tsx
│   ├── electrical/page.tsx
│   ├── security/page.tsx
│   └── cabling/page.tsx
├── projects/
│   ├── page.tsx               # Projects listing
│   └── [slug]/page.tsx        # Dynamic project pages
├── partners/
│   ├── page.tsx               # Partners listing
│   └── [slug]/page.tsx        # Partner detail (optional)
├── blog/
│   ├── page.tsx               # Blog listing
│   └── [slug]/page.tsx        # Blog post
├── testimonials/page.tsx
├── resources/page.tsx
├── contact/page.tsx
├── free-consultation/page.tsx
└── thank-you/
    ├── consultation/page.tsx
    └── contact/page.tsx

/components
├── landing/                   # Page-specific sections
│   ├── hero.tsx
│   ├── services-grid.tsx
│   ├── featured-project.tsx
│   ├── testimonials.tsx
│   ├── stats-section.tsx
│   ├── partners-logos.tsx
│   └── cta-section.tsx
├── shared/                    # Reusable components
│   ├── navigation.tsx
│   ├── footer.tsx
│   ├── section-header.tsx
│   ├── service-card.tsx
│   ├── project-card.tsx
│   ├── team-card.tsx
│   ├── partner-card.tsx
│   ├── testimonial-card.tsx
│   ├── blog-card.tsx
│   └── contact-form.tsx
└── ui/                        # Shadcn UI components

/content
├── services/                  # Service content JSON/MDX
├── projects/                  # Project content JSON/MDX
├── partners/                  # Partner content JSON/MDX
├── blog/                      # Blog posts MDX
└── team/                      # Team member data

/lib
├── utils.ts
└── animations.ts              # Framer Motion variants

/public
└── images/                    # Static images
```

### 5.3 Data Models

#### Service
```typescript
interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  partners: string[];
  relatedProjects: string[];
}
```

#### Project
```typescript
interface Project {
  slug: string;
  title: string;
  client: string;
  description: string;
  services: string[];
  images: string[];
  featured: boolean;
}
```

#### Partner
```typescript
interface Partner {
  slug: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  category: 'av' | 'security' | 'cabling' | 'electrical';
}
```

#### TeamMember
```typescript
interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string[];
  phone: string;
  email: string;
}
```

#### BlogPost
```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
}
```

#### Testimonial
```typescript
interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image?: string;
}
```

### 5.4 Key Features

1. **Dynamic Routes**: Projects, blog posts, and optionally partners use dynamic routes
2. **Static Generation**: All pages statically generated at build time
3. **Image Optimization**: Next.js Image component for all images
4. **Responsive Design**: Mobile-first with Tailwind breakpoints
5. **Animations**: Framer Motion for page transitions and micro-interactions
6. **Forms**: Contact and consultation forms with validation
7. **SEO**: Metadata API for all pages
8. **Accessibility**: ARIA labels, keyboard navigation, focus management

---

## 6. Component Specifications

### 6.1 Navigation Component
- Sticky on scroll
- Mobile hamburger menu
- Active state indication
- Logo click returns to home

### 6.2 Hero Component
- Supports video or image background
- Gradient overlay option
- Animated text entrance
- Responsive height

### 6.3 Section Header Component
- Orange label text
- Navy headline with optional orange highlight
- Optional description text
- Centered or left-aligned variants

### 6.4 Card Components
- Consistent border-radius (8-12px)
- Shadow on hover
- Image aspect ratio consistency
- Link indicator (arrow)

### 6.5 CTA Section Component
- Full-width orange background
- Two-column layout (text left, image/stat right)
- Button with hover animation

### 6.6 Footer Component
- Multi-column links
- Newsletter signup
- Contact information
- Social links
- Copyright bar

---

## 7. Phase 2 Execution Checklist

### Global Components
- [ ] Navigation component
- [ ] Footer component
- [ ] Page layout wrapper
- [ ] Section header component
- [ ] Button variants
- [ ] Card variants

### Pages (Priority Order)
1. [ ] Homepage
2. [ ] Services landing + individual pages (4)
3. [ ] Projects listing + detail pages
4. [ ] About section pages (2)
5. [ ] Contact page
6. [ ] Partners page
7. [ ] Blog listing + posts
8. [ ] Testimonials page
9. [ ] Resources page
10. [ ] Thank you pages
11. [ ] 404 page

### Content Migration
- [ ] Service content
- [ ] Project content (17 items)
- [ ] Partner content (26 items)
- [ ] Team member content (4 members)
- [ ] Blog posts (5 posts)
- [ ] Testimonials (7 items)

---

## 8. Success Metrics

- All 60+ pages successfully migrated
- Lighthouse performance score > 90
- Mobile responsive on all breakpoints
- All animations smooth at 60fps
- Form submissions functional
- SEO metadata complete

---

*Document prepared for Phase 1 approval before proceeding to Phase 2 execution.*
