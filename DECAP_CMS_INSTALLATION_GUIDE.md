# Complete Guide: Adding Decap CMS to Your React/Vite Project

A step-by-step checklist to integrate Decap CMS (formerly Netlify CMS) into any React + Vite project.

## 📋 Prerequisites

- [ ] React + Vite project
- [ ] Git repository
- [ ] Deployed to Netlify (or any hosting platform)
- [ ] Basic understanding of React and markdown

---

## Part 1: Initial Setup (15 minutes)

### Step 1: Install Dependencies

```bash
npm install decap-cms-app gray-matter buffer vite-plugin-node-polyfills --legacy-peer-deps
```

**If you get peer dependency errors, use:**
```bash
npm install decap-cms-app gray-matter buffer vite-plugin-node-polyfills --legacy-peer-deps
```

**What each package does:**
- `decap-cms-app` - The CMS interface and core
- `gray-matter` - Parses markdown frontmatter
- `buffer` - Browser polyfill for Node.js Buffer API
- `vite-plugin-node-polyfills` - Makes Node.js libraries work in browser

### Step 2: Create `.npmrc` File

Create `.npmrc` in project root:

```
legacy-peer-deps=true
```

**Why?** Ensures Netlify builds succeed even with peer dependency conflicts.

### Step 3: Configure Vite for Polyfills

Update `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    nodePolyfills({
      include: ['buffer'],
      globals: {
        Buffer: true,
      },
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

**Why?** `gray-matter` needs Node.js Buffer API to work in the browser.

---

## Part 2: Create Admin Interface (10 minutes)

### Step 4: Create Admin Directory

```bash
mkdir -p public/admin
```

### Step 5: Create Admin HTML

Create `public/admin/index.html`:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex" />
  <title>Content Manager</title>
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>
```

### Step 6: Create CMS Configuration

Create `public/admin/config.yml`:

```yaml
backend:
  name: git-gateway
  branch: main  # or master, depending on your default branch

media_folder: "public/images/uploads"
public_folder: "/images/uploads"

collections:
  # Example collection - customize for your needs
  - name: "blog"
    label: "Blog Posts"
    folder: "public/content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Author", name: "author", widget: "string"}
      - {label: "Featured Image", name: "image", widget: "image", required: false}
      - {label: "Body", name: "body", widget: "markdown"}
      - {label: "Order", name: "order", widget: "number", default: 0}
```

**Customize this config for your content types!**

---

## Part 3: Add Netlify Identity (5 minutes)

### Step 7: Add Identity Widget to HTML

Update your `index.html` (in project root):

**Add in `<head>` section:**
```html
<!-- Netlify Identity Widget -->
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

**Add before closing `</body>` tag:**
```html
<!-- Netlify Identity Redirect -->
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
```

**Why?** Enables invitation/password reset handling on your main site.

---

## Part 4: Create Content Structure (20 minutes)

### Step 8: Create Content Directories

```bash
mkdir -p public/content/{blog,pages,settings}
mkdir -p public/images/uploads
```

**Adjust folders based on YOUR content types.**

### Step 9: Create Sample Content Files

Create `public/content/blog/sample-post.md`:

```markdown
---
title: "My First Blog Post"
date: 2024-01-01T12:00:00.000Z
author: "John Doe"
order: 1
---

This is my first blog post content. Write your content here!
```

**Create files for each content type you defined in config.yml**

---

## Part 5: Build Data Loading System (30 minutes)

### Step 10: Create TypeScript Interfaces

Create `src/types/cms.ts`:

```typescript
export interface BlogPost {
  title: string;
  date: string;
  author: string;
  image?: string;
  body: string;
  order: number;
}

// Add interfaces for all your content types
```

### Step 11: Create Content Loaders

Create `src/lib/cms-content.ts`:

```typescript
import matter from 'gray-matter';

// Helper to fetch and parse markdown
async function loadMarkdownFile(path: string): Promise<any> {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }
    const text = await response.text();
    const { data, content } = matter(text);
    return { ...data, body: content };
  } catch (error) {
    console.error(`Error loading ${path}:`, error);
    return null;
  }
}

