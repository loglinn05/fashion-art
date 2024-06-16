<script setup>
import {reactive, watch} from "vue";

import PriceSlider from "./interface-elements/PriceSlider.vue";
import ColorsDiv from "./ColorsDiv.vue";

const props = defineProps({
  filterList: Object,
  modelValue: Object,
  loading: Boolean,
})

const emit = defineEmits(["filter", "update:modelValue"])

let filterVals = reactive(JSON.parse(JSON.stringify(props.modelValue)))

watch(
    filterVals,
    (value) => {
      emit("update:modelValue", value);
    },
    { deep: true, immediate: true }
)
</script>

<template>
  <section class="col-3">
    <button class="btn btn-warning d-inline-flex justify-content-center align-items-center w-100 mb-3" type="button"
            data-bs-toggle="collapse" data-bs-target="#collapseFilters"
            aria-expanded="false" aria-controls="collapseFilters">
      Filters&nbsp;
      <span class="material-symbols-sharp">
        menu
      </span>
    </button>
    <div class="mb-3">
      <h3 class="fs-3">Type</h3>
      <Checkbox v-for="(type, index) in filterList.types"
                :id="'type-' + (index + 1)"
                :value="type" />
    </div>
    <div class="mb-3">
      <h3 class="fs-3">Size</h3>
      <Checkbox v-for="(size, index) in filterList.sizes"
                :id="'size-' + (index + 1)"
                :value="size" />
    </div>
    <div class="mb-3">
      <h3 class="fs-3">Price</h3>
      <PriceSlider
          :listPrice="filterList.price"
          v-model="filterVals.price" />
    </div>
    <div class="mb-3">
      <h3 class="fs-3">Manufacturer</h3>
      <Checkbox v-for="(manufacturer, index) in filterList.manufacturers"
                :id="'manufacturer-' + (index + 1)"
                :value="manufacturer" />
    </div>
    <div class="mb-3">
      <h3 class="fs-3 mb-4">Color</h3>
      <ColorsDiv :colors="filterList.colors" />
    </div>
    <div class="mb-3">
      <h3 class="fs-3">Material</h3>
      <Checkbox v-for="(material, index) in filterList.materials"
                :id="'fabric-type-' + (index + 1)"
                :value="material" />
    </div>
    <div class="mb-3">
      <h3 class="fs-3">Season</h3>
      <Checkbox v-for="(season, index) in filterList.seasons"
                :id="'season-' + (index + 1)"
                :value="season" />
    </div>
  </section>
</template>