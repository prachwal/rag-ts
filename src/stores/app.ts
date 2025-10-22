import { defineStore } from 'pinia'
import { ref } from 'vue'

// Simulate API calls
const simulateApiCall = (delay: number = 1000) =>
  new Promise(resolve => setTimeout(resolve, delay))

// NBP API interface
interface NBPCurrencyRate {
  currency: string
  code: string
  mid: number
}

interface NBPResponse {
  table: string
  no: string
  effectiveDate: string
  rates: NBPCurrencyRate[]
}

export const useAppStore = defineStore('app', () => {
  // Sidebar state
  const isSidebarOpen = ref(false)

  // Async state
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const data = ref<any>(null)
  const currencies = ref<NBPCurrencyRate[]>([])

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  const closeSidebar = () => {
    isSidebarOpen.value = false
  }

  const openSidebar = () => {
    isSidebarOpen.value = true
  }

  // Async actions (Redux Thunk equivalent)
  const fetchData = async () => {
    isLoading.value = true
    error.value = null

    try {
      // Simulate API call
      await simulateApiCall(1500)
      data.value = { message: 'Data fetched successfully!', timestamp: Date.now() }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error'
    } finally {
      isLoading.value = false
    }
  }

  const saveData = async (payload: any) => {
    isLoading.value = true
    error.value = null

    try {
      // Simulate API call with validation
      if (!payload || typeof payload !== 'object') {
        throw new Error('Invalid payload')
      }

      await simulateApiCall(1000)
      data.value = { ...payload, saved: true, timestamp: Date.now() }
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Save failed'
      throw err // Re-throw to allow component handling
    } finally {
      isLoading.value = false
    }
  }

  // Fetch currency rates from NBP API
  const fetchCurrencies = async () => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch('https://api.nbp.pl/api/exchangerates/tables/A?format=json')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const nbpData: NBPResponse[] = await response.json()
      currencies.value = nbpData[0]?.rates.slice(0, 10) || [] // Get first 10 currencies
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch currencies'
      console.error('Currency fetch error:', err)
    } finally {
      isLoading.value = false
    }
  }

  const resetData = () => {
    data.value = null
    currencies.value = []
    error.value = null
    isLoading.value = false
  }

  return {
    // State
    isSidebarOpen,
    isLoading,
    error,
    data,
    currencies,

    // Synchronous actions
    toggleSidebar,
    closeSidebar,
    openSidebar,

    // Asynchronous actions (Redux Thunk equivalent)
    fetchData,
    saveData,
    fetchCurrencies,
    resetData
  }
})
