# Style System Documentation

## Overview
This project uses a modern, theme-aware CSS architecture with SCSS modules and CSS custom properties.

## Color System

### CSS Custom Properties (Theme-Aware)
All colors are defined as CSS custom properties that automatically adapt to the selected theme:

- `--primary-color` - Brand primary color (oklch blue-violet)
- `--primary-hover` - Primary hover state (adapts to theme)
- `--shadow-vue` - Vue logo shadow color
- `--text-color` - Main text color (adapts to theme)
- `--bg-color` - Background color (adapts to theme)
- `--button-bg` - Button background (adapts to theme)
- `--button-text` - Button text color (adapts to theme)
- `--doc-link-color` - Documentation link color (adapts to theme)
- `--code-bg` - Code background color (adapts to theme)

### Usage in Components
Always use CSS custom properties for theme-aware colors:

```scss
.my-component {
  color: var(--text-color);
  background-color: var(--bg-color);
}
```

### Usage in Scoped Styles
CSS custom properties are globally available, no imports needed:

```vue
<style scoped>
.element {
  color: var(--primary-color);
  background: var(--bg-color);
}
</style>
```

## Theming

### Available Themes
1. **System** (default) - Automatically detects OS preference
2. **Light** - Manual light theme
3. **Dark** - Manual dark theme

### Theme Implementation
Themes are implemented in `src/styles/themes/`:
- `_system.scss` - Auto-detects via `prefers-color-scheme`
- `_light.scss` - Manual light theme via `[data-theme="light"]`
- `_dark.scss` - Manual dark theme via `[data-theme="dark"]`

### Using Theme Switcher
Import and use the `ThemeSwitcher` component:

```vue
<script setup>
import ThemeSwitcher from './components/ThemeSwitcher.vue'
</script>

<template>
  <ThemeSwitcher />
</template>
```

### Using Theme Composable
For programmatic theme control:

```typescript
import { useTheme } from './composables/useTheme'

const { theme, setTheme, toggleTheme, getActiveTheme } = useTheme()

// Set specific theme
setTheme('dark')

// Toggle between light/dark
toggleTheme()

// Get current active theme
const active = getActiveTheme() // 'light' | 'dark'
```

## SCSS Variables

### Spacing (`_spacing.scss`)
```scss
$border-radius: 8px;
$button-padding: 0.6em 1.2em;
$card-padding: 2em;
$app-max-width: 1280px;
$logo-size: 6em;
$transition-speed: 0.25s;
```

### Typography (`_typography.scss`)
```scss
$font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
$line-height: 1.5;
$h1-font-size: 3.2em;
$button-font-size: 1em;
```

### Using SCSS Variables
Import variables in SCSS files:

```scss
@use '../styles/variables' as *;

.my-component {
  padding: $card-padding;
  border-radius: $border-radius;
}
```

## File Structure

```
src/styles/
├── main.scss              # Main entry point
├── variables/
│   ├── _index.scss        # Forwards all variables
│   ├── _colors.scss       # Color definitions & CSS custom properties
│   ├── _spacing.scss      # Spacing values
│   └── _typography.scss   # Font settings
├── themes/
│   ├── _system.scss       # Auto theme detection
│   ├── _light.scss        # Light theme
│   └── _dark.scss         # Dark theme
├── base/
│   ├── _reset.scss        # CSS reset
│   └── _typography.scss   # Typography base styles
├── layout/
│   └── _app.scss          # App layout
├── components/
│   ├── _buttons.scss      # Button styles
│   ├── _cards.scss        # Card styles
│   └── _links.scss        # Link styles
├── responsive/
│   ├── _breakpoints.scss  # Breakpoint definitions
│   └── _media-queries.scss # Media query mixins
└── utilities/
    ├── _mixins.scss       # Reusable mixins
    └── _functions.scss    # SCSS functions
```

## Best Practices

### ✅ Do
- Use CSS custom properties for colors: `var(--primary-color)`
- Import SCSS variables when needed: `@use '../styles/variables' as *;`
- Use semantic variable names
- Keep component styles scoped
- Use the theme switcher for user preference

### ❌ Don't
- Hardcode color values
- Mix SCSS variables with CSS custom properties for colors
- Import `main.scss` in components (only in `main.ts`)
- Use `@import` (deprecated, use `@use` instead)

## Responsive Design

### Breakpoints
```scss
$breakpoints: (
  mobile: 320px,
  tablet: 768px,
  desktop: 1024px,
  wide: 1280px
);
```

### Using Media Queries
```scss
@use '../styles/responsive/media-queries' as *;

.container {
  width: 100%;

  @include respond-to(tablet) {
    width: 80%;
  }

  @include respond-to(desktop) {
    width: 60%;
  }
}
```

## Color System (OKLCH)

All colors use the modern OKLCH color space for:
- Perceptually uniform brightness
- Wide color gamut support
- Better color interpolation
- Consistent contrast across hues

Format: `oklch(lightness% chroma hue)`

Example:
- `oklch(64% 0.25 264)` - Primary blue-violet
- `oklch(85% 0 0)` - Light gray (desaturated)
- `oklch(15% 0 0)` - Dark gray

## Adding New Components

1. Create component styles in `src/styles/components/_mycomponent.scss`
2. Import variables: `@use '../variables' as *;`
3. Use CSS custom properties for colors
4. Import in `main.scss`: `@use 'components/mycomponent';`

## Adding New Themes

1. Create theme file in `src/styles/themes/_mytheme.scss`
2. Define CSS custom properties with your color values
3. Use data attribute selector: `:root[data-theme="mytheme"]`
4. Import in `main.scss`: `@use 'themes/mytheme';`
5. Update `useTheme.ts` to include new theme option
