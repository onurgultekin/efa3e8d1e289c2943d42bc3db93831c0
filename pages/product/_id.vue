<template>
  <div>
    <ProductDetail v-if="product" :content="product" />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    name: 'ProductDetailPage',
    computed: {
      ...mapState('products', ['list']),
    },
    data() {
      return {
        product: this.$store.state.products.list.length > 0 ? this.$store.state.products.list.filter((item) => item.id === parseInt(this.$route.params.id))[0] : null
      }
    },
    mounted() {
      if (!this.product) {
        this.getProducts().then(() => {
          this.product = this.list.filter((item) => item.id === parseInt(this.$route.params.id))[0];
        });
      }
    },
    methods: {
      ...mapActions('products', ['getProducts'])
    }
  }
</script>

<style lang="scss" scoped>

</style>