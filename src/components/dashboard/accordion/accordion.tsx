import { useState } from 'react'

import { IconButton } from '@/components/common/buttons/icon-button/icon-button.tsx'
import { AccordionProps } from '@/types/components/dashboard/dashboard.ts'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

export const Accordion = ({ title, icon, children, defaultOpen = true }: AccordionProps) => {
    const [isShow, setIsShow] = useState(defaultOpen)
    const toggleItem = () => {
        setIsShow((isShow) => !isShow)
        console.log('isShow:', isShow)
    }

    return (
        <>
            <div className="border-b-[1px] relative">
                <IconButton
                    onClick={() => toggleItem()}
                    icon={icon}
                    iconPosition={'left'}
                    style={'flex w-full py-[9px]  items-end gap-[4px] text-[24px]'}
                    label={'Charge Point'}
                    titleStyle={'text-[16px] font-bold'}
                    title={title}
                />
                <KeyboardArrowDownOutlinedIcon
                    className={`
                        absolute right-0 top-[50%] mt-[-12px] ml-auto
                         text-[#636363] text-[18px]
                      `}
                    style={{
                        transform: !isShow ? 'rotate(180deg)' : 'rotate(360deg)',
                        transition: 'transform 500ms ease-in-out',
                    }}
                />
            </div>
            <div
                className={`
                  overflow-hidden border-b-amber-950 transition-all duration-500 ease-in-out
                  ${isShow ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                {children}
            </div>
        </>
    )
}
