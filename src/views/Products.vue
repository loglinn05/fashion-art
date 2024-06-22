<script setup>
import HeaderOther from "../components/layout/HeaderOther.vue";
import Filter from "../components/Products/Filter.vue";
import { ref } from "vue";
import { useProductsStore } from '../stores/productsStore.js'
import { storeToRefs } from 'pinia'

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)

const filterList = ref({
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
    'XXL',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46'
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
    '#fce694', '#948d9b', '#b279a7', '#e899dc', '#fec9f1',
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

const filterValues = ref({
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
    <div class="row mw-2000 mx-auto px-lg-5 px-0 my-0">
      <section class="col-3 d-xl-block d-none">
        <Filter :filterList="filterList"
                v-model="filterValues"
                @filter="getFilterResults" />
      </section>
      <section class="col-12 d-xl-none d-block pb-0">
        <a class="btn btn-warning" data-bs-toggle="offcanvas"
           href="#filterOffcanvas" role="button"
           aria-controls="filterOffcanvas">
          Filter
        </a>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="filterOffcanvas" aria-labelledby="filterOffcanvasLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="filterOffcanvasLabel">Filter</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body">
            <Filter :filterList="filterList"
                    v-model="filterValues"
                    @filter="getFilterResults" />
          </div>
        </div>
      </section>
      <section class="col-xl-9 col-12">
        <div class="row g-3">
          <div class="col-xxl-3 col-xl-4 col-lg-3 col-md-4 col-sm-6 col-12" v-for="product in products">
            <ProductCard :product="product" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
#filterOffcanvas {
  background-color: #FFF8E1;
}
</style>