<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageContainer from '../components/layout/PageContainer.vue'

const { t } = useI18n()
</script>

<template>
  <PageContainer constrained>
    <div class="page-header">
      <h1 class="page-header__title">{{ t('terms.title') }}</h1>
      <p class="page-header__subtitle">{{ t('terms.subtitle') }}</p>
    </div>

    <section class="page-section">
      <div style="
        padding: 2rem;
        background-color: var(--card-bg, oklch(98% 0 0));
        border-radius: 8px;
        border: 1px solid var(--border-color, oklch(90% 0 0));
      ">
        <h3 style="margin: 0 0 1rem 0; color: var(--text-color);">{{ t('terms.acceptance') }}</h3>
        <p style="font-size: 1rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1.5rem;">
          {{ t('terms.acceptanceText') }}
        </p>

        <h3 style="margin: 2rem 0 1rem 0; color: var(--text-color);">{{ t('terms.useLicense') }}</h3>
        <p style="font-size: 1rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1.5rem;">
          {{ t('terms.useLicenseText') }}
        </p>

        <h3 style="margin: 2rem 0 1rem 0; color: var(--text-color);">{{ t('terms.disclaimer') }}</h3>
        <p style="font-size: 1rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1.5rem;">
          {{ t('terms.disclaimerText') }}
        </p>

        <h3 style="margin: 2rem 0 1rem 0; color: var(--text-color);">{{ t('terms.limitations') }}</h3>
        <p style="font-size: 1rem; line-height: 1.6; color: var(--text-color);">
          {{ t('terms.limitationsText') }}
        </p>
      </div>
    </section>
  </PageContainer>
</template>

<style scoped lang="scss">
// Additional component-specific styles if needed
</style>