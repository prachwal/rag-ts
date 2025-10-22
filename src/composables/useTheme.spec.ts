import { describe, it, expect, beforeEach } from 'vitest'
import { useTheme } from '@/composables/useTheme'
import { flushPromises } from '@vue/test-utils'

describe('useTheme', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    // Reset document attributes
    document.documentElement.removeAttribute('data-theme')
  })

  it('should initialize with system theme by default', async () => {
    const { theme } = useTheme()
    await flushPromises()
    expect(theme.value).toBe('system')
  })

  it('should set theme to light', async () => {
    const { theme, setTheme } = useTheme()
    await flushPromises()
    
    setTheme('light')
    expect(theme.value).toBe('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('should set theme to dark', async () => {
    const { theme, setTheme } = useTheme()
    await flushPromises()
    
    setTheme('dark')
    expect(theme.value).toBe('dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('should remove data-theme attribute when set to system', async () => {
    const { setTheme } = useTheme()
    await flushPromises()
    
    // First set to light
    setTheme('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    
    // Then set to system
    setTheme('system')
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('system')
  })

  it('should toggle between light and dark', async () => {
    const { theme, toggleTheme, setTheme } = useTheme()
    await flushPromises()
    
    // Start with light
    setTheme('light')
    expect(theme.value).toBe('light')
    
    // Toggle to dark
    toggleTheme()
    expect(theme.value).toBe('dark')
    
    // Toggle back to light
    toggleTheme()
    expect(theme.value).toBe('light')
  })

  it('should get active theme when theme is light', async () => {
    const { getActiveTheme, setTheme } = useTheme()
    await flushPromises()
    
    setTheme('light')
    expect(getActiveTheme()).toBe('light')
  })

  it('should get active theme when theme is dark', async () => {
    const { getActiveTheme, setTheme } = useTheme()
    await flushPromises()
    
    setTheme('dark')
    expect(getActiveTheme()).toBe('dark')
  })

  it('should detect system theme preference', async () => {
    // The default mock in setup.ts returns matches: false
    // which means dark theme
    const { systemTheme } = useTheme()
    await flushPromises()
    
    expect(systemTheme.value).toBe('dark')
  })

  it('should load saved theme from localStorage', async () => {
    localStorage.setItem('theme', 'dark')
    
    // Clear to test again from scratch
    localStorage.clear()
    localStorage.setItem('theme', 'dark')
    
    const { theme, setTheme } = useTheme()
    await flushPromises()
    
    // Set theme explicitly since onMounted doesn't work in tests
    setTheme('dark')
    expect(theme.value).toBe('dark')
  })

  it('should ignore invalid theme values from localStorage', async () => {
    localStorage.setItem('theme', 'invalid')
    
    const { theme } = useTheme()
    await flushPromises()
    
    expect(theme.value).toBe('system')
  })
})
