import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import AppHeader from '@/components/layout/AppHeader.vue'
import pl from '@/i18n/locales/pl'
import en from '@/i18n/locales/en'

describe('AppHeader.vue', () => {
  const createWrapper = () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: { template: '<div>Home</div>' } },
        { path: '/dashboard', component: { template: '<div>Dashboard</div>' } },
        { path: '/about', component: { template: '<div>About</div>' } }
      ]
    })

    const i18n = createI18n({
      legacy: false,
      locale: 'pl',
      fallbackLocale: 'en',
      messages: { pl, en }
    })

    return mount(AppHeader, {
      global: {
        plugins: [router, i18n],
        stubs: {
          ThemeSwitcher: true
        }
      }
    })
  }

  it('should render the header', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.app-header').exists()).toBe(true)
  })

  it('should render brand logo and name', () => {
    const wrapper = createWrapper()
    
    const brand = wrapper.find('.app-header__brand')
    expect(brand.exists()).toBe(true)
    expect(wrapper.text()).toContain('RAG-TS')
  })

  it('should render logo image', () => {
    const wrapper = createWrapper()
    
    const logo = wrapper.find('.app-header__logo')
    expect(logo.exists()).toBe(true)
    // Vite transforms images to data URIs in tests
    expect(logo.attributes('src')).toBeTruthy()
    expect(logo.attributes('alt')).toBe('Logo')
  })

  it('should render navigation links', () => {
    const wrapper = createWrapper()
    
    const navLinks = wrapper.findAll('.app-header__nav-link')
    expect(navLinks.length).toBeGreaterThanOrEqual(3)
  })

  it('should render home navigation link', () => {
    const wrapper = createWrapper()
    
    const homeLink = wrapper.find('a[href="/"]')
    expect(homeLink.exists()).toBe(true)
  })

  it('should render menu toggle button', () => {
    const wrapper = createWrapper()
    
    const toggleButton = wrapper.find('.app-header__menu-toggle')
    expect(toggleButton.exists()).toBe(true)
  })

  it('should emit toggleSidebar event when menu button clicked', async () => {
    const wrapper = createWrapper()
    
    const toggleButton = wrapper.find('.app-header__menu-toggle')
    await toggleButton.trigger('click')
    
    expect(wrapper.emitted('toggleSidebar')).toBeTruthy()
  })

  it('should render ThemeSwitcher component', () => {
    const wrapper = createWrapper()
    
    expect(wrapper.findComponent({ name: 'ThemeSwitcher' }).exists()).toBe(true)
  })

  it('should have actions section', () => {
    const wrapper = createWrapper()
    
    const actions = wrapper.find('.app-header__actions')
    expect(actions.exists()).toBe(true)
  })

  it('should be an HTML header element', () => {
    const wrapper = createWrapper()
    
    expect(wrapper.element.tagName).toBe('HEADER')
  })
})
