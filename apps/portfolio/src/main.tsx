import I18n from '@scaleway/use-i18n'
import polyfillIntlListFormat from '@portfolio/polyfills'
import Home from '@portfolio/pages/home'
import { createRoot } from 'react-dom/client'
import config from '@portfolio/config'

const defaultLoad = async ({
  namespace,
  locale,
}: {
  namespace: string
  locale: string
}) =>
  polyfillIntlListFormat(locale).then(
    () =>
      import(
        /* webpackChunkName: "namespace-[request]" */ `./${namespace}/locales/${locale}.ts`
      ),
  )

const loadDateLocale = async (locale: string) =>
  import(
    /* webpackChunkName: "date-fns-locales-[request]" */ `date-fns/locale/${locale}/index.js`
  )

import(`./locales/${config.i18n?.defaultLocale ?? 'en'}.ts`)
  .then(({ default: translations }: { default: Record<string, string> }) => ({
    [`${config.i18n?.defaultLocale ?? 'en'}`]: translations,
  }))
  .then(defaultTranslations => {
    const root = createRoot(document.getElementById('root') as HTMLElement)
    root.render(
      <I18n
        defaultLoad={defaultLoad}
        defaultLocale={config.i18n.defaultLocale}
        defaultTranslations={defaultTranslations}
        enableDebugKey={config.i18n.enableDebugKey}
        loadDateLocale={loadDateLocale}
        enableDefaultLocale={config.i18n.enableDefaultLocale}
        localeItemStorage={config.i18n.localeItemStorage}
        supportedLocales={config.i18n.locales}
      >
        <Home />
      </I18n>,
    )
  })
  .catch(() => undefined)
