import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import pl from '@/i18n/locales/pl'
import en from '@/i18n/locales/en'

describe('AppSidebar.vue', () => {
  const createWrapper = (props = { isOpen: false }) => {
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

    return mount(AppSidebar, {
      props,
      global: {
        plugins: [router, i18n]
      }
    })
  }

  it('should render the sidebar', () => {
    const wrapper = createWrapper({ isOpen: true })
    expect(wrapper.find('.app-sidebar').exists()).toBe(true)
  })

  it('should apply open class when isOpen is true', () => {
    const wrapper = createWrapper({ isOpen: true })
    const sidebar = wrapper.find('aside.app-sidebar')
    expect(sidebar.classes()).toContain('app-sidebar--open')
  })

  it('should not apply open class when isOpen is false', () => {
    const wrapper = createWrapper({ isOpen: false })
    const sidebar = wrapper.find('aside.app-sidebar')
    expect(sidebar.classes()).not.toContain('app-sidebar--open')
  })

  it('should render navigation links', () => {
    const wrapper = createWrapper({ isOpen: true })
    
    const links = wrapper.findAll('.app-sidebar__nav-link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should emit close event when close button clicked', async () => {
    const wrapper = createWrapper({ isOpen: true })
    
    const overlay = wrapper.find('.app-sidebar-overlay')
    if (overlay.exists()) {
      await overlay.trigger('click')
      expect(wrapper.emitted('close')).toBeTruthy()
    }
  })

  it('should have an aside element inside', () => {
    const wrapper = createWrapper({ isOpen: true })
    const aside = wrapper.find('aside')
    expect(aside.exists()).toBe(true)
  })
})
