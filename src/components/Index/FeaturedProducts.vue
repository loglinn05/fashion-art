<script setup>
import { ref } from 'vue'
import { useProductsStore } from '../../stores/productsStore.js'
import { storeToRefs } from 'pinia'

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)

const featuredProducts = ref()
featuredProducts.value = products.value.filter((product) => {
  return product.featured == true;
})
</script>

<template>
  <section class="row mw-2000 mx-auto">
    <div class="col-xl-10 col-12 mx-auto">
      <div class="row mb-3">
        <div class="col-12">
          <h2 class="fs-2">
            Featured products
          </h2>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="featuredProduct in featuredProducts">
          <ProductCard :product="featuredProduct" />
        </div>
      </div>
    </div>
  </section>
</template>