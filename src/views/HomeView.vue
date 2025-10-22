<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageContainer from '../components/layout/PageContainer.vue'
import DataCard from '../components/DataCard.vue'

const { t } = useI18n()
</script>

<template>
  <PageContainer constrained>
    <div class="page-header page-header--split">
      <div>
        <h1 class="page-header__title">{{ t('home.title') }}</h1>
        <p class="page-header__subtitle">{{ t('home.subtitle') }}</p>
      </div>
    </div>

    <section class="page-section">
      <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text-color);">
        {{ t('home.description') }}
      </p>
    </section>

    <section class="page-section">
      <h2 class="page-section__title">{{ t('dashboard.dataCards') }}</h2>
      
      <div class="cards-grid">
        <DataCard
          title="Vue 3"
          badge="Framework"
          meta="Progressive JavaScript Framework"
        >
          <p>The Progressive JavaScript Framework for building user interfaces.</p>
        </DataCard>

        <DataCard
          title="TypeScript"
          badge="Language"
          meta="Typed JavaScript"
        >
          <p>JavaScript with syntax for types, providing better tooling at scale.</p>
        </DataCard>

        <DataCard
          title="Vite"
          badge="Build Tool"
          meta="Next Generation Frontend"
        >
          <p>Fast, lightweight build tool with instant HMR and optimized builds.</p>
        </DataCard>

        <DataCard
          title="Vue Router"
          badge="Routing"
          meta="Official Router"
        >
          <p>The official router for Vue.js with seamless integration.</p>
        </DataCard>

        <DataCard
          title="Pinia"
          badge="State"
          meta="State Management"
        >
          <p>Intuitive, type safe store for Vue with composition API support.</p>
        </DataCard>

        <DataCard
          title="Vue i18n"
          badge="i18n"
          meta="Internationalization"
        >
          <p>Internationalization plugin for Vue.js applications.</p>
        </DataCard>
      </div>
    </section>
  </PageContainer>
</template>

<style scoped lang="scss">
// Additional component-specific styles if needed
</style>
