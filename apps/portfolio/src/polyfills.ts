import { shouldPolyfill } from '@formatjs/intl-listformat/should-polyfill'

const polyfillIntlListFormat = async (locale: string) => {
  const unsupportedLocale = shouldPolyfill(locale)

  if (!unsupportedLocale) {
    return
  }

  await import('@formatjs/intl-listformat/polyfill-force')
  await import(`@formatjs/intl-listformat/locale-data/${unsupportedLocale}.js`)
}

export default polyfillIntlListFormat
