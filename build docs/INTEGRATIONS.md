# LAUNCHEDIN10 — INTEGRATIONS CONFIGURATION
## Client: John-Jo (Video Production)
## Domain: john-jo.co.nz
## Prepared: January 2026

---

## ANALYTICS & TRACKING

### Google Analytics 4
```
[GA01] GA4 Enabled (yes/no): yes
[GA02] GA4 Measurement ID (G-XXXXXXXXXX): [MISSING - chase client to set up GA4 property]
```

### Google Tag Manager (Alternative to direct GA4)
```
[GTM01] GTM Enabled (yes/no): no
[GTM02] GTM Container ID (GTM-XXXXXXX): N/A
```

---

## GOOGLE PROPERTIES

### Google Search Console
```
[GSC01] GSC Verification Method (meta/DNS/file): meta
[GSC02] GSC Verification Code: [MISSING - set up after deployment]
```

### Google Merchant Center (E-commerce Only)
```
[GMC01] GMC Enabled (yes/no): no
[GMC02] GMC Verification Code: N/A
```

### Google Maps
```
[GMAP01] Google Maps Enabled (yes/no): yes
[GMAP02] Google Maps Embed URL: [MISSING - chase client for embed URL or generate from address: Studio 4, The Exchange, 19 Vogel Street, Dunedin]
[GMAP03] Google Maps API Key (if using JS API): N/A (embed only)
```

### Google Business Profile
```
[GBP01] GBP Link on Contact Page (yes/no): yes
[GBP02] GBP Profile URL: [MISSING - chase client to set up GBP or provide existing link]
```

---

## E-COMMERCE (Not Applicable)

### Snipcart
```
[SNIP01] Snipcart Enabled (yes/no): no
[SNIP02] Snipcart Public API Key: N/A
[SNIP03] Snipcart Currency: N/A
[SNIP04] Snipcart Webhook URL: N/A
```

### Stripe (Via Snipcart)
```
[STRIPE01] Stripe Connected (yes/no): no
```

### PayPal (Via Snipcart)
```
[PP01] PayPal Enabled (yes/no): no
```

---

## COOKIE CONSENT & COMPLIANCE

### Cookie Consent Banner
```
[COOKIE01] Cookie Consent Enabled (yes/no): yes
[COOKIE02] Provider (cookieyes/complianz/custom): custom (lightweight NZ-appropriate solution)
[COOKIE03] CookieYes ID (if using CookieYes): N/A
```

### Privacy Compliance
```
[GDPR01] Privacy Policy Page (yes/no): yes
[GDPR02] Cookie Policy Page (yes/no): yes (can be section within Privacy Policy)
[GDPR03] Terms Page (yes/no): yes
```

**Note:** New Zealand Privacy Act 2020 compliance required. Less stringent than GDPR but still requires clear privacy policy and consent for analytics cookies.

---

## FORMS & LEADS

### Form Handler
```
[FORM01] Form Handler (formspree/netlify/custom): formspree
[FORM02] Formspree Endpoint: [MISSING - set up Formspree account and provide endpoint]
[FORM03] Email Notifications To: hello@john-jo.co.nz
```

### Contact Form Fields
```
- Name (required)
- Email (required)
- Phone (optional)
- Company/Organisation (optional)
- Project Type (dropdown: Brand Film, Recruitment, Aerial, Corporate, Other)
- Message (required)
- How did you hear about us? (optional)
```

### CRM Integration (Optional)
```
[CRM01] CRM Integration (none/hubspot/pipedrive/other): none
[CRM02] CRM Webhook URL: N/A
```

---

## CHAT & SUPPORT

### Live Chat
```
[CHAT01] Chat Widget Enabled (yes/no): no
[CHAT02] Chat Provider: N/A
[CHAT03] Chat Widget ID/Script: N/A
```

### Chatbot (LaunchedIn10 Custom)
```
[BOT01] AI Chatbot Enabled (yes/no): no
[BOT02] Chatbot Embed Script: N/A
```

---

## BOOKING & SCHEDULING

### Calendar Integration
```
[CAL01] Booking Widget Enabled (yes/no): yes
[CAL02] Booking Provider (calendly/acuity/other): calendly (recommended)
[CAL03] Booking Embed URL: [MISSING - chase client for Calendly link]
```

**Note:** Contact page references "Book a Free Call" — 20-minute video call format. Client needs to set up Calendly or similar and provide embed URL.

---

## VIDEO EMBEDS

