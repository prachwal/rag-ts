<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { theme, setTheme } = useTheme()

const themes = [
  { value: 'light' as const, label: '☀️ Light', icon: '☀️' },
  { value: 'dark' as const, label: '🌙 Dark', icon: '🌙' },
  { value: 'system' as const, label: '💻 System', icon: '💻' }
]
</script>

<template>
  <div class="theme-switcher">
    <button
      v-for="t in themes"
      :key="t.value"
      :class="{ active: theme === t.value }"
      @click="setTheme(t.value)"
      :title="t.label"
      type="button"
    >
      <span class="icon">{{ t.icon }}</span>
      <span class="label">{{ t.value }}</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.theme-switcher {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: var(--button-bg);
  border-radius: 8px;
  
  button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.4rem 0.8rem;
    border: 1px solid transparent;
    background-color: transparent;
    color: var(--text-color);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 0.875rem;

    .icon {
      font-size: 1.2rem;
      line-height: 1;
    }

    .label {
      text-transform: capitalize;
    }

    &:hover {
      background-color: var(--bg-color);
      border-color: var(--primary-color);
    }

    &.active {
      background-color: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }

    &:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }
  }
}
</style>
