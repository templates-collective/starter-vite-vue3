import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import TheButton from '@/components/TheButton.vue'

const text = 'Button'

describe('test use for TheButton.vue', () => {
  it('create', () => {
    const wrapper = mount(TheButton, {
      slots: {
        default: text,
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.text()).toEqual(text)
  })
})
