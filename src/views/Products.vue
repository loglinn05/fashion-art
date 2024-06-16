<script setup>
import HeaderOther from "../components/layout/HeaderOther.vue";
import Filter from "../components/Products/Filter.vue";
import { reactive } from "vue";
import ProductCard from "../components/global/ProductCard.vue";
import featuredProductImage1 from "../assets/img/featured-product-image-1.jpg";
import featuredProductImage2 from "../assets/img/featured-product-image-2.jpg";
import featuredProductImage3 from "../assets/img/featured-product-image-3.jpg";
import featuredProductImage4 from "../assets/img/featured-product-image-4.jpg";
import featuredProductImage5 from "../assets/img/featured-product-image-5.jpg";
import featuredProductImage6 from "../assets/img/featured-product-image-6.webp";
import featuredProductImage7 from "../assets/img/featured-product-image-7.webp";
import featuredProductImage8 from "../assets/img/featured-product-image-8.webp";
import newProductImage1 from "../assets/img/new-product-image-1.jpg";
import sh8 from "../assets/img/sh8.jpg";
import newProductImage2 from "../assets/img/new-product-image-2.jpg";
import newProductImage3 from "../assets/img/new-product-image-3.webp";
import newProductImage4 from "../assets/img/new-product-image-4.jpeg";
import newProductImage5 from "../assets/img/new-product-image-5.jpg";
import newProductImage6 from "../assets/img/new-product-image-6.jpg";

const products = reactive([
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
  },
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
])

const filterList = reactive({
  types: [
    'Sunglasses',
    'Bracelets',
    'Bijouterie'
  ],
  sizes: [
    'XXS',
    'XS',
    'S',
    'M',
    'L',
    'XL',
    'XXL'
  ],
  price: {
    min: 50,
    max: 900
  },
  manufacturers: [
    "Zara",
    "Collin's",
    "Basconi",
    "Calvin Klein",
    "Gem",
    "Geox",
    "Sasha Fabiani"
  ],
  colors: [
    '#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff',
    '#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff',
    '#0081a7', '#00afb9', '#fed9b7', '#f07167', '#231942',
    '#e0b1cb', '#9f86c0', '#f28482', '#ba181b', '#0b090a',
    '#b1a7a6', '#ffffff', '#9b2226', '#f48c06', '#06d6a0',
    '#fb6f92', '#ef476f', '#073b4c', '#fcd0a1', '#b1b695',
    '#a690a4', '#5e4b56', '#afd2e9', '#5e4b56', '#afd2e9',
    '#23c9ff', '#7cc6fe', '#ccd5ff', '#e7bbe3', '#c884a6',
    '#f4fec1', '#d9f9a5', '#d2d68d', '#68534d', '#fbba72',
    '#ca5310', '#ca5310', '#aa3e98', '#9368b7', '#9297c4',
    '#84c7d0', '#75dddd', '#c1cefe', '#a0ddff', '#758ecd',
    '#624cab', '#9bc995', '#98b9ab', '#5171a5', '#3f3047',
    '#eef36a', '#998fc7','#14248a', '#4ecdc4', '#23ce6b',
    '#07393c', '#2c666e', '#90ddf0', '#700548', '#7272ab',
    '#ceb992', '#471323', '#c1dbe3', '#c7dfc5', '#f6feaa',
    '#fce694', '#948d9b', '#b279a7', '#e899dc','#fec9f1',
    '#c20114', '#c7d6d5', '#ecebf3', '#6d7275', '#0c120c',
    '#f79f79', '#f7d08a', '#5b5941', '#f991cc', '#e2e1b9',
    '#587b7f', '#394032', '#8dab7f', '#41e2ba', '#2b2d42',
    '#e86a92','#f7e733', '#af3e4d', '#f45866', '#c45ab3',
    '#a2666f', '#f49390', '#631a86', '#fb6107', '#7cb518',
    '#5c8001', '#fbb02d', '#ef476f', '#118ab2', '#05204a',
    '#a24936', '#0d3b66', '#ff2ecc',
  ],
  materials: [
      'Cotton',
      'Wool',
      'Velvet',
      'Linen',
      'Polyester',
      'Chiffon',
      'Silk',
      'Spandex',
      'Denim',
      'Satin',
      'Natural fur',
      'Artificial fur'
  ],
  seasons: [
      'All',
      'Winter',
      'Spring & Autumn',
      'Summer'
  ]
})

const filterValues = reactive({
  types: [],
  sizes: [],
  price: [80, 120],
  manufacturers: [],
  colors: [],
  materials: [],
  seasons: []
})

function getFilterResults() {
  console.log(filterValues.value)
}
</script>

<template>
  <div class="container-fluid">
    <HeaderOther></HeaderOther>
    <div class="row mw-2000 mx-5 my-0">
      <Filter :filterList="filterList"
              v-model="filterValues"
              @filter="getFilterResults" />
      <div class="col-12">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="product in products">
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
