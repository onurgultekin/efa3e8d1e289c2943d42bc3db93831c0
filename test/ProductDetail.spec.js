import { mount, RouterLinkStub } from '@vue/test-utils'
import ProductDetail from '@/components/ProductDetail.vue'

describe('Testing Component props', () => {
    const wrapper = mount(ProductDetail, {
      propsData: {
        content: {
          image: {
            src: 'https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy_copy_copy_5430fa6a-8548-468f-9620-3b50a2d31515.jpg?v=1645622289'
          },
          title: 'Test',
          body_html: '<p>P HTML Element</p>'
        }
      },
      stubs: {
        NuxtLink: RouterLinkStub
      }
    })
    it('checks the prop image src', () => {
      expect(wrapper.props().content.image.src).toBe('https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy_copy_copy_5430fa6a-8548-468f-9620-3b50a2d31515.jpg?v=1645622289');
    })
    it('checks the prop title', () => {
      expect(wrapper.props().content.title).toBe('Test');
    })
    it('checks the prop body_html', () => {
      expect(wrapper.props().content.body_html).toBe('<p>P HTML Element</p>');
    })
    it('checks the title', () => {
      expect(wrapper.find(".title-text").text()).toBe('Test');
    })
    it('checks the html content', () => {
      expect(wrapper.find(".content-body").text()).toBe('P HTML Element');
    })
    it('checks the variants text', () => {
      expect(wrapper.find(".variants-text").text()).toBe('Variants');
    })
})
