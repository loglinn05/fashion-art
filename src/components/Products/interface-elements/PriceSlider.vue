<script setup>
import {computed, reactive, ref, watch} from "vue";
import { useVuelidate } from "@vuelidate/core";
import { minValue, maxValue } from "@vuelidate/validators";
import Slider from "primevue/slider";

const props = defineProps({
  listPrice: {
    type: Object
  },
  modelValue: {
    type: Array
  },
})

const emit = defineEmits(["update:modelValue"])

const valsPrices = reactive(JSON.parse(JSON.stringify(props.modelValue)))

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

watch(valsPrices, async (val) => {
  emit("update:modelValue", val);
}, {
  deep: true,
  immediate: true
})
</script>

<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex align-items-center me-3">
      <Input type="number"
             id="minPrice"
             v-model="valsPrices[0]"
             labelText="Min:" />
    </div>
    <div class="d-flex align-items-center">
      <Input type="number"
             id="maxPrice"
             v-model="valsPrices[1]"
             labelText="Max:" />
    </div>
  </div>
  <Slider v-model="valsPrices"
          :min="props.listPrice.min"
          :max="props.listPrice.max"
          range />
</template>