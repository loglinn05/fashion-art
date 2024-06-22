<script setup>
import { ref } from 'vue'
import Carousel from 'primevue/carousel'
import { useMediaQuery } from '../../modules/useMediaQuery.js'
import {useProductsStore} from '../../stores/productsStore.js'
import { storeToRefs } from 'pinia'

const { isMobile } = useMediaQuery()

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)

const newProducts = ref()
newProducts.value = products.value.filter((product) => {
  return product.new == true;
})

const responsiveOptions = ref([
  {
    breakpoint: '1200px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1,
    showNavigators: false
  },
  {
    breakpoint: '475px',
    numVisible: 1,
    numScroll: 1,
    showIndicators: false
  },
])
</script>

<template>
  <div class="row mw-2000 mx-auto">
    <div class="col-xl-10 col-12 mx-auto">
      <div class="row mb-3">
        <div class="col-12">
          <h2 class="fs-2">
            New clothes and shoes
          </h2>
        </div>
      </div>
      <Carousel :value="newProducts" :num-visible="4" :num-scroll="1"
                :responsive-options="responsiveOptions" circular
                :autoplay-interval="3000" :show-navigators="!isMobile"
                :show-indicators="!isMobile"
      >
        <template v-slot:previousicon>
            <span class="material-symbols-sharp">
              chevron_left
            </span>
        </template>
        <template #item="slotProps">
          <ProductCard :product="slotProps.data" />
        </template>
        <template v-slot:nexticon>
            <span class="material-symbols-sharp">
              chevron_right
            </span>
        </template>
      </Carousel>
    </div>
  </div>
</template>