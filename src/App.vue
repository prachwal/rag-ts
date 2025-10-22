<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <ThemeSwitcher />
    </header>
    
    <main>
      <div class="logos">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <HelloWorld msg="Vite + Vue" />
    </main>
  </div>
</template>

<style scoped lang="scss">
@use './styles/variables' as *;

.app-container {
  width: 100%;
}

.app-header {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.logos {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.logo {
  height: $logo-size;
  padding: $logo-padding;
  will-change: filter;
  transition: filter $transition-speed;

  &:hover {
    filter: $drop-shadow-primary;
  }

  &.vue:hover {
    filter: $drop-shadow-vue;
  }
}
</style>
