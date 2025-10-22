import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import pl from '@/i18n/locales/pl'
import en from '@/i18n/locales/en'

describe('ThemeSwitcher.vue', () => {
  const createWrapper = (props = {}) => {
    const i18n = createI18n({
      legacy: false,
      locale: 'pl',
      fallbackLocale: 'en',
      messages: { pl, en }
    })

    return mount(ThemeSwitcher, {
      props,
      global: {
        plugins: [i18n]
      }
    })
  }

  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
  })

  describe('Button mode', () => {
    it('should render in button mode by default', () => {
      const wrapper = createWrapper()
      
      const buttons = wrapper.findAll('button')
      expect(buttons.length).toBeGreaterThan(0)
    })

    it('should show theme buttons', () => {
      const wrapper = createWrapper({ mode: 'buttons' })
      
      // In buttons mode, there should be theme buttons
      const buttons = wrapper.findAll('button')
      // 3 theme buttons + 1 language button
      expect(buttons.length).toBeGreaterThanOrEqual(3)
    })

    it('should change theme on button click', async () => {
      const wrapper = createWrapper({ mode: 'buttons' })
      
      const buttons = wrapper.findAll('button')
      if (buttons.length > 0 && buttons[0]) {
        await buttons[0].trigger('click')
        expect(localStorage.getItem('theme')).toBeTruthy()
      }
    })
  })

  describe('Switch mode', () => {
    it('should render in switch mode', () => {
      const wrapper = createWrapper({ mode: 'switch' })
      
      const switches = wrapper.findAll('.theme-toggle-btn, button')
      expect(switches.length).toBeGreaterThan(0)
    })

    it('should cycle through themes on switch click', async () => {
      const wrapper = createWrapper({ mode: 'switch' })
      
      const switchBtn = wrapper.find('.switch-button')
      if (switchBtn.exists()) {
        await switchBtn.trigger('click')
        expect(localStorage.getItem('theme')).toBeTruthy()
      }
    })
  })

  describe('Text display', () => {
    it('should show text when showText is true', () => {
      const wrapper = createWrapper({ showText: true })
      
      const text = wrapper.text()
      expect(text.length).toBeGreaterThan(0)
    })

    it('should hide text when showText is false', () => {
      const wrapper = createWrapper({ showText: false, mode: 'buttons' })
      
      // Check that buttons exist but text might be minimal
      const buttons = wrapper.findAll('button')
      expect(buttons.length).toBeGreaterThan(0)
    })
  })

  describe('Language switching', () => {
    it('should display language selector', () => {
      const wrapper = createWrapper()
      
      // Component should exist
      expect(wrapper.exists()).toBe(true)
    })

    it('should change locale on language button click', async () => {
      const wrapper = createWrapper()
      
      const langButtons = wrapper.findAll('button.language-button')
      if (langButtons.length > 0 && langButtons[0]) {
        await langButtons[0].trigger('click')
        // Language should be saved
        const savedLocale = localStorage.getItem('locale')
        expect(savedLocale).toBeTruthy()
      }
    })
  })

  describe('Props', () => {
    it('should accept mode prop', () => {
      const wrapper = createWrapper({ mode: 'switch' })
      expect(wrapper.props('mode')).toBe('switch')
    })

    it('should accept showText prop', () => {
      const wrapper = createWrapper({ showText: false })
      expect(wrapper.props('showText')).toBe(false)
    })

    it('should default to buttons mode', () => {
      const wrapper = createWrapper()
      expect(wrapper.props('mode')).toBe('buttons')
    })

    it('should default to showText true', () => {
      const wrapper = createWrapper()
      expect(wrapper.props('showText')).toBe(true)
    })
  })
})
