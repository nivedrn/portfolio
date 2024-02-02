import { create } from 'zustand'

type Store = {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  appTheme: string
  setAppTheme: (theme: string) => void
}

export const useAppStore = create<Store>()((set) => ({
  isLoading: true,
  setIsLoading: (isLoading) => set(() => ({ isLoading })),
  appTheme: 'light',
  setAppTheme: (theme) => set(() => ({ appTheme: theme })),
}))
