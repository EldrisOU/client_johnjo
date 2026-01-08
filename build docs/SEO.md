# LAUNCHEDIN10 — SEO CONFIGURATION
## Client: John-Jo (Video Production)
## Domain: john-jo.co.nz
## Prepared: January 2026

---

## SEO PROMPT

**SEO Strategy Notes:**

```
[SEO_PROMPT]

Target Audience: New Zealand businesses seeking professional video production services — primarily B2B, South Island focus with national reach.

Primary Geographic Targets:
- Dunedin, Otago
- Queenstown/Wanaka, Central Otago
- Christchurch, Canterbury
- Wider South Island
- Wellington, Auckland (secondary)

Key Service Keywords:
- Video production NZ / New Zealand
- Brand films / brand storytelling
- Corporate video production
- Recruitment videos / employer branding
- Drone filming / aerial video NZ
- Documentary filmmaker

Differentiators to Emphasise:
- 14+ years experience
- CAA Part 101 certified (drone)
- End-to-end production
- Dunedin-based, South Island specialist
- Documentary/authentic approach vs corporate polish

Competitor Context:
- Larger Auckland/Wellington production houses
- Sole operators with less experience
- Position as premium regional specialist with national capability

Content Strategy:
- Blog enabled with three categories
- Case study pages for key projects
- Service-specific landing page sections
```

---

## PAGE-LEVEL META

### Homepage
```
[SEO01] Title Tag (50-60 chars): Video Production Dunedin | Brand Films & Corporate Video | John-Jo
[SEO02] Meta Description (150-160 chars): Dunedin-based filmmaker creating brand films, corporate videos, and aerial content for New Zealand businesses. 14+ years experience. Book a free call.
[SEO03] Primary Keyword: video production Dunedin
[SEO04] Secondary Keywords: brand films NZ, corporate video production, filmmaker New Zealand, video content Otago
```

### About Page
```
[SEO05] Title Tag: About John-Jo Ritson | Dunedin Filmmaker | 14 Years Experience
[SEO06] Meta Description: Meet John-Jo Ritson — Dunedin-based filmmaker with 14 years' experience creating brand films, documentaries, and corporate video across New Zealand.
[SEO07] Primary Keyword: filmmaker Dunedin
```

### Services Page
```
[SEO08] Title Tag: Video Production Services | Brand Films, Drone, Corporate | John-Jo
[SEO09] Meta Description: Professional video production services in NZ. Brand storytelling, recruitment videos, aerial filming, tech communication, and commercial content. CAA Part 101 certified.
[SEO10] Primary Keyword: video production services NZ
```

### Work / Portfolio Page
```
[SEO_WORK01] Title Tag: Video Portfolio | Brand Films & Corporate Video Projects | John-Jo
[SEO_WORK02] Meta Description: Selected video production projects from across New Zealand. Brand films for TDX, Allied Petroleum TVC, Fonterra partnership content, and documentary work.
[SEO_WORK03] Primary Keyword: video production portfolio NZ
```

### Contact Page
```
[SEO11] Title Tag: Contact John-Jo | Video Production Enquiries | Dunedin, NZ
[SEO12] Meta Description: Get in touch about your video project. Based in Dunedin, working across the South Island and wider New Zealand. Book a free 20-minute call.
```

### Blog Page
```
[SEO13] Title Tag: Video Production Insights | Brand Storytelling & Drone Filming Blog
[SEO14] Meta Description: Practical insights on brand storytelling, aerial filmmaking, and corporate video production for New Zealand businesses. From filmmaker John-Jo Ritson.
```

### Blog Post SEO

**Post 1: Brand Storytelling**
```
Title Tag: Why Brand Storytelling Videos Are Essential for NZ Businesses in 2025
Meta Description: Discover why brand storytelling videos outperform traditional advertising. Science-backed insights for New Zealand business owners considering video content.
Primary Keyword: brand storytelling NZ
```

