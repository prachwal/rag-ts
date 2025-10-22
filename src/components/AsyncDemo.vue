<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()

const handleFetchCurrencies = async () => {
  await store.fetchCurrencies()
}

const handleReset = () => {
  store.resetData()
}
</script>

<template>
  <div class="async-demo">
    <h3>NBP Currency Rates Demo</h3>

    <div class="demo-section">
      <h4>Actions:</h4>
      <div class="button-group">
        <button
          @click="handleFetchCurrencies"
          :disabled="store.isLoading"
          class="demo-button"
        >
          {{ store.isLoading ? 'Loading...' : 'Fetch Currency Rates' }}
        </button>

        <button
          @click="handleReset"
          class="demo-button reset"
        >
          Reset
        </button>
      </div>
    </div>

    <div v-if="store.error" class="demo-section">
      <div class="error-message">
        <strong>Error:</strong> {{ store.error }}
      </div>
    </div>

    <div v-if="store.currencies.length > 0" class="demo-section">
      <h4>Currency Rates (PLN):</h4>
      <div class="currencies-grid">
        <div 
          v-for="currency in store.currencies" 
          :key="currency.code"
          class="currency-card"
        >
          <div class="currency-header">
            <div class="currency-flag">
              {{ getCurrencyFlag(currency.code) }}
            </div>
            <div class="currency-code">{{ currency.code }}</div>
          </div>
          <div class="currency-name">{{ currency.currency }}</div>
          <div class="currency-rate">{{ currency.mid.toFixed(4) }} PLN</div>
        </div>
      </div>
    </div>

    <div v-else-if="!store.isLoading && !store.error" class="demo-section">
      <p class="no-data">Click "Fetch Currency Rates" to load current exchange rates from NBP API</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    getCurrencyFlag(code: string): string {
      const flags: { [key: string]: string } = {
        'USD': '🇺🇸',
        'EUR': '🇪🇺',
        'GBP': '🇬🇧',
        'CHF': '🇨🇭',
        'JPY': '🇯🇵',
        'CAD': '🇨🇦',
        'AUD': '🇦🇺',
        'SEK': '🇸🇪',
        'NOK': '🇳🇴',
        'DKK': '🇩🇰',
        'CZK': '🇨🇿',
        'HUF': '🇭🇺',
        'RON': '🇷🇴',
        'BGN': '🇧🇬',
        'HRK': '🇭🇷',
        'TRY': '🇹🇷',
        'RUB': '🇷🇺',
        'BRL': '🇧🇷',
        'MXN': '🇲🇽',
        'ZAR': '🇿🇦',
        'KRW': '🇰🇷',
        'HKD': '🇭🇰',
        'SGD': '🇸🇬',
        'NZD': '🇳🇿',
        'THB': '🇹🇭',
        'MYR': '🇲🇾',
        'PHP': '🇵🇭',
        'IDR': '🇮🇩',
        'INR': '🇮🇳',
        'CNY': '🇨🇳'
      }
      return flags[code] || '🏳️'
    }
  }
}
</script>

<style scoped lang="scss">
.async-demo {
  padding: 2rem;
  background-color: var(--card-bg, oklch(98% 0 0));
  border-radius: 8px;
  border: 1px solid var(--border-color, oklch(90% 0 0));

  h3 {
    margin: 0 0 1.5rem 0;
    color: var(--text-color);
  }

  .demo-section {
    margin-bottom: 2rem;

    h4 {
      margin: 0 0 1rem 0;
      color: var(--text-color);
      font-size: 1.1rem;
    }

    .button-group {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .demo-button {
      padding: 0.5rem 1rem;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover:not(:disabled) {
        opacity: 0.8;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &.reset {
        background-color: var(--bg-color);
        color: var(--text-color);
        border: 1px solid var(--border-color);
      }
    }

    .error-message {
      padding: 1rem;
      background-color: #fee;
      border: 1px solid #fcc;
      border-radius: 4px;
      color: #c33;
    }

    .no-data {
      padding: 1rem;
      text-align: center;
      color: var(--text-color);
      font-style: italic;
    }

    .currencies-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
    }

    .currency-card {
      padding: 1rem;
      background-color: var(--bg-color);
      border-radius: 6px;
      border: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .currency-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .currency-flag {
          font-size: 1.5rem;
        }

        .currency-code {
          font-weight: bold;
          color: var(--primary-color);
          font-size: 1.1rem;
        }
      }

      .currency-name {
        font-size: 0.9rem;
        color: var(--text-color);
        opacity: 0.8;
      }

      .currency-rate {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--text-color);
      }
    }
  }
}
</style>