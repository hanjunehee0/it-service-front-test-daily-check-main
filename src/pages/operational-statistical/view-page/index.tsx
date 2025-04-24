import { Accordion } from '@/components/dashboard/accordion'
import { BarChartComp } from '@/components/dashboard/charts/bar-chart'
import { DataCard } from '@/components/dashboard/count-card'
import { TableComponent } from '@/components/dashboard/table'
import { dataThead, tBodyStyle } from '@/configs/dashboard.ts'
import { useDataStore } from '@/stores/use-data-store.ts'
import { ReturnSumData } from '@/types/components/dashboard/dashboard.ts'
import { getBarCharts, getCountCards, getTableData } from '@/utils/dashboard/convert-data-type.ts'
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'
import 'swiper/css'
import { Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const ViewPage = () => {
    const { chargePointData, blinkChargingData } = useDataStore()
    const cloneBC: ReturnSumData[] = [...getCountCards({ chargePointData, blinkChargingData })]
    return (
        <>
            <article className="mt-[12px] px-[12px] bg-[#ffffff] custom-swiper-wrapper">
                <Swiper
                    modules={[Scrollbar]}
                    scrollbar={{ hide: false, draggable: true }}
                    slidesPerView={6}
                    spaceBetween={12}
                >
                    {cloneBC.map((item, i) => (
                        <SwiperSlide key={`${item.regDate}+${i}`}>
                            <DataCard
                                regDate={item.regDate}
                                success={item.success}
                                failed={item.failed}
                                total={item.success + item.failed}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </article>
            <article className="flex mt-[12px] gap-[10px] bg-[#ffffff] p-[12px] min-h-[450px]">
                <div className="w-[50%] min-h-[100px]">
                    <Accordion title={'Charge Point'} icon={<AssessmentOutlinedIcon />}>
                        <div className="mt-[24px] w-full aspect-[600/182]">
                            <BarChartComp data={getBarCharts(chargePointData)} />
                        </div>
                        <div className="mt-16">
                            <TableComponent
                                tHeader={dataThead}
                                tBody={getTableData(chargePointData)}
                                bodyStyle={tBodyStyle}
                            />
                        </div>
                    </Accordion>
                </div>
                <div className="w-[50%]  min-h-[100px]">
                    <Accordion title={'Blink Charging'} icon={<AssessmentOutlinedIcon />}>
                        <div className="mt-[24px] w-full aspect-[600/182]">
                            <BarChartComp data={getBarCharts(blinkChargingData)} />
                        </div>
                        <div className="mt-16">
                            <TableComponent
                                tHeader={dataThead}
                                tBody={getTableData(blinkChargingData)}
                                bodyStyle={tBodyStyle}
                            />
                        </div>
                    </Accordion>
                </div>
            </article>
        </>
    )
}
