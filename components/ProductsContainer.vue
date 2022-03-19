<template>
  <div>
    <div v-if="list.length > 0" class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <ProductItem v-for="product in list" :key="product.id" :product="product" />
    </div>
    <div v-else>
      Getting Products...
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    name: 'ProductsContainer',
    computed: {
      ...mapState('products', ['list'])
    },
    created() {
      this.getProducts();
    },
    methods: {
      ...mapActions('products', ['getProducts'])
    }
  }
</script>

<style lang="scss" scoped>

</style>