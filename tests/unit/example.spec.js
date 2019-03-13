import { mount } from '@vue/test-utils'
import NotFound from '@/components/NotFound.vue'
import Spinner from '@/components/Spinner.vue'

describe('NotFound.vue', () => {
  it('renders component NotFound', () => {
    const wrapper = mount(NotFound)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

describe('Spinner.vue', () => {
  it('renders component Spinner', () => {
    const wrapper = mount(Spinner)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
