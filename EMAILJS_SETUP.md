# EmailJS Setup Guide

The contact form uses EmailJS to send emails. Follow these steps to configure it:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## 2. Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your `wowoccupationaltherapy@gmail.com` account
5. Note the **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from the WOW Occupational Therapy website contact form.
```

4. Note the **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key
1. Go to **Account** in the dashboard
2. Find your **Public Key** under API Keys section
3. Note the key (e.g., `abcdef123456`)

## 5. Configure Environment Variables

### For Local Development:
Create a `.env` file in the project root:
```bash
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdef123456
```

### For Vercel Deployment:
1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add these three variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Redeploy your site

## 6. Test the Form
1. Go to your website
2. Fill out the contact form
3. Submit and check if email arrives at `wowoccupationaltherapy@gmail.com`

## Troubleshooting
- **No email received**: Check EmailJS dashboard logs
- **Error in console**: Verify all three environment variables are set correctly
- **Rate limit**: Free plan allows 200 emails/month

## Security Note
- Never commit your actual `.env` file to git (it's in `.gitignore`)
- Only share environment variables through secure channels
- Regenerate keys if accidentally exposed
