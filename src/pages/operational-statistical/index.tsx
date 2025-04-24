import { useEffect } from 'react'

import { IconButton } from '@/components/common/buttons/icon-button'
import { Form } from '@/components/common/form'
import { InputDateRange } from '@/components/common/inputs/input-date-picker/input-date-range'
import { InputTimePicker } from '@/components/common/inputs/input-date-picker/input-time-picker'
import { InputSelect } from '@/components/common/inputs/input-select'
import { LoadingComponent } from '@/components/common/loading/index.tsx'
import { TabMenu } from '@/components/dashboard/tab-menu'
import { TabMenus, searchOptions, topFilter } from '@/configs/dashboard.ts'
import { useSearchQuery, useUpdateSearchQuery } from '@/hooks/use-data-query'
import { ViewPage } from '@/pages/operational-statistical/view-page'
import { WritePage } from '@/pages/operational-statistical/write-page'
import { useTabStore } from '@/stores/use-tab-store.ts'
import { TabButtonTag } from '@/types/components/common/button.ts'
import { SearchSchemaType, searchSchema } from '@/utils/schema/schema.ts'
import Refresh from '@mui/icons-material/Refresh'
import Search from '@mui/icons-material/Search'

export const OperationalStatistical = () => {
    const { activeEl, setActiveEl, resetActiveEl } = useTabStore()
    const handleTabActive = (p: number | undefined) => {
        if (p !== undefined) {
            setActiveEl(p)
        }
    }
    const tabMenuData: TabButtonTag[] = TabMenus.map((item) => ({
        ...item,
        onClick: (p: number) => handleTabActive(p),
    }))

    const isSelectItem = (p?: string) => {
        console.log('change-select', p)
    }
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    const today = new Date()
    const { data, isLoading, error } = useSearchQuery({
        dateRange: [oneWeekAgo, today],
        timeFrom: today,
        timeTo: today,
        kct: 'kct',
        na: 'na',
    })
    const { mutate: updateSearchData } = useUpdateSearchQuery()
    const handleSubmit = (formData: SearchSchemaType) => {
        const { dateRange, timeFrom, timeTo, kct, na } = formData

        updateSearchData({
            dateRange,
            timeFrom,
            timeTo,
            kct,
            na,
        })
    }

    useEffect(() => {
        return () => resetActiveEl()
    }, [])

    if (isLoading && !data) return <LoadingComponent />
    if (error)
        return (
            <div>
                <h2>Error</h2>
            </div>
        )
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
                            'w-[fit-content] flex gap-[2px] bg-[#003CFF1A] p-[2px] rounded-[2px] ',
                        styleProps: { rounded: 'sm' },
                    }}
                />
                <InputSelect
                    options={topFilter}
                    onChanges={isSelectItem}
                    labelStyles={'flex-1 max-w-[660px]'}
                    styles={
                        'w-full appearance-none border border-[#ccc] outline-none bg-[#fff] text-[#636363] px-[12px] py-[4px] h-[32px]'
                    }
                />
            </section>
            {activeEl === 1 && (
                <section className="isolate mt-[12px] relative z-2 px-[12px] py-[6px] rounded-[2px] border border-[#00000033] bg-[#DADADA]">
                    <Form
                        schema={searchSchema}
                        defaultValues={{
                            dateRange: [new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), new Date()],
                            timeFrom: new Date(),
                            timeTo: new Date(),
                            kct: 'kct',
                            na: 'na',
                        }}
                        onSubmit={handleSubmit}
                        className="flex gap-[4px]"
                    >
                        <InputDateRange />
                        <InputTimePicker name="timeFrom" />
                        <InputTimePicker name="timeTo" />
                        <InputSelect
                            options={searchOptions.kct}
                            name={'kct'}
                            onChanges={isSelectItem}
                            labelStyles={'flex-1  max-w-[100px]'}
                            styles={
                                'w-full appearance-none border border-[#ccc] outline-none bg-[#fff] text-[#636363] text-[12px] px-[12px] py-[4px] h-[26px]'
                            }
                        />
                        <InputSelect
                            options={searchOptions.na}
                            name={'na'}
                            onChanges={isSelectItem}
                            labelStyles={'flex-1  max-w-[100px]'}
                            styles={
                                'w-full appearance-none border border-[#ccc] outline-none bg-[#fff] text-[#636363] text-[12px] px-[12px] py-[4px] h-[26px]'
                            }
                        />
                        <IconButton
                            icon={<Refresh sx={{ fontSize: 'inherit' }} />}
                            type={'reset'}
                            style={
                                'flex justify-center items-center rounded-[4px] border border-[#636363] bg-[#fff] w-[26px] h-[26px] text-[14px]'
                            }
                            label={'Refresh Button'}
                            iconPosition={'full'}
                        />
                        <IconButton
                            icon={<Search sx={{ fontSize: 'inherit' }} />}
                            type={'submit'}
                            style={
                                'flex justify-center items-center rounded-[4px] border border-[#636363] bg-[#fff] w-[26px] h-[26px] text-[14px]'
                            }
                            label={'Refresh Button'}
                            iconPosition={'full'}
                        />
                    </Form>
                </section>
            )}
            {activeEl === 0 && <WritePage />}
            {activeEl === 1 && <ViewPage />}
        </div>
    )
}
