# Proposed SCSS Style Organization

## Overview

The current style organization in `src/styles` mixes variables, component styles, and theme logic in a few files, making it harder to maintain and scale. This proposal introduces a modular SCSS architecture inspired by methodologies like ITCSS (Inverted Triangle CSS) and BEM, with clear separation of concerns.

The new structure supports:
- **Responsiveness**: Dedicated responsive utilities and breakpoints
- **Base Colors**: Centralized color definitions
- **Basic Tools**: Mixins, functions, and utilities
- **Theme Service**: Support for light, dark, and system themes

## Current Organization Analysis

- `_variables.scss`: Contains all variables (colors, typography, spacing, etc.) in one file
- `_app.scss`: Mixes root styles, component styles (buttons, cards), and a single media query for light theme
- `style.scss`: Simple forwarding of the above files

Issues:
- No separation of concerns
- Theme logic scattered
- No dedicated responsive handling
- Hard to extend or maintain

## Proposed Directory Structure

```
src/styles/
├── base/
│   ├── _reset.scss          # CSS reset and base styles
│   └── _typography.scss     # Typography base styles
├── components/
│   ├── _buttons.scss        # Button component styles
│   ├── _cards.scss          # Card component styles
│   └── _links.scss          # Link component styles
├── layout/
│   └── _app.scss            # Layout and container styles
├── utilities/
│   ├── _mixins.scss         # SCSS mixins (responsive, etc.)
│   └── _functions.scss      # SCSS functions
├── themes/
│   ├── _light.scss          # Light theme variables
│   ├── _dark.scss           # Dark theme variables
│   └── _system.scss         # System theme detection
├── responsive/
│   ├── _breakpoints.scss    # Breakpoint definitions
│   └── _media-queries.scss  # Media query mixins
├── variables/
│   ├── _colors.scss         # Base color definitions
│   ├── _typography.scss     # Typography variables
│   ├── _spacing.scss        # Spacing and dimension variables
│   └── _index.scss          # Variables index (forwards all)
└── main.scss                # Main entry point (imports all)
```

## File Responsibilities

### Variables (`variables/`)

Centralized configuration for design tokens.

#### `_colors.scss`
```scss
// Base colors
$primary-color: oklch(64% 0.25 264);
$primary-hover: oklch(55% 0.28 264);

// Theme-specific colors (will be overridden by themes)
$text-color: oklch(85% 0 0);
$bg-color: oklch(15% 0 0);
$button-bg: oklch(10% 0 0);

// Other colors
$shadow-vue: oklch(65% 0.15 160);
$doc-link-color: oklch(55% 0 0);
```

#### `_typography.scss`
```scss
$font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
$line-height: 1.5;
$font-weight-normal: 400;
$font-synthesis: none;
$text-rendering: optimizeLegibility;
$webkit-smoothing: antialiased;
$moz-smoothing: grayscale;

$h1-font-size: 3.2em;
$h1-line-height: 1.1;
$button-font-size: 1em;
$button-font-weight: 500;
```

#### `_spacing.scss`
```scss
$border-radius: 8px;
$body-margin: 0;
$body-min-width: 320px;
$body-min-height: 100vh;
$button-padding: 0.6em 1.2em;
$card-padding: 2em;
$app-max-width: 1280px;
$app-margin: 0 auto;
$app-padding: 2rem;
$logo-size: 6em;
$logo-padding: 1.5em;
```

#### `_index.scss`
```scss
@forward 'colors';
@forward 'typography';
@forward 'spacing';
```

### Themes (`themes/`)

Theme-specific overrides using CSS custom properties for dynamic switching.

#### `_light.scss`
```scss
:root {
  --text-color: oklch(25% 0.02 240);
  --bg-color: oklch(100% 0 0);
  --button-bg: oklch(97% 0 0);
  --primary-hover: oklch(64% 0.25 264);
}
```

#### `_dark.scss`
```scss
:root {
  --text-color: oklch(85% 0 0);
  --bg-color: oklch(15% 0 0);
  --button-bg: oklch(10% 0 0);
  --primary-hover: oklch(55% 0.28 264);
}
```

#### `_system.scss`
```scss
// System theme detection using prefers-color-scheme
@media (prefers-color-scheme: light) {
  @import 'light';
}

@media (prefers-color-scheme: dark) {
  @import 'dark';
}

// Fallback to dark theme if no preference
:root {
  @extend .dark-theme;
}
```

