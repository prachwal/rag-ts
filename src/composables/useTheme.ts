import { ref, onMounted, watch } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const theme = ref<Theme>('system')
  const systemTheme = ref<'light' | 'dark'>('dark')

  // Detect system theme preference
  const detectSystemTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      systemTheme.value = 'light'
    } else {
      systemTheme.value = 'dark'
    }
  }

  // Apply theme to document
  const applyTheme = (themeValue: Theme) => {
    const root = document.documentElement
    
    if (themeValue === 'system') {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', themeValue)
    }
    
    // Save preference to localStorage
    localStorage.setItem('theme', themeValue)
  }

  // Set theme
  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    applyTheme(newTheme)
  }

  // Get current active theme (resolves 'system' to actual theme)
  const getActiveTheme = (): 'light' | 'dark' => {
    if (theme.value === 'system') {
      return systemTheme.value
    }
    return theme.value
  }

  // Toggle between light and dark (skips system)
  const toggleTheme = () => {
    const currentActive = getActiveTheme()
    setTheme(currentActive === 'light' ? 'dark' : 'light')
  }

  onMounted(() => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      theme.value = savedTheme
    }

    // Detect initial system theme
    detectSystemTheme()

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    const handler = () => {
      detectSystemTheme()
      if (theme.value === 'system') {
        // Re-apply to trigger reactivity
        applyTheme('system')
      }
    }
    
    mediaQuery.addEventListener('change', handler)

    // Apply initial theme
    applyTheme(theme.value)

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handler)
    }
  })

  // Watch for theme changes
  watch(theme, (newTheme) => {
    applyTheme(newTheme)
  })

  return {
    theme,
    systemTheme,
    setTheme,
    toggleTheme,
    getActiveTheme
  }
}
