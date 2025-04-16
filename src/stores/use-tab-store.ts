import { TabStore } from '@/types/stores/store.ts'
import { create } from 'zustand'

const initialState = {
    activeEl: 1,
}
export const useTabStore = create<TabStore>((set) => ({
    ...initialState,
    setActiveEl: (p: number) => set({ activeEl: p }),
    resetActiveEl: () => set(initialState),
}))
