import { create } from 'zustand'
type UseWorksStroreType = {
  inViewWorks: string | null
  setInViewWorks: (work: string | null) => void
  gradient: string | null
  setGradient: (gradient: string | null) => void
  inViewHeader: boolean
  setInViewHeader: (isAnimateHeader: boolean) => void
  inViewNav: boolean
  setInViewNav: (isAnimateNav: boolean) => void
  section: number
  setSection: (section: number) => void
}
export const useWorksStrore = create<UseWorksStroreType>((set) => ({
  inViewWorks: null,
  setInViewWorks: (work: string | null) => set({ inViewWorks: work }),
  inViewHeader: true,
  setInViewHeader: (isAnimateHeader: boolean) =>
    set({ inViewHeader: isAnimateHeader }),
  inViewNav: true,
  setInViewNav: (isAnimateNav: boolean) => set({ inViewNav: isAnimateNav }),
  section: 1,
  setSection: (section: number) => set({ section }),
  gradient: null,
  setGradient: (gradient: string | null) => set({ gradient }),
}))

type UseDarkModeType = {
  inDarkMode: boolean
  setInDarkMode: (inDarkMode: boolean) => void
  theme: 'red' | 'blue' | 'yellow' | null
  setTheme: (theme: 'red' | 'blue' | 'yellow' | null) => void
}
export const useDarkModeStrore = create<UseDarkModeType>((set) => ({
  inDarkMode:
    typeof window !== 'undefined' &&
    (localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)),
  setInDarkMode: (inDarkMode: boolean) => {
    if (inDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    }
    set({ inDarkMode })
  },
  theme: null,
  setTheme: (theme: 'red' | 'blue' | 'yellow' | null) => {
    switch (theme) {
      case null:
        document.documentElement.classList.remove(
          'theme-yellow',
          'theme-red',
          'theme-blue'
        )
        localStorage.removeItem('color')

        break
      case 'red':
        document.documentElement.classList.add('theme-red')
        document.documentElement.classList.remove('theme-yellow', 'theme-blue')
        localStorage.setItem('color', 'red')

        break
      case 'blue':
        document.documentElement.classList.add('theme-blue')
        document.documentElement.classList.remove('theme-yellow', 'theme-red')
        localStorage.setItem('color', 'blue')

        break
      case 'yellow':
        document.documentElement.classList.add('theme-yellow')
        document.documentElement.classList.remove('theme-red', 'theme-blue')
        localStorage.setItem('color', 'yellow')

        break

      default:
        break
    }
    set({ theme })
  },
}))
type UseWorksStore = {
  id: string | null
  setId: (id: string | null) => void
}
export const useWorkssStrore = create<UseWorksStore>((set) => ({
  id: null,
  setId: (id: string | null) => set({ id }),
}))
type UseMouseStore = {
  hoverd: boolean
  setHovered: (ihoverdd: boolean) => void
}
export const useMouseStore = create<UseMouseStore>((set) => ({
  hoverd: false,
  setHovered: (hoverd: boolean) => set({ hoverd }),
}))

type UseFeedbackType = {
  inViewFeedback: string | null
  setInViewFeedback: (feedback: string | null) => void
}
export const useFeedback = create<UseFeedbackType>((set) => ({
  inViewFeedback: null,
  setInViewFeedback: (feedback: string | null) =>
    set({ inViewFeedback: feedback }),
}))
