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
                    className={`${!isShow ? 'rotate-180' : ''} 'transition-transform duration-300 absolute right-0 top-[50%] mt-[-9px]`}
                    sx={{
                        marginLeft: 'auto',
                        fontSize: '18px',
                        color: '#636363',
                    }}
                />
            </div>
            <div
                className={
                    isShow ? 'h-full border-b-amber-950' : 'h-0 border-b-amber-950 overflow-hidden'
                }
            >
                {children}
            </div>
        </>
    )
}
