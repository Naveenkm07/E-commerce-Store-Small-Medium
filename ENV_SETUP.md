# Environment Variables Configuration

## Required Environment Variables

Copy this file to `.env.local` and add your actual values. **Never commit `.env.local` to version control!**

### Stripe Configuration

```bash
# Get these from: https://dashboard.stripe.com/apikeys
# Use TEST keys for development, LIVE keys for production

# Secret key (server-side only, keep secure!)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here

# Publishable key (safe to expose in client-side code)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
```

### Email Service Configuration

Choose ONE of the following email services:

#### Option 1: SendGrid
```bash
# Get API key from: https://app.sendgrid.com/settings/api_keys
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=SG.your_sendgrid_api_key_here
EMAIL_FROM=orders@yourdomain.com  # Must be verified in SendGrid
```

#### Option 2: Resend
```bash
# Get API key from: https://resend.com/api-keys
EMAIL_SERVICE=resend
EMAIL_API_KEY=re_your_resend_api_key_here
EMAIL_FROM=orders@yourdomain.com  # Must be verified in Resend
```

### Site Configuration

```bash
# Your deployed website URL (for Stripe redirects and email links)
BUSINESS_URL=https://your-site.netlify.app

# Environment mode
NODE_ENV=production  # or 'development' for local testing
```

## Netlify Deployment Setup

### Step 1: Add Environment Variables in Netlify

1. Go to your Netlify site dashboard
2. Navigate to **Site Settings → Environment variables**
3. Click **Add a variable** for each of the following:

| Variable Name | Description | Example |
|---------------|-------------|---------|
| `STRIPE_SECRET_KEY` | Stripe server-side API key | `sk_test_...` or `sk_live_...` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe client-side key | `pk_test_...` or `pk_live_...` |
| `EMAIL_API_KEY` | SendGrid or Resend API key | `SG.xxx` or `re_xxx` |
| `EMAIL_SERVICE` | Email provider (`sendgrid` or `resend`) | `sendgrid` |
| `EMAIL_FROM` | Verified sender email | `orders@yourdomain.com` |
| `BUSINESS_URL` | Your site URL | `https://yoursite.netlify.app` |

### Step 2: Testing Mode vs Production Mode

**For Testing (Development/Staging)**:
- Use Stripe **TEST mode** keys (start with `sk_test_` and `pk_test_`)
- Test credit card: `4242 4242 4242 4242`
- Any future expiry date (e.g., 12/34)
- Any 3-digit CVC

**For Production**:
- Switch to Stripe **LIVE mode** keys (start with `sk_live_` and `pk_live_`)
- Real credit cards will be charged
- Ensure all verification is complete in Stripe dashboard

## Local Development Setup

### Create `.env.local` file

```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your test keys
nano .env.local  # or use your preferred editor
```

### Run development server

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to test the site.

### Test Netlify Functions Locally

Install Netlify CLI:
```bash
npm install -g netlify-cli
```

Run with Netlify dev server:
```bash
netlify dev
```

This will run both Next.js and your serverless functions locally.

## Security Best Practices

✅ **DO**:
- Use environment variables for all secrets
- Keep `.env.local` in your `.gitignore`
- Use Stripe TEST mode for development
- Verify email sender domains
- Use HTTPS in production

❌ **DON'T**:
- Hardcode API keys in source code
- Commit `.env.local` to git
- Share secret keys publicly
- Use production keys in development
- Skip email verification

## Troubleshooting

### Stripe not working?
- Check if `STRIPE_SECRET_KEY` is set in Netlify
- Verify key format (should start with `sk_`)
- Check Netlify function logs for errors

### Emails not sending?
- Verify `EMAIL_API_KEY` is set
- Check sender email is verified in SendGrid/Resend
- Review Netlify function logs

### Build failing?
- Ensure all required environment variables are set
- Check for typos in variable names
- Review build logs in Netlify dashboard

## Need Help?

- **Stripe Docs**: https://stripe.com/docs
- **SendGrid Docs**: https://docs.sendgrid.com
- **Resend Docs**: https://resend.com/docs
- **Netlify Docs**: https://docs.netlify.com

For site-specific issues, check the README.md or contact support.
