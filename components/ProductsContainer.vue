<template>
  <div>
    <div v-if="!isLoading && filteredList.length > 0" class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <ProductItem v-for="product in filtered" :key="product.id" :product="product" />
    </div>
    <div v-else-if="!searchTerm">
     Getting product list...
    </div>
    <div v-else>
     No result found for "{{ searchTerm }}"
    </div>
    <ProductPaginator v-if="searchTerm && filteredList.length >= 10" />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
import ProductPaginator from './ProductPaginator.vue';
  export default {
    name: 'ProductsContainer',
    components: { ProductPaginator },
    computed: {
      ...mapState('products', ['filteredList', 'isLoading', 'searchTerm', 'currentPage', 'list', 'perPage']),
      pageStart() {
        return (this.currentPage - 1) * this.perPage;
      },
      filtered() {
        if (this.searchTerm) {
          return this.filteredList.slice(this.pageStart, this.pageStart + this.perPage)
        }
        return this.filteredList;
      }
    },
    created() {
      if (this.list.length === 0) {
        this.getProducts();
      }
    },
    methods: {
      ...mapActions('products', ['getProducts']),
    }
  }
</script>

<style lang="scss" scoped>

</style>