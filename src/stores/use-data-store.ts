import { OriginData } from '@/types/components/dashboard/dashboard.ts'
import { DataStatus } from '@/types/stores/store.ts'
import { create } from 'zustand/index'

const initialState = {
    data: {
        regDate: '',
        station: {
            put: 0,
            patch: 0,
            delete: 0,
            getNPost: 0,
            failed: 0,
        },
        tariff: {
            put: 0,
            patch: 0,
            delete: 0,
            getNPost: 0,
            failed: 0,
        },
    },
    setType: 'blinkCharging' as const,
}

export const useDataStore = create<DataStatus>((set) => ({
    ...initialState,
    setSaveStatus: (data: OriginData) =>
        set((state) => ({
            data: { ...state.data, ...data },
        })),
    resetStatus: () => set(initialState),
}))
