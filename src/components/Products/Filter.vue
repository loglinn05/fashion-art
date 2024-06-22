<script setup>
import PriceSlider from "./PriceSlider.vue";
import ColorsDiv from "./ColorsDiv.vue";

defineProps({
  filterList: Object,
  loading: Boolean,
})

const model = defineModel()

defineEmits(["filter"])
</script>

<template>
  <div class="mb-3">
    <button class="btn btn-warning" @click="$emit('filter', model)">Filter</button>
  </div>
  <div class="mb-3">
    <h3 class="fs-3">Type</h3>
    <Checkbox v-for="(type, index) in filterList.types"
              :id="'type-' + (index + 1)"
              :value="type" v-model="model.types" />
  </div>
  <div class="mb-3">
    <h3 class="fs-3">Size</h3>
    <Checkbox v-for="(size, index) in filterList.sizes"
              :id="'size-' + (index + 1)"
              :value="size" v-model="model.sizes" />
  </div>
  <div class="mb-3">
    <h3 class="fs-3">Price</h3>
    <PriceSlider
        :listPrice="filterList.price"
        v-model="model.price" />
  </div>
  <div class="mb-3">
    <h3 class="fs-3">Manufacturer</h3>
    <Checkbox v-for="(manufacturer, index) in filterList.manufacturers"
              :id="'manufacturer-' + (index + 1)"
              :value="manufacturer" v-model="model.manufacturers" />
  </div>
  <div class="mb-3">
    <h3 class="fs-3 mb-4">Color</h3>
    <ColorsDiv :colors="filterList.colors" v-model="model.colors" />
  </div>
  <div class="mb-3">
    <h3 class="fs-3">Material</h3>
    <Checkbox v-for="(material, index) in filterList.materials"
              :id="'fabric-type-' + (index + 1)"
              :value="material" v-model="model.materials" />
  </div>
  <div class="mb-3">
    <h3 class="fs-3">Season</h3>
    <Checkbox v-for="(season, index) in filterList.seasons"
              :id="'season-' + (index + 1)"
              :value="season" v-model="model.seasons" />
  </div>
</template>