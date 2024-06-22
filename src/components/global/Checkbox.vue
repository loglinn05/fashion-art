<script>
export default {
  name: 'Checkbox'
}
</script>
<script setup>
defineProps({
  id: String,
  value: String
})

const modelValue = defineModel()
</script>

<template>
  <div class="form-check">
    <input :id="id" class="form-check-input"
           type="checkbox" :value="value"
           v-model="modelValue">
    <label class="form-check-label" :for="id">
      {{ value }}
    </label>
  </div>
</template>

<style scoped>
@import url("../../assets/css/interface-elements/checkbox.css");
</style>