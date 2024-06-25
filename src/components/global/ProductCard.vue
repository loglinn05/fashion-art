<script>
export default {
  name: 'ProductCard'
}
</script>
<script setup>
import { useViewedProductStore } from '../../stores/viewedProductStore.js'
import { useCartStore } from '../../stores/cartStore.js'
import Carousel from "primevue/carousel";

defineProps({
  product: Object
})

const viewedProductStore = useViewedProductStore()
const { setViewedProduct } = viewedProductStore;

const cartStore = useCartStore()
const { addToCart, findItemInCart } = cartStore;
</script>

<template>
  <div class="card position-relative product-card h-100">
    <div class="offer position-absolute top-0 left-0 d-flex flex-column p-2">
      <span class="offer-hit mb-2" v-if="product.hit">Hit</span>
      <span class="offer-new" v-if="product.new">New</span>
    </div>
    <img v-if="product.images?.length == 1"
         :src="product?.images[0]"
         class="card-img-top">
    <Carousel v-else :value="product.images" :num-visible="1"
              :num-scroll="1" circular :autoplay-interval="3000"
              :show-navigators="false" :show-indicators="false">
      <template #item="slotProps">
        <img :src="slotProps.data"
             class="card-img-top">
      </template>
    </Carousel>
    <div class="card-body">
      <h5 class="card-title"><strong>{{ product.title }}</strong></h5>
      <p class="card-text">{{ product.description }}</p>
    </div>
    <div class="card-footer d-flex justify-content-between align-items-center">
      <h5 class="card-title m-0">
        <s><small>{{ parseFloat(product.oldPrice).toFixed(2) }}$</small></s>
        {{ parseFloat(product.price).toFixed(2) }}$
      </h5>
      <div class="d-inline-flex">
        <button class="btn btn-outline-orange p-1 me-2"
                data-bs-toggle="modal" data-bs-target="#viewProduct"
                @click="setViewedProduct(product)">
        <span class="material-symbols-sharp" style="vertical-align: bottom;">
          visibility
        </span>
        </button>
        <button class="btn btn-outline-danger p-1"
                @click="addToCart(product)">
          <span class="material-symbols-sharp align-bottom"
                v-if="findItemInCart(product.id) < 0">
            shopping_cart
          </span>
          <span class="material-symbols-sharp align-bottom" v-else>
            check
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("../../assets/css/product-card.css");
</style>