---
description: Phase 6 - Deployment
trigger: /phase-6
---

# PHASE 6: DEPLOYMENT

Deploy to GitHub and prepare for Cloudflare Pages.

---

## TASKS

### 1. Create .gitignore
- OS files (.DS_Store, Thumbs.db)
- IDE files (.idea/, .vscode/)
- Logs, node_modules

### 2. Create README.md
- Client name: [C01]
- Domain: [C97]
- Build date
- Pages list
- Tech stack summary
- LaunchedIn10 attribution

### 3. Git Operations
- git init
- git add .
- git commit -m "Initial LaunchedIn10 build - [C01]"

### 4. GitHub (via MCP)
- Create repository: [C98]
- Push to main branch
- Confirm repository URL

---

## CLOUDFLARE INSTRUCTIONS

Output setup instructions for user:

```
CLOUDFLARE PAGES SETUP
======================

1. Log in to Cloudflare Dashboard
2. Go to Workers & Pages > Create > Pages
3. Connect to Git > Select repository: [C98]
4. Build settings:
   - Branch: main
   - Build command: (empty)
   - Output: /
5. Deploy
6. Add custom domain: [C97]
7. Wait for SSL certificate

Repository: [GitHub URL]
```

---

## OUTPUT

```
BUILD COMPLETE
==============

Client: [C01]
Domain: [C97]
Repository: [GitHub URL]

PAGES BUILT
-----------
[List all pages]

INTEGRATIONS
------------
[List enabled integrations]

NEXT STEPS
----------
1. Complete Cloudflare Pages setup
2. Verify deployment at https://[C97]
3. Submit to Google Search Console
4. Test all forms and integrations

==============
Built by LaunchedIn10
https://launchedin10.co.uk
```
