<script setup lang="ts">
export interface DataCardProps {
  title: string
  badge?: string
  meta?: string
}

defineProps<DataCardProps>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <article class="data-card" @click="$emit('click')">
    <header class="data-card__header">
      <h3 class="data-card__title">{{ title }}</h3>
      <span v-if="badge" class="data-card__badge">{{ badge }}</span>
    </header>

    <div class="data-card__content">
      <slot />
    </div>

    <footer v-if="meta || $slots.footer" class="data-card__footer">
      <span v-if="meta" class="data-card__meta">{{ meta }}</span>
      <slot name="footer" />
    </footer>
  </article>
</template>

<style scoped lang="scss">
// Styles are in src/styles/components/_cards.scss
</style>
