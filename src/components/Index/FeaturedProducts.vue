<script setup>
import { ref } from "vue";
import featuredProductImage1 from "../../assets/img/featured-product-image-1.jpg";
import featuredProductImage2 from "../../assets/img/featured-product-image-2.jpg";
import featuredProductImage3 from "../../assets/img/featured-product-image-3.jpg";
import featuredProductImage4 from "../../assets/img/featured-product-image-4.jpg";
import featuredProductImage5 from "../../assets/img/featured-product-image-5.jpg";
import featuredProductImage6 from "../../assets/img/featured-product-image-6.webp";
import featuredProductImage7 from "../../assets/img/featured-product-image-7.webp";
import featuredProductImage8 from "../../assets/img/featured-product-image-8.webp";

const products = ref()
products.value = [
  {
    hit: true,
    new: true,
    image: featuredProductImage1,
    title: 'Beach suit',
    description: 'Enjoy sun, sea and sand in this pretty beachwear.',
    price: 24,
    oldPrice: 29
  },
  {
    hit: true,
    new: false,
    image: featuredProductImage2,
    title: 'Beach suit',
    description: 'Enjoy sun, sea and sand in this pretty beachwear.',
    price: 20,
    oldPrice: 27
  },
  {
    hit: true,
    new: false,
    image: featuredProductImage3,
    title: 'Women\'s elegant red dress',
    description: 'Elegant and chic dress for any occasion.',
    price: 190,
    oldPrice: 270
  },
  {
    hit: true,
    new: true,
    image: featuredProductImage4,
    title: 'Women\'s pantsuit',
    description: 'Comfortable pantsuit. Smooth like silk.',
    price: 50,
    oldPrice: 60
  },
  {
    hit: true,
    new: true,
    image: featuredProductImage5,
    title: 'Women\'s pantsuit',
    description: 'Comfortable pantsuit. Smooth like silk.',
    price: 40,
    oldPrice: 53
  },
  {
    hit: true,
    new: true,
    image: featuredProductImage6,
    title: 'High quality women\'s elegant shoes',
    description: 'Show your style with these pretty shoes.',
    price: 50,
    oldPrice: 75
  },
  {
    hit: true,
    new: false,
    image: featuredProductImage7,
    title: 'High quality women\'s elegant shoes',
    description: 'Show your style with these pretty shoes.',
    price: 60,
    oldPrice: 80
  },
  {
    hit: true,
    new: false,
    image: featuredProductImage8,
    title: 'Women\'s elegant pink dress',
    description: 'This cute and lovely dress can conquer hearts!',
    price: 75,
    oldPrice: 90
  }
]
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
        <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="product in products">
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
        </div>
      </div>
    </div>
  </section>
</template>