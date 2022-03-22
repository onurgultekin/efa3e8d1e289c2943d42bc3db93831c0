import Vuex from "vuex"
import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchBox from '@/components/SearchBox.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Search Box', () => {
  let mutations;
  let state;
  let store;

  beforeEach(() => {
    state = {
      searchTerm: "",
      list:
        {
          id: 7550807507163,
          title: "12 Ti Xelium Skis",
          body_html: "<p><em>This is a demonstration store</em></p>",
          vendor: "Rossignol"
        }
    },
    mutations = {
      set_searchTerm(state, data) {
        state.searchTerm = data;
      },
    }
    store = new Vuex.Store({
      modules: {
        products: {
          namespaced: true,
          state,
          mutations
        }
      }
    })
  })
  test("renders an empty search term using a real Vuex store", () => {
    const wrapper = shallowMount(SearchBox, { 
      store, 
      localVue 
    })
    expect(wrapper.find("input.my-6").element.value).toEqual("")
  })
  test('renders a non-empty search term using a real Vuex store', async () => {
    const wrapper = shallowMount(SearchBox, { 
      store, 
      localVue 
    })

    await wrapper.find('input').setValue("o");
    expect(wrapper.find("input.my-6").element.value).toBe("o");
    expect(state.searchTerm).toBe("o");
  })
})