<template>
  <div>
    <div v-if="!isLoading && filteredList.length > 0" class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <ProductItem v-for="product in filteredList" :key="product.id" :product="product" />
    </div>
    <div v-else-if="!searchTerm">
     Getting list...
    </div>
    <div v-else>
     No result found for "{{ searchTerm }}"
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    name: 'ProductsContainer',
    computed: {
      ...mapState('products', ['filteredList', 'isLoading', 'searchTerm','list'])
    },
    created() {
      if (this.list.length === 0) {
        this.getProducts();
      }
    },
    methods: {
      ...mapActions('products', ['getProducts'])
    }
  }
</script>

<style lang="scss" scoped>

</style>