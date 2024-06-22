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
    <span class="icon-link-text"><slot></slot></span>
    <span class="material-symbols-sharp">
      {{ linkIconName }}
    </span>
  </a>
</template>

<style scoped>
.icon-link {
  gap: 0;
}

.icon-link .icon-link-text {
  margin-right: 0.3rem;
  transition: 0.3s all;
}
.icon-link:hover .icon-link-text {
  margin-right: 0.7rem;
}
</style>