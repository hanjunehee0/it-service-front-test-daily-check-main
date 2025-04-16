import { ButtonTag, StyleProps } from '@/types/components/common/button.ts'

export type Tabs = string | 'flex gap-2 bg-[#003CFF1A] p-[2px] rounded-[2px]'
export interface TabMenuItem {
    dataProps: ButtonTag[]
    styleProps?: StyleProps
    TabStyle?: Tabs
}
