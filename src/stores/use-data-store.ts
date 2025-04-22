// stores/use-data-store.ts
import { blinkCharging, chargePoint } from '@/api/mock/graph-api-data.ts'
import { OriginData } from '@/types/components/dashboard/dashboard.ts'
import { create } from 'zustand'

export interface DataStatus {
    data: OriginData
    setType: 'chargePoint' | 'blinkCharging'
    chargePointData: OriginData[]
    blinkChargingData: OriginData[]
    setSaveStatus: (data: OriginData) => void
    setDataType: (type: 'chargePoint' | 'blinkCharging') => void
    saveData: (data: OriginData) => void
    resetStatus: () => void
}

// 초기 dummy 데이터를 설정
const initialState = {
    data: {
        regDate: new Date().toISOString().split('T')[0],
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
    setType: 'chargePoint' as const,
    chargePointData: [...chargePoint],
    blinkChargingData: [...blinkCharging],
}

export const useDataStore = create<DataStatus>((set) => ({
    ...initialState,
    setSaveStatus: (data: OriginData) =>
        set((state) => ({
            ...state,
            data: { ...state.data, ...data },
        })),
    setDataType: (type: 'chargePoint' | 'blinkCharging') =>
        set((state) => ({
            ...state,
            setType: type,
        })),
    saveData: (data: OriginData) =>
        set((state) => {
            const isChargePoint = data.setType === 'chargePoint'

            return {
                ...state,
                setType: data.setType,
                chargePointData: isChargePoint
                    ? [...state.chargePointData, { ...data }]
                    : state.chargePointData,
                blinkChargingData: !isChargePoint
                    ? [...state.blinkChargingData, { ...data }]
                    : state.blinkChargingData,
            }
        }),
    resetStatus: () =>
        set(() => ({
            ...initialState,
        })),
}))
