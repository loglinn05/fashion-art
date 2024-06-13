<script setup>
import HeaderOther from "../components/layout/HeaderOther.vue";
import Filter from "../components/Products/Filter.vue";
import { reactive } from "vue";

const filterList = reactive({
  price: {
    min: 50,
    max: 900
  }
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
