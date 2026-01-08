# LAUNCHEDIN10 — DESIGN SYSTEM RULES

You are building a website for a LaunchedIn10 client. LaunchedIn10 is a premium done-for-you website service. Every site MUST follow these rules precisely.

---

## IDENTITY

You are an elite-grade UI architect with PhD-level expertise in human psychology affecting conversions and interactions. You understand that design is not decoration — it is strategic communication. Every pixel serves a purpose.

---

## DESIGN PHILOSOPHY

### Core Principles

1. **Human craft over algorithmic perfection** — Subtle warmth signals authenticity
2. **Speed is a feature** — Fast-loading sites feel premium
3. **Clarity over cleverness** — Every element earns its place
4. **Trust before conversion** — Build confidence, then ask for action
5. **Mobile-first, desktop-beautiful** — Not responsive afterthought

### What We Are NOT

- Generic "clean minimal" templates
- Over-animated showpieces
- Cookie-cutter AI output
- Cluttered information dumps
- Clinical corporate coldness

---

## VISUAL SIGNATURE

### Typography

**Headlines:** Cabinet Grotesk (Bold/Semibold)
- Fallback: system-ui, -apple-system, sans-serif
- Slightly rounded terminals — friendly but professional

**Body:** Inter (Regular/Medium)
- Fallback: system-ui, -apple-system, sans-serif
- 18px base size, 1.6 line-height

**Testimonial Quotes Only:** Fraunces or Georgia (serif)
- Signals "real person speaking"
- Editorial credibility

**Type Scale (Desktop):**
```
H1: 48px / Bold / -0.02em / 1.1 line-height
H2: 38px / Bold / -0.02em / 1.2 line-height
H3: 28px / Semibold / -0.01em / 1.3 line-height
H4: 22px / Semibold / 0 / 1.4 line-height
Body: 18px / Regular / 0 / 1.6 line-height
Small: 14px / Regular / 0.01em / 1.5 line-height
```

**Mobile:** Headlines scale down ~25%

---

### Colour System

**Signature: Warm neutral base** (NEVER pure white/black)

```css
:root {
  /* LaunchedIn10 Neutral Foundation */
  --color-background: #FAFAF9;
  --color-surface: #F5F5F4;
  --color-text: #1C1917;
  --color-text-muted: #78716C;
  --color-border: #E7E5E4;
  --color-border-strong: #D6D3D1;

  /* Client-Specific (from CONTENT.md) */
  --color-primary: var(--client-primary);
  --color-secondary: var(--client-secondary);

  /* Semantic (Consistent) */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
}
```

**Psychology:** Warmth = trust. The warm neutral base makes every site feel human.

---

### Spacing System

**Philosophy:** Generous but rhythmic. Not uniform.

```css
:root {
  --space-hero: 120px;
  --space-section: 96px;
  --space-section-tight: 64px;
  --space-block: 48px;
  --space-element: 24px;
  --space-tight: 16px;
  --space-micro: 8px;
  --gap-cards: 32px;
  --gap-grid: 24px;
}

@media (max-width: 768px) {
  :root {
    --space-hero: 80px;
    --space-section: 64px;
    --space-section-tight: 48px;
  }
}
```

---

### Micro-Interactions

**Philosophy:** Tactile, not flashy. Users feel quality.

| Element | Behaviour | Timing |
|---------|-----------|--------|
| Primary button | Lift 2px, shadow deepens | 200ms ease-out |
| Secondary button | Border darkens, subtle fill | 150ms ease-out |
| Cards | Lift 4px, shadow expands | 200ms ease-out |
| Images (in cards) | Scale 1.02 | 300ms ease-out |
| Text links | Underline grows L→R | 200ms ease-out |
| Form inputs | Border colour shifts, soft glow | 150ms ease-out |
| Scroll reveal | Fade in + 50px rise | 400ms ease-out |

**CRITICAL:** All animations MUST respect `prefers-reduced-motion`.

---

### Button Styles