// Load your content
export async function loadBlogPosts(): Promise<BlogPost[]> {
  try {
    // Manually list files OR fetch a directory listing
    const files = ['sample-post.md'];
    
    const promises = files.map(file =>
      loadMarkdownFile(`/content/blog/${file}`)
    );
    
    const data = await Promise.all(promises);
    const posts = data
      .filter(item => item !== null)
      .map(item => ({
        title: item.title || '',
        date: item.date || '',
        author: item.author || '',
        image: item.image,
        body: item.body || '',
        order: item.order || 0,
      }));
    
    return posts.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}
```

### Step 12: Create React Hook

Create `src/hooks/useCMSContent.ts`:

```typescript
import { useState, useEffect } from 'react';
import { loadBlogPosts } from '@/lib/cms-content';

export function useBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadBlogPosts()
      .then(data => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return { posts, isLoading, error };
}
```

---

## Part 6: Update Components (20 minutes)

### Step 13: Use CMS Data in Components

Example component:

```typescript
import { useBlogPosts } from '@/hooks/useCMSContent';

function BlogList() {
  const { posts, isLoading } = useBlogPosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts.map((post, index) => (
        <article key={index}>
          <h2>{post.title}</h2>
          <p>By {post.author} on {post.date}</p>
          <div>{post.body}</div>
        </article>
      ))}
    </div>
  );
}
```

**Replace hardcoded data arrays with CMS hook calls throughout your app.**

---

## Part 7: Netlify Configuration (5 minutes)

### Step 14: Create `netlify.toml`

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--legacy-peer-deps"

# SPA redirect (for React Router)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Part 8: Deploy & Setup (10 minutes)

### Step 15: Commit and Push

```bash
git add .
git commit -m "Add Decap CMS"
git push
```

### Step 16: Enable Netlify Identity

1. Go to Netlify dashboard
2. Select your site
3. Go to **Site settings** → **Identity**
4. Click **"Enable Identity"**

### Step 17: Enable Git Gateway

1. Still in **Identity** settings
2. Scroll to **"Services"** section
3. Click **"Enable Git Gateway"**

### Step 18: Invite Users

1. Go to **Identity** tab (top nav)
2. Click **"Invite users"**
3. Enter email addresses
4. They'll receive invitation emails

### Step 19: Accept Invitation

1. Click link in invitation email
2. Set password in the modal
3. You'll be redirected to `/admin`

### Step 20: Start Managing Content!

Visit `https://yoursite.netlify.app/admin` and start editing!

---

## 🔒 Security Checklist

- [ ] `.env.local` is in `.gitignore` (check `*.local` pattern)
- [ ] Never commit API keys to Git
- [ ] Set environment variables in Netlify dashboard
- [ ] Set Identity registration to "Invite only"
- [ ] Only invite trusted users

---

## 🎯 CMS Configuration Examples

### For Blog Posts

```yaml
- name: "blog"
  label: "Blog Posts"
  folder: "public/content/blog"
  create: true
  slug: "{{slug}}"
  fields:
    - {label: "Title", name: "title", widget: "string"}
    - {label: "Date", name: "date", widget: "datetime"}
    - {label: "Author", name: "author", widget: "string"}
    - {label: "Body", name: "body", widget: "markdown"}
    - {label: "Featured Image", name: "image", widget: "image", required: false}
```

### For Portfolio Items

```yaml
- name: "portfolio"
  label: "Portfolio"
  folder: "public/content/portfolio"
  create: true
  fields:
    - {label: "Title", name: "title", widget: "string"}
    - {label: "Description", name: "description", widget: "text"}
    - {label: "Link", name: "link", widget: "string"}
    - {label: "Image", name: "image", widget: "image"}
    - label: "Technologies"
      name: "tech"
      widget: "list"
      field: {label: "Tech", name: "item", widget: "string"}
```

### For Site Settings (Single File)

```yaml
- name: "settings"
  label: "Site Settings"
  files:
    - label: "General Settings"
      name: "general"
      file: "public/content/settings/general.md"
      fields:
        - {label: "Site Title", name: "title", widget: "string"}
        - {label: "Description", name: "description", widget: "text"}
        - {label: "Logo", name: "logo", widget: "image"}
```

---

## 🛠 Widget Types Reference

Common widgets you can use in `config.yml`:

| Widget | Use For | Example |
|--------|---------|---------|
| `string` | Short text | Titles, names |
| `text` | Multi-line text | Descriptions |
| `markdown` | Rich text | Blog content, long text |
| `number` | Numbers | Prices, order, ratings |
| `boolean` | True/False | Featured, published |
| `datetime` | Dates & times | Publish dates |
| `image` | Images | Photos, logos, icons |
| `file` | Any files | PDFs, documents |
| `select` | Dropdown | Categories, statuses |
| `list` | Arrays | Tags, features |
| `object` | Nested data | Complex structures |

---

## 🚨 Common Issues & Fixes

### Issue: "Buffer is not defined"
**Fix:** Install and configure polyfills (Step 1 & 3)

### Issue: Content not loading
**Fix:** Make sure content is in `public/content/` not `content/`

