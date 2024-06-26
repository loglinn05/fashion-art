<script setup>
import { watch } from 'vue'
import Slider from 'primevue/slider'
import InputNumber from 'primevue/inputnumber'

const props = defineProps({
  listPrice: {
    type: Object
  }
})

const model = defineModel()

watch(
    model,
    (newValue) => {
      if (model.value[0] > model.value[1]) {
        model.value[0] = model.value[1]
      }
      if (model.value[1] < model.value[0]) {
        model.value[1] = model.value[0]
      }
    }
)
</script>

<template>
  <div class="d-flex flex-column">
    <div class="d-flex align-items-center mb-3" style="max-width: 15em">
      <label class="me-2" for="minPrice">Min: </label>
      <InputNumber :step="0.01"
                   v-model="model[0]"
                   inputId="minPrice"
                   :min="listPrice.min"
                   :max="model[1]"
                   showButtons
                   mode="currency"
                   currency="USD"
                   :minFractionDigits="2"
                   :maxFractionDigits="2" />
    </div>
    <div class="d-flex align-items-center mb-3" style="max-width: 15em">
      <label class="me-2" for="maxPrice">Max: </label>
      <InputNumber :step="0.01"
                   v-model="model[1]"
                   inputId="maxPrice"
                   :min="model[0]"
                   :max="listPrice.max"
                   showButtons
                   mode="currency"
                   currency="USD"
                   :minFractionDigits="2"
                   :maxFractionDigits="2" />
    </div>
  </div>
  <Slider v-model="model"
          :min="props.listPrice.min"
          :max="props.listPrice.max"
          :step="0.01"
          range />
</template>