# Production Deployment Guide

## 🚀 Complete Netlify Deployment with Stripe Integration

This guide walks through deploying your e-commerce site to Netlify with full Stripe payment processing.

---

## Prerequisites

- [x] GitHub account
- [x] Netlify account (free tier works)
- [x] Stripe account (free test mode)
- [x] Email service account (SendGrid or Resend - optional)

---

## Part 1: Stripe Setup

### 1.1 Create Stripe Account

1. Go to [stripe.com](https://stripe.com) and sign up
2. Complete business verification (can skip for test mode)
3. Navigate to **Developers** → **API keys**

### 1.2 Get API Keys

**Test Mode** (for development/staging):
- Publishable key: `pk_test_...`
- Secret key: `sk_test_...`

**Live Mode** (for production):
- Publishable key: `pk_live_...`
- Secret key: `sk_live_...`

⚠️ **Start with TEST mode keys!**

---

## Part 2: Email Service Setup (Optional)

### Option A: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Verify sender email: **Settings** → **Sender Authentication**
3. Create API key: **Settings** → **API Keys** → **Create API Key**
4. Copy key (starts with `SG.`)

### Option B: Resend

1. Sign up at [resend.com](https://resend.com)
2. Add domain or use resend.dev
3. Create API key
4. Copy key (starts with `re_`)

---

## Part 3: Push to GitHub

```bash
# Navigate to project
cd ecommerce-site

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "E-commerce site with Stripe integration"

# Create GitHub repository
# Option 1: Using GitHub CLI
gh repo create my-store --public --source=. --push

# Option 2: Manual
# 1. Create repo on github.com
# 2. Run these commands:
git remote add origin https://github.com/YOUR_USERNAME/my-store.git
git branch -M main
git push -u origin main
```

---

## Part 4: Deploy to Netlify

### 4.1 Connect GitHub Repository

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Authorize Netlify to access your repositories
5. Select `my-store` repository

### 4.2 Configure Build Settings

Netlify auto-detects from `netlify.toml`:

```
✓ Build command: npm run build
✓ Publish directory: .next
✓ Functions directory: netlify/functions
```

If manual configuration needed:
- Build command: `npm run build`
- Publish directory: `.next`
- Functions directory: `netlify/functions`

### 4.3 Install Next.js Plugin

Before deploying, run locally:

```bash
npm install -D @netlify/plugin-nextjs
git add package.json package-lock.json
git commit -m "Add Netlify Next.js plugin"
git push
```

### 4.4 Add Environment Variables

In Netlify Dashboard → **Site settings** → **Environment variables**:

Click **"Add a variable"** for each:

| Variable Name | Value | Example |
|---------------|-------|---------|
| `STRIPE_SECRET_KEY` | Your Stripe secret key | `sk_test_51Abc...` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Your Stripe publishable key | `pk_test_51Abc...` |
| `EMAIL_SERVICE` | Email provider | `sendgrid` or `resend` |
| `EMAIL_API_KEY` | Email API key | `SG.abc...` or `re_abc...` |
| `EMAIL_FROM` | Verified sender email | `orders@yourdomain.com` |
| `BUSINESS_URL` | Your Netlify URL | `https://yoursite.netlify.app` |
| `NODE_ENV` | Environment mode | `production` |

⚠️ **Get BUSINESS_URL after first deploy, then update it**

### 4.5 Deploy!

Click **"Deploy site"**

Netlify will:
1. ✓ Clone your repository
2. ✓ Install dependencies
3. ✓ Build Next.js application
4. ✓ Deploy serverless functions
5. ✓ Provision SSL certificate
6. ✓ Generate site URL

🎉 **Your site is live!**

---

## Part 5: Test Your Deployment

### 5.1 Test Basic Functionality

1. ✓ Navigate to your Netlify URL
2. ✓ Browse products
3. ✓ Add items to cart
4. ✓ Verify cart persists on refresh

### 5.2 Test Stripe Checkout

1. ✓ Go to cart → Checkout
2. ✓ Fill in shipping information
3. ✓ Click "Continue to Payment"
4. ✓ Use test card: **4242 4242 4242 4242**
   - Expiry: Any future date (12/34)
   - CVC: Any 3 digits (123)
   - ZIP: Any 5 digits (12345)
5. ✓ Complete payment
6. ✓ Verify success page loads
7. ✓ Check Stripe dashboard for test payment

### 5.3 Test Functions

Check **Netlify Dashboard** → **Functions**:

- ✓ `create-checkout-session` should show successful invocations
- ✓ `order-confirmation` should show in function list
- ✓ Review function logs for any errors

---

## Part 6: Custom Domain (Optional)

### 6.1 Add Domain

1. In Netlify Dashboard → **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `mystore.com`)

### 6.2 Configure DNS

**Option A: Use Netlify DNS** (Recommended)
1. Update nameservers at your registrar
2. Point to Netlify nameservers
3. SSL auto-configured

**Option B: Use External DNS**
1. Add A record: `75.2.60.5`
2. Add CNAME for www: `your-site.netlify.app`
3. Wait for DNS propagation

### 6.3 Update Environment Variable

Update `BUSINESS_URL` to your custom domain:
```
BUSINESS_URL=https://mystore.com
```

---

## Part 7: Going Live

### Before Switching to Production:

**1. Switch to Live Stripe Keys**
- In Netlify Environment Variables
- Replace TEST keys with LIVE keys
- Redeploy site

**2. Verify Stripe Account**
- Complete business verification
- Add bank account for payouts
- Set up tax settings

**3. Test with Real Card**
- Use a real credit card (you can refund)
- Verify payment flows correctly
- Check email confirmations

**4. Final checklist:**
- [ ] Live Stripe keys configured
- [ ] Business verified in Stripe
- [ ] Bank account connected
- [ ] Email service configured and tested
- [ ] Custom domain SSL active
- [ ] Privacy policy page added
- [ ] Terms of service page added
- [ ] Return/refund policy added

---

## Continuous Deployment

Every push to `main` branch auto-deploys:

```bash
# Make changes
git add .
git commit -m "Update products"
git push

# Netlify automatically rebuilds and deploys!
```

---

## Monitoring & Maintenance

### View Logs

**Build Logs**: Netlify Dashboard → **Deploys** → Click deploy → **Deploy log**

**Function Logs**: Netlify Dashboard → **Functions** → Click function → **Function log**

### Monitor Stripe

**Dashboard**: [dashboard.stripe.com](https://dashboard.stripe.com)
- View payments
- Manage refunds
- Export transactions
- View analytics

### Email Delivery

**SendGrid**: Check delivery stats in dashboard  
**Resend**: View email logs and analytics

---

## Troubleshooting

### Build Fails

**Error: "Module not found"**
```bash
# Ensure all dependencies are in package.json
npm install
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

**Error: "Function build failed"**
- Check `netlify/functions/` syntax
- Verify Stripe package installed: `npm install stripe`
- Review function logs in Netlify

### Stripe Not Working

**"Stripe is not configured"** in logs:
- Verify `STRIPE_SECRET_KEY` in Netlify env vars
- Check key format (should start with `sk_`)
- Redeploy after adding keys

**Test payment fails**:
- Use test card: `4242 4242 4242 4242`
- Check Stripe test mode is active
- Review Stripe dashboard for errors

### Emails Not Sending

- Verify `EMAIL_API_KEY` in Netlify
- Check sender email is verified
- Review function logs for email errors
- Test with working API key

---

## Security Best Practices

✅ **DO**:
- Use environment variables for all secrets
- Keep `.env.local` out of version control
- Use HTTPS (automatic with Netlify)
- Regularly update dependencies
- Monitor Stripe dashboard for suspicious activity

❌ **DON'T**:
- Hardcode API keys in code
- Commit `.env.local` to git
- Share secret keys publicly
- Use production keys in development
- Skip Stripe webhook verification in production

---

## Next Steps

### Enhance Your Store

1. **Add User Authentication**
   - NextAuth.js
   - Firebase Auth
   - Auth0

2. **Implement Order Management**
   - Database (Supabase/Firebase)
   - Order history
   - Admin dashboard backend

3. **Add Product Reviews**
   - Review system
   - Rating aggregation
   - Moderation

4. **Improve SEO**
   - Product schema markup (already included!)
   - Sitemap generation
   - Meta tag optimization

5. **Analytics**
   - Google Analytics
   - Stripe Analytics
   - Conversion tracking

---

## Resources

- **Stripe Docs**: https://stripe.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Next.js Docs**: https://nextjs.org/docs
- **SendGrid API**: https://docs.sendgrid.com
- **Resend API**: https://resend.com/docs

---

## Support

Need help deploying? Check:

1. **ENV_SETUP.md** - Detailed environment variable guide
2. **README.md** - Project documentation
3. **Netlify Support** - [answers.netlify.com](https://answers.netlify.com)
4. **Stripe Support** - [support.stripe.com](https://support.stripe.com)

---

**🎉 Congratulations on deploying your e-commerce store!**
