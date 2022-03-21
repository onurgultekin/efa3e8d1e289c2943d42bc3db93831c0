import Vuex from "vuex"
import { mount, createLocalVue } from '@vue/test-utils'
import SearchBox from '@/components/SearchBox.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    products: {
      namespaced: true,
      state: {
        searchTerm: "",
        list:
          {
            id: 7550807507163,
            title: "12 Ti Xelium Skis",
            body_html: "<p><em>This is a demonstration store</em></p>",
            vendor: "Rossignol"
          }
      },
      mutations: {
        set_searchTerm(state, data) {
          state.searchTerm = data;
        }
      }
    }
  }
})

describe('Search Box', () => {
  it("renders an empty search term using a real Vuex store", () => {
    const wrapper = mount(SearchBox, { 
      store, 
      localVue 
    })
    expect(wrapper.find("input.my-6").element.value).toEqual("")
  })
  it('renders a non-empty search term using a real Vuex store', async () => {
    const wrapper = mount(SearchBox, { 
      store, 
      localVue 
    })

    await wrapper.find('input').setValue("test")
    expect(wrapper.find("input.my-6").element.value).toBe("test");
  })
})