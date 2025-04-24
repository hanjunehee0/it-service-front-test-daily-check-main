import { OriginData } from '@/types/components/dashboard/dashboard.ts'

type setType = 'blinkCharging' | 'chargePoint'
export interface TabStore {
    activeEl: number
    setActiveEl: (p: number) => void
    resetActiveEl: () => void
}

export interface DataStatus {
    data: OriginData
    setType: setType
    chargePointData: OriginData[]
    blinkChargingData: OriginData[]
    setSaveStatus: (data: OriginData) => void
    setDataType: (type: setType) => void
    saveData: (data: OriginData) => void
    resetStatus: () => void
}
