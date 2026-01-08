# PHASE 3: INTEGRATIONS

Read `INTEGRATIONS.md` and inject enabled services into all pages.

---

## INTEGRATION MAPPING

### Google Analytics 4
- Condition: [GA01] = "yes" AND [GA02] populated
- Add GA4 script to head of all pages using [GA02]

### Google Tag Manager
- Condition: [GTM01] = "yes" AND [GTM02] populated
- Add GTM script to head and noscript to body-start of all pages

### Google Search Console
- Condition: [GSC01] and [GSC02] populated
- Add verification meta tag to index.html if [GSC01] = "meta"

### Google Maps
- Condition: [GMAP01] = "yes" AND [GMAP02] populated
- Verify iframe on contact.html uses [GMAP02]

### Cookie Consent
- Condition: [COOKIE01] = "yes"
- Provider from [COOKIE02]
- CookieYes ID from [COOKIE03] if applicable
- Add script before closing body on all pages

### Contact Form
- Condition: [FORM01] populated
- Update form action on contact.html
- Formspree endpoint from [FORM02]
- Create thank-you.html redirect page

### Snipcart
- Condition: [SNIP01] = "yes" AND [SNIP02] populated
- Add Snipcart stylesheet and script to all pages
- Add cart button to navigation
- Verify product buttons on products.html

### Live Chat
- Condition: [CHAT01] = "yes"
- Provider from [CHAT02]
- Widget ID from [CHAT03]
- Add script before closing body on all pages

### Booking System
- Condition: [CAL01] = "yes"
- Provider from [CAL02]
- Embed URL from [CAL03]
- Add widget to contact page or dedicated section

### Newsletter
- Condition: [NEWS01] = "yes"
- Provider from [NEWS02]
- Form action from [NEWS03]
- Add signup form to footer or dedicated section

### Custom Scripts
- [CUST01-03]: name, placement, script
- [CUST04-06]: name, placement, script
- [CUST07-09]: name, placement, script
- Insert at specified placement (head/body-start/body-end)

---

## OUTPUT

1. Update all pages with enabled integrations
2. Confirm:

```
PHASE 3 COMPLETE
================
Integrations injected:
  [✓/✗] Google Analytics 4
  [✓/✗] Google Tag Manager
  [✓/✗] Google Search Console
  [✓/✗] Google Maps
  [✓/✗] Cookie Consent
  [✓/✗] Contact Form
  [✓/✗] Snipcart
  [✓/✗] Live Chat
  [✓/✗] Booking System
  [✓/✗] Newsletter
  [✓/✗] Custom Scripts

Awaiting instruction to execute phase 4.
```

**STOP. Wait for instruction to execute phase 4.**
