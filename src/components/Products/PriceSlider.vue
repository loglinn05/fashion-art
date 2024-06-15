<script setup>
import { computed, reactive, watch } from "vue";
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

const valsPrices = reactive(JSON.parse(JSON.stringify(props.modelValue)))

const rules = computed(() => ({
  min: {
    minValue: minValue(props.listPrice.min),
    maxValue: maxValue(
        ((valsPrices.max - rangeMargin) >= props.listPrice.min) ?
            valsPrices.max - rangeMargin :
            props.listPrice.min
    )
  },
  max: {
    minValue: minValue(
        ((valsPrices.min + rangeMargin) <= props.listPrice.max) ?
            valsPrices.min + rangeMargin :
            props.listPrice.max
    ),
    maxValue: maxValue(props.listPrice.max)
  },
}))

const v = useVuelidate(rules, valsPrices)

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
             v-model="v.min.$model"
             labelText="Min:"
             @blur="cleanMinPrice" />
    </div>
    <div class="d-flex align-items-center">
      <Input type="number"
             id="maxPrice"
             v-model="v.max.$model"
             labelText="Max:"
             @blur="cleanMaxPrice" />
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
    @input="updatePrice"
  />
</template>