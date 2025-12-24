# UI Component Development Contract

**Version:** 1.0.0  
**Last Updated:** 2024

This document defines the rules and guidelines for building UI components that integrate with our design system.

---

## Core Principles

### 1. Token-First Development

**All visual properties MUST come from design tokens.**

```tsx
// ✅ GOOD - Token-driven
export const Button = () => (
  <button className="bg-bg-primary text-content-on-action rounded-lg px-4 py-2">
    Click me
  </button>
);

// ❌ BAD - Hardcoded values
export const Button = () => (
  <button style={{ backgroundColor: '#eb6e34', color: 'white', borderRadius: '8px' }}>
    Click me
  </button>
);
```

### 2. 4px Grid Alignment

**All dimensions must align to a 4px grid.**

| Valid | Invalid |
|-------|---------|
| `p-4` (16px) | `p-[17px]` |
| `h-10` (40px) | `h-[43px]` |
| `gap-2` (8px) | `gap-[9px]` |
| `rounded-lg` (8px) | `rounded-[11px]` |

**Available spacing values (4px grid):**
- `0` → 0px
- `0.5` → 2px
- `1` → 4px
- `1.5` → 6px
- `2` → 8px
- `2.5` → 10px
- `3` → 12px
- `4` → 16px
- `5` → 20px
- `6` → 24px
- `8` → 32px
- `10` → 40px
- `12` → 48px
- `16` → 64px
- `20` → 80px

### 3. Semantic Tokens Only

**Never use primitive color tokens (gray-500, orange-600, etc.) directly in components.**

```tsx
// ✅ GOOD - Semantic tokens
<div className="bg-bg-surface text-content-neutral border-border-surface">
  Content
</div>

// ❌ BAD - Primitive tokens
<div className="bg-white text-gray-600 border-gray-200">
  Content
</div>
```

### 4. Typography Utilities

**Use predefined typography utilities instead of custom font sizing.**

```tsx
// ✅ GOOD - Typography utilities
<h1 className="text-h1-bold">Heading</h1>
<p className="text-body-regular">Paragraph</p>
<button className="text-action-medium">Button</button>

// ❌ BAD - Custom sizing
<h1 className="text-3xl font-bold">Heading</h1>
<p className="text-base">Paragraph</p>
<button className="text-sm font-medium">Button</button>
```

### 5. Radius Tokens Only

**Use design system border radius tokens.**

```tsx
// ✅ GOOD - Radius tokens
<div className="rounded-lg">      {/* 8px */}
<div className="rounded-xl">      {/* 12px */}
<div className="rounded-full">    {/* 9999px */}

// ❌ BAD - Arbitrary values
<div className="rounded-[10px]">
<div className="rounded-[15px]">
```

---

## Component Checklist

Before submitting a component, verify:

- [ ] Uses only semantic color tokens (`text-*`, `bg-*`, `border-*`)
- [ ] All spacing aligns to 4px grid
- [ ] Uses typography utilities (`text-h1-bold`, `text-body-regular`, etc.)
- [ ] Uses radius tokens (`rounded-lg`, `rounded-xl`, etc.)
- [ ] No hardcoded colors in CSS/inline styles
- [ ] Includes hover/active/disabled states where applicable
- [ ] Has focus-visible styles (use `.focus-ring` utility)
- [ ] Accessible (semantic HTML, ARIA labels, keyboard navigation)
- [ ] Responsive (mobile-first approach)
- [ ] TypeScript types defined
- [ ] Documented with usage examples

---

## Component Variants Pattern

Use **class-variance-authority** (CVA) for variant management:

```tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  // Base styles (always applied)
  'btn-base text-action-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-bg-primary hover:bg-bg-primary-hover text-content-on-action',
        secondary: 'bg-bg-secondary hover:bg-bg-secondary-hover text-content-on-action',
        outline: 'border-2 border-border-primary text-content-primary hover:bg-bg-primary-light',
        ghost: 'text-content-primary hover:bg-bg-primary-light',
      },
      size: {
        sm: 'h-8 px-3 text-action-small-medium',
        md: 'h-10 px-4 text-action-medium',
        lg: 'h-12 px-6 text-action-large-medium',
      },
      disabled: {
        true: 'disabled-state',
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
  disabled,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      disabled={disabled}
      {...props}
    />
  );
};
```

---

## Standard Component Variants

### Button Variants

