# BUILD — IMPLEMENTATION PLAN

## TASK

Read all content files and generate a detailed implementation plan for THIS client.

## STEPS

1. Read `CONTENT.md` completely
2. Read `SEO.md` completely
3. Read `INTEGRATIONS.md` completely
4. Analyse which placeholders are populated vs empty
5. Generate the implementation plan below
6. **STOP and wait for instruction to execute phase 1**

## OUTPUT FORMAT

Generate this plan with actual values from the content files:

```
══════════════════════════════════════════════════════════════
              LAUNCHEDIN10 IMPLEMENTATION PLAN
══════════════════════════════════════════════════════════════

CLIENT: [C01 actual value]
INDUSTRY: [C03 actual value]
DOMAIN: [C97 actual value]

══════════════════════════════════════════════════════════════
                        PHASE 1: HOMEPAGE
══════════════════════════════════════════════════════════════

Files to create:
  • /css/variables.css — Design tokens + client colours
  • /css/styles.css — Complete stylesheet per rules.md
  • /js/main.js — Navigation, scroll effects, form validation
  • index.html — Homepage

Homepage sections:
  • Header: Logo [C93 value], navigation
  • Hero: "[C06 actual headline]"
    - Subheadline: "[C07 actual value]"
    - Primary CTA: "[C08]" → [C09]
    - Secondary CTA: "[C10]" → [C11]
    - Image: [C89]
  • Services: [list populated services with titles]
  • About preview: [C36 first ~20 words...]
  • USPs: [C67], [C68], [C69]
  • Testimonials: [list populated testimonials with names]
  • CTA section: "[C70 actual value]"
  • Footer: Full LaunchedIn10 signature

══════════════════════════════════════════════════════════════
                      PHASE 2: OTHER PAGES
══════════════════════════════════════════════════════════════

Pages to build:
  ✓ about.html — [include team section: yes/no based on C74-C88]
  ✓ services.html — [X services to display]
  ✓ contact.html — Form + [C53], [C54], address
  ✓ privacy.html — Generated for [C99]
  ✓ terms.html — Generated for [C99]
  [✓/✗] blog.html — [C104 value]
  [✓/✗] products.html — [C106 value], [X products]
  [✓/✗] faq.html — [E01 value]

Niche enhancements:
  [List any SCH/TRD/CRE sections that are populated]

══════════════════════════════════════════════════════════════
                     PHASE 3: INTEGRATIONS
══════════════════════════════════════════════════════════════

To inject:
  [✓/✗] Google Analytics 4 — [GA02 value or "not configured"]
  [✓/✗] Google Maps — [GMAP02 value or "not configured"]
  [✓/✗] Cookie Consent — [COOKIE02 provider]
  [✓/✗] Contact Form — [FORM01 handler]
  [✓/✗] Snipcart — [SNIP02 value or "not configured"]
  [✓/✗] Live Chat — [CHAT02 provider]
  [✓/✗] Booking — [CAL02 provider]
  [✓/✗] Newsletter — [NEWS02 provider]

══════════════════════════════════════════════════════════════
                         PHASE 4: SEO
══════════════════════════════════════════════════════════════

Meta to implement:
  • Homepage: "[SEO01 title]"
  • Schema type: [SCH01 value]
  • OG image: [OG03 value]

Files to create:
  • sitemap.xml
  • robots.txt

══════════════════════════════════════════════════════════════
                       PHASE 5: QA
══════════════════════════════════════════════════════════════

Will validate:
  • No remaining [Cxx] placeholders
  • All links resolve
  • All images have alt text
  • Forms have validation
  • Footer signature correct
  • Design system compliance

══════════════════════════════════════════════════════════════
                      PHASE 6: DEPLOY
══════════════════════════════════════════════════════════════

Repository: [C98 value]
Domain: [C97 value]

══════════════════════════════════════════════════════════════
                    BLOCKERS / WARNINGS
══════════════════════════════════════════════════════════════

[List any critical missing content that will cause issues]

══════════════════════════════════════════════════════════════

Plan complete. Awaiting instruction to execute phase 1.

══════════════════════════════════════════════════════════════
```

## IMPORTANT

- Fill in ACTUAL values from the content files, not placeholder codes
- Show what each phase will SPECIFICALLY do for THIS client
- Flag any missing critical content as blockers
- This plan becomes the reference for all subsequent phases

**STOP after outputting the plan. Wait for instruction to execute a phase.**
