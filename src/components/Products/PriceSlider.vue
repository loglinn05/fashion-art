<script setup>
import {computed, reactive, ref, watch} from "vue";
import { useVuelidate } from "@vuelidate/core";
import { minValue, maxValue } from "@vuelidate/validators";
import Slider from "primevue/slider";

const props = defineProps({
  listPrice: {
    type: Object
  }
})

const model = defineModel()

function cleanMinPrice() {
  if (v.value.min.minValue.$invalid) {
    valsPrices.min = props.listPrice.min
  }
  if (v.value.min.maxValue.$invalid) {
    valsPrices.min = valsPrices.max - rangeMargin
  }
}

function cleanMaxPrice() {
  if (v.value.max.minValue.$invalid) {
    valsPrices.max = valsPrices.min + rangeMargin
  }
  if (v.value.max.maxValue.$invalid) {
    valsPrices.max = props.listPrice.max
  }
}
</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center mb-3" style="max-width: 15em">
      <Input type="number"
             id="minPrice"
             v-model="model[0]"
             labelText="Min:"/>
    </div>
    <div class="d-flex align-items-center mb-3" style="max-width: 15em">
      <Input type="number"
             id="maxPrice"
             v-model="model[1]"
             labelText="Max:" />
    </div>
  </div>
  <Slider v-model="model"
          :min="props.listPrice.min"
          :max="props.listPrice.max"
          range />
</template>