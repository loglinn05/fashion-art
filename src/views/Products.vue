<script setup>
import HeaderOther from "../components/layout/HeaderOther.vue";
import Filter from "../components/Products/Filter.vue";
import { reactive } from "vue";

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
    '#fb6f92', '#ef476f', '#073b4c', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#','#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#','#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#','#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#','#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#',
  ]
})

const filterValues = reactive({
  price: {
    min: 80,
    max: 600
  }
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
    </div>
  </div>
</template>
