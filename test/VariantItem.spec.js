import { mount } from '@vue/test-utils'
import VariantItem from '@/components/VariantItem.vue'

describe('Testing Component props', () => {
    const wrapper = mount(VariantItem, {
      propsData: {
        variant: {
          title: 'Test',
          price: '299.00'
        }
      }
    })
    it('checks the prop title', () => {
      expect(wrapper.props().variant.title).toBe('Test');
    })
    it('checks the prop body_html', () => {
      expect(wrapper.props().variant.price).toBe('299.00');
    })
    it('checks the title', () => {
      expect(wrapper.find("p.font-medium").text()).toBe('Test');
    })
    it('checks the html content', () => {
      expect(wrapper.find(".text-sky-500").text()).toBe('Price: 299.00$');
    })
})
