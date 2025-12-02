# Decap CMS User Guide

Welcome to the Web Studio CMS! This guide will help you manage all your website content through an easy-to-use web interface.

## Accessing the CMS

### Local Development
When running locally (`npm run dev`), access the CMS at:
```
http://localhost:8080/admin
```

### Production
Once deployed to Netlify, access at:

```
https://yoursite.com/admin
```

## First-Time Setup (Production Only)

After deploying to Netlify:

1. **Enable Netlify Identity**
   - Go to your Netlify dashboard
   - Navigate to: Site Settings → Identity
   - Click "Enable Identity"

2. **Enable Git Gateway**
   - In Identity settings, scroll to "Services"
   - Click "Enable Git Gateway"

3. **Invite Users**
   - Go to Identity tab
   - Click "Invite users"
   - Enter email addresses for team members
   - They'll receive an invitation email

4. **Accept Invitation**
   - Click the link in the invitation email
   - Set your password
   - You can now access `/admin`

## Managing Content

### Portfolio Projects

Add or edit your portfolio items:

1. Click "Portfolio" in the sidebar
2. Click "New Portfolio" to add a project
3. Fill in the fields:
   - **Title**: Project name
   - **Category**: Type of project (e.g., "Cafe & Restaurant")
   - **Description**: Brief project description
   - **Results**: Click "Add result" for each achievement
   - **Gradient Colors**: Tailwind color names (e.g., "orange-500")
   - **Link**: Live site URL
   - **Image**: Optional project screenshot
   - **Order**: Number to control display order (lower numbers first)
4. Click "Publish" to save

### Services

Manage your service offerings:

1. Click "Services" in the sidebar
2. Edit existing or create new services
3. Fields:
   - **Title**: Service name
   - **Icon Name**: Choose from dropdown (Code2, Palette, etc.)
   - **Description**: What you offer
   - **Features**: List of service features
   - **Order**: Display order

### Testimonials

Add client testimonials:

1. Click "Testimonials"
2. Create new testimonial
3. Fields:
   - **Client Name**: Full name
   - **Role**: Job title and company
   - **Company**: Company name
   - **Quote**: Testimonial text
   - **Rating**: 1-5 stars
   - **Avatar**: Optional client photo
   - **Order**: Display order

### Pricing Packages

Update pricing information:

1. Click "Pricing"
2. Edit existing packages
3. Fields:
   - **Package Name**: e.g., "Starter", "Professional"
   - **Price**: e.g., "£250" or "£750+"
   - **Description**: Who it's for
   - **Features**: List of included features
   - **Popular**: Toggle to highlight as "Most Popular"
   - **CTA Button Text**: Button text (usually "Get Started")
   - **Order**: Display order

### Process Steps

Edit your workflow process:

1. Click "Process Steps"
2. Edit the 5 workflow steps
3. Fields:
   - **Step Number**: 1-5
   - **Title**: Step name
   - **Description**: What happens in this step
   - **Icon Name**: Choose icon
   - **Order**: Display order

### Site Settings

Edit hero, about, and contact sections:

1. Click "Site Settings"
2. Click "Site Configuration"
3. Three main sections:
   - **Hero Section**: Homepage headline, CTAs, stats
   - **About Section**: Mission, team stats, trust factors
   - **Contact Information**: Email, phone, address, hours

### Company Information

Update company details:

1. Click "Site Settings"
2. Click "Company Information"
3. Edit:
   - Company name
   - Tagline
   - Social media links

## Workflow

### Creating New Content

1. Navigate to the collection (Portfolio, Services, etc.)
2. Click "New [Item]"
3. Fill in all required fields (marked with *)
4. Optional: Upload images
5. Click "Publish" when ready

### Editing Existing Content

1. Navigate to the collection
2. Click on the item you want to edit
3. Make your changes
4. Click "Publish" to save

### Publishing Changes

When you click "Publish":
- Changes are committed to your Git repository
- Netlify automatically rebuilds your site
- Changes appear live in 1-2 minutes

## Tips & Best Practices

### Images
- **Portfolio**: Upload project screenshots for better visual appeal
- **Testimonials**: Client avatars are optional but add credibility
- **File Size**: Keep images under 1MB for faster loading
- **Format**: JPG for photos, PNG for graphics with transparency

### Order Numbers
- Use increments of 10 (10, 20, 30) for easy reordering
- Lower numbers appear first
- Example: Set portfolio order to 10, 20 so you can insert item at 15 later

### Writing Content
- **Descriptions**: Keep under 200 characters for better layout
- **Features**: Use clear, benefit-focused language
- **Results**: Include specific numbers when possible
- **Quotes**: Keep testimonials under 150 words

### Gradient Colors
For portfolio items, use Tailwind color names:
- Good: `orange-500`, `blue-600`, `purple-700`
- Bad: `#ff6600` (hex codes won't work)

### Icons
Available icons for services and process:
- **Services**: Code2, Palette, ShoppingCart, Monitor, Sparkles, Headphones
- **Process**: Search, Palette, Code, Rocket, Headphones

## Troubleshooting

### Can't Access /admin
- **Local**: Make sure dev server is running (`npm run dev`)
- **Production**: Verify Netlify Identity is enabled

### Changes Not Appearing
- Check that you clicked "Publish" (not just "Save")
- Wait 1-2 minutes for Netlify to rebuild
- Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)

### Lost Changes
- All changes are in Git - check commit history
- Can revert to previous versions through Git

### Image Upload Fails
- Check file size (keep under 5MB)
- Supported formats: JPG, PNG, GIF, WebP
- Check internet connection

### "Unauthorized" Error
- Re-login through Netlify Identity
- Check that you're invited to the site
- Clear browser cache and try again

## Content Backup

All content is stored in:
```
content/
├── settings/
├── portfolio/
├── services/
├── testimonials/
├── pricing/
└── process/
```

These are markdown files in your Git repository - automatically backed up!

## Need Help?

- **Technical Issues**: Contact your developer
- **Content Questions**: Refer to this guide
- **Netlify Issues**: Check [Netlify Support](https://www.netlify.com/support/)

## Advanced: Direct File Editing

If you prefer, you can edit content files directly:

1. Navigate to `content/` folder in your repository
2. Edit `.md` files
3. Commit and push changes
4. Site rebuilds automatically

Each file has "frontmatter" (between `---`) with the content data.

---

Happy content managing! 🎉

