<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageContainer from '../components/layout/PageContainer.vue'

const { t } = useI18n()
</script>

<template>
  <PageContainer constrained>
    <div class="page-header">
      <h1 class="page-header__title">{{ t('privacy.title') }}</h1>
      <p class="page-header__subtitle">{{ t('privacy.subtitle') }}</p>
    </div>

    <section class="page-section">
      <div style="
        padding: 2rem;
        background-color: var(--card-bg, oklch(98% 0 0));
        border-radius: 8px;
        border: 1px solid var(--border-color, oklch(90% 0 0));
      ">
        <p style="font-size: 1.125rem; line-height: 1.8; color: var(--text-color); margin-bottom: 1.5rem;">
          {{ t('privacy.description') }}
        </p>

        <h3 style="margin: 2rem 0 1rem 0; color: var(--text-color);">{{ t('privacy.dataCollection') }}</h3>
        <p style="font-size: 1rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1.5rem;">
          {{ t('privacy.dataCollectionText') }}
        </p>

        <h3 style="margin: 2rem 0 1rem 0; color: var(--text-color);">{{ t('privacy.dataUsage') }}</h3>
        <p style="font-size: 1rem; line-height: 1.6; color: var(--text-color); margin-bottom: 1.5rem;">
          {{ t('privacy.dataUsageText') }}
        </p>

        <h3 style="margin: 2rem 0 1rem 0; color: var(--text-color);">{{ t('privacy.contact') }}</h3>
        <p style="font-size: 1rem; line-height: 1.6; color: var(--text-color);">
          {{ t('privacy.contactText') }}
        </p>
      </div>
    </section>
  </PageContainer>
</template>

<style scoped lang="scss">
// Additional component-specific styles if needed
</style>