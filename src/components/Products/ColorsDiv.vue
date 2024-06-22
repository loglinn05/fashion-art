<script setup>
defineProps({
  colors: Array
})

const modelValue = defineModel()
</script>

<template>
  <div class="colors-div row g-2 overflow-y-auto">
    <div class="col-auto color-tile" v-for="(color, index) in colors">
      <input
          type="checkbox"
          class="color-checkbox"
          :id="'color-' + (index + 1)"
          autocomplete="off"
          :value="color"
          v-model="modelValue"
      />
      <label
          class="btn"
          :for="'color-' + (index + 1)"
          :style="'background-color: ' + color"
      />
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/page-components/products/colors-div.css";
</style>