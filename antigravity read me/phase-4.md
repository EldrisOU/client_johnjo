# PHASE 4: SEO

Read `SEO.md` and implement on-page SEO across all pages.

---

## PAGE META

### Title Tags
- index.html: [SEO01]
- about.html: [SEO05]
- services.html: [SEO08]
- contact.html: [SEO11]
- blog.html: [SEO13]
- products.html: [SEO15]
- Legal pages: "[Page] | [C01]"

### Meta Descriptions
- index.html: [SEO02]
- about.html: [SEO06]
- services.html: [SEO09]
- contact.html: [SEO12]
- blog.html: [SEO14]
- products.html: [SEO16]

### Canonical URLs
- Add to all pages using [TECH01] as base

---

## OPEN GRAPH

Add to all pages:
- og:title (page title)
- og:description (meta description)
- og:type: [OG02]
- og:url (canonical)
- og:image: [OG03] or [C96]
- og:site_name: [OG01]
- og:locale: [OG04]

---

## TWITTER CARDS

Add to all pages:
- twitter:card: [TW01]
- twitter:title
- twitter:description
- twitter:image
- twitter:site: [TW02] (if populated)

---

## SCHEMA MARKUP

### Organization/LocalBusiness (index.html)
- @type: [SCH01]
- name: [C01]
- legalName: [SCH02]
- Contact details from [C53-C59]
- Social links from [C61-C66]
- priceRange: [SCH03]
- openingHours: [SCH04]

### FAQ Schema (faq.html if exists)
- FAQPage type
- Questions from [FAQ01-FAQ05]

### Product Schema (products.html if exists)
- Product type for each item
- Data from [P01-P42]

### BreadcrumbList (if [SCH10] = "yes")
- Add to interior pages

---

## TECHNICAL FILES

### robots.txt
- Allow all
- Sitemap reference

### sitemap.xml
- All pages with lastmod, changefreq, priority
- Homepage priority 1.0, others 0.8

---

## OUTPUT

1. Update all pages with SEO elements
2. Create robots.txt and sitemap.xml
3. Confirm:

```
PHASE 4 COMPLETE
================
SEO implemented:
  ✓ Title tags (unique per page)
  ✓ Meta descriptions
  ✓ Canonical URLs
  ✓ Open Graph tags
  ✓ Twitter Card tags
  ✓ Schema markup
  ✓ robots.txt
  ✓ sitemap.xml

Awaiting instruction to execute phase 5.
```

**STOP. Wait for instruction to execute phase 5.**
