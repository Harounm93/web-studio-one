# Web Studio - Digital Web Agency

A modern, professional website for a digital web agency specializing in custom websites, web applications, and digital solutions for small to mid-sized businesses.

## 🚀 Features

- **Hero Section** - Compelling headline with tech-forward imagery and key metrics
- **About Us** - Mission statement, expertise showcase, and trust builders
- **Services** - Comprehensive service offerings including:
  - Website Design & Development
  - Web Applications
  - Dashboard & Promo Displays
  - Branding & Identity
  - Ongoing Support & Maintenance
- **Portfolio** - Case studies showcasing real projects and measurable results
- **Process** - 5-step workflow from Discovery to Support
- **Testimonials** - Client success stories and social proof
- **Pricing** - Three transparent pricing packages plus custom solutions
- **Contact** - Fully functional lead capture form with EmailJS integration
- **CMS** - Full content management through Decap CMS admin interface

## 🎨 Design

- Modern, clean, minimal aesthetic
- Tech-forward blue color palette
- Bold typography with excellent readability
- Smooth animations and transitions
- Fully mobile-responsive design
- Conversion-focused layout

## 🛠 Technologies

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe code
- **React** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library
- **EmailJS** - Contact form email delivery
- **Decap CMS** - Content management system

## 📦 Installation

```bash
# Install dependencies
npm install

# Configure EmailJS (see EMAILJS_SETUP.md for detailed instructions)
# Create .env.local file with your EmailJS credentials

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 Email Setup

The contact form uses EmailJS to deliver messages directly to your inbox. To set it up:

1. Follow the detailed guide in [EMAILJS_SETUP.md](EMAILJS_SETUP.md)
2. Create a free EmailJS account
3. Configure your email service and template
4. Add your credentials to `.env.local`
5. Restart the dev server

**Quick Start:**
- Get 200 free emails per month
- No backend required
- Takes ~5 minutes to set up
- See [EMAILJS_SETUP.md](EMAILJS_SETUP.md) for step-by-step instructions

## 📝 Content Management (CMS)

This site uses **Decap CMS** for easy content management. Edit all content through a user-friendly web interface!

### Accessing the CMS

**Local Development:**
```
http://localhost:8080/admin
```

**Production (after deployment):**
```
https://yoursite.com/admin
```

### What You Can Manage

- ✅ **Portfolio Projects** - Add/edit case studies
- ✅ **Services** - Update service offerings
- ✅ **Testimonials** - Manage client reviews
- ✅ **Pricing** - Edit pricing packages
- ✅ **Process Steps** - Update your workflow
- ✅ **Site Settings** - Hero, about, contact info
- ✅ **Company Info** - Branding and social links

### Setup for Production

**Option A: Vercel (Recommended)**
1. Deploy to Vercel (see Deployment section below)
2. Add GitHub OAuth credentials to environment variables
3. Access `/admin` and login with GitHub
4. Start editing!

**Option B: Netlify**
1. Deploy to Netlify
2. Enable Netlify Identity in dashboard
3. Enable Git Gateway
4. Invite team members
5. Access `/admin` and start editing!

**Full Guide:** See [CMS_GUIDE.md](CMS_GUIDE.md) for complete instructions

### Content Files

All content is stored as markdown files in the `public/content/` directory:
```
public/content/
├── settings/       # Site and company settings
├── portfolio/      # Portfolio projects
├── services/       # Service offerings
├── testimonials/   # Client testimonials
├── pricing/        # Pricing packages
└── process/        # Workflow steps
```

## 🎯 Key Sections

### Hero Section
- Strong value proposition
- Clear call-to-action buttons
- Social proof with key metrics
- Abstract tech illustration

### Services
Six core service offerings with detailed features:
- Website Development
- Website Design
- Web Applications
- E-Commerce
- Branding
- Ongoing Support

### Portfolio
Four detailed case studies featuring:
- Project descriptions
- Measurable results
- Visual presentations
- Client categories

### Pricing
Three structured packages:
- **Starter** - £250 (5-page website)
- **Professional** - £500 (10-page website with advanced features)
- **Enterprise** - £750+ (Custom solutions)

### Contact
Comprehensive contact section with:
- Multi-field lead capture form with EmailJS integration
- Real-time form validation
- Success/error notifications
- Contact information
- Office hours
- Response time expectations

## 🎨 Color Palette

- **Primary Blue**: `hsl(217, 91%, 60%)` - Brand color for CTAs and accents
- **Purple Accent**: `hsl(250, 84%, 54%)` - Gradient and highlights
- **Dark Text**: `hsl(222, 47%, 11%)` - Primary text color
- **Muted Text**: `hsl(215, 16%, 47%)` - Secondary text color
- **Background**: `hsl(0, 0%, 100%)` - Clean white background
- **Secondary BG**: `hsl(214, 32%, 97%)` - Subtle background variation

## 🔥 Performance Features

- Optimized animations with CSS transforms
- Lazy loading for sections
- Smooth scroll behavior
- Responsive images and layouts
- Fast page load times

## 📱 Responsive Design

Fully responsive across all devices:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Deployment to Vercel

This project is configured for deployment to Vercel with full CMS support.

### Prerequisites

1. **GitHub OAuth App** - Create at https://github.com/settings/developers
   - Application name: `Web Studio CMS`
   - Homepage URL: `https://your-site.vercel.app`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
   - Save Client ID and Client Secret

### Deploy Steps

#### 1. Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings from `vercel.json`

#### 2. Configure Environment Variables

In Vercel project settings, add these environment variables:

**EmailJS (Required):**
```
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

**GitHub OAuth for CMS (Required):**
```
OAUTH_GITHUB_CLIENT_ID=your_github_oauth_client_id
OAUTH_GITHUB_CLIENT_SECRET=your_github_oauth_client_secret
```

#### 3. Deploy

Click **"Deploy"** - Vercel will:
- Install dependencies with `--legacy-peer-deps`
- Build your project
- Deploy to a production URL

#### 4. Access CMS

After deployment:
1. Visit `https://your-site.vercel.app/admin`
2. Click **"Login with GitHub"**
3. Authorize the app
4. Start editing content!

### CMS Authentication

**How it works:**
- Users authenticate with their GitHub account
- Must have write access to the repository
- Changes are committed directly to your repo
- Vercel auto-deploys on each commit

**Managing CMS Users:**
- Add collaborators to your GitHub repo
- They can access `/admin` with their GitHub account
- No need for separate CMS accounts

### Automatic Deployments

Vercel automatically deploys when you:
- Push to the main branch
- Edit content through CMS (commits to GitHub)
- Merge pull requests

### Custom Domain

To add a custom domain:
1. Go to Vercel project → Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. SSL certificate is automatic

### Vercel Benefits

✅ 6,000 build minutes/month (free tier)
✅ Fast global CDN
✅ Automatic HTTPS
✅ Preview deployments for PRs
✅ Zero configuration needed

## 🤝 Contributing

This is a client project template. Feel free to fork and customize for your own agency needs.

## 📄 License

This project is proprietary. All rights reserved.

## 🙋‍♂️ Support

For questions or support, contact us at digitalstudiodesigners@gmail.com

---

Built with ❤️ by Web Studio Digital Agency
