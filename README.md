# Bharath Simha Reddy — Portfolio

Minimal, production-grade React portfolio. Syne + DM Sans typography, #002060 navy accent system, scroll-reveal animations, fully responsive.

## Stack
- React 18 + Vite 5
- Pure CSS (zero UI libraries)
- Deployed on Vercel

## Local dev
```bash
npm install
npm run dev
```

## Deploy to Vercel via GitHub

### One-time setup
1. Push this repo to GitHub (public or private)
2. Go to [vercel.com](https://vercel.com) → New Project → Import your GitHub repo
3. Vercel auto-detects Vite. Default settings work — just click **Deploy**.

### After every `git push`, Vercel redeploys automatically.

## Swapping the resume PDF
1. Upload your resume PDF anywhere (Google Drive direct link, Dropbox, etc.)
2. In `src/components/Hero.jsx`, update the `href` on the Resume button:
   ```jsx
   href="https://your-resume-url.pdf"
   ```
   Or drop `resume.pdf` into the `/public` folder and keep `href="/resume.pdf"`.

## Customization quick-ref
| What                  | Where                                       |
|-----------------------|---------------------------------------------|
| Projects              | `src/components/Projects.jsx` → `PROJECTS`  |
| Skills                | `src/components/Skills.jsx` → `SKILL_GROUPS`|
| Experience bullets    | `src/components/Experience.jsx`             |
| Colors / fonts        | `src/index.css` → `:root` variables         |
| Nav brand initials    | `src/components/Navbar.jsx`                 |
