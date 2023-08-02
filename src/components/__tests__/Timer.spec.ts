import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Timer from '../Timer.vue'

describe('Timer', () => {
  it('renders properly', () => {
    const wrapper = mount(Timer, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