**Post 2: Aerial Filmmaking**
```
Title Tag: Aerial Filmmaking NZ: CAA Part 101 Drone Operations Guide
Meta Description: Everything you need to know about commercial drone filming in New Zealand. CAA Part 101 regulations, what to expect, and how to plan aerial video projects.
Primary Keyword: drone filming NZ
```

**Post 3: Recruitment Videos**
```
Title Tag: Corporate Recruitment Videos That Actually Work | NZ Guide
Meta Description: Why most recruitment videos fail and how to create employer branding content that attracts the right candidates. Practical guide for NZ businesses.
Primary Keyword: recruitment videos NZ
```

### Products Page (If E-commerce)
```
[SEO15] Title Tag: N/A
[SEO16] Meta Description: N/A
```

---

## SCHEMA MARKUP

### Organization/LocalBusiness
```
[SCH01] Schema Type: ProfessionalService
[SCH02] Legal Name: John-Jo Ritson Ltd
[SCH03] Price Range: $$$ (NZ$3,000–$30,000+)
[SCH04] Opening Hours: Mo-Fr 09:00-17:00
[SCH05] Payment Accepted: Bank Transfer, Credit Card
[SCH06] Currencies Accepted: NZD
```

### Additional Schema Configuration
```
Schema Type: LocalBusiness with VideoProductionCompany attributes

@type: ProfessionalService
name: John-Jo
alternateName: John-Jo Ritson Ltd
description: Dunedin-based filmmaker creating brand films, corporate videos, and aerial content for New Zealand businesses.
url: https://john-jo.co.nz
telephone: +64 27 555 8821
email: hello@john-jo.co.nz

address:
  @type: PostalAddress
  streetAddress: Studio 4, The Exchange, 19 Vogel Street
  addressLocality: Dunedin Central
  addressRegion: Otago
  postalCode: 9016
  addressCountry: NZ

geo:
  @type: GeoCoordinates
  latitude: [MISSING - get coordinates for 19 Vogel Street, Dunedin]
  longitude: [MISSING - get coordinates]

areaServed:
  - Dunedin
  - Otago
  - Canterbury
  - Queenstown
  - South Island
  - New Zealand

hasOfferCatalog:
  @type: OfferCatalog
  name: Video Production Services
  itemListElement:
    - Brand & Corporate Storytelling
    - Recruitment & Onboarding Videos
    - Tech, Science & Research Communication
    - Aerial, Drone & Timelapse
    - Campaign & Commercial Content

founder:
  @type: Person
  name: John-Jo Ritson
  jobTitle: Founder & Creative Director

foundingDate: 2011
priceRange: $$$
```

### Additional Schema Types Required
```
[SCH07] FAQ Schema (yes/no): yes (Contact page)
[SCH08] Product Schema (yes/no): no
[SCH09] Service Schema (yes/no): yes
[SCH10] BreadcrumbList Schema (yes/no): yes
[SCH11] VideoObject Schema (yes/no): yes (for case studies with video embeds)
[SCH12] Person Schema (yes/no): yes (for About page / author)
[SCH13] Article Schema (yes/no): yes (for blog posts)
```

### VideoObject Schema (For Case Studies)
```
Each case study with video embed should include:

@type: VideoObject
name: [Project Title]
description: [Project Description]
thumbnailUrl: [Thumbnail image URL]
uploadDate: [Date]
contentUrl: [YouTube/Vimeo URL]
embedUrl: [Embed URL]
duration: [ISO 8601 duration]
```

---

## OPEN GRAPH

```
[OG01] OG Site Name: John-Jo | Video Production
[OG02] OG Type: website (business.business for homepage)
[OG03] OG Image (1200x630px filename): [MISSING - chase client - og-image.jpg]
[OG04] OG Locale: en_NZ
```

