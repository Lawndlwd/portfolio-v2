import I18n from '@scaleway/use-i18n'
import enLocale from 'date-fns/locale/en-GB'
import type { ReactNode } from 'react'
import { config } from '@portfolio/config'

const defaultLoad = async ({ locale }: { namespace: string; locale: string }) =>
  import(`./pages/locales/${locale}`)

/**
 * Basic Wrapper that contains locales and theme providers in order to make
 * simple unit testing.
 */
export const ComponentWrapper = ({ children }: { children?: ReactNode }) => (
  <I18n
    defaultLoad={defaultLoad}
    defaultLocale={config.i18n.defaultLocale}
    defaultTranslations={{}}
    enableDebugKey
    enableDefaultLocale={false}
    localeItemStorage={config.i18n.localeItemStorage}
    defaultDateLocale={enLocale}
    supportedLocales={[]}
  >
    <div data-testid="testing">{children}</div>
  </I18n>
)

/**
 * Advanced Wrapper that contains all necessary providers to run unit testing
 * on a full page of account.
 */
export const PageWrapper = ({ children }: { children: ReactNode }) => (
  <ComponentWrapper>{children}</ComponentWrapper>
)
