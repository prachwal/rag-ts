<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageContainer from '../components/layout/PageContainer.vue'

const { t } = useI18n()

const features = [
  'feature1',
  'feature2',
  'feature3',
  'feature4',
  'feature5',
  'feature6',
  'feature7'
]
</script>

<template>
  <PageContainer constrained>
    <div class="page-header">
      <h1 class="page-header__title">{{ t('about.title') }}</h1>
      <p class="page-header__subtitle">{{ t('about.subtitle') }}</p>
    </div>

    <section class="page-section">
      <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text-color);">
        {{ t('about.description') }}
      </p>
    </section>

    <section class="page-section">
      <h2 class="page-section__title">{{ t('about.features') }}</h2>
      
      <div style="
        padding: 2rem;
        background-color: var(--card-bg, oklch(98% 0 0));
        border-radius: 8px;
        border: 1px solid var(--border-color, oklch(90% 0 0));
      ">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
          <div 
            v-for="feature in features" 
            :key="feature"
            style="
              padding: 1rem;
              background-color: var(--bg-color);
              border-radius: 6px;
              border: 1px solid var(--border-color);
              display: flex;
              align-items: center;
              gap: 0.75rem;
            "
          >
            <div style="
              width: 8px;
              height: 8px;
              background-color: var(--primary-color);
              border-radius: 50%;
              flex-shrink: 0;
            "></div>
            <span style="font-size: 0.95rem; line-height: 1.5; color: var(--text-color);">
              {{ t(`about.${feature}`) }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div style="
        padding: 2rem;
        background-color: var(--card-bg, oklch(98% 0 0));
        border-radius: 8px;
        border: 1px solid var(--border-color, oklch(90% 0 0));
      ">
        <h3 style="margin: 0 0 1rem 0; color: var(--text-color);">Technology Stack</h3>
        <div style="display: grid; gap: 0.5rem; font-size: 0.875rem;">
          <div style="display: flex; gap: 0.5rem;">
            <strong style="color: var(--primary-color); min-width: 120px;">Frontend:</strong>
            <span style="color: var(--text-color);">Vue 3, TypeScript, Vite</span>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <strong style="color: var(--primary-color); min-width: 120px;">Routing:</strong>
            <span style="color: var(--text-color);">Vue Router 4</span>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <strong style="color: var(--primary-color); min-width: 120px;">State:</strong>
            <span style="color: var(--text-color);">Pinia</span>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <strong style="color: var(--primary-color); min-width: 120px;">i18n:</strong>
            <span style="color: var(--text-color);">Vue i18n 9</span>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <strong style="color: var(--primary-color); min-width: 120px;">Styling:</strong>
            <span style="color: var(--text-color);">SCSS, CSS Custom Properties, OKLCH</span>
          </div>
        </div>
      </div>
    </section>
  </PageContainer>
</template>

<style scoped lang="scss">
// Additional component-specific styles if needed
</style>
