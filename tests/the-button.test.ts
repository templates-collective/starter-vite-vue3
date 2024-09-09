import TheButton from '@/components/TheButton.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

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
