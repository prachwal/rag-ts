import { describe, it, expect } from 'vitest'
import router from '@/router'

describe('Router', () => {
  it('should have correct routes configured', () => {
    const routes = router.getRoutes()
    
    expect(routes).toHaveLength(5)
    
    const routeNames = routes.map(route => route.name)
    expect(routeNames).toContain('home')
    expect(routeNames).toContain('dashboard')
    expect(routeNames).toContain('about')
    expect(routeNames).toContain('privacy')
    expect(routeNames).toContain('terms')
  })

  it('should have home route at root path', () => {
    const homeRoute = router.getRoutes().find(route => route.name === 'home')
    
    expect(homeRoute).toBeDefined()
    expect(homeRoute?.path).toBe('/')
  })

  it('should have dashboard route', () => {
    const dashboardRoute = router.getRoutes().find(route => route.name === 'dashboard')
    
    expect(dashboardRoute).toBeDefined()
    expect(dashboardRoute?.path).toBe('/dashboard')
  })

  it('should have about route', () => {
    const aboutRoute = router.getRoutes().find(route => route.name === 'about')
    
    expect(aboutRoute).toBeDefined()
    expect(aboutRoute?.path).toBe('/about')
  })

  it('should have privacy route', () => {
    const privacyRoute = router.getRoutes().find(route => route.name === 'privacy')
    
    expect(privacyRoute).toBeDefined()
    expect(privacyRoute?.path).toBe('/privacy')
  })

  it('should have terms route', () => {
    const termsRoute = router.getRoutes().find(route => route.name === 'terms')
    
    expect(termsRoute).toBeDefined()
    expect(termsRoute?.path).toBe('/terms')
  })

  it('should use web history', () => {
    expect(router.options.history).toBeDefined()
  })
})
