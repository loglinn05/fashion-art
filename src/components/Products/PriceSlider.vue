<script setup>
import { computed, ref, reactive, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { minValue, maxValue } from "@vuelidate/validators";
import MultiRangeSlider from "multi-range-slider-vue";

const props = defineProps({
  listPrice: {
    type: Object
  },
  modelValue: {
    type: Object
  },
})

const emit = defineEmits(["update:modelValue"])

function updatePrice(e) {
  valsPrices.min = e.minValue;
  valsPrices.max = e.maxValue;
}

const rangeMargin = 50;

const listPrices = reactive(JSON.parse(JSON.stringify(props.listPrice)))
const valsPrices = reactive(JSON.parse(JSON.stringify(props.modelValue)))

const rules = computed(() => ({
  min: {
    minValue: minValue(listPrices.min),
    maxValue: maxValue(
        ((valsPrices.max - rangeMargin) >= listPrices.min) ?
            valsPrices.max - rangeMargin :
            listPrices.min
    )
  },
  max: {
    minValue: minValue(
        ((valsPrices.min + rangeMargin) <= listPrices.max) ?
            valsPrices.min + rangeMargin :
            listPrices.max
    ),
    maxValue: maxValue(listPrices.max)
  },
}))

const v = useVuelidate(rules, valsPrices)

function cleanMinPrice() {
  if (v.value.min.minValue.$invalid) {
    valsPrices.min = listPrices.min
    console.log(v.value.min.$model)
  }
  if (v.value.min.maxValue.$invalid) {
    valsPrices.min = valsPrices.max - rangeMargin
  }
}

function cleanMaxPrice() {
  console.log(valsPrices.max)
  if (v.value.max.minValue.$invalid) {
    valsPrices.max = valsPrices.min + rangeMargin
  }
  if (v.value.max.maxValue.$invalid) {
    valsPrices.max = listPrices.max
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
  <h6>Price</h6>
  <div class="d-flex justify-content-between">
    <div class="d-flex align-items-center">
      <label for="minPrice" class="form-label m-0">Min:&nbsp;&nbsp;</label>
      <input type="number"
             class="form-control form-control-sm"
             id="minPrice"
             v-model="v.min.$model"
             @blur="cleanMinPrice">
    </div>
    <div class="d-flex align-items-center">
      <label for="maxPrice" class="form-label m-0">Max:&nbsp;&nbsp;</label>
      <input type="number"
             class="form-control form-control-sm"
             id="maxPrice"
             v-model="v.max.$model"
             @blur="cleanMaxPrice">
    </div>
  </div>
  <MultiRangeSlider
    baseClassName="multi-range-slider"
    :min="props.listPrice.min"
    :max="props.listPrice.max"
    :minValue="valsPrices.min"
    :maxValue="valsPrices.max"
    :ruler="false"
    :rangeMargin="rangeMargin"
    @keyDown="updatePrice"
  />
</template>