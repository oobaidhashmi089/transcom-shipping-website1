# Deployment Guide

## Production Build

The production build has been created in the `dist` folder. To rebuild:

```bash
npm run build
```

## Free Deployment Options

### 1. Vercel (Recommended - Easiest)

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import repository: `oobaidhashmi089/transcom-shipping-website1`
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click "Deploy"

**Your site will be live at:** `transcom-shipping-website1.vercel.app`

**Benefits:**
- ✅ Automatic deployments on every push
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Global CDN
- ✅ Preview deployments for pull requests

---

### 2. Netlify

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

**Benefits:**
- ✅ Automatic deployments
- ✅ Free SSL
- ✅ Form handling
- ✅ Serverless functions

---

### 3. Cloudflare Pages

**Steps:**
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign up/Login
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Click "Save and Deploy"

**Benefits:**
- ✅ Unlimited bandwidth
- ✅ Fast global CDN
- ✅ Free SSL
- ✅ DDoS protection

---

### 4. GitHub Pages (Manual Setup)

**Steps:**
1. Install GitHub Pages plugin:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: `gh-pages` branch
   - Save

**Your site will be at:** `https://oobaidhashmi089.github.io/transcom-shipping-website1/`

---

## Quick Deploy Commands

### Vercel CLI
```bash
npm i -g vercel
vercel
```

### Netlify CLI
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## Environment Variables

If you need to add environment variables later:
- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Build & Deploy → Environment
- **Cloudflare:** Pages → Settings → Environment Variables

---

## Custom Domain

All platforms support custom domains for free:
1. Add your domain in platform settings
2. Update DNS records as instructed
3. SSL certificate is automatically provisioned

---

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Cloudflare Docs:** https://developers.cloudflare.com/pages
