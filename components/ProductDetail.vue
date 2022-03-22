<template>
  <div
    :style="{
      'background-image':
        'url(' + content.image.src + ')',
    }"
  >
    <div class="flex container mx-auto flex-col lg:flex-row">
      <div class="image">
        <img
          :src="'' + content.image.src"
          alt=""
        />
      </div>
      <div class="content-side py-6 w-4/5 px-6 w-full">
        <div
          class="
            container
            flex flex-wrap
            lg:justify-between lg:items-center
            mx-auto
            flex-row
          "
        >
          <div class="flex flex-col mb-4 lg:mb-0">
            <p class="text-3xl title-text">{{ content.title }}</p>
            <p class="mt-4 content-body" v-html="content.body_html" />
          </div>
          <div class="mt-4 flex flex-col mt-4">
            <p class="text-3xl variants-text">Variants</p>
            <div class="flex mt-4">
              <VariantItem v-for="variant in content.variants" :key="variant.id" :variant="variant" />
            </div>
          </div>
        </div>
        <div class="mt-4">
          <nuxt-link to="/">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Go back to list
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductDetail',
    props: {
      content: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
.container {
  background-color: #f2f2f2;
  opacity: 0.95;
}
</style>