### Vimeo Integration
```
[VIM01] Vimeo Channel: vimeo.com/johnjoritson
[VIM02] Showreel URL: https://vimeo.com/594437273
[VIM03] Embed Settings:
  - Privacy: Hide from Vimeo (unlisted, embed only)
  - Autoplay: Off
  - Controls: Show
  - Colour: #F59E0B (Golden Hour accent)
```

### YouTube Integration
```
[YT01] YouTube Embeds Enabled: yes
[YT02] Privacy Mode: yes (use youtube-nocookie.com)
[YT03] Video URLs:
  - TDX: https://youtu.be/MgqtYSQZNCQ
  - Allied TVC: https://youtu.be/6P5IesdtrvQ
  - Linde MH: https://youtu.be/Wjuo999FPTA
  - Paddon's Playground: [TBC]
```

### Video Embed Performance
```
[VID_PERF01] Lazy Load Embeds: yes
[VID_PERF02] Facade Pattern: yes (show thumbnail, load video on click)
[VID_PERF03] Fallback: Link to video if embed fails
```

---

## SOCIAL FEEDS

### Instagram Feed
```
[INSTA01] Instagram Feed Enabled (yes/no): no
[INSTA02] Instagram Access Token: N/A
```

### Reviews Integration
```
[REV01] Reviews Widget Enabled (yes/no): no
[REV02] Reviews Provider: N/A
[REV03] Reviews Widget Code: N/A
```

**Note:** Testimonials are handled via static content, not live widget.

---

## EMAIL MARKETING

### Newsletter Signup
```
[NEWS01] Newsletter Signup Enabled (yes/no): no
[NEWS02] Provider: N/A
[NEWS03] Form Action URL/Embed Code: N/A
```

---

## PERFORMANCE & CDN

### Cloudflare
```
[CF01] Cloudflare Pages Project Name: john-jo-website
[CF02] Cloudflare Analytics Enabled (yes/no): yes (as backup to GA4)
```

---

## ACCESSIBILITY

### Accessibility Statement
```
[ACC01] Accessibility Statement Page (yes/no): yes
[ACC02] Contact for Accessibility Issues: hello@john-jo.co.nz
```

---

## CUSTOM INTEGRATIONS

### Custom Script 1: Video Facade (Performance)
```
[CUST01] Name: Video Facade Script
[CUST02] Placement: body-end
[CUST03] Script: Custom lightweight script to lazy-load video embeds
```

### Custom Script 2: Smooth Scroll
```
[CUST04] Name: Smooth Scroll for Anchor Links
[CUST05] Placement: body-end
[CUST06] Script: Native CSS scroll-behavior with JS fallback
```

### Custom Script 3: Not Required
```
[CUST07] Name: N/A
[CUST08] Placement: N/A
[CUST09] Script: N/A
```

---

## NICHE-SPECIFIC INTEGRATIONS

### Filmmakers/Creatives
```
[CRE_INT01] Vimeo Portfolio Embed: yes
[CRE_INT02] YouTube Embed Support: yes (nocookie mode)
[CRE_INT03] Video Lightbox: yes (for portfolio grid)
[CRE_INT04] IMDb Link (for documentary): https://imdb.com/title/tt5653012/
```

---

## INTEGRATION CHECKLIST

After build, verify:

- [ ] GA4 firing on all pages
- [ ] GSC verification active
- [ ] Cookie consent appearing (first visit)
- [ ] Contact form submitting to Formspree → hello@john-jo.co.nz
- [ ] Google Maps displaying on Contact page
- [ ] Calendly booking widget loading
- [ ] All video embeds loading correctly (lazy load)
- [ ] Video facade pattern working (thumbnail → click → load)
- [ ] Vimeo showreel playing on homepage
- [ ] YouTube case study videos playing
- [ ] Social links working (Vimeo)
- [ ] Accessibility statement page live
- [ ] Privacy policy page live
- [ ] Terms page live
- [ ] Sitemap.xml generating correctly
- [ ] Robots.txt accessible

---

## MISSING ITEMS TO CHASE

| Item | Priority | Notes |
|------|----------|-------|
| GA4 Measurement ID | High | Client needs to set up GA4 property |
| Calendly Booking URL | High | Critical for CTA functionality |
| Google Maps Embed URL | Medium | Can generate from address if needed |
| Google Business Profile | Medium | Recommend client sets up GBP |
| Formspree Endpoint | High | Set up account, provide endpoint |
| Paddon's Playground Video URL | Medium | Currently TBC |
| Social Media Links | Low | Only Vimeo provided |

---

**END OF INTEGRATIONS FILE**
