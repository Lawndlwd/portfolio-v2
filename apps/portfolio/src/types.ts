import type locales from '@portfolio/locales/en'

export type Locales = 'fr' | 'en'
export type AppLocale = typeof locales

export type Config = {
  i18n: {
    defaultLocale: Locales
    locales: Locales[]
    enableDefaultLocale: boolean
    enableDebugKey: boolean
    localeItemStorage: string
  }
  baseUrl: string
}
