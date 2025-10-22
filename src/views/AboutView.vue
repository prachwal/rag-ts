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
      <p class="about-description">
        {{ t('about.description') }}
      </p>
    </section>

    <section class="page-section">
      <h2 class="page-section__title">{{ t('about.features') }}</h2>
      
      <div class="features-container">
        <div class="features-grid">
          <div 
            v-for="feature in features" 
            :key="feature"
            class="feature-item"
          >
            <div class="feature-dot"></div>
            <span class="feature-text">
              {{ t(`about.${feature}`) }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="tech-stack-container">
        <h3 class="tech-stack-title">{{ t('about.techStack') }}</h3>
        <div class="tech-stack-grid">
          <div class="tech-stack-item">
            <strong class="tech-stack-label">{{ t('about.frontend') }}:</strong>
            <span class="tech-stack-value">{{ t('about.frontendDesc') }}</span>
          </div>
          <div class="tech-stack-item">
            <strong class="tech-stack-label">{{ t('about.routing') }}:</strong>
            <span class="tech-stack-value">{{ t('about.routingDesc') }}</span>
          </div>
          <div class="tech-stack-item">
            <strong class="tech-stack-label">{{ t('about.state') }}:</strong>
            <span class="tech-stack-value">{{ t('about.stateDesc') }}</span>
          </div>
          <div class="tech-stack-item">
            <strong class="tech-stack-label">{{ t('about.i18n') }}:</strong>
            <span class="tech-stack-value">{{ t('about.i18nDesc') }}</span>
          </div>
          <div class="tech-stack-item">
            <strong class="tech-stack-label">{{ t('about.styling') }}:</strong>
            <span class="tech-stack-value">{{ t('about.stylingDesc') }}</span>
          </div>
        </div>
      </div>
    </section>
  </PageContainer>
</template>

<style scoped lang="scss">
// Additional component-specific styles if needed
.about-description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: var(--text-color);
}

.features-container {
  padding: 2rem;
  background-color: var(--card-bg, oklch(98% 0 0));
  border-radius: 8px;
  border: 1px solid var(--border-color, oklch(90% 0 0));
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.feature-item {
  padding: 1rem;
  background-color: var(--bg-color);
  border-radius: 6px;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.feature-dot {
  width: 8px;
  height: 8px;
  background-color: var(--primary-color);
  border-radius: 50%;
  flex-shrink: 0;
}

.feature-text {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-color);
}

.tech-stack-container {
  padding: 2rem;
  background-color: var(--card-bg, oklch(98% 0 0));
  border-radius: 8px;
  border: 1px solid var(--border-color, oklch(90% 0 0));
}

.tech-stack-title {
  margin: 0 0 1rem 0;
  color: var(--text-color);
}

.tech-stack-grid {
  display: grid;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.tech-stack-item {
  display: flex;
  gap: 0.5rem;
}

.tech-stack-label {
  color: var(--primary-color);
  min-width: 120px;
}

.tech-stack-value {
  color: var(--text-color);
}
</style>
