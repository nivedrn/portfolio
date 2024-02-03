import { create } from 'zustand'
import { Json } from '@/database.types';

type Store = {
    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void
    appTheme: string
    setAppTheme: (theme: string) => void
    portfolioData: Json | null
    setPortfolioData: (data: Json | null) => void
    editorData: Json | null
    setEditorData: (data: Json | null) => void
}

export const useAppStore = create<Store>()((set) => ({
    isLoading: false,
    setIsLoading: (isLoading) => set(() => ({ isLoading })),
    appTheme: 'light',
    setAppTheme: (theme) => set(() => ({ appTheme: theme })),
    portfolioData: null,
    setPortfolioData: (data) => set(() => ({ portfolioData: data })),
    editorData: null,
    setEditorData: (data) => set(() => ({ editorData: data })),
}))
