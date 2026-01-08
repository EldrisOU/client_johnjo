---
description: Phase 5 - QA Validation
trigger: /phase-5
---

# PHASE 5: QA VALIDATION

Run comprehensive checks before deployment.

---

## CHECKS

### 1. Placeholder Verification
- Scan all HTML for unreplaced [Cxx], [Pxx], [SEOxx], etc.
- Report any remaining placeholders

### 2. Link Validation
- Check all internal href links resolve to existing files
- Check all image src paths exist

### 3. Image Alt Text
- Verify all img tags have non-empty alt attributes
- Flag any missing or generic ("image", "photo") alt text

### 4. Form Validation
- Verify forms have action attribute
- Verify required fields have required attribute
- Verify email inputs have type="email"

### 5. Mobile Responsiveness
- Verify viewport meta tag present
- Verify CSS includes mobile breakpoints

### 6. Footer Signature
- Verify "Built by LaunchedIn10" present
- Verify link to https://launchedin10.co.uk works

### 7. Accessibility
- Verify skip-to-content link
- Verify heading hierarchy (single h1, logical h2-h3)
- Verify lang attribute on html

### 8. Integration Scripts
- Verify all enabled integrations have scripts present

### 9. SEO Elements
- Verify unique titles per page
- Verify meta descriptions present
- Verify schema markup valid JSON-LD

### 10. Design System Compliance
- Verify warm neutral colours (not #FFFFFF or #000000)
- Verify LaunchedIn10 footer structure

### 11. Anti-Pattern Scan
- No "Welcome to our website"
- No "Click here" links
- No Lorem ipsum

---

## OUTPUT

Generate QA report:

```
LAUNCHEDIN10 QA REPORT
======================

Client: [C01]
Domain: [C97]

CHECK RESULTS
-------------
[✓/✗] 1. Placeholder Verification
[✓/✗] 2. Link Validation
[✓/✗] 3. Image Alt Text
[✓/✗] 4. Form Validation
[✓/✗] 5. Mobile Responsiveness
[✓/✗] 6. Footer Signature
[✓/✗] 7. Accessibility
[✓/✗] 8. Integration Scripts
[✓/✗] 9. SEO Elements
[✓/✗] 10. Design System Compliance
[✓/✗] 11. Anti-Pattern Scan

ISSUES FOUND
------------
[List any failures with details]

MANUAL CHECKS REQUIRED
----------------------
• Open each page in browser
• Test mobile view
• Submit test form
• Verify social links

======================
[If all pass]: Type /phase-6 to deploy.
[If failures]: Fix issues and run /phase-5 again.
```

**STOP. Wait for `/phase-6` command.**
