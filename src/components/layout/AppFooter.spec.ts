import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import AppFooter from '@/components/layout/AppFooter.vue'
import pl from '@/i18n/locales/pl'
import en from '@/i18n/locales/en'

// Mock global variables
vi.stubGlobal('__APP_VERSION__', '1.0.0')
vi.stubGlobal('__APP_HOMEPAGE__', 'https://github.com/prachwal/rag-ts')

describe('AppFooter.vue', () => {
  const createWrapper = () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/privacy', component: { template: '<div>Privacy</div>' } },
        { path: '/terms', component: { template: '<div>Terms</div>' } },
        { path: '/about', component: { template: '<div>About</div>' } }
      ]
    })

    const i18n = createI18n({
      legacy: false,
      locale: 'pl',
      fallbackLocale: 'en',
      messages: { pl, en }
    })

    return mount(AppFooter, {
      global: {
        plugins: [router, i18n]
      }
    })
  }

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2025-10-22'))
  })

  it('should render the footer', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('.app-footer').exists()).toBe(true)
  })

  it('should display current year', () => {
    const wrapper = createWrapper()
    expect(wrapper.text()).toContain('2025')
  })

  it('should display version number', () => {
    const wrapper = createWrapper()
    expect(wrapper.text()).toContain('v1.0.0')
  })

  it('should render copyright text', () => {
    const wrapper = createWrapper()
    
    const copyright = wrapper.find('.app-footer__copyright')
    expect(copyright.exists()).toBe(true)
    expect(copyright.text()).toContain('RAG-TS')
  })

  it('should render footer navigation links', () => {
    const wrapper = createWrapper()
    
    const links = wrapper.findAll('.app-footer__link')
    expect(links.length).toBe(3)
  })

  it('should have privacy policy link', () => {
    const wrapper = createWrapper()
    
    const privacyLink = wrapper.find('a[href="/privacy"]')
    expect(privacyLink.exists()).toBe(true)
  })

  it('should have terms link', () => {
    const wrapper = createWrapper()
    
    const termsLink = wrapper.find('a[href="/terms"]')
    expect(termsLink.exists()).toBe(true)
  })

  it('should have about link', () => {
    const wrapper = createWrapper()
    
    const aboutLink = wrapper.find('a[href="/about"]')
    expect(aboutLink.exists()).toBe(true)
  })

  it('should render social links section', () => {
    const wrapper = createWrapper()
    
    const social = wrapper.find('.app-footer__social')
    expect(social.exists()).toBe(true)
  })

  it('should have GitHub link with correct href', () => {
    const wrapper = createWrapper()
    
    const githubLink = wrapper.find('.app-footer__social-link')
    expect(githubLink.exists()).toBe(true)
    expect(githubLink.attributes('href')).toBe('https://github.com/prachwal/rag-ts')
  })

  it('should have GitHub link with target blank', () => {
    const wrapper = createWrapper()
    
    const githubLink = wrapper.find('.app-footer__social-link')
    expect(githubLink.attributes('target')).toBe('_blank')
    expect(githubLink.attributes('rel')).toBe('noopener')
  })

  it('should render GitHub SVG icon', () => {
    const wrapper = createWrapper()
    
    const svg = wrapper.find('.app-footer__social-link svg')
    expect(svg.exists()).toBe(true)
  })

  it('should have aria-label on GitHub link', () => {
    const wrapper = createWrapper()
    
    const githubLink = wrapper.find('.app-footer__social-link')
    expect(githubLink.attributes('aria-label')).toBe('GitHub')
  })

  it('should be an HTML footer element', () => {
    const wrapper = createWrapper()
    expect(wrapper.element.tagName).toBe('FOOTER')
  })

  it('should have navigation with aria-label', () => {
    const wrapper = createWrapper()
    
    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)
    expect(nav.attributes('aria-label')).toBe('Footer navigation')
  })
})
