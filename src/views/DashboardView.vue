<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import PageContainer from '../components/layout/PageContainer.vue'
import DataCard from '../components/DataCard.vue'

const { t } = useI18n()

// Example data
const stats = ref([
  { label: 'Total Users', value: '1,234', change: '+12%' },
  { label: 'Active Sessions', value: '856', change: '+5%' },
  { label: 'Revenue', value: '$12,345', change: '+23%' },
  { label: 'Conversion', value: '3.2%', change: '-2%' }
])

const activities = ref([
  { id: 1, action: 'New user registered', time: '2 minutes ago' },
  { id: 2, action: 'Order #1234 completed', time: '15 minutes ago' },
  { id: 3, action: 'Payment received', time: '1 hour ago' },
  { id: 4, action: 'New comment posted', time: '2 hours ago' }
])
</script>

<template>
  <PageContainer>
    <div class="page-header">
      <h1 class="page-header__title">{{ t('dashboard.title') }}</h1>
      <p class="page-header__subtitle">{{ t('dashboard.subtitle') }}</p>
    </div>

    <section class="page-section">
      <h2 class="page-section__title">{{ t('dashboard.stats') }}</h2>
      
      <div class="cards-grid">
        <DataCard
          v-for="stat in stats"
          :key="stat.label"
          :title="stat.value"
          :badge="stat.change"
          :meta="stat.label"
        >
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 0.875rem; color: var(--text-muted);">Change:</span>
            <span 
              :style="{ 
                color: stat.change.startsWith('+') ? 'var(--success-color, #10b981)' : 'var(--error-color, #ef4444)',
                fontWeight: '600'
              }"
            >
              {{ stat.change }}
            </span>
          </div>
        </DataCard>
      </div>
    </section>

    <section class="page-section">
      <h2 class="page-section__title">{{ t('dashboard.recentActivity') }}</h2>
      
      <div class="cards-grid">
        <DataCard
          v-for="activity in activities"
          :key="activity.id"
          :title="activity.action"
          :meta="activity.time"
        >
          <p style="font-size: 0.875rem; color: var(--text-muted);">
            Activity logged at {{ activity.time }}
          </p>
        </DataCard>
      </div>
    </section>
  </PageContainer>
</template>

<style scoped lang="scss">
// Additional component-specific styles if needed
</style>
