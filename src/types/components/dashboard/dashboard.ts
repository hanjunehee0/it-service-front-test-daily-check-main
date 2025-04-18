import { ReactNode } from 'react'

import { ButtonTag, StyleProps } from '@/types/components/common/button.ts'
import { Payload } from 'recharts/types/component/DefaultLegendContent'

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

export interface BarData {
    regDate: string
    type: string
    put: number
    patch: number
    delete: number
    getNPost: number
}

export interface AccordionProps {
    title: string
    icon?: ReactNode
    children: ReactNode
    defaultOpen?: boolean
}

export type TypePayload = Payload[]
