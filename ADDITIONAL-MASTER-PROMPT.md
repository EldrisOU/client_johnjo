# LAUNCHEDIN10 — ADDITIONAL MASTER PROMPT
## Template Extension: Filmmaker / Video Production Website
## Client: John-Jo
## Prepared: January 2026

---

## PURPOSE

This file provides **filmmaker-specific extensions** to the standard LaunchedIn10 build system. It does NOT replace MASTER-PROMPT.md or rules.md — it adds niche-specific requirements for video production websites.

Read this AFTER rules.md and BEFORE beginning any phase.

---

## CLIENT COLOUR PALETTE

Override standard palette with client brand colours:

```css
/* Client-specific colours — use these values */
--color-primary: #0F172A;    /* Midnight Cinema — dark backgrounds */
--color-secondary: #F59E0B;  /* Golden Hour — CTAs, accents */
--color-accent: #FFFBEB;     /* Soft Light — text on dark */
--color-frame: #1E293B;      /* Frame Black — cards, lifted elements */
--color-lens: #64748B;       /* Lens Grey — body text, subtle */
--color-focus: #F8FAFC;      /* Focus White — highlights */
```

**Application notes:**
- This client requires **dark-first approach** — #0F172A as default section backgrounds
- Golden Hour (#F59E0B) for CTAs and interactive elements only
- High contrast text (#FFFBEB or #F8FAFC) on dark backgrounds
- Cards use Frame Black (#1E293B) for subtle lift

---

## VIDEO HERO REQUIREMENT

The homepage hero MUST feature video. Two approved approaches:

**Option A: Showreel Background**
- Muted autoplay video background using showreel footage
- Text overlay with headline and CTA
- Poster image fallback for mobile/slow connections
- Video should be atmospheric, not distracting

**Option B: Split Hero with Embedded Showreel**
- Left: Headline, subheadline, CTAs
- Right: Embedded Vimeo showreel (click to play)

**Showreel details:**
```
URL: https://vimeo.com/594437273
Settings: Autoplay off, Loop yes (if background), Colour #F59E0B
```

---

## VIDEO FACADE PATTERN (Critical)

All video embeds MUST use facade pattern for performance:

```html
<!-- Do NOT load iframe on page load -->
<!-- Show thumbnail with play button, load iframe on click -->

<div class="video-facade" data-video-url="[VIDEO_URL]">
  <img src="[THUMBNAIL]" alt="[Project Name]" loading="lazy">
  <button class="play-button" aria-label="Play video">
    <svg><!-- Play icon --></svg>
  </button>
</div>

<!-- On click: replace entire div with iframe -->
```

**Preconnect in head:**
```html
<link rel="preconnect" href="https://www.youtube-nocookie.com">
<link rel="preconnect" href="https://player.vimeo.com">
<link rel="preconnect" href="https://i.vimeocdn.com">
```

---

## VIDEO EMBED SPECIFICATIONS

### YouTube (Use privacy-enhanced mode)
```html
<iframe 
  src="https://www.youtube-nocookie.com/embed/[VIDEO_ID]"
  title="[Project Name]"
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
```

### Vimeo
```html
<iframe 
  src="https://player.vimeo.com/video/[VIDEO_ID]?color=F59E0B&title=0&byline=0&portrait=0"
  title="[Project Name]"
  loading="lazy"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen>
</iframe>
```

---

## WORK PAGE: VIDEO GRID

The Work/Portfolio page requires a video-first grid:

```
┌─────────────────┬─────────────────┐
│   TDX           │   Allied TVC    │
│   Brand Film    │   TVC           │
├─────────────────┼─────────────────┤
│ Linde x Fonterra│ Paddon's        │
│ Corporate       │ Playground      │
├─────────────────┼─────────────────┤
│   Vet Plus      │   FIFTY         │
│   Brand Story   │   Documentary   │
└─────────────────┴─────────────────┘
```

**Grid item behaviour:**
- Custom thumbnail (frame from video)
- Category label visible (e.g., "Brand Film", "TVC")
- Hover: subtle scale, play icon appears
- Click: navigate to case study page

---

## CASE STUDY PAGE TEMPLATE

Each portfolio item gets a dedicated page at `/work/[project-slug]`:

```
1. HERO
   Full-width video embed (primary video)
   Project title below

2. PROJECT INFO BAR
   Client | Category | Location

3. DESCRIPTION
   2-3 paragraphs (Challenge → Approach → Outcome)
   Written in first person (John-Jo's voice)

4. CLIENT QUOTE (if available)
   Testimonial with attribution

5. RELATED PROJECTS
   2-3 thumbnails linking to other case studies

6. CTA
   "Got a similar project?" → Contact
```

---

## CASE STUDY DATA

### TDX — Brand Film
```
URL: /work/tdx
Video: https://youtu.be/MgqtYSQZNCQ
Client: TDX
Type: Brand Film
Location: South Island, New Zealand
Description: Comprehensive brand piece for New Zealand's leading transformer specialists. Three days filming across multiple sites — workshops, substations, and field service operations.
Quote: "The finished product clearly reflects what we want to put into the marketplace."
```

### Allied TVC — Television Commercial
```
URL: /work/allied-tvc
Video: https://youtu.be/6P5IesdtrvQ
Client: Allied Petroleum
Type: TVC / Campaign
Location: Nationwide (Auckland, Christchurch, Invercargill)
Description: "All Hours. All In." — Six-day shoot across three regions delivering flagship 60-second TVC plus social cutdowns for broadcast and digital.
Quote: N/A
```

### Linde MH x Fonterra — Partnership
```
URL: /work/linde-fonterra
Video: https://youtu.be/Wjuo999FPTA
Client: Linde Material Handling / Fonterra
Type: Corporate / Partnership
Location: Darfield, Canterbury
Description: Partnership announcement for Fonterra's Darfield processing site. Real people, real business relationship. Multiple aspect ratios for platform flexibility.
Quote: N/A
```

### Paddon's Playground — Content Series
```
URL: /work/paddons-playground
Video: [TBC — chase client]
Client: Hayden Paddon / Paddon Rallysport
Type: Content Series / Motorsport
Location: Central Otago
Description: Content series showcasing rally in New Zealand's stunning landscapes. Driver profiles, car content, in-car footage.
Quote: "These videos sum up just how good rallying in our beautiful country is."
```

---

## VIDEOOBJECT SCHEMA

Apply to each case study page:

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "[Project Title]",
  "description": "[Project description]",
  "thumbnailUrl": "https://john-jo.co.nz/images/[project]-thumbnail.jpg",
  "uploadDate": "[Date]",
  "contentUrl": "[YouTube/Vimeo URL]",
  "embedUrl": "[Embed URL]",
  "duration": "[ISO 8601 duration]"
}
```

---

## PHASE-SPECIFIC NOTES

### Phase 1 (Homepage + CSS)
- Implement dark colour scheme using client palette above
- Build video hero component with facade pattern
- Create reusable video-facade component for later use

### Phase 2 (Pages)
- Work page: Video grid with thumbnails
- Case study pages: Follow template above, one per project
- Services: Anchor links for homepage service cards
- Contact: Calendly embed placeholder + FAQ accordion

### Phase 3 (Integrations)
- Configure all video embeds (YouTube nocookie, Vimeo)
- Add preconnect links for video hosts
- Formspree for contact form
- Calendly widget placeholder

### Phase 4 (SEO)
- VideoObject schema on each case study page
- Ensure video thumbnails in OG tags for case studies

### Phase 5 (QA)
- Verify all video embeds load correctly
- Test facade pattern (thumbnail → click → video)
- Check mobile video playback
- Confirm lazy loading working

---

## SITE STRUCTURE

```
/                     Homepage (video hero)
/about                About John-Jo
/services             Services (anchor sections)
/work                 Portfolio grid
/work/tdx             Case study
/work/allied-tvc      Case study
/work/linde-fonterra  Case study
/work/paddons-playground  Case study
/contact              Contact + FAQs + Booking
/blog                 Blog index
/blog/[slug]          Blog posts (3 ready)
/privacy              Privacy policy
/terms                Terms
/accessibility        Accessibility statement
```

---

## CHECKLIST

- [ ] Dark colour scheme applied (#0F172A backgrounds)
- [ ] Video facade component built
- [ ] Showreel featured on homepage
- [ ] Case study pages created for each project
- [ ] All video URLs embedded correctly:
  - [ ] Showreel: vimeo.com/594437273
  - [ ] TDX: youtu.be/MgqtYSQZNCQ
  - [ ] Allied TVC: youtu.be/6P5IesdtrvQ
  - [ ] Linde MH: youtu.be/Wjuo999FPTA
- [ ] VideoObject schema on case study pages
- [ ] Preconnect links in head

---

**END OF ADDITIONAL MASTER PROMPT**
