import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DataCard from '@/components/DataCard.vue'

describe('DataCard.vue', () => {
  it('should render title prop', () => {
    const title = 'Test Card Title'
    const wrapper = mount(DataCard, {
      props: { title }
    })

    expect(wrapper.text()).toContain(title)
  })

  it('should render badge when provided', () => {
    const wrapper = mount(DataCard, {
      props: {
        title: 'Test',
        badge: 'New'
      }
    })

    expect(wrapper.text()).toContain('New')
    expect(wrapper.find('.data-card__badge').exists()).toBe(true)
  })

  it('should not render badge when not provided', () => {
    const wrapper = mount(DataCard, {
      props: {
        title: 'Test'
      }
    })

    expect(wrapper.find('.data-card__badge').exists()).toBe(false)
  })

  it('should render meta text when provided', () => {
    const wrapper = mount(DataCard, {
      props: {
        title: 'Test',
        meta: 'Last updated: 2025-10-22'
      }
    })

    expect(wrapper.text()).toContain('Last updated: 2025-10-22')
    expect(wrapper.find('.data-card__meta').exists()).toBe(true)
  })

  it('should render default slot content', () => {
    const wrapper = mount(DataCard, {
      props: { title: 'Test' },
      slots: {
        default: '<p>Slot content</p>'
      }
    })

    expect(wrapper.html()).toContain('Slot content')
  })

  it('should render footer slot', () => {
    const wrapper = mount(DataCard, {
      props: { title: 'Test' },
      slots: {
        footer: '<button>Action</button>'
      }
    })

    expect(wrapper.html()).toContain('Action')
    expect(wrapper.find('.data-card__footer').exists()).toBe(true)
  })

  it('should emit click event when clicked', async () => {
    const wrapper = mount(DataCard, {
      props: { title: 'Test' }
    })

    await wrapper.trigger('click')
    
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')?.[0]).toBeTruthy()
  })

  it('should have correct CSS classes', () => {
    const wrapper = mount(DataCard, {
      props: { title: 'Test' }
    })

    expect(wrapper.classes()).toContain('data-card')
    expect(wrapper.find('.data-card__header').exists()).toBe(true)
    expect(wrapper.find('.data-card__title').exists()).toBe(true)
    expect(wrapper.find('.data-card__content').exists()).toBe(true)
  })

  it('should render footer only when meta or footer slot provided', () => {
    const wrapperWithoutFooter = mount(DataCard, {
      props: { title: 'Test' }
    })
    expect(wrapperWithoutFooter.find('.data-card__footer').exists()).toBe(false)

    const wrapperWithMeta = mount(DataCard, {
      props: { title: 'Test', meta: 'Meta' }
    })
    expect(wrapperWithMeta.find('.data-card__footer').exists()).toBe(true)
  })

  it('should render as article element', () => {
    const wrapper = mount(DataCard, {
      props: { title: 'Test' }
    })

    expect(wrapper.element.tagName).toBe('ARTICLE')
  })
})
