# Vercel Deployment Guide

Complete step-by-step guide for deploying Web Studio to Vercel with full CMS functionality.

---

## 📋 Prerequisites

Before you begin, make sure you have:

- [x] GitHub repository with your project
- [x] Vercel account (free tier is fine)
- [x] EmailJS account and credentials
- [ ] GitHub OAuth App (we'll create this)

---

## Part 1: Create GitHub OAuth App (5 minutes)

### Step 1: Go to GitHub Developer Settings

Visit: https://github.com/settings/developers

Or navigate:
1. Click your profile photo (top right)
2. **Settings**
3. Scroll to **Developer settings** (bottom left sidebar)
4. Click **OAuth Apps** (not "GitHub Apps")

### Step 2: Create New OAuth App

1. Click **"New OAuth App"** button
2. Fill in the form:

**Required fields:**

| Field | Value |
|-------|-------|
| **Application name** | `Web Studio CMS` |
| **Homepage URL** | `https://your-site.vercel.app` (use your actual Vercel URL) |
| **Application description** | `CMS authentication for Web Studio` (optional) |
| **Authorization callback URL** | `https://api.netlify.com/auth/done` |

**Important:** The callback URL uses Netlify's free OAuth service - this is intentional and works with Vercel!

3. Click **"Register application"**

### Step 3: Save Your Credentials

After creating the app, you'll see:

1. **Client ID** - Copy this (visible immediately)
2. **Generate a new client secret** - Click button, then copy the secret

⚠️ **Save both immediately** - the secret is only shown once!

---

## Part 2: Deploy to Vercel (10 minutes)

### Step 1: Sign In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Grant Vercel access to your repositories

### Step 2: Import Project

1. Click **"Add New..."** → **"Project"**
2. Find `web-studio-one` repository
3. Click **"Import"**

### Step 3: Configure Build Settings

Vercel should auto-detect settings from `vercel.json`:

- **Framework Preset:** Vite ✅ (auto-detected)
- **Build Command:** `npm run build` ✅
- **Output Directory:** `dist` ✅
- **Install Command:** `npm install --legacy-peer-deps` ✅

If not auto-detected, manually set these values.

### Step 4: Add Environment Variables

**BEFORE deploying**, click **"Environment Variables"** and add:

#### EmailJS Variables (3 required)

| Name | Value | Notes |
|------|-------|-------|
| `VITE_EMAILJS_PUBLIC_KEY` | `7l5Dikdm-L_LBoO3Z` | Your EmailJS public key |
| `VITE_EMAILJS_SERVICE_ID` | `service_zyoz6xw` | Your EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_ppunkyh` | Your EmailJS template ID |

#### GitHub OAuth Variables (2 required)

| Name | Value | Notes |
|------|-------|-------|
| `OAUTH_GITHUB_CLIENT_ID` | `your_client_id` | From GitHub OAuth app |
| `OAUTH_GITHUB_CLIENT_SECRET` | `your_client_secret` | From GitHub OAuth app |

**Important:** Make sure to set these for **Production** environment.

### Step 5: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://web-studio-one-xyz.vercel.app`

### Step 6: Update OAuth App

Go back to your GitHub OAuth App:
1. Update **Homepage URL** with your actual Vercel URL
2. Save changes

---

## Part 3: Test Your Deployment (5 minutes)

### Test 1: Site Loads

Visit your Vercel URL - you should see:
- ✅ Homepage loads
- ✅ All sections visible
- ✅ Images display
- ✅ Portfolio gradients show colors (not grey)

### Test 2: Contact Form

1. Fill out the contact form
2. Submit
3. Check for success message
4. Verify email arrives in your inbox

❌ **If form fails:** Check EmailJS environment variables in Vercel

### Test 3: CMS Access

1. Go to `https://your-site.vercel.app/admin`
2. You should see the CMS login screen
3. Click **"Login with GitHub"**
4. Authorize the app
5. You should see the CMS dashboard

✅ **Success!** You can now edit content

---

## Part 4: Managing Content (Ongoing)

### Editing Content

1. Visit `/admin` on your site
2. Login with GitHub
3. Select a collection (Portfolio, Services, etc.)
4. Edit content
5. Click **"Save"**
6. Click **"Publish"** (commits to GitHub)
7. Vercel auto-deploys (~2 minutes)

### CMS Collections Available

You can manage:

- 📁 **Portfolio** - Case studies and projects
- 🛠️ **Services** - Service offerings
- 💬 **Testimonials** - Client reviews
- 💰 **Pricing** - Pricing packages
- 📋 **Process** - Your workflow steps
- ⚙️ **Settings** - Hero, about, contact info
- 🏢 **Company Info** - Branding and social links

### Adding Team Members

To give others CMS access:

1. Go to your GitHub repository
2. Settings → Collaborators
3. Add GitHub username
4. They can now login to `/admin` with their GitHub account

---

## 🔧 Troubleshooting

### Issue: Build Fails

**Error:** `npm ERR! ERESOLVE unable to resolve dependency tree`

**Fix:** Ensure `vercel.json` has:
```json
"installCommand": "npm install --legacy-peer-deps"
```

### Issue: Content Not Loading

**Error:** `Buffer is not defined`

**Fix:** Already handled - `vite-plugin-node-polyfills` is configured

### Issue: Forms Don't Work

**Error:** `The Public Key is invalid`

**Fix:** 
1. Check environment variables in Vercel dashboard
2. Ensure variable names start with `VITE_`
3. Redeploy after adding variables

### Issue: Can't Login to CMS

**Error:** `Authentication failed`

**Fix:**
1. Verify GitHub OAuth Client ID and Secret in Vercel
2. Check callback URL in GitHub OAuth app matches your domain: `https://www.yoursite.com/api/auth`
3. Ensure you have write access to the repository

### Issue: /admin Returns 404 NOT_FOUND

**Error:** `404: NOT_FOUND - Code: DEPLOYMENT_NOT_FOUND`

**Cause:** This happens when using a custom domain but the CMS config still points to the old Vercel URL (e.g., `your-project.vercel.app`).

**Fix:**
1. Update `public/admin/config.yml` - change `base_url` to your custom domain
2. Update `dist/admin/config.yml` - same change (this is the deployed version)
3. Ensure `vercel.json` has the proper rewrites (see Custom Domain Setup section)
4. Update GitHub OAuth app callback URL to: `https://www.yoursite.com/api/auth`
5. Commit, push, and wait for Vercel to redeploy

**Example config.yml fix:**
```yaml
backend:
  name: github
  repo: your-username/your-repo
  branch: main
  base_url: https://www.yoursite.com  # ← Must match your domain!
  auth_endpoint: api/auth
```

### Issue: Grey Portfolio Headers

**Error:** Gradients show grey instead of colors

**Fix:** Already handled - `safelist` is configured in `tailwind.config.ts`

---

## 🎯 Custom Domain Setup (Optional)

### Add Custom Domain

1. Go to Vercel project → **Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain: `www.yoursite.com`
4. Click **"Add"**

### Update DNS Records

Vercel will provide DNS records:

**For `www.yoursite.com`:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For `yoursite.com` (root):**
```
Type: A
Name: @
Value: 76.76.21.21
```

### ⚠️ CRITICAL: Update CMS Configuration

When switching to a custom domain, you **MUST** update the CMS config files to point to your new domain:

**Step 1: Update `public/admin/config.yml`**

Change the `base_url` to your custom domain:

```yaml
backend:
  name: github
  repo: your-username/your-repo
  branch: main
  base_url: https://www.yoursite.com  # ← Update this!
  auth_endpoint: api/auth
```

**Step 2: Update `dist/admin/config.yml`**

Make the same change in the dist folder (this is the deployed version):

```yaml
backend:
  name: github
  repo: your-username/your-repo
  branch: main
  base_url: https://www.yoursite.com  # ← Update this!
  auth_endpoint: api/auth
```

**Step 3: Verify `vercel.json` has proper rewrites**

Ensure your `vercel.json` includes these rewrites for the admin panel and API:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install --legacy-peer-deps",
  "rewrites": [
    { "source": "/admin", "destination": "/admin/index.html" },
    { "source": "/admin/", "destination": "/admin/index.html" },
    { "source": "/api/auth", "destination": "/api/auth" },
    { "source": "/((?!admin|api).*)", "destination": "/index.html" }
  ]
}
```

### Update GitHub OAuth App

1. Go to GitHub OAuth app settings: https://github.com/settings/developers
2. Update **Homepage URL** to: `https://www.yoursite.com`
3. Update **Authorization callback URL** to: `https://www.yoursite.com/api/auth`
4. Save changes

