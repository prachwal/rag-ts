# Vue 3 + TypeScript + Vite - RAG-TS

Modern Vue 3 application with TypeScript, featuring a complete theming system with light/dark/system modes.

## ✨ Features

- 🎨 **Complete Theming System** - Light, dark, and auto system themes
- 🎯 **Modern CSS** - OKLCH color space for perceptually uniform colors
- 📦 **Modular SCSS Architecture** - Clean, maintainable style organization
- ⚡ **Vite** - Fast HMR and optimized builds
- 🔷 **TypeScript** - Full type safety with Vue 3 Composition API
- 🎭 **Theme Persistence** - Saves user preference to localStorage
- 📱 **Responsive** - Mobile-first design with breakpoint system

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

## 🎨 Theming

### Using Theme Switcher Component
The application includes a built-in theme switcher:

```vue
<script setup>
import ThemeSwitcher from './components/ThemeSwitcher.vue'
</script>

<template>
  <ThemeSwitcher />
</template>
```

### Programmatic Theme Control
Use the `useTheme` composable for custom theme logic:

```typescript
import { useTheme } from './composables/useTheme'

const { theme, setTheme, toggleTheme } = useTheme()

// Set specific theme
setTheme('dark')      // 'light' | 'dark' | 'system'

// Toggle between light/dark
toggleTheme()
```

### Available Themes
- **System** (default) - Automatically follows OS preference
- **Light** - Manual light mode
- **Dark** - Manual dark mode

## 🎯 Styling Guidelines

### CSS Custom Properties (Required for Colors)
All colors MUST use CSS custom properties for theme support:

```scss
// ✅ CORRECT - theme-aware
.element {
  color: var(--text-color);
  background: var(--bg-color);
  border-color: var(--primary-color);
}

// ❌ WRONG - hardcoded color breaks theming
.element {
  color: oklch(85% 0 0);
}
```

### Available Color Variables
- `--primary-color` - Brand primary (blue-violet)
- `--primary-hover` - Hover state (adapts to theme)
- `--text-color` - Main text color
- `--bg-color` - Background color
- `--button-bg` - Button background
- `--button-text` - Button text color
- `--doc-link-color` - Documentation link color
- `--code-bg` - Code block background
- `--shadow-vue` - Vue logo shadow

### SCSS Variables (For Non-Color Values)
Import SCSS variables when needed for spacing, typography, etc:

```scss
@use '../styles/variables' as *;

.component {
  padding: $card-padding;
  border-radius: $border-radius;
  font-size: $button-font-size;
}
```

### Important Rules
- ⚠️ **Never import `main.scss` in components** - only in `main.ts`
- ⚠️ **Always use CSS variables for colors** - supports theming
- ⚠️ **Import SCSS variables for layout/typography** - spacing, fonts, etc.

## 📁 Project Structure

```
src/
├── main.ts                      # App entry point
├── App.vue                      # Root component with ThemeSwitcher
├── components/
│   ├── HelloWorld.vue          # Example component
│   └── ThemeSwitcher.vue       # Theme switcher UI
├── composables/
│   └── useTheme.ts             # Theme management composable
├── styles/
│   ├── main.scss               # Main stylesheet entry
│   ├── STYLE_GUIDE.md          # Complete styling documentation
│   ├── variables/              # SCSS vars & CSS custom properties
│   │   ├── _colors.scss        # Color definitions
│   │   ├── _spacing.scss       # Spacing values
│   │   └── _typography.scss    # Font settings
│   ├── themes/                 # Theme implementations
│   │   ├── _system.scss        # Auto theme (prefers-color-scheme)
│   │   ├── _light.scss         # Light theme
│   │   └── _dark.scss          # Dark theme
│   ├── base/                   # Base styles
│   ├── layout/                 # Layout styles
│   ├── components/             # Component styles
│   ├── responsive/             # Breakpoints & media queries
│   └── utilities/              # Mixins & functions
└── assets/                      # Static assets
```

## 📖 Documentation

- **[Style Guide](src/styles/STYLE_GUIDE.md)** - Complete styling documentation
- **[Copilot Instructions](.github/copilot-instructions.md)** - AI agent guidance

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **SCSS** - CSS with superpowers
- **OKLCH Color Space** - Modern, perceptually uniform colors

## 🎓 Key Concepts

### OKLCH Color Space
This project uses OKLCH for all colors, providing:
- Perceptually uniform lightness
- Wide color gamut support
- Predictable color relationships
- Better contrast control

Format: `oklch(lightness% chroma hue)`

### CSS Custom Properties for Theming
Colors are defined as CSS custom properties that change based on theme:
- Defined in `src/styles/variables/_colors.scss`
- Overridden by theme files in `src/styles/themes/`
- Automatically reactive to theme changes

### Modular SCSS with `@use`
Modern Sass architecture using `@use` and `@forward`:
- No global namespace pollution
- Explicit dependencies
- Better tree-shaking
- Namespace control with `as *`

## 🚦 Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes** - HMR updates instantly
3. **Test themes** - Switch between light/dark/system
4. **Build**: `npm run build` - TypeScript checking + Vite build
5. **Preview**: `npm run preview` - Test production build

## 📝 IDE Setup

Recommended VS Code extensions:
- Vue - Official Vue Language Support
- TypeScript Vue Plugin
- SCSS IntelliSense

## 🤝 Contributing

When contributing:
1. Use CSS custom properties for all colors
2. Test all three themes (light/dark/system)
3. Run `npm run build` to verify no type errors
4. Follow the style guide in `src/styles/STYLE_GUIDE.md`

## 📄 License

[Your License Here]

---

This template provides a solid foundation for building modern, theme-aware Vue 3 applications with TypeScript.

