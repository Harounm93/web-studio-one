# EmailJS Setup Guide

This guide will help you configure EmailJS to receive emails from your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Sign up for a free account (200 emails/month included)
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions for your provider
5. **Copy your Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

### Template Settings:
- **Template Name**: `Contact Form Submission`
- **Subject**: `New Contact Form Message from {{name}}`

### Email Template Content:
```
New contact form submission received!

Name: {{name}}
Email: {{email}}
Company: {{company}}
Service Interested In: {{service}}
Budget Range: {{budget}}

Message:
{{message}}

---
Submitted at: {{time}}
```

4. **Copy your Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (e.g., `abc123xyz`)
3. Copy this key

## Step 5: Configure Your Project

### Create `.env.local` file:

In the root of your project, create a file named `.env.local`:

```bash
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace the values with your actual EmailJS credentials from steps 2-4.

### Example:
```bash
VITE_EMAILJS_PUBLIC_KEY=abc123xyz
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
```

## Step 6: Restart Development Server

After creating `.env.local`, restart your development server:

```bash
npm run dev
```

## Step 7: Test Your Form

1. Open your website at `http://localhost:8080`
2. Scroll to the contact form
3. Fill out all required fields
4. Click "Send Message"
5. You should see a success toast notification
6. Check your email inbox for the message!

## Email Template Variables

Your template can use these variables from the contact form:

- `{{name}}` - Full name
- `{{email}}` - Email address
- `{{company}}` - Company name (optional)
- `{{service}}` - Selected service
- `{{budget}}` - Budget range
- `{{message}}` - Project description
- `{{time}}` - Submission timestamp

## Troubleshooting

### "Failed to send message" error
- Check that all credentials in `.env.local` are correct
- Verify your email service is connected in EmailJS dashboard
- Make sure you've restarted the dev server after adding `.env.local`

### Not receiving emails
- Check your spam folder
- Verify the email template has the correct variable names
- Test sending an email from EmailJS dashboard directly

### Rate limits
- Free tier: 200 emails/month
- If you need more, upgrade your EmailJS plan

## Security Notes

- `.env.local` is git-ignored and won't be committed
- Your public key is safe to expose in client-side code
- Never commit actual credentials to Git
- For production, set environment variables in your hosting platform (Netlify, Vercel, etc.)

## Production Deployment

When deploying to production:

1. **Netlify**: Go to Site Settings → Environment Variables
2. **Vercel**: Go to Project Settings → Environment Variables
3. Add the same three variables from your `.env.local` file

## Support

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [EmailJS Community](https://www.emailjs.com/docs/community/)

