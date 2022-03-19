<template>
  <div>
    <div v-if="!isLoading && filteredList.length > 0" class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <ProductItem v-for="product in filtered()" :key="product.id" :product="product" />
    </div>
    <div v-else-if="!searchTerm">
     Getting list...
    </div>
    <div v-else>
     No result found for "{{ searchTerm }}"
    </div>
    <div v-if="filteredList.length > 0 && searchTerm" class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div class="flex-1 flex justify-between sm:hidden">
        <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </a>
        <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </a>
      </div>
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{ currentPage === 1 ? 1 : (currentPage - 1) * 10 }}</span>
            to
            <span class="font-medium">{{ (currentPage * perPage) > filteredList.length ? filteredList.length : (currentPage * perPage) }}</span>
            of
            <span class="font-medium">{{ filteredList.length }}</span>
            results
          </p>
        </div>
        <div>
          <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a href="#" @click.prevent="setPage(currentPage - 1)" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: solid/chevron-left -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
            <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
            <a v-for="n in totalPage" :key="n" @click.prevent="setPage(n)" :class="{['z-10 bg-indigo-50 border-indigo-500 text-indigo-600']: currentPage === n}" href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> {{ n }} </a>
            <a href="#" @click.prevent="setPage(currentPage + 1)" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
              <span class="sr-only">Next</span>
              <!-- Heroicon name: solid/chevron-right -->
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
  export default {
    name: 'ProductsContainer',
    computed: {
      ...mapState('products', ['filteredList', 'isLoading', 'searchTerm', 'list', 'currentPage', 'perPage']),
      pageStart() {
        return (this.currentPage - 1) * this.perPage;
      },
      totalPage() {
        return Math.ceil(this.filteredList.length / this.perPage);
      },
    },
    created() {
      if (this.list.length === 0) {
        this.getProducts();
      }
    },
    methods: {
      ...mapActions('products', ['getProducts']),
      ...mapMutations('products', ['set_current_page_number']),
      setPage(number){
        if( number <= 0 || number > this.totalPage ){
          return;
        }
        this.set_current_page_number(number);
      },
      filtered() {
        if (this.searchTerm) {
          return this.filteredList.slice(this.pageStart, this.pageStart + this.perPage)
        }
        return this.filteredList;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>