export const state = () => ({
    list: [],
    filteredList: [],
    searchTerm: null,
    isLoading: false
})

export const mutations = {
  set_products(state, data) {
    state.list = data;
  },
  set_filtered_items(state, data) {
    state.filteredList = data;
  },
  set_searchTerm(state, data) {
    state.searchTerm = data;
  },
  set_isLoading(state, payload) {
    state.isLoading = payload;
  }
}

export const actions = {
  async getProducts({commit}) {
    commit('set_isLoading', true);
    await this.$axios.get('.netlify/functions/products').then((resp) => {
      if (resp.status === 200) {
        commit('set_products', resp.data.products);
        commit('set_filtered_items', resp.data.products);
        commit('set_isLoading', false);
      }
    })
  }
}

export const getters = {
  searchTerm: (state) => {
    return state.searchTerm;
  }
}