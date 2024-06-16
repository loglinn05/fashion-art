<script setup>
const props = defineProps({
  product: Object
})
</script>

<template>
  <div class="card position-relative product-card h-100">
    <div class="offer position-absolute top-0 left-0 d-flex flex-column p-2">
      <span class="offer-hit mb-2" v-if="product.hit">Hit</span>
      <span class="offer-new" v-if="product.new">New</span>
    </div>
    <img :src="product.image" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title"><strong>{{ product.title }}</strong></h5>
      <p class="card-text">{{ product.description }}</p>
    </div>
    <div class="card-footer d-flex justify-content-between align-items-center">
      <h5 class="card-title m-0">
        <s><small>{{ product.oldPrice }}$</small></s>
        {{ product.price }}$
      </h5>
      <button class="btn btn-outline-danger p-1">
                    <span class="material-symbols-sharp" style="vertical-align: bottom;">
                      shopping_cart
                    </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
@import url("../../assets/css/product-card.css");
</style>