import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAppStore } from '@/stores/app'

describe('useAppStore', () => {
  beforeEach(() => {
    // Create a fresh pinia instance for each test
    setActivePinia(createPinia())
  })

  describe('Sidebar state', () => {
    it('should initialize with sidebar closed', () => {
      const store = useAppStore()
      expect(store.isSidebarOpen).toBe(false)
    })

    it('should toggle sidebar state', () => {
      const store = useAppStore()
      
      expect(store.isSidebarOpen).toBe(false)
      store.toggleSidebar()
      expect(store.isSidebarOpen).toBe(true)
      store.toggleSidebar()
      expect(store.isSidebarOpen).toBe(false)
    })

    it('should open sidebar', () => {
      const store = useAppStore()
      
      store.openSidebar()
      expect(store.isSidebarOpen).toBe(true)
    })

    it('should close sidebar', () => {
      const store = useAppStore()
      
      store.openSidebar()
      expect(store.isSidebarOpen).toBe(true)
      store.closeSidebar()
      expect(store.isSidebarOpen).toBe(false)
    })
  })

  describe('Async state', () => {
    it('should initialize loading state', () => {
      const store = useAppStore()
      
      expect(store.isLoading).toBe(false)
      expect(store.error).toBe(null)
      expect(store.data).toBe(null)
    })

    it('should fetch data successfully', async () => {
      const store = useAppStore()
      
      await store.fetchData()
      
      expect(store.isLoading).toBe(false)
      expect(store.error).toBe(null)
      expect(store.data).toEqual({
        message: 'Data fetched successfully!',
        timestamp: expect.any(Number)
      })
    })

    it('should set loading state during fetch', async () => {
      const store = useAppStore()
      
      const fetchPromise = store.fetchData()
      expect(store.isLoading).toBe(true)
      
      await fetchPromise
      expect(store.isLoading).toBe(false)
    })
  })

  describe('Currency fetching', () => {
    beforeEach(() => {
      // Mock fetch globally
      globalThis.fetch = vi.fn()
    })

    it('should fetch currencies successfully', async () => {
      const mockResponse = {
        table: 'A',
        no: '001/A/NBP/2025',
        effectiveDate: '2025-01-01',
        rates: [
          { currency: 'US Dollar', code: 'USD', mid: 4.0234 },
          { currency: 'Euro', code: 'EUR', mid: 4.5678 }
        ]
      }

      ;(globalThis.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => [mockResponse]
      })

      const store = useAppStore()
      await store.fetchCurrencies()

      expect(store.isLoading).toBe(false)
      expect(store.error).toBe(null)
      expect(store.currencies).toEqual(mockResponse.rates)
    })

    it('should handle fetch error', async () => {
      ;(globalThis.fetch as any).mockRejectedValueOnce(new Error('Network error'))

      const store = useAppStore()
      await store.fetchCurrencies()

      expect(store.isLoading).toBe(false)
      expect(store.error).toBeTruthy()
      expect(store.currencies).toEqual([])
    })

    it('should handle non-ok response', async () => {
      ;(globalThis.fetch as any).mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found'
      })

      const store = useAppStore()
      await store.fetchCurrencies()

      expect(store.isLoading).toBe(false)
      expect(store.error).toContain('HTTP error')
      expect(store.currencies).toEqual([])
    })
  })
})
