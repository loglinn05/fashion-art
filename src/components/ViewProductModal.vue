<script>
export default {
  name: 'ProductCard'
}
</script>
<script setup>
import { useViewedProductStore } from '../stores/viewedProductStore.js'
import { storeToRefs } from 'pinia'
import { useMediaQuery } from '../modules/useMediaQuery.js'
import Carousel from 'primevue/carousel'
import {useCartStore} from "../stores/cartStore.js";

defineProps({
  product: Object
})

const { isMobile } = useMediaQuery()

const viewedProductStore = useViewedProductStore()
const { viewedProduct } = storeToRefs(viewedProductStore)

const cartStore = useCartStore()
const { addToCart, findItemInCart } = cartStore;
</script>

<template>
  <Modal id="viewProduct" :title="viewedProduct.title">
    <template v-slot:body>
      <div class="text-center">
        <img v-if="viewedProduct.images?.length == 1"
             :src="viewedProduct?.images[0]" />
        <Carousel v-else :value="viewedProduct.images" :num-visible="1"
                  :num-scroll="1" circular :autoplay-interval="3000"
                  :show-navigators="!isMobile" :show-indicators="!isMobile">
          <template v-slot:previousicon>
            <span class="material-symbols-sharp">
              chevron_left
            </span>
          </template>
          <template #item="slotProps">
            <img :src="slotProps.data">
          </template>
          <template v-slot:nexticon>
            <span class="material-symbols-sharp">
              chevron_right
            </span>
          </template>
        </Carousel>
      </div>
      <hr>
      <p>{{ viewedProduct.description }}</p>
      <hr>
      <div class="d-flex justify-content-between">
        <p class="m-0 p-0">
          <s><small>{{ parseFloat(viewedProduct.oldPrice).toFixed(2) }}$</small></s>
          {{ parseFloat(viewedProduct.price).toFixed(2) }}$
        </p>
        <p class="m-0 p-0">{{ viewedProduct.numInStock }} in stock</p>
      </div>
      <hr>
      <p>Sizes: {{ viewedProduct.sizes?.join(', ') }}</p>
      <hr>
      <p>Manufacturer: {{ viewedProduct.manufacturer }}</p>
      <hr>
      <div class="d-flex">
        <div v-for="color in viewedProduct.colors"
             class="color-tile me-3"
             :style="'background-color: ' + color"></div>
      </div>
      <hr>
      <p>Materials:
        <span v-for="(material, index) in viewedProduct.materials"
              :class="'badge fw-normal text-dark bg-warning ' +
              (index > 0 ? 'ms-1' : '')">
          {{ material }}
        </span>.
        {{ viewedProduct.contents }}</p>
      <hr>
      <p>Seasons: {{ viewedProduct.seasons?.join(', ') }}</p>
    </template>
    <template v-slot:footer>
      <div class="w-100 d-flex justify-content-start align-items-stretch">
        <button class="btn btn-outline-danger me-2"
                @click="addToCart(product)">
          <span class="material-symbols-sharp align-bottom"
                v-if="findItemInCart(viewedProduct.id) < 0">
            shopping_cart
          </span>
          <span class="material-symbols-sharp align-bottom" v-else>
            check
          </span>
        </button>
        <button class="btn btn-outline-orange">
          <IconLink link-href="#">Learn More</IconLink>
        </button>
      </div>
    </template>
  </Modal>
</template>

<style scoped>
img {
  max-height: 50vh;
}

.color-tile {
  width: 20px;
  height: 20px;
  box-shadow: 0 0 3px 1px var(--text-color);
}
</style>