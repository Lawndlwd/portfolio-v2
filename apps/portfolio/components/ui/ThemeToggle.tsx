import { cn } from '@/lib/utils'
import { useDarkModeStrore, useWorksStrore } from '@/store/worksStrore'
import { useAnimation, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { Button } from './button'
import { useChangeLocale, useCurrentLocale } from '@/locales'

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()

  return (
    <motion.div
      className={cn('z-50 w-[200px] flex flex-row gap-2 fixed top-10 right-10')}
    >
      <Button
        className={cn('top-10 h-[3.2rem] w-[5.2rem]  rounded-[50px]')}
        variant="outline"
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }}
      >
        {theme === 'dark' ? (
          <FiSun className="h-[1.5rem] w-[1.5rem] " />
        ) : (
          <FiMoon className=" h-[1.5rem] w-[1.5rem]  " />
        )}
      </Button>
      <Button
        className={cn('top-10 h-[3.2rem] w-[5.2rem]  rounded-[50px]')}
        variant="outline"
        onClick={() => {
          changeLocale(currentLocale === 'en' ? 'fr' : 'en')
        }}
      >
        {currentLocale === 'en' ? 'FR' : 'EN'}
      </Button>
    </motion.div>
  )
}
