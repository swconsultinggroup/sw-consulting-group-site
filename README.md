# SW Consulting Group — Website

Modern one-page site built with **Vite + React + Tailwind**.

## Quick Start
```bash
npm i
npm run dev     # local preview
npm run build   # outputs production files to /dist
npm run preview # preview the build
```

## Deploy to Netlify (recommended)
1) Push this folder to a **new GitHub repo** (name it `sw-consulting-group-site`).  
2) In **Netlify** → **Add new site** → **Import from Git** → select the repo.  
3) Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - (Optional) **Node version**: 18+
4) After first deploy, add your custom domain in Netlify (**swconsultinggroup.com**).  
5) Netlify will show DNS records; add them in **GoDaddy** under your domain’s **DNS** settings.  
   - You can either change nameservers to Netlify DNS or add the shown **A/CNAME** records.  
6) Enable HTTPS (Netlify will auto-provision a Let’s Encrypt certificate once DNS propagates).

## Deploy to Vercel (alternative)
1) Import the GitHub repo into **Vercel**.  
2) Framework preset: **Vite**.  
3) Build command: `npm run build` • Output: `dist`.  
4) Add your domain (**swconsultinggroup.com**) in Vercel → follow DNS prompt for GoDaddy.

## Contact Form
The form is static by default. To receive emails:
- **Formspree**: create a project, get the endpoint, and replace the `handleSubmit` with a fetch POST.  
- Or build a small API (Netlify Functions / Vercel Serverless) to send mail to `info@swconsultinggroup.com`.

## Customize
- Edit text in `src/App.jsx`.  
- Replace placeholder images/metrics.  
- Swap the favicon at `public/favicon.svg`.  
- Add your chosen logo (SVG) in `src/assets` and reference it in the navbar.

---
Built for SW Consulting Group.
