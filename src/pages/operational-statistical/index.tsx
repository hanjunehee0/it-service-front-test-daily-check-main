import { useEffect } from 'react'
import { DefaultValues } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'

import { IconButton } from '@/components/common/buttons/icon-button'
import { Form } from '@/components/common/form'
import { InputDateRange } from '@/components/common/inputs/input-date-picker/input-date-range'
import { InputTimePicker } from '@/components/common/inputs/input-date-picker/input-time-picker'
import { InputSelect } from '@/components/common/inputs/input-select'
import { LoadingComponent } from '@/components/common/loading/index.tsx'
import { TabMenu } from '@/components/dashboard/tab-menu'
import { SEARCH_OPTIONS, TAB_MENUS, TOP_FILTER } from '@/constant/dashboard.ts'
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
    const tabMenuData: TabButtonTag[] = TAB_MENUS.map((item) => ({
        ...item,
        onClick: (p: number) => handleTabActive(p),
    }))
    const { id } = useParams()
    const navigate = useNavigate()
    const isSelectItem = (p?: string) => {
        navigate(`/${p}`)
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
    const defaultFormValues: DefaultValues<SearchSchemaType> = {
        dateRange: [new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), new Date()],
        timeFrom: new Date(),
        timeTo: new Date(),
        kct: 'kct',
        na: 'na',
    }
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
        if (!id || id === ':id') {
            navigate('/cp-bc-stats', { replace: true })
        }
    }, [id, navigate])

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
        <div className="h-full">
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
                    options={TOP_FILTER}
                    onChanges={isSelectItem}
                    labelStyles={'flex-1 max-w-[660px]'}
                    styles={
                        'w-full appearance-none border border-[#ccc] outline-none bg-[#fff] text-[#636363] px-[12px] py-[4px] h-[32px]'
                    }
                />
            </section>
            {activeEl === 1 && (
                <section className="isolate mt-[12px] relative z-2 px-[12px] py-[6px] rounded-[2px] border border-[#00000033] bg-[#DADADA]">
                    <Form<SearchSchemaType>
                        schema={searchSchema}
                        defaultValues={defaultFormValues}
                        onSubmit={handleSubmit}
                        className="flex gap-[4px]"
                    >
                        <InputDateRange />
                        <InputTimePicker name="timeFrom" />
                        <InputTimePicker name="timeTo" />
                        <InputSelect
                            options={SEARCH_OPTIONS.kct}
                            name={'kct'}
                            labelStyles={'flex-1  max-w-[100px]'}
                            styles={
                                'w-full appearance-none border border-[#ccc] outline-none bg-[#fff] text-[#636363] text-[12px] px-[12px] py-[4px] h-[26px]'
                            }
                        />
                        <InputSelect
                            options={SEARCH_OPTIONS.na}
                            name={'na'}
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
            {id !== 'cp-bc-stats' && (
                <div className="flex h-full justify-center items-center font-bold text-[22px]">
                    {id} 페이지
                </div>
            )}
            {activeEl === 0 && id === 'cp-bc-stats' && <WritePage />}
            {activeEl === 1 && id === 'cp-bc-stats' && <ViewPage />}
        </div>
    )
}
