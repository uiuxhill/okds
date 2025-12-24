# Design System - Token-Driven Tailwind CSS

A production-ready, token-driven design system built with Tailwind CSS, React, TypeScript, and Vite. All design tokens are sourced from `tokens.json` and transformed into CSS variables for maximum flexibility and theme-ability.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:5177](http://localhost:5177) to view the **Seller Order List** screen - a pixel-perfect implementation from Figma.

## 🎨 Screens

### ✨ NEW: Seller Order List Screen
**Pixel-perfect Figma implementation** - Production-ready seller center interface.

**Features:**
- ✅ **Full Header** - Sub header (green disclaimer) + main header (logo, search, profile) + categories
- ✅ **Navigation Sidebar** - 250px left nav with user profile and 4 menu sections
- ✅ **Content Area** - 990px right area with tabs, filters, sort, and order cards
- ✅ **8 Status Tabs** - All order states (Tất cả, Chờ xác nhận, Chờ giao hàng, etc.)
- ✅ **Search & Filters** - Search input, date picker, filter button
- ✅ **Order Cards** - 6 cards with 73px spacing

**Technical:**
- 🎯 **100% Token-Driven** - Zero hardcoded values (except 1 documented spacing)
- 📐 **Pixel-Perfect** - Exact Figma measurements (1440px layout, 80px padding)
- 🎨 **Design System** - 35 tokens used (colors, typography, spacing, radius)
- 🔒 **Type-Safe** - Full TypeScript with zero errors
- ✨ **Clean Code** - Zero linter errors, production-ready

**Documentation:**
- See `src/screens/SellerOrderList/IMPLEMENTATION.md` for complete technical docs
- See `SELLER_ORDER_LIST_IMPLEMENTATION.md` for implementation summary

**Figma Source:** `node-id=52-1519`

---

### Order List Page (Legacy)
Previous implementation with simplified layout:
- **Sidebar Navigation** - User profile and menu system
- **Status Tabs** - 8 order status filters
- **Search & Filters** - Search, date picker, advanced filters
- **Order Cards** - List view with order details
- **Sort Options** - Multiple sort criteria

See `src/pages/OrderList/README.md` for detailed documentation.

## 📁 Project Structure

```
okds/
├── src/
│   ├── components/
│   │   ├── OrderCard.tsx    # Order card component
│   │   └── ui/              # Reusable UI components
│   │       └── README.md    # Component development guidelines
│   ├── screens/
│   │   └── SellerOrderList/ # ✨ NEW: Seller Order List screen
│   │       ├── SellerOrderListScreen.tsx
│   │       ├── components/  # Header, Sidebar, Content
│   │       ├── index.ts
│   │       └── IMPLEMENTATION.md  # Complete docs
│   ├── pages/
│   │   └── OrderList/       # Order List page (legacy)
│   │       ├── OrderListPage.tsx
│   │       ├── components/  # Page-specific components
│   │       ├── index.ts
│   │       └── README.md
│   ├── styles/
│   │   ├── tokens.css       # All CSS variables from tokens.json
│   │   ├── tailwind.css     # Tailwind entry point + base styles
│   │   └── design-system.md # Complete design system documentation
│   ├── App.tsx              # Main application
│   └── main.tsx             # Application entry point
├── tokens.json              # Source of truth for all design tokens
├── tailwind.config.js       # Tailwind configuration (maps to CSS vars)
├── postcss.config.js        # PostCSS configuration
├── vite.config.ts           # Vite configuration
├── SELLER_ORDER_LIST_IMPLEMENTATION.md  # ✨ NEW: Implementation summary
└── package.json
```

## 🎨 Design System Overview

### Token Architecture

**Three-tier token system:**

1. **Primitive Tokens** (Level 1) - Raw values
   - 11 color families × 11 shades = 121 colors
   - 44 dimension values (4px grid-based)

2. **Semantic Tokens** (Level 2) - Role-based aliases
   - Brand: primary, secondary, tertiary
   - Status: success, error, warning, info, magic
   - Neutral: gray scale

3. **Application Tokens** (Level 3) - Context-specific
   - Content/Text colors (22 tokens)
   - Background colors (34 tokens)
   - Border colors (20 tokens)
   - Accent colors (30 tokens)
   - Spacing (padding/gap)
   - Typography (complete system)
   - Border radius (10 values)

### Key Features

✅ **Token-driven** - All values from `tokens.json`  
✅ **Theme-aware** - Built-in light/dark mode support  
✅ **4px grid** - Consistent spacing alignment  
✅ **Typography system** - 10 styles × 4 weights  
✅ **Accessible** - WCAG AA compliant color combinations  
✅ **Type-safe** - Full TypeScript support  

## 📚 Documentation

- **[Design System Docs](src/styles/design-system.md)** - Complete token reference, usage guidelines, and component examples
- **[Component Guidelines](src/components/ui/README.md)** - Rules and patterns for building UI components
- **Tokens CSS**: `src/styles/tokens.css` - All CSS variables
- **Tailwind Config**: `tailwind.config.js` - Tailwind theme extension

## 🎯 Usage Examples

### Using Semantic Tokens

```tsx
// ✅ GOOD - Semantic, theme-aware
<button className="bg-bg-primary hover:bg-bg-primary-hover text-text-on-action">
  Primary Button
</button>

// ❌ BAD - Hardcoded, breaks theming
<button className="bg-orange-500 hover:bg-orange-600 text-white">
  Primary Button
</button>
```

### Typography Utilities

```tsx
<h1 className="text-h1-bold text-text-neutral-strong">Page Title</h1>
<p className="text-body-regular text-text-neutral">Body text</p>
<span className="text-caption-medium text-text-neutral-light">Caption</span>
```

### Interactive States

```tsx
<button className="
  bg-bg-primary 
  hover:bg-bg-primary-hover 
  active:bg-bg-primary-press
  focus-ring
  disabled:disabled-state
  text-text-on-action
  rounded-lg px-4 py-2
">
  Button with States
</button>
```

### Form Components

```tsx
<input 
  className="input-base"
  placeholder="Email"
/>

<textarea 
  className="input-base resize-none"
  rows={4}
/>
```

## 🌓 Theme Switching

The design system supports light and dark themes via the `data-theme` attribute:

```tsx
// Toggle theme
const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  setTheme(newTheme);
};
```

CSS variables automatically update based on the theme attribute.

## 🎨 Available Utilities

### Typography Styles

- Display: `text-display-{1-3}-{weight}`
- Headings: `text-h{1-5}-{weight}`
- Body: `text-body-{large|default|small}-{weight}`
- Caption: `text-caption-{weight}`
- Action: `text-action-{large|default|small}-{weight}`
- Link: `text-link-{lg|md|sm|xs}`
- Capline: `text-capline-{lg|md|sm|xs}` (uppercase)

**Weights:** `regular`, `medium`, `semibold`, `bold`

### Color Utilities

- Text: `text-text-{role}`
- Background: `bg-bg-{role}`
- Border: `border-border-{role}`
- Accent: `bg-accent-{color}-{intensity}`

### Spacing (4px Grid)

- Padding: `p-{0|0.5|1|1.5|2|2.5|3|4|5|6|8|10|12|16|20}`
- Gap: `gap-{same as padding}`

### Border Radius

- `rounded-{none|xs|sm|md|lg|xl|2xl|3xl|4xl|full}`

### Gradients

- `bg-gradient-blue` - Blue to cyan gradient
- `bg-gradient-orange` - Red to orange gradient
- `text-gradient-blue` - Blue gradient text
- `text-gradient-orange` - Orange gradient text

### Helper Classes

- `focus-ring` - Standard focus indicator
- `disabled-state` - Disabled styling
- `card-base` - Card base styles
- `btn-base` - Button base styles
- `input-base` - Input base styles

## 🚫 Missing Token Categories

The following are **NOT** present in `tokens.json`:

- ❌ Box shadows
- ❌ Motion/transitions (use Tailwind defaults)
- ❌ Z-index (use Tailwind defaults)
- ❌ Letter spacing (use Tailwind defaults)

## 🛠️ Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS 3.4** - Utility-first CSS
- **PostCSS** - CSS processing
- **class-variance-authority** - Variant management (recommended)

## 📦 Recommended Dependencies

For component development, install:

```bash
npm install class-variance-authority clsx tailwind-merge
```

**CVA** for variant management:
```tsx
import { cva } from 'class-variance-authority';

const buttonVariants = cva('btn-base', {
  variants: {
    variant: {
      primary: 'bg-bg-primary hover:bg-bg-primary-hover',
      secondary: 'bg-bg-secondary hover:bg-bg-secondary-hover',
    },
    size: {
      sm: 'h-8 px-3 text-action-small-medium',
      md: 'h-10 px-4 text-action-medium',
    },
  },
});
```

## 🎓 Best Practices

1. **Always use semantic tokens** - Never hardcode colors
2. **Stick to 4px grid** - Use predefined spacing values
3. **Use typography utilities** - Consistent text styling
4. **Include all states** - hover, active, focus, disabled
5. **Prioritize accessibility** - WCAG AA compliance, keyboard navigation
6. **Mobile-first responsive** - Start mobile, add breakpoints up

## 📖 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [class-variance-authority](https://cva.style/docs)

## 🤝 Contributing

When building new components:

1. Read `src/components/ui/README.md`
2. Follow the component development contract
3. Use only semantic tokens from the design system
4. Ensure 4px grid alignment
5. Test accessibility (keyboard, screen reader, contrast)
6. Document component variants and usage

## 📄 License

This project is private and proprietary.

---

**Built with ♥ using tokens.json**