### Issue: "Git Gateway not enabled"
**Fix:** Enable in Netlify dashboard (Step 17)

### Issue: Can't accept invitation
**Fix:** Add Netlify Identity widget to main HTML (Step 7)

### Issue: Build fails on Netlify
**Fix:** Add `.npmrc` with `legacy-peer-deps=true` (Step 2)

### Issue: CMS can't find collections
**Fix:** Verify paths in config.yml match actual folder structure

---

## 📁 Recommended Folder Structure

```
your-project/
├── public/
│   ├── admin/
│   │   ├── index.html          # CMS interface
│   │   └── config.yml          # CMS config
│   ├── content/                # Your content files
│   │   ├── blog/
│   │   ├── portfolio/
│   │   └── settings/
│   └── images/
│       └── uploads/            # User-uploaded images
├── src/
│   ├── types/
│   │   └── cms.ts              # TypeScript interfaces
│   ├── lib/
│   │   └── cms-content.ts      # Content loaders
│   ├── hooks/
│   │   └── useCMSContent.ts    # React hooks
│   └── ...
├── .npmrc                       # npm configuration
├── netlify.toml                 # Netlify config
└── package.json
```

---

## 🎨 Customization Guide

### Customize Collections

Edit `public/admin/config.yml` to match YOUR content:

**Example: E-commerce Products**
```yaml
- name: "products"
  label: "Products"
  folder: "public/content/products"
  create: true
  fields:
    - {label: "Name", name: "name", widget: "string"}
    - {label: "Price", name: "price", widget: "number"}
    - {label: "Description", name: "description", widget: "markdown"}
    - {label: "Images", name: "images", widget: "list", field: {label: "Image", name: "image", widget: "image"}}
    - {label: "In Stock", name: "inStock", widget: "boolean"}
```

**Example: Team Members**
```yaml
- name: "team"
  label: "Team Members"
  folder: "public/content/team"
  create: true
  fields:
    - {label: "Name", name: "name", widget: "string"}
    - {label: "Role", name: "role", widget: "string"}
    - {label: "Bio", name: "bio", widget: "text"}
    - {label: "Photo", name: "photo", widget: "image"}
    - {label: "LinkedIn", name: "linkedin", widget: "string", required: false}
```

---

## 🌐 Alternative Hosting Platforms

### Vercel

**Instead of Git Gateway, use GitHub backend:**

In `config.yml`:
```yaml
backend:
  name: github
  repo: your-username/your-repo
  branch: main
```

Then set up GitHub OAuth app:
1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Create new OAuth app
3. Add credentials to Vercel environment variables

### Other Platforms (Cloudflare Pages, etc.)

