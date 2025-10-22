import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('should render the message prop', () => {
    const msg = 'Hello Test'
    const wrapper = mount(HelloWorld, {
      props: { msg }
    })

    expect(wrapper.text()).toContain(msg)
  })

  it('should initialize counter at 0', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' }
    })

    const button = wrapper.find('button')
    expect(button.text()).toContain('count is 0')
  })

  it('should increment counter on button click', async () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' }
    })

    const button = wrapper.find('button')
    
    await button.trigger('click')
    expect(button.text()).toContain('count is 1')
    
    await button.trigger('click')
    expect(button.text()).toContain('count is 2')
  })

  it('should render all links', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' }
    })

    const links = wrapper.findAll('a')
    expect(links).toHaveLength(2)
  })

  it('should have external links with target blank', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' }
    })

    const links = wrapper.findAll('a')
    links.forEach(link => {
      expect(link.attributes('target')).toBe('_blank')
    })
  })

  it('should render the card section', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' }
    })

    const card = wrapper.find('.card')
    expect(card.exists()).toBe(true)
  })

  it('should have read-the-docs class', () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' }
    })

    const readTheDocs = wrapper.find('.read-the-docs')
    expect(readTheDocs.exists()).toBe(true)
  })
})
