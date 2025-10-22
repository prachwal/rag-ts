<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const sidebarClass = computed(() => ({
  'app-sidebar': true,
  'app-sidebar--open': props.isOpen
}))

const overlayClass = computed(() => ({
  'app-sidebar-overlay': true,
  'app-sidebar-overlay--visible': props.isOpen
}))

const closeSidebar = () => {
  emit('close')
}
</script>

<template>
  <div>
    <!-- Overlay for mobile -->
    <div :class="overlayClass" @click="closeSidebar"></div>
    
    <!-- Sidebar -->
    <aside :class="sidebarClass" class="app-layout__sidebar">
      <div class="app-sidebar__inner">
        <nav class="app-sidebar__section">
          <h3 class="app-sidebar__section-title">{{ t('sidebar.navigation') }}</h3>
          <ul class="app-sidebar__nav">
            <li>
              <router-link to="/" class="app-sidebar__nav-link" @click="closeSidebar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span class="app-sidebar__nav-text">{{ t('nav.home') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/dashboard" class="app-sidebar__nav-link" @click="closeSidebar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span class="app-sidebar__nav-text">{{ t('nav.dashboard') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="app-sidebar__nav-link" @click="closeSidebar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="app-sidebar__nav-text">{{ t('nav.about') }}</span>
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="app-sidebar__section">
          <h3 class="app-sidebar__section-title">{{ t('sidebar.quickLinks') }}</h3>
          <ul class="app-sidebar__nav">
            <li>
              <a href="https://vuejs.org" target="_blank" class="app-sidebar__nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span class="app-sidebar__nav-text">Vue.js Docs</span>
              </a>
            </li>
            <li>
              <a href="https://vitejs.dev" target="_blank" class="app-sidebar__nav-link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span class="app-sidebar__nav-text">Vite Docs</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped lang="scss">
// Styles are in src/styles/components/_sidebar.scss
</style>
