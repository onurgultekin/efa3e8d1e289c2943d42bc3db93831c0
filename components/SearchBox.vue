<template>
  <div>
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Type here to search products"
      class="
        block
        p-4
        w-2/5
        mx-auto
        text-gray-900
        bg-gray-50
        rounded-lg
        border border-gray-300
        sm:text-md
        focus:ring-blue-500 focus:border-blue-500
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500
        my-6
      "
      @keyup="filterResults"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SearchBox',
  computed: {
    ...mapState('products', ['list']),
    searchTerm: {
      get(){
        return this.$store.state.products.searchTerm;
      },
      set(value) {
        this.$store.commit('products/set_searchTerm', value);
      }
    }
  },
  methods: {
    filterResults(event) {
      const value = event.target.value;
      const filteredItems = this.list.filter(item => {
          return value
            .toLowerCase()
            .split(" ")
            .every(v => item.title.toLowerCase().includes(v));
        });
      this.$store.commit('products/set_filtered_items', filteredItems);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>