Use **GitHub backend** (same as Vercel above) or deploy your own [Git Gateway server](https://github.com/netlify/git-gateway).

---

## 📝 Writing Content

### Markdown File Format

Every content file should have:

```markdown
---
title: "Your Title"
date: "2024-01-01"
other: "fields"
---

Optional markdown content goes here.
This is the "body" of the file.
```

**The section between `---` is called "frontmatter" (YAML format)**

---

## ✅ Testing Checklist

Before going live:

- [ ] Dev server runs without errors
- [ ] Can access `/admin` locally
- [ ] Content loads on main site
- [ ] Can edit content in CMS
- [ ] Changes appear after refresh
- [ ] Build succeeds (`npm run build`)
- [ ] Production build works (`npm run preview`)
- [ ] Netlify Identity enabled
- [ ] Git Gateway enabled
- [ ] Can log in to production `/admin`
- [ ] Changes in CMS trigger deploys
- [ ] All collections appear in CMS
- [ ] Can upload images

---

## 🔐 Environment Variables

### For EmailJS or Other Services

**Local:** Create `.env.local`:
```bash
VITE_API_KEY=your_key_here
VITE_SERVICE_ID=your_service_id
```

**Production (Netlify):**
1. Site settings → Environment variables
2. Add each variable
3. Redeploy site

**Important:** Environment variables must start with `VITE_` to be exposed to client-side code in Vite.

---

## 🎓 Best Practices

### Content Organization

✅ **Do:**
- Use descriptive folder names
- Add order fields for sorting
- Include metadata (dates, authors)
- Use consistent naming

❌ **Don't:**
- Put sensitive data in content files (they're public)
- Use spaces in filenames
- Create deeply nested structures
- Hardcode content in components

### CMS Configuration

✅ **Do:**
- Use required: false for optional fields
- Add helpful hints to fields
- Use appropriate widget types
- Test locally before deploying
- Keep config.yml organized with comments

❌ **Don't:**
- Make everything required
- Use overly complex nested structures
- Forget to set media_folder
- Skip field validation

### Performance

✅ **Do:**
- Cache loaded content
- Load content once on mount
- Sort/filter in loaders, not components
- Optimize images before upload

❌ **Don't:**
- Fetch content on every render
- Load content you don't need
- Forget to handle loading states
- Parse markdown in render loop

---

## 📊 Collection Types

### Folder Collections
For multiple items (blog posts, products, etc.):
```yaml
- name: "blog"
  label: "Blog"
  folder: "public/content/blog"  # Each file is an item
  create: true                    # Users can add new items
```

### File Collections
For single-page content (homepage, about, etc.):
```yaml
- name: "pages"
  label: "Pages"
  files:
    - label: "Homepage"
      name: "home"
      file: "public/content/pages/home.md"
```

---

## 🚀 Quick Start Template

Minimal working setup:

### 1. Install
```bash
npm install decap-cms-app gray-matter buffer vite-plugin-node-polyfills --legacy-peer-deps
```

### 2. Create files
- `public/admin/index.html` (CMS UI)
- `public/admin/config.yml` (CMS config)
- Add Identity widget to main HTML

### 3. Configure Vite
Add node polyfills plugin

### 4. Create content loaders
TypeScript interfaces + loading functions

### 5. Update components
Replace hardcoded data with CMS hooks

### 6. Deploy
Push to GitHub, enable Identity & Git Gateway on Netlify

---

## 📚 Additional Resources

- **Decap CMS Docs**: https://decapcms.org/docs/
- **Widget Reference**: https://decapcms.org/docs/widgets/
- **Configuration**: https://decapcms.org/docs/configuration-options/
- **Netlify Identity**: https://docs.netlify.com/visitor-access/identity/
- **Git Gateway**: https://github.com/netlify/git-gateway

---

## 💡 Pro Tips

1. **Start Simple**: Begin with one collection, add more later
2. **Test Locally First**: Use `localhost:8080/admin` before deploying
3. **Backup Content**: Content is in Git - it's automatically backed up
4. **Use Order Fields**: Makes reordering content easy
5. **Image Optimization**: Compress images before uploading
6. **Editor Preview**: Configure preview templates for better editing experience
7. **Editorial Workflow**: Add draft/review/publish workflow if needed:
   ```yaml
   # Add to config.yml
   publish_mode: editorial_workflow
   ```

---

## 🎯 Time Estimates

- **Basic Setup**: 1 hour
- **Custom Collections**: 30 min per collection
- **Component Integration**: 2-3 hours (depending on complexity)
- **Testing & Deployment**: 30 minutes
- **Total**: 4-5 hours for complete integration

---

## ✨ Success Criteria

Your CMS is working when:

✅ You can access `/admin` on production
✅ Collections appear in CMS interface
✅ You can create/edit content
✅ Changes trigger automatic deploys
✅ Content appears on main site after deploy
✅ Images upload successfully
✅ Team members can log in and edit

---

## 🆘 Need Help?

**Common Questions:**

**Q: Can I use this without Netlify?**
A: Yes! Use GitHub backend instead of Git Gateway. Works with Vercel, Cloudflare Pages, etc.

**Q: Can I use it with Next.js?**
A: Yes! Same process, but adjust paths and loaders for Next.js data fetching.

**Q: Is it free?**
A: Yes! Decap CMS is open source. Netlify Identity has a free tier (1,000 users).

**Q: Can I self-host?**
A: Yes, but you'll need to deploy your own Git Gateway server or use GitHub OAuth.

**Q: What about images?**
A: Uploaded images are stored in your Git repo. For large sites, consider using a CDN or image service.

---

## 📋 Final Checklist

Before calling it done:

- [ ] All dependencies installed
- [ ] Admin interface created
- [ ] Config.yml matches your content structure
- [ ] Content files created
- [ ] TypeScript types defined
- [ ] Content loaders built
- [ ] React hooks created
- [ ] Components updated to use CMS
- [ ] Netlify Identity widget added
- [ ] `.npmrc` created
- [ ] `netlify.toml` configured
- [ ] Vite config has polyfills
- [ ] Build succeeds locally
- [ ] Committed and pushed
- [ ] Netlify Identity enabled
- [ ] Git Gateway enabled
- [ ] Can access production `/admin`
- [ ] Can edit and publish content
- [ ] Changes appear on live site

---

## 🎉 Congratulations!

You now have a fully functional CMS! Your content team can manage everything without touching code.

**Share this guide with your team or use it for your next project!**

---

*Last updated: November 2024*
*Tested with: React 18, Vite 5, Decap CMS 3*

