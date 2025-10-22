import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PageContainer from '@/components/layout/PageContainer.vue'

describe('PageContainer.vue', () => {
  it('should render default slot content', () => {
    const wrapper = mount(PageContainer, {
      slots: {
        default: '<p>Test content</p>'
      }
    })

    expect(wrapper.html()).toContain('Test content')
  })

  it('should have page-container class', () => {
    const wrapper = mount(PageContainer)
    expect(wrapper.classes()).toContain('page-container')
  })

  it('should render as a div element', () => {
    const wrapper = mount(PageContainer)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('should render multiple children', () => {
    const wrapper = mount(PageContainer, {
      slots: {
        default: `
          <h1>Title</h1>
          <p>Paragraph</p>
          <div>Content</div>
        `
      }
    })

    expect(wrapper.text()).toContain('Title')
    expect(wrapper.text()).toContain('Paragraph')
    expect(wrapper.text()).toContain('Content')
  })

  it('should pass through HTML content', () => {
    const wrapper = mount(PageContainer, {
      slots: {
        default: '<div class="test-class">Test</div>'
      }
    })

    expect(wrapper.find('.test-class').exists()).toBe(true)
  })
})
