import { describe, it, expect, beforeEach } from 'vitest'
import { createI18n } from 'vue-i18n'
import pl from '@/i18n/locales/pl'
import en from '@/i18n/locales/en'

describe('i18n', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should create i18n instance with Polish locale by default', () => {
    const i18n = createI18n({
      legacy: false,
      locale: 'pl',
      fallbackLocale: 'en',
      messages: { pl, en }
    })

    expect(i18n.global.locale.value).toBe('pl')
  })

  it('should have Polish and English messages', () => {
    const i18n = createI18n({
      legacy: false,
      locale: 'pl',
      fallbackLocale: 'en',
      messages: { pl, en }
    })

    expect(i18n.global.messages.value).toHaveProperty('pl')
    expect(i18n.global.messages.value).toHaveProperty('en')
  })

  it('should translate navigation items in Polish', () => {
    const i18n = createI18n({
      legacy: false,
      locale: 'pl',
      fallbackLocale: 'en',
      messages: { pl, en }
    })

    expect(i18n.global.t('nav.home')).toBe('Strona główna')
    expect(i18n.global.t('nav.dashboard')).toBe('Panel')
    expect(i18n.global.t('nav.about')).toBe('O aplikacji')
  })

  it('should translate navigation items in English', () => {
    const i18n = createI18n({
      legacy: false,
      locale: 'en',
      fallbackLocale: 'en',
      messages: { pl, en }
    })

    expect(i18n.global.t('nav.home')).toBe('Home')
    expect(i18n.global.t('nav.dashboard')).toBe('Dashboard')
    expect(i18n.global.t('nav.about')).toBe('About')
  })

  it('should switch locale dynamically', () => {
    const i18n = createI18n({
      legacy: false,
      locale: 'pl',
      fallbackLocale: 'en',
      messages: { pl, en }
    })

    expect(i18n.global.t('nav.home')).toBe('Strona główna')

    i18n.global.locale.value = 'en'
    expect(i18n.global.t('nav.home')).toBe('Home')
  })

  it('should use English as fallback locale', () => {
    const i18n = createI18n({
      legacy: false,
      locale: 'pl',
      fallbackLocale: 'en',
      messages: { pl, en }
    })

    expect(i18n.global.fallbackLocale.value).toBe('en')
  })
})
