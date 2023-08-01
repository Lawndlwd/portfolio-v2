import { create } from 'zustand'
type UseWorksStroreType = {
  inViewWorks: string | null
  setInViewWorks: (work: string | null) => void
  inViewHeader: boolean
  setInViewHeader: (isAnimateHeader: boolean) => void
  inViewNav: boolean
  setInViewNav: (isAnimateNav: boolean) => void
  section: number
  setSection: (section: number) => void
}
export const useWorksStrore = create<UseWorksStroreType>(set => ({
  inViewWorks: null,
  setInViewWorks: (work: string | null) => set({ inViewWorks: work }),
  inViewHeader: true,
  setInViewHeader: (isAnimateHeader: boolean) =>
    set({ inViewHeader: isAnimateHeader }),
  inViewNav: true,
  setInViewNav: (isAnimateNav: boolean) => set({ inViewNav: isAnimateNav }),
  section: 1,
  setSection: (section: number) => set({ section }),
}))
