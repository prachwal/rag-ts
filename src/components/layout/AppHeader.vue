<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ThemeSwitcher from '../ThemeSwitcher.vue'

const { t } = useI18n()

const emit = defineEmits<{
  toggleSidebar: []
}>()

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  emit('toggleSidebar')
}
</script>

<template>
  <header class="app-header app-layout__header">
    <div class="app-header__brand">
      <router-link to="/" class="app-header__brand">
        <img src="/vite.svg" alt="Logo" class="app-header__logo" />
        <span>RAG-TS</span>
      </router-link>
    </div>

    <nav class="app-header__desktop-nav">
      <router-link to="/" class="app-header__nav-link">{{ t('nav.home') }}</router-link>
      <router-link to="/dashboard" class="app-header__nav-link">{{ t('nav.dashboard') }}</router-link>
      <router-link to="/about" class="app-header__nav-link">{{ t('nav.about') }}</router-link>
    </nav>

    <div class="app-header__actions">
      <ThemeSwitcher />
      
      <button
        class="app-header__menu-toggle"
        @click="toggleMobileMenu"
        :aria-label="t('nav.toggleMenu')"
      >
        <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
// Styles are in src/styles/components/_header.scss
</style>
