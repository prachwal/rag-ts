<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

interface Props {
  mode?: 'buttons' | 'switch'
  showText?: boolean
}

withDefaults(defineProps<Props>(), {
  mode: 'buttons',
  showText: true
})

const { theme, setTheme, getActiveTheme } = useTheme()
const { t, locale } = useI18n()

const themes = computed(() => [
  { value: 'light' as const, label: t('theme.light'), icon: '☀️' },
  { value: 'dark' as const, label: t('theme.dark'), icon: '🌙' },
  { value: 'system' as const, label: t('theme.system'), icon: '💻' }
])

const languages = computed(() => [
  { value: 'pl' as const, label: t('languages.pl'), flag: '🇵🇱' },
  { value: 'en' as const, label: t('languages.en'), flag: '🇺🇸' }
])

// Cycle through themes: light -> dark -> system -> light
const cycleTheme = () => {
  const currentIndex = themes.value.findIndex(t => t.value === theme.value)
  const nextIndex = (currentIndex + 1) % themes.value.length
  const nextTheme = themes.value[nextIndex]
  if (nextTheme) {
    setTheme(nextTheme.value)
  }
}

// Cycle through languages: pl -> en -> pl
const cycleLanguage = () => {
  const currentIndex = languages.value.findIndex(l => l.value === locale.value)
  const nextIndex = (currentIndex + 1) % languages.value.length
  const nextLanguage = languages.value[nextIndex]
  if (nextLanguage) {
    locale.value = nextLanguage.value
    localStorage.setItem('locale', nextLanguage.value)
  }
}
</script>

<template>
  <div class="theme-switcher">
    <!-- Buttons mode -->
    <template v-if="mode === 'buttons'">
      <button
        v-for="t in themes"
        :key="t.value"
        :class="{ active: getActiveTheme() === t.value }"
        @click="setTheme(t.value)"
        :title="t.label"
        type="button"
      >
        <span class="icon">{{ t.icon }}</span>
        <span v-if="showText" class="label">{{ t.value }}</span>
      </button>
    </template>

    <!-- Switch mode -->
    <template v-else>
      <button
        @click="cycleTheme"
        :title="`${t('current.theme')} ${themes.find(t => t.value === theme)?.label || 'Unknown'}`"
        type="button"
        class="switch-button"
      >
        <span class="icon">{{ themes.find(t => t.value === theme)?.icon || '❓' }}</span>
        <span v-if="showText" class="label">{{ getActiveTheme() }}</span>
      </button>
    </template>

    <!-- Language switcher -->
    <button
      @click="cycleLanguage"
      :title="`${t('current.language')} ${languages.find(l => l.value === locale)?.label || 'Unknown'}`"
      type="button"
      class="language-button"
    >
      <span class="flag">{{ languages.find(l => l.value === locale)?.flag || '❓' }}</span>
      <span v-if="showText" class="label">{{ languages.find(l => l.value === locale)?.label || 'Unknown' }}</span>
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

  // Switch mode specific styles
  .switch-button {
    min-width: 2.5rem;
    justify-content: center;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  // Language button styles
  .language-button {
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

    .flag {
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

    &:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }
  }
}
</style>
