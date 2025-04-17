import { ButtonTag, StyleProps } from '@/types/components/common/button.ts'

export type Tabs = string | 'flex gap-2 bg-[#003CFF1A] p-[2px] rounded-[2px]'
export interface TabMenuItem {
    dataProps: ButtonTag[]
    styleProps?: StyleProps
    TabStyle?: Tabs
}

export interface CountCards {
    regDate?: string
    total?: number
    success?: number
    failed?: number
    styles?: string
}
interface sumValues {
    stationSuccess: number
    stationFailed: number
    tariffSuccess: number
    tariffFailed: number
}
export type CombinedData = Record<string, sumValues>
export interface ReturnSumData {
    regDate: string
    success: number
    failed: number
}
export interface OriginData {
    regDate: string
    station: {
        put: number
        patch: number
        delete: number
        getNPost: number
        failed: number
    }
    tariff: {
        put: number
        patch: number
        delete: number
        getNPost: number
        failed: number
    }
}
