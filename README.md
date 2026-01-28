 ShopHub - Modern E-commerce Website

A production-ready, modern e-commerce website built with Next.js 16+, Tailwind CSS, and Framer Motion. Perfect for small-to-medium businesses and D2C startups.

![Built with Next.js](https://img.shields.io/badge/Next.js-16+-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6)
![Netlify Ready](https://img.shields.io/badge/Netlify-Ready-00C7B7)

## ✨ Features

### 🛍️ **Complete E-commerce Experience**
- **Product Catalog**: Browse 20 curated products across 5 categories
- **Advanced Filtering**: Filter by category, price range, and sort options
- **Product Details**: Comprehensive product pages with image galleries, variants (size/color), and ratings
- **Shopping Cart**: Persistent cart with localStorage, quantity controls, and real-time updates
- **Checkout Flow**: Multi-step checkout with form validation using Zod
- **Order Summary**: Automatic shipping and tax calculations

### 🎨 **Modern, Beautiful UI**
- Gradient hero sections with animated wave decorations
- Smooth Framer Motion animations throughout
- Responsive design (mobile-first approach)
- Glassmorphism effects and custom Tailwind utilities
- Accessible components with ARIA labels and keyboard navigation

### 📱 **Fully Responsive**
- Mobile hamburger menu with slide-in animation
- Adaptive grid layouts (1-4 columns based on screen size)
- Touch-friendly interactions
- Optimized for all device sizes

### ♿ **Accessibility First**
- Full keyboard navigation support
- ARIA labels on all interactive elements
- Focus states with visible indicators
- Screen reader friendly
- Form validation with clear error messages

### ⚡ **Performance Optimized**
- Next.js Image optimization with lazy loading
- Code-splitting for optimal bundle size
- Fast page loads with static generation
- Efficient state management with React Context

### 🛠️ **Production Ready**
- TypeScript for type safety
- ESLint configuration
- Netlify deployment ready
- Environment variable support
- Demo Stripe payment UI (ready for integration)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Naveenkm07/E-commerce-Store-Small-Medium.git
   cd E-commerce-Store-Small-Medium
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Netlify Deployment

### One-Click Deployment
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Naveenkm07/E-commerce-Store-Small-Medium)

### Manual Deployment

1. **Push to GitHub** (already done)

2. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository: `Naveenkm07/E-commerce-Store-Small-Medium`

3. **Configure build settings:**
   ```
   Build command: npm run build
   Publish directory: out
   ```

4. **Add environment variables** (if using Stripe):
   - Go to Site settings → Environment variables
   - Add `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

5. **Deploy!** Netlify will automatically build and deploy your site

### Important: Static Export Configuration
This project is configured for static export to work perfectly with Netlify. The build process generates static HTML files in the `out` directory.

## 📂 Project Structure

```
ecommerce-site/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Home page
│   │   ├── shop/               # Product catalog & details
│   │   ├── cart/               # Shopping cart
│   │   ├── checkout/           # Checkout flow
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact form
│   │   └── admin/              # Admin dashboard (stub)
│   ├── components/             # Reusable components
│   │   ├── layout/             # Header, Footer, MobileMenu
│   │   ├── products/           # Product cards, grid, filters
│   │   ├── cart/               # Cart drawer, cart items
│   │   ├── checkout/           # Checkout form, progress
│   │   └── ui/                 # Button, Input, Badge
│   ├── context/                # React Context providers
│   │   └── CartContext.tsx     # Global cart state
│   ├── data/                   # Mock product data
│   │   └── products.ts         # 20 products with variants
│   ├── lib/                    # Utility functions
│   │   ├── utils.ts            # Helpers (formatPrice, etc.)
│   │   └── localStorage.ts     # SSR-safe storage wrapper
│   └── types/                  # TypeScript definitions
│       └── product.ts          # Product, Cart, Checkout types
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── netlify.toml                # Netlify deployment config
```

## 🎯 Key Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, featured products, value propositions |
| Shop | `/shop` | Full product catalog with filters and sorting |
| Product Detail | `/shop/[slug]` | Individual product page with variants |
| Cart | `/cart` | Full shopping cart view with order summary |
| Checkout | `/checkout` | Multi-step checkout with form validation |
| About | `/about` | Company story and values |
| Contact | `/contact` | Contact form with validation |
| Admin | `/admin` | Dashboard stub for backend integration |

## 🛒 Cart Features

- **Persistent Storage**: Cart data saved to localStorage
- **Add/Remove Items**: Full CRUD operations
- **Quantity Control**: Increment/decrement with stock limits
- **Variant Support**: Track size and color selections
- **Real-time Calculations**: Subtotal, shipping, tax, and total
- **Free Shipping**: Automatic for orders over $50

## 💳 Payment Integration

The checkout includes a demo-ready Stripe integration stub. To activate live payments:

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your publishable key from the Stripe dashboard
3. Add to environment variables in Netlify:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   ```
4. Implement the Stripe Elements component in `src/components/checkout/StripePayment.tsx`

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
```typescript
colors: {
  primary: { ... },    // Main brand color
  secondary: { ... },  // Accent color
  accent: { ... },     // Highlight color
}
```

### Products
Edit `src/data/products.ts` to:
- Add/remove products
- Change categories
- Update images (use your own or stock photos)
- Modify pricing and variants

### Branding
Update the logo and brand name in:
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/app/layout.tsx` (metadata)

## 🔌 Backend Integration

This is a frontend-only demo. For a full e-commerce solution, integrate with:

- **Shopify Headless**: Use Shopify as headless CMS
- **Snipcart**: Drop-in shopping cart solution
- **Custom API**: Build with Next.js API Routes + Postgres/MongoDB
- **Firebase/Supabase**: Backend-as-a-Service options

## 📦 Scripts

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔧 Environment Variables

Create a `.env.local` file for local development:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key_here
```

For Netlify deployment, add these in Site settings → Environment variables.

## 🤝 Contributing

This is a starter template. Feel free to:
- Fork and customize for your needs
- Add features (user auth, reviews, wishlists, etc.)
- Integrate with your preferred backend
- Submit improvements via pull requests

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Images**: Product images from [Unsplash](https://unsplash.com)
- **Icons**: Lucide React icons
- **Fonts**: Inter from Google Fonts
- **Framework**: Next.js by Vercel

## 📞 Support

Need help? 
- [Open an issue](https://github.com/Naveenkm07/E-commerce-Store-Small-Medium/issues)
- Check the [deployment guide](./DEPLOYMENT.md)
- Contact us through the website!

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**

**Ready for Netlify deployment 🚀**