| Variant | Use Case | Classes |
|---------|----------|---------|
| `primary` | Primary actions | `bg-bg-primary hover:bg-bg-primary-hover text-content-on-action` |
| `secondary` | Secondary actions | `bg-bg-secondary hover:bg-bg-secondary-hover text-content-on-action` |
| `tertiary` | Tertiary actions | `bg-bg-tertiary hover:bg-bg-tertiary-hover text-content-on-action` |
| `success` | Positive actions | `bg-bg-success hover:bg-bg-success-hover text-content-on-action` |
| `error` | Destructive actions | `bg-bg-error hover:bg-bg-error-hover text-content-on-action` |
| `ghost` | Subtle actions | `text-content-primary hover:bg-bg-primary-light` |
| `outline` | Secondary emphasis | `border-2 border-border-primary text-content-primary hover:bg-bg-primary-light` |

### Card Variants

| Variant | Use Case | Classes |
|---------|----------|---------|
| `surface` | Default cards | `bg-bg-surface border-border-surface` |
| `canvas` | Nested cards | `bg-bg-canvas border-border-canvas` |
| `elevated` | Modal/popover | `bg-bg-surface border-border-surface shadow-lg` |

### Alert Variants

| Variant | Use Case | Classes |
|---------|----------|---------|
| `success` | Success messages | `bg-bg-success-light border-border-success text-content-success` |
| `error` | Error messages | `bg-bg-error-light border-border-error text-content-error` |
| `warning` | Warning messages | `bg-bg-warning-light border-border-warning text-content-warning` |
| `info` | Info messages | `bg-bg-info-light border-border-info text-content-info` |

### Badge Variants

| Color | Solid | Light |
|-------|-------|-------|
| `orange` | `bg-accent-orange text-white` | `bg-accent-orange-light text-content-on-action-primary-light` |
| `blue` | `bg-accent-blue text-white` | `bg-accent-blue-light text-content-on-action-secondary-light` |
| `green` | `bg-accent-green text-white` | `bg-accent-green-light text-content-success` |
| `red` | `bg-accent-red text-white` | `bg-accent-red-light text-content-error` |
| `yellow` | `bg-accent-yellow text-white` | `bg-accent-yellow-light text-content-warning` |

---

## Interactive States

### Required States

Every interactive component MUST handle:

1. **Default** - Normal state
2. **Hover** - Mouse over (`:hover`)
3. **Active** - Mouse down (`:active`)
4. **Focus** - Keyboard focus (`:focus-visible`)
5. **Disabled** - Non-interactive (`disabled` prop)

### State Implementation Example

```tsx
<button
  className="
    /* Default */
    bg-bg-primary text-content-on-action border border-border-primary rounded-lg px-4 py-2
    
    /* Hover */
    hover:bg-bg-primary-hover hover:border-border-primary-hover
    
    /* Active */
    active:bg-bg-primary-press active:border-border-primary-press
    
    /* Focus */
    focus-ring
    
    /* Disabled */
    disabled:bg-bg-disable disabled:text-content-disable disabled:border-border-disabled disabled:cursor-not-allowed
    
    /* Transition */
    transition-colors duration-200
  "
>
  Click me
</button>
```

---

## Accessibility Requirements

### 1. Semantic HTML

Use appropriate HTML elements:

```tsx
// ✅ GOOD
<button onClick={handleClick}>Click</button>
<nav><a href="/">Home</a></nav>
<label htmlFor="email">Email</label>

// ❌ BAD
<div onClick={handleClick}>Click</div>
<div><span onClick={goHome}>Home</span></div>
<span>Email</span>
```

### 2. ARIA Attributes

Add ARIA when semantic HTML isn't enough:

```tsx
// Icon-only button
<button aria-label="Close dialog" className="...">
  <XIcon />
</button>

// Loading state
<button aria-busy="true" aria-label="Loading...">
  <Spinner />
</button>

// Toggle button
<button 
  aria-pressed={isActive}
  onClick={toggle}
>
  {isActive ? 'Active' : 'Inactive'}
</button>
```

### 3. Focus Management

**Always provide visible focus indicators:**

```tsx
// Use the .focus-ring utility (already includes proper focus styles)
<button className="focus-ring ...">Button</button>

// Or manually:
<input 
  className="
    focus:outline-none 
    focus:ring-2 
    focus:ring-border-primary 
    focus:ring-offset-2
  " 
/>
```

### 4. Color Contrast

**Verify all color combinations meet WCAG AA (4.5:1 for text, 3:1 for UI).**

Test with:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Browser DevTools (Lighthouse)

### 5. Keyboard Navigation

**All interactive elements must be keyboard accessible:**

```tsx
// ✅ GOOD - Native button (keyboard accessible)
<button onClick={handleClick}>Click</button>

// ⚠️ ACCEPTABLE - Custom element with keyboard support
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Click
</div>

// ❌ BAD - Not keyboard accessible
<div onClick={handleClick}>Click</div>
```

---

## Responsive Design

### Mobile-First Approach

