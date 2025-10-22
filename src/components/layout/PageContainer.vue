<script setup lang="ts">
defineProps<{
  constrained?: boolean
}>()
</script>

<template>
  <div 
    class="page-container"
    :class="{ 'page-container--constrained': constrained }"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
// Styles are in src/styles/components/_page.scss
</style>
