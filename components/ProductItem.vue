<template>
  <nuxt-link :to="`/product/${product.id}`">
    <div class="flex flex-wrap product-item">
      <div class="w-full mx-4 border">
        <div class="relative pb-48 overflow-hidden">
          <img class="absolute inset-0 h-full w-full object-cover my-2" :src="product.image.src" :alt="product.title">
        </div>
        <div class="p-4">
          <h2 class="mt-2 mb-2  font-bold">{{ product.title }}</h2>
          <div class="mt-3 flex items-center text-center justify-center">
            <span class="font-bold text-xl">{{ product.variants[0].price }}</span>&nbsp;<span class="text-sm font-semibold">$</span>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'ProductItem',
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
.product-item{
  img {    
    transition: transform .3s ease-in-out; 
  }
  &:hover {
    img {
      transform: scale(1.05)
    }
  }
}
</style>