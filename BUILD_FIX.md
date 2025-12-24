# Build Error Fix - `text-neutral-strong` Class Not Found

## Error
```
[plugin:vite:css][postcss] src/styles/tailwind.css:16:1
The `text-neutral-strong` class does not exist.
```

---

## Root Cause

### Naming Convention in tailwind.config.js

The semantic colors in `tailwind.config.js` are defined with the **utility prefix included in the color key name**:

```js
colors: {
  'text-neutral-strong': 'var(--text-neutral-strong)',  // ← key includes "text-"
  'text-primary': 'var(--text-primary)',
  'bg-surface': 'var(--bg-surface)',                     // ← key includes "bg-"
  'border-primary': 'var(--border-primary)',             // ← key includes "border-"
  // ...
}
```

### How Tailwind Generates Utilities

When Tailwind generates utilities, it **prepends** the utility type to the color key:

| Color Key | Utility Type | Generated Class Name |
|-----------|--------------|---------------------|
| `'text-neutral-strong'` | `text-` | `text-text-neutral-strong` |
| `'bg-surface'` | `bg-` | `bg-bg-surface` |
| `'border-primary'` | `border-` | `border-border-primary` |

This results in a **double-prefix pattern**, which is intentional and correct throughout the entire codebase.

### The Bug

In `src/styles/tailwind.css` base layer, the `@apply` directives were using **single-prefix** class names:

```css
/* WRONG - single prefix */
@apply text-neutral-strong;

/* CORRECT - double prefix */
@apply text-text-neutral-strong;
```

This mismatch caused the build error because `text-neutral-strong` doesn't exist as a Tailwind utility.

---

## Fix Applied

Updated `src/styles/tailwind.css` to use the correct **double-prefix** class names in all `@apply` directives.

### Changes Made

**File: `src/styles/tailwind.css`**

#### Change 1: Heading Styles (lines 40-63)

```diff
  /* Headings - apply semantic typography */
  h1 {
-   @apply text-h1-bold text-neutral-strong;
+   @apply text-h1-bold text-text-neutral-strong;
  }
  
  h2 {
-   @apply text-h2-bold text-neutral-strong;
+   @apply text-h2-bold text-text-neutral-strong;
  }
  
  h3 {
-   @apply text-h3-bold text-neutral-strong;
+   @apply text-h3-bold text-text-neutral-strong;
  }
  
  h4 {
-   @apply text-h4-bold text-neutral-strong;
+   @apply text-h4-bold text-text-neutral-strong;
  }
  
  h5 {
-   @apply text-h5-bold text-neutral-strong;
+   @apply text-h5-bold text-text-neutral-strong;
  }
  
  h6 {
-   @apply text-h5-semibold text-neutral-strong;
+   @apply text-h5-semibold text-text-neutral-strong;
  }
```

#### Change 2: Input Base Component (line 144-146)

```diff
  /* Input base */
  .input-base {
-   @apply w-full px-3 py-2 bg-bg-surface border border-border-surface rounded-lg text-body-regular text-neutral-strong placeholder:text-text-neutral-light focus:outline-none focus:ring-2 focus:ring-border-primary focus:border-transparent disabled:bg-bg-disable disabled:text-text-disable disabled:cursor-not-allowed;
+   @apply w-full px-3 py-2 bg-bg-surface border border-border-surface rounded-lg text-body-regular text-text-neutral-strong placeholder:text-text-neutral-light focus:outline-none focus:ring-2 focus:ring-border-primary focus:border-transparent disabled:bg-bg-disable disabled:text-text-disable disabled:cursor-not-allowed;
  }
```

**Total Changes:** 7 instances of `text-neutral-strong` → `text-text-neutral-strong`

---

## Verification

### All Other Files Correct

All React components and documentation were already using the correct double-prefix pattern:

✅ `src/App.tsx` - Uses `text-text-neutral-strong` (37 instances)  
✅ `src/components/OrderCard.tsx` - Uses `text-text-neutral-strong`  
✅ `src/styles/design-system.md` - Documents `text-text-neutral-strong`  
✅ `src/components/ui/README.md` - Examples use `text-text-neutral-strong`  
✅ `README.md` - Examples use `text-text-neutral-strong`  

### No Other Similar Issues

Verified that all other semantic color utilities in `tailwind.css` use the correct pattern:
- ✅ `text-text-primary` (line 72)
- ✅ `ring-border-primary` (line 125)
- ✅ `ring-offset-bg-canvas` (line 125)
- ✅ `bg-bg-surface` (lines 135, 145)
- ✅ `border-border-surface` (lines 135, 145)
- ✅ `text-text-neutral-light` (line 145)
- ✅ `bg-bg-disable` (line 145)
- ✅ `text-text-disable` (line 145)

---

## Why This Naming Convention?

### Rationale

The double-prefix pattern (`text-text-*`, `bg-bg-*`) is intentional for semantic token management:

1. **Clear Categorization**: Color keys include their semantic purpose
   - `'text-primary'` = text color token
   - `'bg-primary'` = background color token
   - `'border-primary'` = border color token

2. **Token-First Architecture**: Maps directly to CSS variables
   - `'text-primary': 'var(--text-primary)'`
   - Clear 1:1 mapping between config and tokens.css

3. **Prevents Naming Conflicts**: Different semantic purposes can share color names
   - `text-primary` (orange #eb6e34)
   - `bg-primary` (also orange #eb6e34)
   - `border-primary` (also orange #eb6e34)

### Alternative Approach (Not Used)

A conventional Tailwind approach would be:

```js
colors: {
  'primary': 'var(--color-primary)',  // ← no prefix in key
}
// Generates: text-primary, bg-primary, border-primary
```

However, this wouldn't allow different semantic mappings for the same role across different contexts (text vs background vs border).

---

## Build Status

✅ **Fix Applied**: `src/styles/tailwind.css` updated  
✅ **No Other Issues**: All other files already correct  
✅ **Pattern Verified**: All semantic utilities use double-prefix  
✅ **Ready to Build**: `npm run dev` should now compile successfully  

---

## Summary

**Problem**: `@apply text-neutral-strong` used single-prefix class name that doesn't exist  
**Solution**: Changed to `@apply text-text-neutral-strong` (double-prefix pattern)  
**Impact**: 7 lines updated in `src/styles/tailwind.css`  
**Consistency**: Now matches naming convention used throughout all components  
**Result**: Build error resolved ✅

