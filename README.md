# ShopHub - Modern E-commerce Website

A production-ready, modern e-commerce website built with Next.js 14+, Tailwind CSS, and Framer Motion. Perfect for small-to-medium businesses and D2C startups.

![Built with Next.js](https://img.shields.io/badge/Next.js-14+-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6)

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

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone or navigate to the project:**
   ```bash
   cd ecommerce-site
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
3. Add to environment variables (create `.env.local`):
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   ```
4. Implement the Stripe Elements component in `src/components/checkout/StripePayment.tsx`

## 🌐 Deployment

### Netlify (Recommended)

1. **Push to GitHub** (create a repository and push your code)

2. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository

3. **Configure build settings:**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Add environment variables** (if using Stripe):
   - Go to Site settings → Environment variables
   - Add `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

5. **Deploy!** Netlify will automatically build and deploy your site

### Other Platforms
- **Vercel**: Automatic deployment for Next.js projects
- **AWS Amplify**: Full-stack hosting with backend support
- **Custom Server**: Use `npm run build && npm start`

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

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**

Need help? [Open an issue](https://github.com/yourusername/ecommerce-site/issues) or contact us through the website!
#   E - c o m m e r c e - S t o r e - S m a l l - M e d i u m  
 