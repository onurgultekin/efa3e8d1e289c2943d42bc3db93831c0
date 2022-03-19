export const state = () => ({
    list: [],
    searchTerm: null
})

export const mutations = {
  set_products(state, data) {
    state.list = data;
  },
  set_searchTerm(state, data) {
    state.searchTerm = data;
  }
}

export const actions = {
  async getProducts({commit}) {
    await this.$axios.get('.netlify/functions/products').then((resp) => {
      if (resp.status === 200) {
        commit('set_products', resp.data.products);
      }
    })
  }
}

export const getters = {
  searchTerm: (state) => {
    return state.searchTerm;
  }
}