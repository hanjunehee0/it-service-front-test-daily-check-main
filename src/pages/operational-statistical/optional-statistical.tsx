import { useEffect } from 'react'

import { InputSelect } from '@/components/common/inputs/input-select/input-select.tsx'
import { TabMenu } from '@/components/dashboard/tab-menu/tab-menu.tsx'
import { TabMenus, topFilter } from '@/configs/dashboard.ts'
import { ViewPage } from '@/pages/operational-statistical/view-page/view-page.tsx'
import { WritePage } from '@/pages/operational-statistical/write-page/write-page.tsx'
import { useTabStore } from '@/stores/use-tab-store.ts'
import { ButtonTag } from '@/types/components/common/button.ts'

export const OperationalStatistical = () => {
    const { activeEl, setActiveEl, resetActiveEl } = useTabStore()
    const handleTabActive = (p: number | undefined) => {
        if (p !== undefined) {
            setActiveEl(p)
        }
    }
    const tabMenuData: ButtonTag[] = TabMenus.map((item) => ({
        ...item,
        onClick: (p: number) => handleTabActive(p),
    }))

    const isSelectItem = () => {}

    useEffect(() => {
        return () => resetActiveEl()
    }, [])

    return (
        <div>
            <section className="flex gap-[12px] items-center justify-start">
                <TabMenu
                    tabs={{
                        dataProps: tabMenuData.map((btn, i) => ({
                            ...btn,
                            isActive: i === activeEl,
                        })),
                        TabStyle:
                            'w-[fit-content] flex gap-[2px] bg-[#003CFF1A] p-[2px] rounded-[2px]',
                        styleProps: { rounded: 'sm' },
                    }}
                />
                <InputSelect
                    options={topFilter}
                    onChanges={isSelectItem}
                    labelStyles={'flex-1  max-w-[660px]'}
                    styles={
                        'w-full appearance-none border border-[#ccc] outline-none bg-[#fff] text-[#636363] px-[12px] py-[4px] h-[32px]'
                    }
                />
            </section>
            <section className="mt-[12px] flex gap-[4px] px-[12px] py-[6px] rounded-[2px] border border-[#00000033] bg-[#DADADA]"></section>
            <section className="mt-[12px] bg-[#ffffff] p-[12px]"></section>
            <article className="mt-[12px] bg-[#ffffff] p-[12px]">
                {activeEl === 0 && <WritePage />}
                {activeEl === 1 && <ViewPage />}
            </article>
        </div>
    )
}
