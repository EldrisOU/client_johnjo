# PHASE 2: REMAINING PAGES

Use the CSS framework from Phase 1. Build each page with consistent header/footer.

**CRITICAL:** Apply the same £25,000 design standard from rules.md to every page. No template layouts.

---

## CORE PAGES

### about.html
- Page title: "About [C01]"
- Hero section with page title
- Long about content: [C37]
- Mission statement: [C38] (if populated)
- Year established: [C39]
- About image: [C91], alt text [C92]
- **Team section** (if [C74-C88] populated):
  - Editorial layout, not a basic grid
  - Member 1: name [C74], role [C75], bio [C76], photo [C77], LinkedIn [C78]
  - Member 2: name [C79], role [C80], bio [C81], photo [C82], LinkedIn [C83]
  - Member 3: name [C84], role [C85], bio [C86], photo [C87], LinkedIn [C88]
- CTA section linking to contact
- Footer

### services.html
- Page title: "Our Services"
- Hero section with page title
- All services from [C12-C35] with expanded descriptions
- Each service as a distinct section, not a uniform grid
- Process section if industry-appropriate
- CTA section
- Footer

### contact.html
- Page title: "Get in Touch"
- Hero section with page title
- Two-column layout: form + contact details
- **Contact form fields:**
  - Name (required)
  - Email (required, type="email")
  - Phone (optional)
  - Message (required, textarea)
  - Submit button
- **Contact details:**
  - Email: [C53]
  - Phone: [C54]
  - Address: [C55], [C56], [C57], [C58], [C59]
- Map embed: [C60] or [GMAP02] (if populated)
- Footer

### privacy.html
- Page title: "Privacy Policy"
- Generate compliant UK GDPR / EU GDPR privacy policy
- Use client details:
  - Company name: [C01]
  - Registered name: [C99]
  - Data protection contact: [C103]
  - Registered address: [C102]
- Include sections: data collected, legal basis, retention, rights, cookies, third parties, updates
- Footer

### terms.html
- Page title: "Terms & Conditions"
- Generate standard terms of service / website terms
- Use client details:
  - Company name: [C01]
  - Registered name: [C99]
  - Company number: [C100]
  - VAT number: [C101] (if populated)
  - Registered address: [C102]
- Footer

---

## CONDITIONAL PAGES — BUILD IF ENABLED

### blog.html (BUILD IF [C104] = "yes")

**This page MUST be created if [C104] is "yes".**

Structure:
- Page title: "Blog" or "News" or "Insights"
- Hero section with page title and subtitle
- **Category filter bar** using categories from [C105]
- **Post grid layout:**
  - 6 placeholder post cards (2x3 or asymmetric layout)
  - Each card contains:
    - Featured image placeholder
    - Category tag
    - Post title (placeholder text)
    - Excerpt (placeholder text, 2-3 lines)
    - Date
    - "Read more" link
- Pagination placeholder (Previous / Next or numbered)
- Sidebar optional: categories list, recent posts, newsletter signup
- Footer

**Design note:** Blog layout should feel editorial, like a magazine. Not a basic WordPress grid.

---

### products.html (BUILD IF [C106] = "yes")

**This page MUST be created if [C106] is "yes".**

Structure:
- Page title: "Shop" or "Products"
- Hero section with page title
- **Category filter** if multiple categories in products
- **Product grid:**
  - Products from [P01-P42]
  - Each product card:
    - Image: [P05], [P12], [P19], etc.
    - Name: [P01], [P08], [P15], etc.
    - Price: [P03], [P10], [P17], etc. with currency [C108]
    - Short description
    - Snipcart "Add to Cart" button with data attributes
- Snipcart cart summary in header
- Footer

**Snipcart button format:**
```html
<button class="snipcart-add-item"
  data-item-id="[SKU]"
  data-item-price="[PRICE]"
  data-item-url="/products.html"
  data-item-name="[NAME]"
  data-item-description="[DESC]"
  data-item-image="[IMAGE]"
  data-item-weight="[WEIGHT]">
  Add to Cart
</button>
```

---

### faq.html (BUILD IF [E01] = "yes")

**This page MUST be created if [E01] is "yes".**

Structure:
- Page title: "Frequently Asked Questions"
- Hero section with page title
- **FAQ accordion:**
  - [FAQ01] Question + Answer
  - [FAQ02] Question + Answer
  - [FAQ03] Question + Answer
  - [FAQ04] Question + Answer
  - [FAQ05] Question + Answer
- Accordion behaviour: click to expand/collapse, one open at a time or multi-open
- CTA section: "Still have questions? Contact us"
- Footer

**Accessibility:** Accordion must be keyboard navigable with proper ARIA attributes.

---

## NICHE ENHANCEMENTS

Apply these enhancements to relevant pages if niche fields are populated:

### Schools (if [SCH01-SCH10] populated)
- **Ofsted/Inspection badge:** Rating [SCH01], link to report [SCH02]
- **Key stats:** Pupils [SCH03], age range [SCH04], headteacher [SCH05]
- **Quick links section:** 
  - Admissions policy [SCH07]
  - Parent portal [SCH08]
  - Term dates [SCH09]
  - Uniform supplier [SCH10]
- Add to About page and/or dedicated section on homepage

### Trades (if [TRD01-TRD06] populated)
- **Gas Safe badge:** Registration number [TRD01]
- **Trust signals:** Insurance provider [TRD02], years experience [TRD05], jobs completed [TRD06]
- **Service areas:** List from [TRD03]
- **Emergency banner:** If [TRD04] = "yes", add prominent "24/7 Emergency Callout" banner
- Add to homepage hero area and services page

### Creatives (if [CRE01-CRE05] populated)
- **Showreel embed:** Video from [CRE01] (Vimeo/YouTube)
- **Portfolio categories:** From [CRE02]
- **Awards/recognition:** From [CRE03]
- **Clients worked with:** From [CRE04]
- Add showreel to homepage hero, awards to about page

---

## OUTPUT

1. Generate ALL applicable pages (check each conditional flag)
2. Verify no pages were skipped
3. Output to browser
4. Confirm:

```
PHASE 2 COMPLETE
================
Pages created:
  ✓ about.html
  ✓ services.html
  ✓ contact.html
  ✓ privacy.html
  ✓ terms.html
  [✓/✗] blog.html — [state reason if skipped]
  [✓/✗] products.html — [state reason if skipped]
  [✓/✗] faq.html — [state reason if skipped]

Niche enhancements applied:
  [list any SCH/TRD/CRE additions]

Awaiting instruction to execute phase 3.
```

**STOP. Wait for instruction to execute phase 3.**
