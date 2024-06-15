<script>
export default {
  name: 'Input'
}
</script>
<script setup>
const props = defineProps({
  type: String,
  id: String,
  labelText: String
})

const emit = defineEmits(['input', 'focus', 'blur'])

const modelValue = defineModel()
</script>

<template>
  <label :for="id" class="form-label m-0">{{ labelText }}&nbsp;</label>
  <input :type="type"
         class="form-control form-control-sm"
         :id="id"
         v-model="modelValue"
         @input="emit('input')"
         @focus="emit('focus')"
         @blur="emit('blur')">
</template>

<style scoped>
@import url("../../assets/css/interface-elements/input.css");
</style>