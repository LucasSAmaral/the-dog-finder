import Vue from 'vue'
import Header from '@/components/header'

describe('Header.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.header__title').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