Always design for mobile first, then add breakpoints:

```tsx
<div className="
  /* Mobile (default) */
  flex flex-col gap-2 p-4
  
  /* Tablet (768px+) */
  md:flex-row md:gap-4 md:p-6
  
  /* Desktop (1024px+) */
  lg:gap-6 lg:p-8
">
  Content
</div>
```

### Tailwind Breakpoints

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

---

## Component File Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button/
│   │   │   ├── Button.tsx          # Component implementation
│   │   │   ├── Button.test.tsx     # Unit tests
│   │   │   ├── Button.stories.tsx  # Storybook stories (if applicable)
│   │   │   └── index.ts            # Exports
│   │   ├── Card/
│   │   ├── Input/
│   │   └── README.md               # This file
│   └── ...
```

### Component Template

```tsx
// Button/Button.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'btn-base',
  {
    variants: {
      // Define variants
    },
    defaultVariants: {
      // Define defaults
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // Additional props
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
```

```ts
// Button/index.ts
export { Button, type ButtonProps } from './Button';
```

---

## Testing Checklist

### Visual Testing

- [ ] Component renders correctly in all variants
- [ ] Spacing aligns to 4px grid
- [ ] Colors match design tokens
- [ ] Typography is correct
- [ ] Responsive on mobile/tablet/desktop

### Functional Testing

- [ ] onClick/onChange handlers work
- [ ] Controlled/uncontrolled modes work
- [ ] Props are properly typed
- [ ] Ref forwarding works

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Focus indicator is visible
- [ ] Color contrast passes WCAG AA
- [ ] Works with keyboard only (no mouse)

### Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## Common Patterns

### Form Field Wrapper

```tsx
// components/FormField.tsx
interface FormFieldProps {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  helperText,
  required,
  children,
}) => {
  return (
    <div className="space-y-1.5">
      <label className="text-body-medium text-content-neutral-strong">
        {label}
        {required && <span className="text-content-error ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-body-small-regular text-content-error">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-body-small-regular text-content-neutral-light">{helperText}</p>
      )}
    </div>
  );
};

// Usage
<FormField label="Email" error={errors.email} required>
  <Input {...register('email')} />
</FormField>
```

### Compound Components

```tsx
// components/Card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`card-base p-6 ${className}`}>{children}</div>
);

const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

const CardTitle: React.FC<CardProps> = ({ children, className = '' }) => (
  <h3 className={`text-h3-semibold text-content-neutral-strong ${className}`}>
    {children}
  </h3>
);

const CardContent: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={className}>{children}</div>
);

const CardFooter: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`mt-4 flex items-center gap-2 ${className}`}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

// Usage
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Content>
    <p className="text-body-regular">Content</p>
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

---

## Anti-Patterns (Don't Do This)

### ❌ Mixing Token Systems

```tsx
// BAD - Mixing primitive and semantic tokens
<div className="bg-orange-500 text-content-on-action">
  Mixed tokens
</div>

// GOOD - All semantic
<div className="bg-bg-primary text-content-on-action">
  Consistent tokens
</div>
```

### ❌ Inline Styles with Hardcoded Values

```tsx
// BAD - Hardcoded colors
<div style={{ backgroundColor: '#eb6e34' }}>
  Content
</div>

// GOOD - Token-based
<div className="bg-bg-primary">
  Content
</div>
```

### ❌ Off-Grid Spacing

```tsx
// BAD - Not 4px grid aligned
<div className="p-[17px] mb-[23px]">
  Content
</div>

// GOOD - 4px grid aligned
<div className="p-4 mb-6">
  Content
</div>
```

### ❌ Missing States

```tsx
// BAD - No hover/focus/disabled states
<button className="bg-bg-primary">
  Click
</button>

// GOOD - All states covered
<button className="
  bg-bg-primary 
  hover:bg-bg-primary-hover 
  active:bg-bg-primary-press
  focus-ring
  disabled:disabled-state
">
  Click
</button>
```

### ❌ Non-Accessible Interactive Elements

```tsx
// BAD - Div as button (not keyboard accessible)
<div onClick={handleClick} className="cursor-pointer">
  Click me
</div>

// GOOD - Proper button element
<button onClick={handleClick}>
  Click me
</button>
```

---

## Resources

- **Design System Docs:** `src/styles/design-system.md`
- **Tokens:** `src/styles/tokens.css`
- **Tailwind Config:** `tailwind.config.js`
- **CVA Docs:** https://cva.style/docs
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/

---

## Questions?

If you encounter a scenario not covered in this guide:

1. Check `src/styles/design-system.md` for token guidance
2. Review existing components for patterns
3. Ask in #design-system channel
4. When in doubt, prioritize accessibility and token consistency

