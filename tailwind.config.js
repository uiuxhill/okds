/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  
  // Use data-theme attribute for theme switching
  darkMode: ['class', '[data-theme="dark"]'],
  
  theme: {
    extend: {
      /* ============================================
       * COLORS
       * Maps to CSS variables in tokens.css
       * ============================================ */
      colors: {
        // Primitive color scales (for rare direct use)
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
          950: 'var(--color-gray-950)',
        },
        red: {
          50: 'var(--color-red-50)',
          100: 'var(--color-red-100)',
          200: 'var(--color-red-200)',
          300: 'var(--color-red-300)',
          400: 'var(--color-red-400)',
          500: 'var(--color-red-500)',
          600: 'var(--color-red-600)',
          700: 'var(--color-red-700)',
          800: 'var(--color-red-800)',
          900: 'var(--color-red-900)',
          950: 'var(--color-red-950)',
        },
        orange: {
          50: 'var(--color-orange-50)',
          100: 'var(--color-orange-100)',
          200: 'var(--color-orange-200)',
          300: 'var(--color-orange-300)',
          400: 'var(--color-orange-400)',
          500: 'var(--color-orange-500)',
          600: 'var(--color-orange-600)',
          700: 'var(--color-orange-700)',
          800: 'var(--color-orange-800)',
          900: 'var(--color-orange-900)',
          950: 'var(--color-orange-950)',
        },
        yellow: {
          50: 'var(--color-yellow-50)',
          100: 'var(--color-yellow-100)',
          200: 'var(--color-yellow-200)',
          300: 'var(--color-yellow-300)',
          400: 'var(--color-yellow-400)',
          500: 'var(--color-yellow-500)',
          600: 'var(--color-yellow-600)',
          700: 'var(--color-yellow-700)',
          800: 'var(--color-yellow-800)',
          900: 'var(--color-yellow-900)',
          950: 'var(--color-yellow-950)',
        },
        green: {
          50: 'var(--color-green-50)',
          100: 'var(--color-green-100)',
          200: 'var(--color-green-200)',
          300: 'var(--color-green-300)',
          400: 'var(--color-green-400)',
          500: 'var(--color-green-500)',
          600: 'var(--color-green-600)',
          700: 'var(--color-green-700)',
          800: 'var(--color-green-800)',
          900: 'var(--color-green-900)',
          950: 'var(--color-green-950)',
        },
        cyan: {
          50: 'var(--color-cyan-50)',
          100: 'var(--color-cyan-100)',
          200: 'var(--color-cyan-200)',
          300: 'var(--color-cyan-300)',
          400: 'var(--color-cyan-400)',
          500: 'var(--color-cyan-500)',
          600: 'var(--color-cyan-600)',
          700: 'var(--color-cyan-700)',
          800: 'var(--color-cyan-800)',
          900: 'var(--color-cyan-900)',
          950: 'var(--color-cyan-950)',
        },
        blue: {
          50: 'var(--color-blue-50)',
          100: 'var(--color-blue-100)',
          200: 'var(--color-blue-200)',
          300: 'var(--color-blue-300)',
          400: 'var(--color-blue-400)',
          500: 'var(--color-blue-500)',
          600: 'var(--color-blue-600)',
          700: 'var(--color-blue-700)',
          800: 'var(--color-blue-800)',
          900: 'var(--color-blue-900)',
          950: 'var(--color-blue-950)',
        },
        navi: {
          50: 'var(--color-navi-50)',
          100: 'var(--color-navi-100)',
          200: 'var(--color-navi-200)',
          300: 'var(--color-navi-300)',
          400: 'var(--color-navi-400)',
          500: 'var(--color-navi-500)',
          600: 'var(--color-navi-600)',
          700: 'var(--color-navi-700)',
          800: 'var(--color-navi-800)',
          900: 'var(--color-navi-900)',
          950: 'var(--color-navi-950)',
        },
        violet: {
          50: 'var(--color-violet-50)',
          100: 'var(--color-violet-100)',
          200: 'var(--color-violet-200)',
          300: 'var(--color-violet-300)',
          400: 'var(--color-violet-400)',
          500: 'var(--color-violet-500)',
          600: 'var(--color-violet-600)',
          700: 'var(--color-violet-700)',
          800: 'var(--color-violet-800)',
          900: 'var(--color-violet-900)',
          950: 'var(--color-violet-950)',
        },
        
        // Semantic text colors (use these in components)
        'content-primary': 'var(--content-primary)',
        'content-neutral': 'var(--content-neutral)',
        'content-neutral-strong': 'var(--content-neutral-strong)',
        'content-neutral-light': 'var(--content-neutral-light)',
        'content-disable': 'var(--content-disable)',
        'content-inverse': 'var(--content-inverse)',
        'content-secondary': 'var(--content-secondary)',
        'content-tertiary': 'var(--content-tertiary)',
        'content-success': 'var(--content-success)',
        'content-error': 'var(--content-error)',
        'content-warning': 'var(--content-warning)',
        'content-info': 'var(--content-info)',
        'content-magic': 'var(--content-magic)',
        'content-on-action': 'var(--content-on-action)',
        'content-on-action-inverse': 'var(--content-on-action-inverse)',
        'content-on-action-disabled': 'var(--content-on-action-disabled)',
        'content-on-action-primary-light': 'var(--content-on-action-primary-light)',
        'content-on-action-secondary-light': 'var(--content-on-action-secondary-light)',
        'content-on-action-tertiary-light': 'var(--content-on-action-tertiary-light)',
        'content-on-action-success-light': 'var(--content-on-action-success-light)',
        'content-on-action-error-light': 'var(--content-on-action-error-light)',
        'content-on-action-warning-light': 'var(--content-on-action-warning-light)',
        'content-on-action-info-light': 'var(--content-on-action-info-light)',
        'content-on-action-magic-light': 'var(--content-on-action-magic-light)',
        'content-selected-orange': 'var(--content-selected-orange)',
        'content-selected-blue': 'var(--content-selected-blue)',
        'content-selected-navi': 'var(--content-selected-navi)',
        
        // Semantic background colors (use these in components)
        'bg-surface': 'var(--bg-surface)',
        'bg-canvas': 'var(--bg-canvas)',
        'bg-overlay': 'var(--bg-overlay)',
        'bg-disable': 'var(--bg-disable)',
        'bg-inverse': 'var(--bg-inverse)',
        'bg-selected': 'var(--bg-selected)',
        'bg-neutral': 'var(--bg-neutral)',
        'bg-neutral-light': 'var(--bg-neutral-light)',
        'bg-primary': 'var(--bg-primary)',
        'bg-primary-hover': 'var(--bg-primary-hover)',
        'bg-primary-press': 'var(--bg-primary-press)',
        'bg-primary-light': 'var(--bg-primary-light)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-secondary-hover': 'var(--bg-secondary-hover)',
        'bg-secondary-press': 'var(--bg-secondary-press)',
        'bg-secondary-light': 'var(--bg-secondary-light)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'bg-tertiary-hover': 'var(--bg-tertiary-hover)',
        'bg-tertiary-press': 'var(--bg-tertiary-press)',
        'bg-tertiary-light': 'var(--bg-tertiary-light)',
        'bg-success': 'var(--bg-success)',
        'bg-success-hover': 'var(--bg-success-hover)',
        'bg-success-press': 'var(--bg-success-press)',
        'bg-success-light': 'var(--bg-success-light)',
        'bg-error': 'var(--bg-error)',
        'bg-error-hover': 'var(--bg-error-hover)',
        'bg-error-press': 'var(--bg-error-press)',
        'bg-error-light': 'var(--bg-error-light)',
        'bg-warning': 'var(--bg-warning)',
        'bg-warning-hover': 'var(--bg-warning-hover)',
        'bg-warning-press': 'var(--bg-warning-press)',
        'bg-warning-light': 'var(--bg-warning-light)',
        'bg-info': 'var(--bg-info)',
        'bg-info-hover': 'var(--bg-info-hover)',
        'bg-info-press': 'var(--bg-info-press)',
        'bg-info-light': 'var(--bg-info-light)',
        'bg-magic': 'var(--bg-magic)',
        'bg-magic-hover': 'var(--bg-magic-hover)',
        'bg-magic-press': 'var(--bg-magic-press)',
        'bg-magic-light': 'var(--bg-magic-light)',
        
        // Semantic border colors (use these in components)
        'border-surface': 'var(--border-surface)',
        'border-canvas': 'var(--border-canvas)',
        'border-neutral': 'var(--border-neutral)',
        'border-disabled': 'var(--border-disabled)',
        'border-inverse': 'var(--border-inverse)',
        'border-primary': 'var(--border-primary)',
        'border-primary-hover': 'var(--border-primary-hover)',
        'border-primary-press': 'var(--border-primary-press)',
        'border-secondary': 'var(--border-secondary)',
        'border-secondary-hover': 'var(--border-secondary-hover)',
        'border-secondary-press': 'var(--border-secondary-press)',
        'border-tertiary': 'var(--border-tertiary)',
        'border-tertiary-hover': 'var(--border-tertiary-hover)',
        'border-tertiary-press': 'var(--border-tertiary-press)',
        'border-success': 'var(--border-success)',
        'border-warning': 'var(--border-warning)',
        'border-error': 'var(--border-error)',
        'border-info': 'var(--border-info)',
        'border-magic': 'var(--border-magic)',
        'border-selected-orange': 'var(--border-selected-orange)',
        'border-selected-blue': 'var(--border-selected-blue)',
        'border-selected-navi': 'var(--border-selected-navi)',
        
        // Accent colors (decorative/utility)
        'accent-white': 'var(--accent-white)',
        'accent-black': 'var(--accent-black)',
        'accent-gray': 'var(--accent-gray)',
        'accent-gray-light': 'var(--accent-gray-light)',
        'accent-gray-medium': 'var(--accent-gray-medium)',
        'accent-gray-strong': 'var(--accent-gray-strong)',
        'accent-orange': 'var(--accent-orange)',
        'accent-orange-light': 'var(--accent-orange-light)',
        'accent-orange-medium': 'var(--accent-orange-medium)',
        'accent-orange-strong': 'var(--accent-orange-strong)',
        'accent-blue': 'var(--accent-blue)',
        'accent-blue-light': 'var(--accent-blue-light)',
        'accent-blue-medium': 'var(--accent-blue-medium)',
        'accent-blue-strong': 'var(--accent-blue-strong)',
        'accent-navi': 'var(--accent-navi)',
        'accent-navi-light': 'var(--accent-navi-light)',
        'accent-navi-medium': 'var(--accent-navi-medium)',
        'accent-navi-strong': 'var(--accent-navi-strong)',
        'accent-green': 'var(--accent-green)',
        'accent-green-light': 'var(--accent-green-light)',
        'accent-green-medium': 'var(--accent-green-medium)',
        'accent-green-strong': 'var(--accent-green-strong)',
        'accent-red': 'var(--accent-red)',
        'accent-red-light': 'var(--accent-red-light)',
        'accent-red-medium': 'var(--accent-red-medium)',
        'accent-red-strong': 'var(--accent-red-strong)',
        'accent-yellow': 'var(--accent-yellow)',
        'accent-yellow-light': 'var(--accent-yellow-light)',
        'accent-yellow-medium': 'var(--accent-yellow-medium)',
        'accent-yellow-strong': 'var(--accent-yellow-strong)',
        'accent-violet': 'var(--accent-violet)',
        'accent-violet-light': 'var(--accent-violet-light)',
        'accent-violet-medium': 'var(--accent-violet-medium)',
        'accent-violet-strong': 'var(--accent-violet-strong)',
        'accent-white-overlay': 'var(--accent-white-overlay)',
        'accent-white-overlay-light': 'var(--accent-white-overlay-light)',
        'accent-white-overlay-medium': 'var(--accent-white-overlay-medium)',
        'accent-white-overlay-strong': 'var(--accent-white-overlay-strong)',
        'accent-black-overlay': 'var(--accent-black-overlay)',
        'accent-black-overlay-light': 'var(--accent-black-overlay-light)',
        'accent-black-overlay-medium': 'var(--accent-black-overlay-medium)',
        'accent-black-overlay-strong': 'var(--accent-black-overlay-strong)',
      },
      
      /* ============================================
       * SPACING
       * 4px grid-based spacing scale
       * ============================================ */
      spacing: {
        0: 'var(--padding-0)',
        0.5: 'var(--padding-025)',
        1: 'var(--padding-050)',
        1.5: 'var(--padding-075)',
        2: 'var(--padding-100)',
        2.5: 'var(--padding-125)',
        3: 'var(--padding-150)',
        4: 'var(--padding-200)',
        5: 'var(--padding-250)',
        6: 'var(--padding-300)',
        8: 'var(--padding-400)',
        10: 'var(--padding-500)',
        12: 'var(--padding-600)',
        16: 'var(--padding-800)',
        20: 'var(--padding-1000)',
      },
      
      /* ============================================
       * GAP (Flexbox/Grid)
       * Separate from spacing for semantic clarity
       * ============================================ */
      gap: {
        0: 'var(--gap-0)',
        0.5: 'var(--gap-025)',
        1: 'var(--gap-050)',
        1.5: 'var(--gap-075)',
        2: 'var(--gap-100)',
        2.5: 'var(--gap-125)',
        3: 'var(--gap-150)',
        4: 'var(--gap-200)',
        5: 'var(--gap-250)',
        6: 'var(--gap-300)',
        8: 'var(--gap-400)',
        10: 'var(--gap-500)',
        12: 'var(--gap-600)',
        16: 'var(--gap-800)',
        20: 'var(--gap-1000)',
      },
      
      /* ============================================
       * TYPOGRAPHY
       * ============================================ */
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        '2xs': ['var(--font-size-2xs)', { lineHeight: 'var(--line-height-2xs)' }],
        xs: ['var(--font-size-xs)', { lineHeight: 'var(--line-height-xs)' }],
        sm: ['var(--font-size-sm)', { lineHeight: 'var(--line-height-sm)' }],
        base: ['var(--font-size-base)', { lineHeight: 'var(--line-height-base)' }],
        lg: ['var(--font-size-lg)', { lineHeight: 'var(--line-height-lg)' }],
        xl: ['var(--font-size-xl)', { lineHeight: 'var(--line-height-xl)' }],
        '2xl': ['var(--font-size-2xl)', { lineHeight: 'var(--line-height-2xl)' }],
        '3xl': ['var(--font-size-3xl)', { lineHeight: 'var(--line-height-3xl)' }],
        '4xl': ['var(--font-size-4xl)', { lineHeight: 'var(--line-height-4xl)' }],
        '5xl': ['var(--font-size-5xl)', { lineHeight: 'var(--line-height-5xl)' }],
        '6xl': ['var(--font-size-6xl)', { lineHeight: 'var(--line-height-6xl)' }],
        '7xl': ['var(--font-size-7xl)', { lineHeight: 'var(--line-height-7xl)' }],
        '8xl': ['var(--font-size-8xl)', { lineHeight: 'var(--line-height-8xl)' }],
        '9xl': ['var(--font-size-9xl)', { lineHeight: 'var(--line-height-9xl)' }],
      },
      
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      
      /* ============================================
       * BORDER RADIUS
       * ============================================ */
      borderRadius: {
        none: 'var(--radius-none)',
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        full: 'var(--radius-full)',
      },
      
      /* ============================================
       * BACKGROUND IMAGE (Gradients)
       * ============================================ */
      backgroundImage: {
        'gradient-blue': 'linear-gradient(to right, var(--gradient-blue-1), var(--gradient-blue-2))',
        'gradient-orange': 'linear-gradient(to right, var(--gradient-orange-1), var(--gradient-orange-2))',
      },
    },
  },
  
  plugins: [
    // Typography style utilities plugin
    plugin(function({ addUtilities }) {
      const typographyUtilities = {
        // Display styles
        '.text-display-1-bold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-6xl)',
          lineHeight: 'var(--line-height-6xl)',
          fontWeight: '700',
        },
        '.text-display-1-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-6xl)',
          lineHeight: 'var(--line-height-6xl)',
          fontWeight: '600',
        },
        '.text-display-1-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-6xl)',
          lineHeight: 'var(--line-height-6xl)',
          fontWeight: '500',
        },
        '.text-display-1-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-6xl)',
          lineHeight: 'var(--line-height-6xl)',
          fontWeight: '400',
        },
        
        '.text-display-2-bold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-5xl)',
          lineHeight: 'var(--line-height-5xl)',
          fontWeight: '700',
        },
        '.text-display-2-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-5xl)',
          lineHeight: 'var(--line-height-5xl)',
          fontWeight: '600',
        },
        '.text-display-2-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-5xl)',
          lineHeight: 'var(--line-height-5xl)',
          fontWeight: '500',
        },
        '.text-display-2-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-5xl)',
          lineHeight: 'var(--line-height-5xl)',
          fontWeight: '400',
        },
        
        '.text-display-3-bold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-4xl)',
          lineHeight: 'var(--line-height-4xl)',
          fontWeight: '700',
        },
        '.text-display-3-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-4xl)',
          lineHeight: 'var(--line-height-4xl)',
          fontWeight: '600',
        },
        '.text-display-3-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-4xl)',
          lineHeight: 'var(--line-height-4xl)',
          fontWeight: '500',
        },
        '.text-display-3-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-4xl)',
          lineHeight: 'var(--line-height-4xl)',
          fontWeight: '400',
        },
        
        // Heading styles
        '.text-h1-bold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-3xl)',
          lineHeight: 'var(--line-height-3xl)',
          fontWeight: '700',
        },
        '.text-h1-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-3xl)',
          lineHeight: 'var(--line-height-3xl)',
          fontWeight: '600',
        },
        '.text-h1-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-3xl)',
          lineHeight: 'var(--line-height-3xl)',
          fontWeight: '500',
        },
        '.text-h1-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-3xl)',
          lineHeight: 'var(--line-height-3xl)',
          fontWeight: '400',
        },
        
        '.text-h2-bold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-2xl)',
          lineHeight: 'var(--line-height-2xl)',
          fontWeight: '700',
        },
        '.text-h2-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-2xl)',
          lineHeight: 'var(--line-height-2xl)',
          fontWeight: '600',
        },
        '.text-h2-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-2xl)',
          lineHeight: 'var(--line-height-2xl)',
          fontWeight: '500',
        },
        '.text-h2-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-2xl)',
          lineHeight: 'var(--line-height-2xl)',
          fontWeight: '400',
        },
        
        '.text-h3-bold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xl)',
          lineHeight: 'var(--line-height-xl)',
          fontWeight: '700',
        },
        '.text-h3-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xl)',
          lineHeight: 'var(--line-height-xl)',
          fontWeight: '600',
        },
        '.text-h3-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xl)',
          lineHeight: 'var(--line-height-xl)',
          fontWeight: '500',
        },
        '.text-h3-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xl)',
          lineHeight: 'var(--line-height-xl)',
          fontWeight: '400',
        },
        
        '.text-h4-bold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-lg)',
          lineHeight: 'var(--line-height-lg)',
          fontWeight: '700',
        },
        '.text-h4-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xl)',
          lineHeight: 'var(--line-height-lg)',
          fontWeight: '600',
        },
        '.text-h4-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xl)',
          lineHeight: 'var(--line-height-lg)',
          fontWeight: '500',
        },
        '.text-h4-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xl)',
          lineHeight: 'var(--line-height-lg)',
          fontWeight: '400',
        },
        
        '.text-h5-bold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '700',
        },
        '.text-h5-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '600',
        },
        '.text-h5-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '500',
        },
        '.text-h5-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '400',
        },
        
        // Body styles
        '.text-body-large-bold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '700',
        },
        '.text-body-large-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '600',
        },
        '.text-body-large-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '500',
        },
        '.text-body-large-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '400',
        },
        
        '.text-body-bold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-sm)',
          lineHeight: 'var(--line-height-sm)',
          fontWeight: '700',
        },
        '.text-body-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-sm)',
          lineHeight: 'var(--line-height-sm)',
          fontWeight: '600',
        },
        '.text-body-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-sm)',
          lineHeight: 'var(--line-height-sm)',
          fontWeight: '500',
        },
        '.text-body-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-sm)',
          lineHeight: 'var(--line-height-sm)',
          fontWeight: '400',
        },
        
        '.text-body-small-bold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xs)',
          lineHeight: 'var(--line-height-xs)',
          fontWeight: '700',
        },
        '.text-body-small-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xs)',
          lineHeight: 'var(--line-height-xs)',
          fontWeight: '600',
        },
        '.text-body-small-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xs)',
          lineHeight: 'var(--line-height-xs)',
          fontWeight: '500',
        },
        '.text-body-small-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xs)',
          lineHeight: 'var(--line-height-xs)',
          fontWeight: '400',
        },
        
        // Caption
        '.text-caption-bold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-2xs)',
          lineHeight: 'var(--line-height-2xs)',
          fontWeight: '700',
        },
        '.text-caption-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-2xs)',
          lineHeight: 'var(--line-height-2xs)',
          fontWeight: '600',
        },
        '.text-caption-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-2xs)',
          lineHeight: 'var(--line-height-2xs)',
          fontWeight: '500',
        },
        '.text-caption-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-2xs)',
          lineHeight: 'var(--line-height-2xs)',
          fontWeight: '400',
        },
        
        // Action styles
        '.text-action-large-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '600',
        },
        '.text-action-large-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '500',
        },
        '.text-action-large-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '400',
        },
        
        '.text-action-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-sm)',
          lineHeight: 'var(--line-height-sm)',
          fontWeight: '600',
        },
        '.text-action-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-sm)',
          lineHeight: 'var(--line-height-sm)',
          fontWeight: '500',
        },
        '.text-action-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-sm)',
          lineHeight: 'var(--line-height-sm)',
          fontWeight: '400',
        },
        
        '.text-action-small-semibold': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xs)',
          lineHeight: 'var(--line-height-xs)',
          fontWeight: '600',
        },
        '.text-action-small-medium': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xs)',
          lineHeight: 'var(--line-height-xs)',
          fontWeight: '500',
        },
        '.text-action-small-regular': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xs)',
          lineHeight: 'var(--line-height-xs)',
          fontWeight: '400',
        },
        
        // Link styles
        '.text-link-lg': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xl)',
          lineHeight: 'var(--line-height-xl)',
          fontWeight: '400',
          textDecoration: 'underline',
        },
        '.text-link-md': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '400',
          textDecoration: 'underline',
        },
        '.text-link-sm': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-sm)',
          lineHeight: 'var(--line-height-sm)',
          fontWeight: '400',
          textDecoration: 'underline',
        },
        '.text-link-xs': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xs)',
          lineHeight: 'var(--line-height-xs)',
          fontWeight: '400',
          textDecoration: 'underline',
        },
        
        // Capline styles (uppercase)
        '.text-capline-lg': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xl)',
          lineHeight: 'var(--line-height-xl)',
          fontWeight: '500',
          textTransform: 'uppercase',
        },
        '.text-capline-md': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-base)',
          fontWeight: '500',
          textTransform: 'uppercase',
        },
        '.text-capline-sm': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-sm)',
          lineHeight: 'var(--line-height-sm)',
          fontWeight: '400',
          textTransform: 'uppercase',
        },
        '.text-capline-xs': {
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'var(--font-size-xs)',
          lineHeight: 'var(--line-height-xs)',
          fontWeight: '400',
          textTransform: 'uppercase',
        },
      };
      
      addUtilities(typographyUtilities);
    }),
  ],
};

