<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from './stores/app'
import AppHeader from './components/layout/AppHeader.vue'
import AppSidebar from './components/layout/AppSidebar.vue'
import AppFooter from './components/layout/AppFooter.vue'

const appStore = useAppStore()

const isSidebarOpen = computed(() => appStore.isSidebarOpen)

const handleToggleSidebar = () => {
  appStore.toggleSidebar()
}

const handleCloseSidebar = () => {
  appStore.closeSidebar()
}
</script>

<template>
  <div class="app-layout">
    <AppHeader 
      @toggle-sidebar="handleToggleSidebar"
    />
    
    <AppSidebar 
      :is-open="isSidebarOpen"
      @close="handleCloseSidebar"
    />
    
    <main class="app-layout__main">
      <router-view />
    </main>
    
    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
// Layout styles are in src/styles/layout/_layout.scss
</style>

