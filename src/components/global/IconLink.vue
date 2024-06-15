<script>
export default {
  name: 'IconLink'
}
</script>
<script setup>
const props = defineProps({
  linkHref: {
    type: String,
    required: true
  },
  linkIconName: {
    type: String,
    default: "double_arrow"
  },
})
</script>

<template>
  <a class="icon-link" :href="linkHref">
    <span><slot></slot></span>
    <span class="material-symbols-sharp">
      {{ linkIconName }}
    </span>
  </a>
</template>

<style scoped>
.icon-link:hover {
  gap: 0.7rem;
}
</style>