### Responsive (`responsive/`)

#### `_breakpoints.scss`
```scss
$breakpoints: (
  mobile: 320px,
  tablet: 768px,
  desktop: 1024px,
  wide: 1280px
);
```

#### `_media-queries.scss`
```scss
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}

// Usage example:
// .container {
//   width: 100%;
//   
//   @include respond-to(tablet) {
//     width: 80%;
//   }
//   
//   @include respond-to(desktop) {
//     width: 60%;
//   }
// }
```

### Base (`base/`)

#### `_reset.scss`
```scss
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: $body-margin;
  min-width: $body-min-width;
  min-height: $body-min-height;
}
```

#### `_typography.scss`
```scss
:root {
  font-family: $font-family;
  line-height: $line-height;
  font-weight: $font-weight-normal;
  font-synthesis: $font-synthesis;
  text-rendering: $text-rendering;
  -webkit-font-smoothing: $webkit-smoothing;
  -moz-osx-font-smoothing: $moz-smoothing;
}

h1 {
  font-size: $h1-font-size;
  line-height: $h1-line-height;
}
```

### Components (`components/`)

#### `_buttons.scss`
```scss
button {
  border-radius: $border-radius;
  border: 1px solid transparent;
  padding: $button-padding;
  font-size: $button-font-size;
  font-weight: $button-font-weight;
  font-family: inherit;
  background-color: var(--button-bg);
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: $primary-color;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
}
```

#### `_cards.scss`
```scss
.card {
  padding: $card-padding;
}
```

#### `_links.scss`
```scss
a {
  font-weight: 500;
  color: $primary-color;
  text-decoration: inherit;

  &:hover {
    color: var(--primary-hover);
  }
}
```

### Layout (`layout/`)

#### `_app.scss`
```scss
body {
  display: flex;
  place-items: center;
}

#app {
  max-width: $app-max-width;
  margin: $app-margin;
  padding: $app-padding;
  text-align: center;
}
```

### Utilities (`utilities/`)

#### `_mixins.scss`
```scss
@mixin transition($property: all, $duration: 0.25s, $ease: ease) {
  transition: $property $duration $ease;
}

@mixin drop-shadow($color, $blur: 2em) {
  filter: drop-shadow(0 0 $blur $color);
}
```

#### `_functions.scss`
```scss
@function px-to-rem($px) {
  @return $px / 16px * 1rem;
}

@function color-contrast($color) {
  // Function to determine if color needs light or dark text
  @return if(lightness($color) > 50%, black, white);
}
```

### Main Entry Point (`main.scss`)

```scss
// Variables (must be first)
@import 'variables/index';

// Themes
@import 'themes/system'; // Includes light/dark based on system preference

// Responsive utilities
@import 'responsive/breakpoints';
@import 'responsive/media-queries';

// Base styles
@import 'base/reset';
@import 'base/typography';

// Layout
@import 'layout/app';

// Components
@import 'components/buttons';
@import 'components/cards';
@import 'components/links';

// Utilities (last for highest specificity)
@import 'utilities/mixins';
@import 'utilities/functions';
```

## Implementation Notes

1. **Theme Switching**: Use CSS custom properties (`--variable`) for theme-dependent values. JavaScript can switch themes by changing CSS classes on `:root`.

2. **System Theme**: The `_system.scss` uses `prefers-color-scheme` to automatically apply light/dark themes.

3. **Responsiveness**: Use the `respond-to` mixin for breakpoint-based styles.

4. **Vue Integration**: In Vue components, import specific styles as needed:
   ```vue
   <style lang="scss" scoped>
   @import '@/styles/components/buttons';
   </style>
   ```

5. **Build Process**: Ensure your build tool (Vite) processes SCSS correctly. Update `vite.config.ts` if needed.

6. **Migration**: Gradually move existing styles from `_app.scss` to the appropriate new files.

## Benefits

- **Maintainability**: Clear separation makes it easy to find and modify styles
- **Scalability**: Easy to add new components, themes, or responsive rules
- **Reusability**: Mixins and functions can be reused across components
- **Performance**: Better organization can lead to smaller CSS bundles through selective imports
- **Developer Experience**: Easier for team members to understand and contribute

## Next Steps

1. Create the directory structure
2. Move existing variables to appropriate files
3. Split `_app.scss` into components and base files
4. Implement theme system with custom properties
5. Add responsive utilities
6. Update build configuration if necessary
7. Test across different themes and screen sizes</target_file>