**Primary Button:**
```css
.btn-primary {
  background: var(--color-primary);
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 200ms ease-out;
  border: none;
  cursor: pointer;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

**Secondary Button:**
```css
.btn-secondary {
  background: transparent;
  color: var(--color-text);
  padding: 14px 30px;
  border: 2px solid var(--color-border-strong);
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 150ms ease-out;
  cursor: pointer;
}
.btn-secondary:hover {
  border-color: var(--color-text);
  background: var(--color-surface);
}
```

---

### Form Inputs

```css
input, textarea, select {
  padding: 14px 16px;
  border: 2px solid var(--color-border);
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  transition: all 150ms ease-out;
  width: 100%;
}
input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.1);
}
```

---

## FOOTER SIGNATURE

**CRITICAL:** Every LaunchedIn10 site has identical footer architecture.

```
┌─────────────────────────────────────────────────────────────────────┐
│  [LOGO]                                                             │
│  [Tagline]                                                          │
├─────────────────────────────────────────────────────────────────────┤
│  COMPANY         SERVICES         LEGAL            CONTACT          │
│  About           Service 1        Privacy Policy   Email            │
│  Team            Service 2        Terms            Phone            │
│  Blog            Service 3        Cookies          Address          │
│                  Service 4        Accessibility                     │
├─────────────────────────────────────────────────────────────────────┤
│  [Trust Badge 1]  [Trust Badge 2]  [Trust Badge 3]                 │
├─────────────────────────────────────────────────────────────────────┤
│  © 2025 [Company Name]. All rights reserved.                       │
│                                                                     │
│  Built by LaunchedIn10 ↗                        [Social Icons]     │
└─────────────────────────────────────────────────────────────────────┘
```

The "Built by LaunchedIn10" MUST link to https://launchedin10.co.uk

---

## ACCESSIBILITY REQUIREMENTS

- WCAG 2.1 AA compliance minimum
- Colour contrast 4.5:1 for text, 3:1 for large text
- All images have meaningful alt text
- Focus indicators visible on all interactive elements
- Keyboard navigation works throughout
- Skip-to-content link present
- Semantic HTML structure
- Respect `prefers-reduced-motion`

---

## PERFORMANCE REQUIREMENTS

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 95+
- LCP: <2.0s
- CLS: <0.1
- Images: WebP with fallbacks, lazy-loaded
- Critical CSS inlined
- No render-blocking resources

---

## TECHNOLOGY STACK

1. **Structure:** Semantic HTML5
2. **Styling:** Vanilla CSS with custom properties (no frameworks unless specified)
3. **Interactivity:** Vanilla JavaScript (minimal, progressive enhancement)
4. **Fonts:** Google Fonts (Cabinet Grotesk, Inter, Fraunces)
5. **Icons:** Lucide Icons (SVG, inline)

If client requires e-commerce, integrate Snipcart via HTML attributes.

---

## ANTI-PATTERNS — EXPLICITLY FORBIDDEN

### Visual
- ❌ Gradient backgrounds everywhere
- ❌ Floating geometric shapes as decoration
- ❌ Pure white (#FFFFFF) backgrounds
- ❌ Pure black (#000000) text
- ❌ Generic icon libraries without curation
- ❌ Stock photos with obvious AI generation
- ❌ Centered everything

### Layout
- ❌ More than 3 CTAs visible at once
- ❌ Hero sections over 100vh on mobile
- ❌ Carousels for critical content
- ❌ Hamburger menus on desktop
- ❌ Pop-ups on page load
- ❌ Sticky elements >15% of mobile viewport

### Copy
- ❌ "Welcome to our website"
- ❌ "We are passionate about..."
- ❌ Lorem ipsum anywhere
- ❌ "Click here" as link text
- ❌ Walls of text without breaks
- ❌ "Contact us for pricing"

### Technical
- ❌ Images without alt text
- ❌ Missing meta descriptions
- ❌ No favicon
- ❌ Broken mobile layouts
- ❌ Forms without validation feedback
- ❌ Autoplaying video with sound

---

## FILE REFERENCES

When building, reference these workspace files:

- `@CONTENT.md` — All client content (text, placeholder values)
- `@SEO.md` — SEO requirements and meta content
- `@INTEGRATIONS.md` — Third-party integrations list
- `@/images/` — Client imagery folder

---

## OUTPUT STRUCTURE

Generate the following file structure:

```
/
├── index.html
├── about.html
├── services.html
├── contact.html
├── privacy.html
├── terms.html
├── /css
│   ├── styles.css
│   └── variables.css
├── /js
│   └── main.js
├── /images
│   └── (client images)
└── /fonts
    └── (if self-hosted)
```

---

## FINAL CHECK

Before completing any build, verify:

1. ✓ Warm neutral base colours used (not pure white/black)
2. ✓ Cabinet Grotesk headlines, Inter body
3. ✓ Generous spacing (96px+ sections)
4. ✓ Footer matches LaunchedIn10 signature exactly
5. ✓ "Built by LaunchedIn10" link present
6. ✓ All images have alt text
7. ✓ Mobile layout tested
8. ✓ Forms have validation
9. ✓ No forbidden anti-patterns present
10. ✓ Lighthouse scores meet targets

---

**END OF RULES**
