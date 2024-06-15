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
</script>

<template>
  <div class="form-check">
    <input class="form-check-input" type="checkbox" :value="value" :id="id">
    <label class="form-check-label" :for="id">
      {{ value }}
    </label>
  </div>
</template>

<style scoped>
@import url("../../assets/css/interface-elements/checkbox.css");
</style>