### Wait for SSL

- Vercel automatically provisions SSL certificate
- Usually takes 5-10 minutes
- Your site will be accessible via HTTPS

### Commit and Deploy

After making these changes:
```bash
git add .
git commit -m "Update CMS config for custom domain"
git push
```

Wait for Vercel to redeploy (~2 minutes), then test `/admin` on your custom domain.

---

## 📊 Vercel vs Netlify

| Feature | Vercel Free | Netlify Free |
|---------|-------------|--------------|
| Build minutes/month | 6,000 | 300 |
| Bandwidth | 100 GB | 100 GB |
| Team members | 10 | 1 |
| Deploy time | ~2 min | ~3 min |
| CMS auth | GitHub OAuth | Git Gateway |
| Setup complexity | Medium | Easy |

**Verdict:** Vercel offers 20x more build minutes - great for active projects!

---

## 🔐 Security Best Practices

### Environment Variables

✅ **Do:**
- Store sensitive keys in Vercel dashboard
- Use `VITE_` prefix for client-side variables
- Never commit `.env.local` to Git

❌ **Don't:**
- Share OAuth secrets publicly
- Hardcode API keys in code
- Use same keys for dev and production

### CMS Access

✅ **Do:**
- Only add trusted collaborators to GitHub repo
- Review changes before publishing
- Keep GitHub account secure with 2FA

