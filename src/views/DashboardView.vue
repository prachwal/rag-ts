<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageContainer from '../components/layout/PageContainer.vue'
import DataCard from '../components/DataCard.vue'
import AsyncDemo from '../components/AsyncDemo.vue'

const { t } = useI18n()
</script>

<template>
  <PageContainer>
    <div class="page-header">
      <h1 class="page-header__title">{{ t('dashboard.title') }}</h1>
      <p class="page-header__subtitle">{{ t('dashboard.subtitle') }}</p>
    </div>

    <section class="dashboard-section">
      <h2 class="section-title">{{ t('dashboard.stats') }}</h2>
      <div class="stats-grid">
        <DataCard
          title="Total Users"
          value="1,234"
          change="+12%"
          trend="up"
        />
        <DataCard
          title="Revenue"
          value="$45,678"
          change="+8%"
          trend="up"
        />
        <DataCard
          title="Orders"
          value="89"
          change="-2%"
          trend="down"
        />
        <DataCard
          title="Conversion"
          value="3.2%"
          change="+0.5%"
          trend="up"
        />
      </div>
    </section>



    <section class="dashboard-section full-width">
      <h2 class="section-title">{{ t('dashboard.recentActivity') }}</h2>
      <AsyncDemo />
    </section>
  </PageContainer>
</template>

<style scoped lang="scss">
.dashboard-section {
  margin-bottom: 3rem;

  .section-title {
    margin: 0 0 1.5rem 0;
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 600;
  }

  .stats-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &.full-width {
    width: 100%;
  }
}
</style>
