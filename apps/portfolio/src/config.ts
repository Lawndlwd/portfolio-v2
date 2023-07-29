import { Config } from '@portfolio/types'

export const config: Config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['fr', 'en'],
    enableDefaultLocale: true,
    enableDebugKey: false,
    localeItemStorage: 'locale-item-env-default',
  },
  baseUrl: '',
}

export default config