❌ **Don't:**
- Share GitHub credentials
- Make repository public if using private content
- Grant write access unnecessarily

---

## 🚀 Advanced Configuration

### Preview Deployments

Every pull request gets a preview URL:
1. Create a branch
2. Make changes
3. Open pull request
4. Vercel creates preview URL
5. Test before merging

### Environment-Specific Variables

Set different values for:
- **Production** - Live site
- **Preview** - PR previews
- **Development** - Local dev

### Custom Build Commands

Edit `vercel.json`:
```json
{
  "buildCommand": "npm run build && npm run post-build",
  "installCommand": "npm ci --legacy-peer-deps"
}
```

### Redirects & Rewrites

Already configured for SPA routing in `vercel.json`:
```json
"rewrites": [
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```

---

## 📚 Additional Resources

- **Vercel Docs:** https://vercel.com/docs
- **Decap CMS Docs:** https://decapcms.org/docs/
- **GitHub OAuth:** https://docs.github.com/en/developers/apps/oauth-apps
- **EmailJS Docs:** https://www.emailjs.com/docs/

---

## ✅ Deployment Checklist

Use this checklist for every deployment:

### Pre-Deployment
- [ ] GitHub OAuth app created
- [ ] Client ID and Secret saved
- [ ] EmailJS credentials ready
- [ ] Code committed to GitHub

### Vercel Setup
- [ ] Project imported to Vercel
- [ ] Build settings configured
- [ ] Environment variables added (5 total)
- [ ] Deployment successful

### Testing
- [ ] Site loads correctly
- [ ] Contact form works
- [ ] CMS accessible at `/admin`
- [ ] Can login with GitHub
- [ ] Can edit and publish content
- [ ] Changes trigger auto-deploy

### Post-Deployment
- [ ] GitHub OAuth homepage URL updated
- [ ] Custom domain configured (optional)
- [ ] Team members added to repo
- [ ] Documentation updated

### Custom Domain Checklist (if applicable)
- [ ] DNS records configured in domain provider
- [ ] `public/admin/config.yml` updated with custom domain `base_url`
- [ ] `dist/admin/config.yml` updated with custom domain `base_url`
- [ ] `vercel.json` has admin and api rewrites configured
- [ ] GitHub OAuth callback URL updated to `https://www.yoursite.com/api/auth`
- [ ] SSL certificate provisioned (automatic, ~5-10 min)
- [ ] `/admin` accessible on custom domain

---

## 🎉 Success!

Your Web Studio is now live on Vercel with:

✅ Full content management system
✅ Working contact forms
✅ Automatic deployments
✅ 6,000 free build minutes/month
✅ Global CDN delivery
✅ Free SSL certificate

**Your CMS:** `https://your-site.vercel.app/admin`

Happy building! 🚀

---

## 💡 Pro Tips

1. **Bookmark your CMS:** Save `/admin` URL for quick access
2. **Test locally first:** Run `npm run dev` before deploying
3. **Use preview deploys:** Test changes on preview URLs
4. **Monitor build minutes:** Check Vercel dashboard monthly
5. **Enable notifications:** Get alerts for failed deployments
6. **Version your content:** Git history = content backup!

---

*Last updated: December 2024*
*Tested with: React 18, Vite 5, Vercel v32*
*Custom domain CMS fix added: December 2024*

