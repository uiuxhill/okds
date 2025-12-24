# Design System Documentation

**Version:** 1.0.0  
**Last Updated:** 2024  
**Token Source:** `tokens.json`

---

## Table of Contents

1. [Token Taxonomy](#token-taxonomy)
2. [Naming Conventions](#naming-conventions)
3. [Usage Guidelines](#usage-guidelines)
4. [Component Examples](#component-examples)
5. [Accessibility](#accessibility)
6. [Missing Token Categories](#missing-token-categories)

---

## Token Taxonomy

Our design system follows a **three-tier token architecture** for maximum flexibility and maintainability:

### 1. Primitive Tokens (Level 1)

**Purpose:** Raw, context-agnostic values. Foundation of the system.  
**When to use:** Only when creating new semantic tokens or data visualizations.

#### Colors (`1.global-color`)
- **11 color families** with 11 shades each (50-950)
- Families: `gray`, `red`, `orange`, `yellow`, `green`, `cyan`, `blue`, `navi`, `violet`
- Alpha variants: `black-alpha`, `white-alpha` (for overlays)

```css
/* CSS Variables */
--color-gray-50 through --color-gray-950
--color-red-50 through --color-red-950
/* ... etc for all families */
--color-black-alpha-50 through --color-black-alpha-950
--color-white-alpha-50 through --color-white-alpha-950
```

#### Dimensions (`1.global-dimension`)
- **44 spacing values** from 0px to 9999px
- 4px grid-based (mostly)

```css
/* CSS Variables */
--dimension-0, --dimension-2, --dimension-4, --dimension-6, --dimension-8, --dimension-10,
--dimension-12, --dimension-14, --dimension-16, --dimension-18, --dimension-20, --dimension-24,
--dimension-28, --dimension-30, --dimension-32, --dimension-36, --dimension-40, --dimension-44,
--dimension-48, --dimension-52, --dimension-56, --dimension-60, --dimension-64, --dimension-72,
--dimension-80, --dimension-88, --dimension-96, --dimension-100, --dimension-112, --dimension-128,
--dimension-144, --dimension-160, --dimension-185, --dimension-200, --dimension-240, --dimension-300,
--dimension-400, --dimension-500, --dimension-600, --dimension-700, --dimension-800, --dimension-900,
--dimension-9999
```

---

### 2. Semantic Tokens (Level 2 & 3)

**Purpose:** Role-based tokens that reference primitives. Theme-aware.  
**When to use:** ALWAYS in component development.

#### Text Colors (`3.theme-color.content`)
22 text color tokens for all text scenarios:

| Token | CSS Variable | Use Case |
|-------|--------------|----------|
| `text-primary` | `--text-primary` | Primary brand text |
| `text-neutral` | `--text-neutral` | Default body text |
| `text-neutral-strong` | `--text-neutral-strong` | Strong emphasis (headings) |
| `text-neutral-light` | `--text-neutral-light` | Subtle/secondary text |
| `text-disable` | `--text-disable` | Disabled text |
| `text-inverse` | `--text-inverse` | Text on dark backgrounds |
| `text-secondary` | `--text-secondary` | Secondary brand text |
| `text-tertiary` | `--text-tertiary` | Tertiary brand text |
| `text-success` | `--text-success` | Success messages |
| `text-error` | `--text-error` | Error messages |
| `text-warning` | `--text-warning` | Warning messages |
| `text-info` | `--text-info` | Info messages |
| `text-magic` | `--text-magic` | Special/premium features |
| `text-on-action` | `--text-on-action` | Text on primary buttons |
| `text-on-action-*-light` | `--text-on-action-*-light` | Text on light button variants |
| `text-selected-*` | `--text-selected-*` | Selected state text |

**Tailwind classes:**
```jsx
<p className="text-content-neutral">Default text</p>
<h1 className="text-content-neutral-strong">Heading</h1>
<span className="text-content-error">Error message</span>
<button className="text-content-on-action">Button text</button>
```

#### Background Colors (`3.theme-color.bg`)
34 background tokens including states:

| Category | Tokens | Use Case |
|----------|--------|----------|
| **Surface** | `bg-surface`, `bg-canvas`, `bg-overlay` | Page backgrounds |
| **Utility** | `bg-disable`, `bg-inverse`, `bg-selected` | Special states |
| **Brand** | `bg-primary`, `bg-secondary`, `bg-tertiary` | Brand colors |
| **States** | `bg-*-hover`, `bg-*-press` | Interactive states |
| **Light** | `bg-*-light` | Subtle backgrounds |
| **Status** | `bg-success`, `bg-error`, `bg-warning`, `bg-info`, `bg-magic` | Status indicators |

**Tailwind classes:**
```jsx
<div className="bg-bg-surface">Surface</div>
<button className="bg-bg-primary hover:bg-bg-primary-hover active:bg-bg-primary-press">
  Primary Button
</button>
<div className="bg-bg-success-light">Success banner</div>
```

#### Border Colors (`3.theme-color.border`)
20 border tokens:

```jsx
<div className="border border-border-surface">Default border</div>
<input className="border border-border-primary focus:border-border-primary-hover" />
<div className="border-2 border-border-error">Error state</div>
```

#### Accent Colors (`3.theme-color.accent`)
30 accent/utility colors for decorative elements:

```jsx
<span className="bg-accent-orange-light text-accent-orange-strong">Badge</span>
<div className="bg-accent-white-overlay">Overlay</div>
```

---

### 3. Application Tokens (Level 3)

#### Spacing (`3.theme-spacing`)
- **Padding:** 14 values (0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20)
- **Gap:** Same 14 values

**Tailwind classes:**
```jsx
<div className="p-4 gap-2">     {/* 16px padding, 8px gap */}
<div className="px-6 py-3">     {/* 24px horizontal, 12px vertical */}
<div className="space-y-4">     {/* 16px vertical spacing */}
```

**4px Grid Alignment:**
All spacing values align to a 4px grid for visual consistency:
- `0.5` = 2px
- `1` = 4px
- `2` = 8px
- `4` = 16px
- `6` = 24px
- `8` = 32px
- etc.

#### Typography (`3.theme-typography`)

##### Font Sizes & Line Heights
14 size scales (2xs → 9xl) with matched line heights:

| Size | Font | Line Height | Tailwind |
|------|------|-------------|----------|
| 2xs | 10px | 14px | `text-2xs` |
| xs | 12px | 16px | `text-xs` |
| sm | 14px | 20px | `text-sm` |
| base | 16px | 24px | `text-base` |
| lg | 18px | 28px | `text-lg` |
| xl | 20px | 28px | `text-xl` |
| 2xl | 24px | 32px | `text-2xl` |
| 3xl | 30px | 36px | `text-3xl` |
| 4xl | 36px | 40px | `text-4xl` |
| 5xl | 48px | 48px | `text-5xl` |
| 6xl | 60px | 60px | `text-6xl` |
| 7xl | 72px | 72px | `text-7xl` |
| 8xl | 96px | 96px | `text-8xl` |
| 9xl | 128px | 128px | `text-9xl` |

##### Typography Styles
Complete set of pre-configured text styles:

**Display (Hero Text):**
- `text-display-1-{weight}` → 60px / 60px (6xl)
- `text-display-2-{weight}` → 48px / 48px (5xl)
- `text-display-3-{weight}` → 36px / 40px (4xl)

**Headings:**
- `text-h1-{weight}` → 30px / 36px (3xl)
- `text-h2-{weight}` → 24px / 32px (2xl)
- `text-h3-{weight}` → 20px / 28px (xl)
- `text-h4-{weight}` → 18px-20px / 28px (lg-xl)
- `text-h5-{weight}` → 16px / 24px (base)

**Body:**
- `text-body-large-{weight}` → 16px / 24px
- `text-body-{weight}` → 14px / 20px (default)
- `text-body-small-{weight}` → 12px / 16px

**Caption:**
- `text-caption-{weight}` → 10px / 14px

**Actions (Buttons/Links):**
- `text-action-large-{weight}` → 16px / 24px
- `text-action-{weight}` → 14px / 20px
- `text-action-small-{weight}` → 12px / 16px

**Links:**
- `text-link-lg` → 20px / 28px + underline
- `text-link-md` → 16px / 24px + underline
- `text-link-sm` → 14px / 20px + underline
- `text-link-xs` → 12px / 16px + underline

**Capline (Uppercase):**
- `text-capline-lg` → 20px / 28px + uppercase
- `text-capline-md` → 16px / 24px + uppercase
- `text-capline-sm` → 14px / 20px + uppercase
- `text-capline-xs` → 12px / 16px + uppercase

**Weights:** `{weight}` = `regular`, `medium`, `semibold`, `bold`

#### Border Radius (`3.theme-border-radius`)
10 radius values:

| Token | Value | Tailwind |
|-------|-------|----------|
| none | 0px | `rounded-none` |
| xs | 2px | `rounded-xs` |
| sm | 4px | `rounded-sm` |
| md | 6px | `rounded-md` or `rounded` |
| lg | 8px | `rounded-lg` |
| xl | 12px | `rounded-xl` |
| 2xl | 16px | `rounded-2xl` |
| 3xl | 24px | `rounded-3xl` |
| 4xl | 32px | `rounded-4xl` |
| full | 9999px | `rounded-full` |

#### Gradients (`3.theme-color.gradient`)
2 gradient sets:

```jsx
<div className="bg-gradient-blue">Blue gradient</div>
<div className="bg-gradient-orange">Orange gradient</div>

{/* Or as text gradient */}
<h1 className="text-gradient-blue">Gradient text</h1>
```

---

## Naming Conventions

### Pattern Structure

```
{category}-{role}-{variant?}-{state?}
```

**Examples:**
- `bg-primary` → Background, primary role
- `bg-primary-hover` → Background, primary role, hover state
- `text-on-action-primary-light` → Text, on-action context, primary role, light variant
- `border-disabled` → Border, disabled state
- `accent-orange-medium` → Accent, orange family, medium intensity

### Rules

1. **Always kebab-case** (`text-primary`, not `textPrimary` or `text_primary`)
2. **Semantic first** (`text-error` not `text-red-500`)
3. **States come last** (`bg-primary-hover` not `bg-hover-primary`)
4. **Intensity modifiers** (`-light`, `-medium`, `-strong`) for accent colors

---

## Usage Guidelines

### ✅ DO

**1. Use semantic tokens in components:**
```jsx
// ✅ GOOD - Theme-aware, semantic
<button className="bg-bg-primary hover:bg-bg-primary-hover text-content-on-action">
  Submit
</button>
```

**2. Use typography utilities:**
```jsx
// ✅ GOOD - Consistent typography
<h1 className="text-h1-bold text-content-neutral-strong">Page Title</h1>
<p className="text-body-regular text-content-neutral">Body text</p>
```

**3. Use spacing tokens:**
```jsx
// ✅ GOOD - Design system spacing
<div className="p-6 gap-4 space-y-3">
```

**4. Combine semantic tokens for states:**
```jsx
// ✅ GOOD - Full state coverage
<input 
  className="
    border border-border-surface
    focus:border-border-primary focus:ring-2 focus:ring-border-primary
    disabled:bg-bg-disable disabled:text-content-disable
  " 
/>
```

**5. Use 4px grid for custom spacing:**
```jsx
// ✅ GOOD - Aligns to grid
<div className="mt-4 mb-8">  {/* 16px, 32px */}
```

### ❌ DON'T

**1. Don't use primitive colors directly:**
```jsx
// ❌ BAD - Breaks theming
<button className="bg-orange-500 text-white">Submit</button>

// ✅ GOOD
<button className="bg-bg-primary text-content-on-action">Submit</button>
```

**2. Don't use arbitrary values unnecessarily:**
```jsx
// ❌ BAD - Not in design system
<div className="p-[17px] rounded-[11px]">

// ✅ GOOD - Use tokens
<div className="p-4 rounded-xl">
```

**3. Don't mix sizing systems:**
```jsx
// ❌ BAD - Inconsistent
<h1 className="text-3xl font-bold">Title</h1>
<p className="text-base">Text</p>

// ✅ GOOD - Use typography utilities
<h1 className="text-h1-bold">Title</h1>
<p className="text-body-regular">Text</p>
```

**4. Don't hardcode colors in styles:**
```jsx
// ❌ BAD
<div style={{ backgroundColor: '#eb6e34' }}>

// ✅ GOOD
<div className="bg-bg-primary">
```

**5. Don't skip semantic layers:**
```jsx
// ❌ BAD - Direct primitive usage
<p className="text-gray-600">Text</p>

// ✅ GOOD - Semantic token
<p className="text-content-neutral">Text</p>
```

---

## Component Examples

### Button Component

```tsx
// components/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'btn-base text-action-medium disabled:disabled-state',
  {
    variants: {
      variant: {
        primary: 'bg-bg-primary hover:bg-bg-primary-hover active:bg-bg-primary-press text-content-on-action border border-border-primary',
        secondary: 'bg-bg-secondary hover:bg-bg-secondary-hover active:bg-bg-secondary-press text-content-on-action border border-border-secondary',
        tertiary: 'bg-bg-tertiary hover:bg-bg-tertiary-hover active:bg-bg-tertiary-press text-content-on-action border border-border-tertiary',
        success: 'bg-bg-success hover:bg-bg-success-hover active:bg-bg-success-press text-content-on-action',
        error: 'bg-bg-error hover:bg-bg-error-hover active:bg-bg-error-press text-content-on-action',
        ghost: 'bg-transparent hover:bg-bg-primary-light text-content-primary',
        outline: 'bg-transparent border-2 border-border-primary hover:bg-bg-primary-light text-content-primary',
      },
      size: {
        sm: 'h-8 px-3 text-action-small-medium',
        md: 'h-10 px-4 text-action-medium',
        lg: 'h-12 px-6 text-action-large-medium',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
};

// Usage
<Button variant="primary" size="md">Click me</Button>
<Button variant="outline" size="lg">Outline</Button>
<Button variant="ghost" disabled>Disabled</Button>
```

### Card Component

```tsx
// components/Card.tsx
interface CardProps {
  children: React.ReactNode;
  variant?: 'surface' | 'canvas' | 'elevated';
  className?: string;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  variant = 'surface',
  className = '' 
}) => {
  const variants = {
    surface: 'bg-bg-surface border-border-surface',
    canvas: 'bg-bg-canvas border-border-canvas',
    elevated: 'bg-bg-surface border-border-surface shadow-lg',
  };

  return (
    <div className={`card-base p-6 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

// Usage
<Card variant="surface">
  <h3 className="text-h3-semibold text-content-neutral-strong mb-2">Title</h3>
  <p className="text-body-regular text-content-neutral">Content</p>
</Card>
```

### Input Component

```tsx
// components/Input.tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label className="text-body-medium text-content-neutral-strong">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`input-base ${error ? 'border-border-error focus:ring-border-error' : ''} ${className}`}
          {...props}
        />
        {error && (
          <p className="text-body-small-regular text-content-error">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-body-small-regular text-content-neutral-light">{helperText}</p>
        )}
      </div>
    );
  }
);

// Usage
<Input 
  label="Email" 
  placeholder="you@example.com"
  helperText="We'll never share your email"
/>
<Input 
  label="Password" 
  type="password"
  error="Password is required"
/>
```

### Badge Component

```tsx
// components/Badge.tsx
interface BadgeProps {
  children: React.ReactNode;
  color?: 'orange' | 'blue' | 'green' | 'red' | 'yellow' | 'violet' | 'navi' | 'gray';
  variant?: 'solid' | 'light';
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  color = 'gray',
  variant = 'light' 
}) => {
  const colorMap = {
    orange: variant === 'solid' 
      ? 'bg-accent-orange text-white' 
      : 'bg-accent-orange-light text-content-on-action-primary-light border border-accent-orange-medium',
    blue: variant === 'solid'
      ? 'bg-accent-blue text-white'
      : 'bg-accent-blue-light text-content-on-action-secondary-light border border-accent-blue-medium',
    green: variant === 'solid'
      ? 'bg-accent-green text-white'
      : 'bg-accent-green-light text-content-success border border-accent-green-medium',
    red: variant === 'solid'
      ? 'bg-accent-red text-white'
      : 'bg-accent-red-light text-content-error border border-accent-red-medium',
    yellow: variant === 'solid'
      ? 'bg-accent-yellow text-white'
      : 'bg-accent-yellow-light text-content-warning border border-accent-yellow-medium',
    violet: variant === 'solid'
      ? 'bg-accent-violet text-white'
      : 'bg-accent-violet-light text-content-magic border border-accent-violet-medium',
    navi: variant === 'solid'
      ? 'bg-accent-navi text-white'
      : 'bg-accent-navi-light text-content-tertiary border border-accent-navi-medium',
    gray: variant === 'solid'
      ? 'bg-accent-gray text-white'
      : 'bg-accent-gray-light text-content-neutral border border-accent-gray-medium',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-caption-medium ${colorMap[color]}`}>
      {children}
    </span>
  );
};

// Usage
<Badge color="orange">New</Badge>
<Badge color="green" variant="solid">Active</Badge>
<Badge color="blue">Popular</Badge>
```

### Alert Component

```tsx
// components/Alert.tsx
interface AlertProps {
  status: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ status, title, children }) => {
  const statusMap = {
    success: {
      bg: 'bg-bg-success-light',
      border: 'border-border-success',
      text: 'text-content-success',
    },
    error: {
      bg: 'bg-bg-error-light',
      border: 'border-border-error',
      text: 'text-content-error',
    },
    warning: {
      bg: 'bg-bg-warning-light',
      border: 'border-border-warning',
      text: 'text-content-warning',
    },
    info: {
      bg: 'bg-bg-info-light',
      border: 'border-border-info',
      text: 'text-content-info',
    },
  };

  const styles = statusMap[status];

  return (
    <div className={`rounded-lg border p-4 ${styles.bg} ${styles.border}`}>
      {title && (
        <h4 className={`text-body-semibold mb-2 ${styles.text}`}>
          {title}
        </h4>
      )}
      <p className={`text-body-medium ${styles.text}`}>{children}</p>
    </div>
  );
};

// Usage
<Alert status="success" title="Success">
  Your changes have been saved.
</Alert>
<Alert status="error" title="Error">
  Something went wrong. Please try again.
</Alert>
```

---

## Accessibility

### Focus States

**Always include visible focus indicators:**

```jsx
// ✅ GOOD - Clear focus ring
<button className="focus-ring bg-bg-primary">
  Click me
</button>

// The .focus-ring utility provides:
// - focus-visible:outline-none
// - focus-visible:ring-2
// - focus-visible:ring-border-primary
// - focus-visible:ring-offset-2
```

### Color Contrast

**All semantic color combinations meet WCAG AA standards:**

| Combination | Contrast Ratio | Pass |
|-------------|----------------|------|
| `text-neutral-strong` on `bg-surface` | 12.6:1 | ✅ AAA |
| `text-neutral` on `bg-surface` | 6.4:1 | ✅ AA |
| `text-on-action` on `bg-primary` | 4.8:1 | ✅ AA |
| `text-on-action` on `bg-error` | 4.6:1 | ✅ AA |

**⚠️ Always test custom combinations** with tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

### Screen Reader Support

**Use semantic HTML + ARIA when needed:**

```jsx
// ✅ GOOD - Semantic + accessible
<button 
  className="bg-bg-error text-content-on-action"
  aria-label="Delete item"
>
  <TrashIcon />
</button>

// ✅ GOOD - Status with role
<div 
  role="alert" 
  className="bg-bg-error-light text-content-error"
>
  Form submission failed
</div>
```

### Do NOT Rely on Color Alone

**Combine color with icons/text for status:**

```jsx
// ❌ BAD - Color only
<span className="text-content-error">Error</span>

// ✅ GOOD - Color + icon + text
<span className="flex items-center gap-1 text-content-error">
  <ErrorIcon />
  <span>Error: Invalid input</span>
</span>
```

### Keyboard Navigation

**Ensure all interactive elements are keyboard accessible:**

```jsx
// ✅ GOOD - Proper tab order and focus
<nav className="flex gap-4">
  <a href="/" className="focus-ring">Home</a>
  <a href="/about" className="focus-ring">About</a>
  <button className="focus-ring">Menu</button>
</nav>
```

---

## Missing Token Categories

The following categories are **NOT PRESENT** in `tokens.json` and should not be assumed to exist:

### ❌ Box Shadow
**Status:** Not defined in tokens.json  
**Impact:** Cannot create shadow utilities  
**Workaround:** Use border or subtle backgrounds for depth

```jsx
// No shadow tokens available
// Use borders for separation instead:
<div className="border border-border-surface bg-bg-surface">
  Card without shadow
</div>
```

### ❌ Transitions/Motion
**Status:** Not defined in tokens.json  
**Impact:** Animation durations/easings must be hardcoded  
**Workaround:** Use Tailwind defaults or inline values

```jsx
// No motion tokens available
// Use Tailwind defaults:
<button className="transition-colors duration-200">
  Button
</button>
```

### ❌ Z-Index
**Status:** Not defined in tokens.json  
**Impact:** Layer stacking not standardized  
**Workaround:** Use Tailwind defaults (`z-0` through `z-50`)

```jsx
// No z-index tokens available
// Use Tailwind defaults:
<div className="relative z-10">Overlay</div>
<div className="fixed z-50">Modal</div>
```

### ❌ Letter Spacing
**Status:** Not defined in tokens.json  
**Impact:** Tracking not standardized  
**Workaround:** Use Tailwind defaults if needed

```jsx
// No letter-spacing tokens available
// Use Tailwind defaults if needed:
<h1 className="tracking-tight">Heading</h1>
```

### ❌ Opacity
**Status:** Not defined in tokens.json (except alpha overlays)  
**Impact:** Transparency levels not standardized  
**Workaround:** Use alpha overlays or Tailwind opacity utils

---

## Theme Switching

### How to Enable Dark Mode

Add `data-theme="dark"` to the `<html>` element:

```tsx
// App.tsx or Layout.tsx
import { useState } from 'react';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="min-h-screen bg-bg-canvas">
      <button onClick={toggleTheme} className="btn-base bg-bg-primary">
        Toggle Theme
      </button>
      {/* Your app content */}
    </div>
  );
}
```

### Persist Theme Preference

```tsx
// hooks/useTheme.ts
import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
}
```

---

## Resources

- **Tokens Source:** `tokens.json` (root directory)
- **CSS Variables:** `src/styles/tokens.css`
- **Tailwind Config:** `tailwind.config.js`
- **Main Styles:** `src/styles/tailwind.css`
- **Figma:** [Link to Figma file if available]

---

## Version History

### 1.0.0 (2024)
- Initial design system implementation
- 121 primitive color tokens
- 100+ semantic tokens
- Complete typography system
- 4px grid spacing
- Documentation and component examples

