<script setup>
import { ref } from "vue"
import Carousel from "primevue/carousel"
import { useMediaQuery } from '../../modules/useMediaQuery.js'
import newProductImage1 from "../../assets/img/new-product-image-1.jpg"
import sh8 from "../../assets/img/sh8.jpg"
import newProductImage2 from "../../assets/img/new-product-image-2.jpg"
import newProductImage3 from "../../assets/img/new-product-image-3.webp"
import newProductImage4 from "../../assets/img/new-product-image-4.jpeg"
import newProductImage5 from "../../assets/img/new-product-image-5.jpg"
import newProductImage6 from "../../assets/img/new-product-image-6.jpg"

const { isMobile } = useMediaQuery()

const products = ref()
products.value = [
  {
    hit: true,
    new: true,
    image: newProductImage1,
    title: 'Two piece suit',
    description: 'Lovely and light summer suit.',
    price: 45,
    oldPrice: 50
  },
  {
    hit: true,
    new: false,
    image: sh8,
    title: 'Summer suit',
    description: 'Lovely and light summer suit.',
    price: 65,
    oldPrice: 70
  },
  {
    hit: true,
    new: false,
    image: newProductImage2,
    title: 'Clothes set 1',
    description: 'Light and comfortable casual clothing.',
    price: 65,
    oldPrice: 70
  },
  {
    hit: true,
    new: true,
    image: newProductImage3,
    title: 'Clothes set 2',
    description: 'Light and comfortable casual clothing.',
    price: 50,
    oldPrice: 60
  },
  {
    hit: true,
    new: true,
    image: newProductImage4,
    title: 'Office wear',
    description: 'Beautiful business clothes for women.',
    price: 35,
    oldPrice: 45
  },
  {
    hit: true,
    new: true,
    image: newProductImage5,
    title: 'High quality men\'s jacket',
    description: 'Warm and cozy, like near a fireplace.',
    price: 75,
    oldPrice: 90
  },
  {
    hit: true,
    new: false,
    image: newProductImage6,
    title: 'Jacket for girls',
    description: 'This clothing model adorns all girls.',
    price: 40,
    oldPrice: 65
  }
]

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
      <Carousel :value="products" :num-visible="4" :num-scroll="1"
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
          <div class="card position-relative product-card h-100">
            <div class="offer position-absolute top-0 left-0 d-flex flex-column p-2">
              <span class="offer-hit mb-2" v-if="slotProps.data.hit">Hit</span>
              <span class="offer-new" v-if="slotProps.data.new">New</span>
            </div>
            <img :src="slotProps.data.image" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title"><strong>{{ slotProps.data.title }}</strong></h5>
              <p class="card-text">{{ slotProps.data.description }}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center">
              <h5 class="card-title m-0">
                <s><small>{{ slotProps.data.oldPrice }}$</small></s>
                {{ slotProps.data.price }}$
              </h5>
              <button class="btn btn-outline-danger p-1">
                    <span class="material-symbols-sharp" style="vertical-align: bottom;">
                      shopping_cart
                    </span>
              </button>
            </div>
          </div>
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