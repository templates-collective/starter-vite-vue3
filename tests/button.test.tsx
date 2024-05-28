import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('button component', () => {
  it('create', () => {
    const wrapper = mount(() => <Button />)

    expect(wrapper.exists()).toBe(true)
  })
})