### Page-Specific OG Tags
```
Homepage:
og:title: Stories That Move People to Act | John-Jo
og:description: Dunedin-based filmmaker creating brand films and corporate video for New Zealand businesses.

About:
og:title: About John-Jo Ritson | Filmmaker
og:description: 14 years' experience creating brand films, documentaries, and corporate video across New Zealand.

Work:
og:title: Video Production Portfolio | John-Jo
og:description: Selected projects: TDX brand film, Allied TVC, Fonterra partnership, documentary work.
```

---

## TWITTER CARD

```
[TW01] Twitter Card Type: summary_large_image
[TW02] Twitter Handle (optional): [MISSING - chase client if Twitter account exists]
```

---

## TECHNICAL SEO

```
[TECH01] Canonical URL Base: https://john-jo.co.nz
[TECH02] hreflang Tags Required (yes/no): no (single language/region)
[TECH03] Languages: en-NZ
[TECH04] Sitemap Priority:
  - homepage = 1.0
  - services = 0.9
  - work = 0.9
  - about = 0.8
  - contact = 0.7
  - blog index = 0.7
  - blog posts = 0.6
  - legal pages = 0.3

[TECH05] Robots: index,follow (except legal pages: noindex,follow optional)
```

### Sitemap Structure
```
https://john-jo.co.nz/
https://john-jo.co.nz/about
https://john-jo.co.nz/services
https://john-jo.co.nz/work
https://john-jo.co.nz/work/tdx
https://john-jo.co.nz/work/allied-tvc
https://john-jo.co.nz/work/linde-fonterra
https://john-jo.co.nz/work/paddons-playground
https://john-jo.co.nz/contact
https://john-jo.co.nz/blog
https://john-jo.co.nz/blog/brand-storytelling-videos-nz-2025
https://john-jo.co.nz/blog/aerial-filmmaking-caa-part-101-nz
https://john-jo.co.nz/blog/recruitment-videos-that-work
https://john-jo.co.nz/privacy
https://john-jo.co.nz/terms
```

### Robots.txt
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://john-jo.co.nz/sitemap.xml
```

---

## LOCAL SEO

```
[LOC01] Google Business Profile URL: [MISSING - chase client to set up or provide link]
[LOC02] Service Area Radius: 500km (effectively all of South Island + national travel)
[LOC03] Service Areas: Dunedin, Queenstown, Wanaka, Central Otago, Christchurch, Canterbury, Southland, Invercargill, West Coast, Wellington, Auckland
[LOC04] NAP Consistency Check: Ensure all instances match:
  Name: John-Jo
  Address: Studio 4, The Exchange, 19 Vogel Street, Dunedin Central, Dunedin 9016, New Zealand
  Phone: +64 27 555 8821
```

### Local Keywords to Target
```
- Video production Dunedin
- Filmmaker Dunedin
- Corporate video Otago
- Drone filming South Island
- Brand video Queenstown
- Commercial video Canterbury
- Video production Christchurch
```

---

## INTERNAL LINKING STRATEGY

```
Homepage → Services (all service types)
Homepage → Work (featured projects)
Homepage → About
Services → Work (relevant case studies per service)
Work → Services (back-link to service type)
Blog → Services (contextual links)
Blog → Work (case study references)
All pages → Contact (CTA)
```

---

## IMAGE SEO

```
All images require:
- Descriptive filenames (john-jo-filming-dunedin.jpg not IMG_4532.jpg)
- Alt text describing content
- Lazy loading for below-fold images
- WebP format with fallbacks
- Compressed for web (target <200KB for most images)

Video Thumbnails:
- Custom thumbnail for each video embed
- Alt text: [Project Name] video thumbnail
- Filename: [project-slug]-thumbnail.jpg
```

---

## PERFORMANCE TARGETS

```
Core Web Vitals:
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1

Note: Video embeds should lazy-load to maintain performance.
Use facade pattern for YouTube/Vimeo embeds (click to load).
```

---

**END OF SEO FILE**
