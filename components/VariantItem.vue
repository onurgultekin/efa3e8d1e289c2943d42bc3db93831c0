<template>
  <figure class="bg-gray-200 p-4 dark:bg-gray-700 border mr-4">
    <div class="pt-6 space-y-4 text-center">
      <blockquote>
        <p class="text-lg font-medium">
          {{ variant.title }}
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400 px-4 py-4">
          Price: {{ variant.price }}$
        </div>
      </figcaption>
    </div>
  </figure>
</template>

<script>
  export default {
    name: 'VariantItem',
    props: {
      variant: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>