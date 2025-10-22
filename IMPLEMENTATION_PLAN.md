# Plan Implementacji - Responsywny Layout (Mobile-First)

**Data rozpoczęcia:** 22 października 2025  
**Projekt:** rag-ts (Vue 3 + TypeScript + Vite)

## 🎯 Cel projektu

Implementacja w pełni responsywnego layoutu aplikacji do prezentacji danych z wykorzystaniem:
- ✅ Mobile-First approach
- ✅ Vue Router (routing)
- ✅ Pinia (state management)
- ✅ Vue i18n (internacjonalizacja PL/EN)

## 📐 Architektura layoutu

### Mobile (320px+)
- Jednoszpaltowy layout
- Hamburger menu
- Ukryty sidebar (offcanvas/drawer)
- Karty w pełnej szerokości
- Stack navigation

### Tablet (768px+)
- Dwuszpaltowy grid dla kart
- Opcjonalny wysuwany sidebar
- Większe padding/marginy

### Desktop (1024px+)
- Trójszpaltowy układ z bocznym sidebar
- Stały, widoczny sidebar
- Szersze kontenery
- Grid layout dla głównej struktury

### Wide (1280px+)
- Maksymalna szerokość kontenera z auto-marginami
- Większe odstępy między elementami
- Czteroszpaltowy grid dla kart

## 📋 Checklist zadań

### 1. Instalacja zależności
- [ ] Zainstaluj vue-router
- [ ] Zainstaluj pinia
- [ ] Zainstaluj vue-i18n
- [ ] Zainstaluj typy TypeScript (@types jeśli potrzebne)

### 2. System responsywny (Styles)
- [ ] Rozszerz breakpoints (_breakpoints.scss)
- [ ] Dodaj mixiny mobile-first (respond-from, respond-below)
- [ ] Dodaj utility mixins (flex, grid, containers)
- [ ] Zaktualizuj _media-queries.scss

### 3. Zmienne layoutu
- [ ] Dodaj header-height (mobile, desktop)
- [ ] Dodaj footer-height
- [ ] Dodaj sidebar-width
- [ ] Dodaj container-padding (responsive)
- [ ] Dodaj gaps (grid-gap, flex-gap)
- [ ] Dodaj z-index layers

### 4. Style layoutu
- [ ] Stwórz _layout.scss (główny grid/flex system)
- [ ] Stwórz _header.scss (responsive header)
- [ ] Stwórz _footer.scss (responsive footer)
- [ ] Stwórz _sidebar.scss (offcanvas mobile → fixed desktop)
- [ ] Rozbuduj _cards.scss (responsive grid cards)
- [ ] Stwórz _page.scss (page container/wrapper)

### 5. Komponenty layoutu
- [ ] AppHeader.vue (nawigacja + theme switcher)
- [ ] AppFooter.vue (copyright, linki)
- [ ] AppSidebar.vue (menu + mobile toggle)
- [ ] PageContainer.vue (wrapper dla views)
- [ ] DataCard.vue (karta do prezentacji danych)

### 6. Routing (Vue Router)
- [ ] Stwórz router/index.ts
- [ ] Zdefiniuj routes (Home, About, Dashboard)
- [ ] Stwórz views/HomeView.vue
- [ ] Stwórz views/AboutView.vue
- [ ] Stwórz views/DashboardView.vue

### 7. State Management (Pinia)
- [ ] Stwórz stores/index.ts
- [ ] Stwórz stores/app.ts (layout state: sidebar open/close)
- [ ] Opcjonalnie: stores/data.ts (przykładowe dane)

### 8. Internacjonalizacja (i18n)
- [ ] Stwórz i18n/index.ts
- [ ] Stwórz i18n/locales/pl.ts
- [ ] Stwórz i18n/locales/en.ts
- [ ] Dodaj tłumaczenia dla UI (menu, header, footer)

### 9. Integracja
- [ ] Zaktualizuj App.vue (nowy layout structure)
- [ ] Zaktualizuj main.ts (router, pinia, i18n)
- [ ] Zaktualizuj main.scss (importy nowych styli)

### 10. Testowanie
- [ ] npm run build (bez błędów TypeScript)
- [ ] npm run dev (weryfikacja w przeglądarce)
- [ ] Test responsywności (320px → 1920px)
- [ ] Test routingu
- [ ] Test przełączania języków
- [ ] Test theme switcher

## 🏗️ Struktura plików (po implementacji)

```
src/
├── main.ts (+ router, pinia, i18n)
├── App.vue (nowy layout)
├── router/
│   └── index.ts
├── stores/
│   ├── index.ts
│   └── app.ts
├── i18n/
│   ├── index.ts
│   └── locales/
│       ├── pl.ts
│       └── en.ts
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue
│   └── DashboardView.vue
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   ├── AppFooter.vue
│   │   ├── AppSidebar.vue
│   │   └── PageContainer.vue
│   ├── DataCard.vue
│   ├── HelloWorld.vue
│   └── ThemeSwitcher.vue
└── styles/
    ├── main.scss (zaktualizowany)
    ├── layout/
    │   ├── _app.scss
    │   └── _layout.scss (NOWY)
    ├── components/
    │   ├── _header.scss (NOWY)
    │   ├── _footer.scss (NOWY)
    │   ├── _sidebar.scss (NOWY)
    │   ├── _page.scss (NOWY)
    │   └── _cards.scss (rozszerzony)
    ├── responsive/
    │   ├── _breakpoints.scss (rozszerzony)
    │   └── _media-queries.scss (rozszerzony)
    ├── utilities/
    │   └── _mixins.scss (rozszerzony)
    └── variables/
        └── _spacing.scss (rozszerzony)
```

## 🎨 Konwencje CSS

- **Mobile-First:** Bazowe style dla mobile, rozszerzenia przez @media (min-width)
- **CSS Custom Properties:** Wszystkie kolory przez var(--*)
- **SCSS Variables:** Spacing, typography, sizes
- **BEM-like naming:** .component__element--modifier
- **Scoped styles:** W komponentach Vue gdzie możliwe

## 🔧 Narzędzia i mixins

### Responsive mixins
```scss
@include respond-from(tablet) { ... }  // min-width
@include respond-below(tablet) { ... } // max-width
@include respond-between(mobile, desktop) { ... }
```

### Layout mixins
```scss
@include flex-center;
@include grid-auto-fit($min-width);
@include container($max-width);
```

## 📱 Breakpoints

- **mobile:** 320px (base)
- **tablet:** 768px
- **desktop:** 1024px
- **wide:** 1280px
- **ultra-wide:** 1920px (opcjonalnie)

## ✅ Kryteria sukcesu

1. ✅ Aplikacja responsywna od 320px do 1920px+
2. ✅ Routing działa bezproblemowo
3. ✅ Pinia store zarządza stanem sidebar/menu
4. ✅ i18n przełącza język PL/EN
5. ✅ Build bez błędów TypeScript
6. ✅ Theme system (light/dark/system) zachowany
7. ✅ Mobile-first approach w każdym komponencie
8. ✅ Kod zgodny z istniejącymi konwencjami projektu

---

**Status:** 🚀 W realizacji
**Postęp:** 0/22 zadań
