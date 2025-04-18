import { blinkCharging, chargePoint } from '@/api/mock/graph-api-data.ts'
import { Accordion } from '@/components/dashboard/accordion/accordion.tsx'
import { BarChartComp } from '@/components/dashboard/charts/bar-chart/bar-chart.tsx'
import { DataCard } from '@/components/dashboard/count-card/count-card.tsx'
import { ReturnSumData } from '@/types/components/dashboard/dashboard.ts'
import { getBarCharts, getCountCards } from '@/utils/dashboard/get-count-cards.ts'
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

export const ViewPage = () => {
    const cloneBC: ReturnSumData[] = [...getCountCards({ blinkCharging, chargePoint })]
    console.log('tete', cloneBC)
    return (
        <>
            <article className="mt-[12px] bg-[#ffffff] p-[12px]">
                <Swiper slidesPerView={6} spaceBetween={12}>
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
                            <BarChartComp data={getBarCharts(chargePoint)} />
                        </div>
                    </Accordion>
                </div>
                <div className="w-[50%]  min-h-[100px]">
                    <Accordion title={'Blink Charging'} icon={<AssessmentOutlinedIcon />}>
                        <div className="mt-[24px] w-full aspect-[600/182]">
                            <BarChartComp data={getBarCharts(blinkCharging)} />
                        </div>
                    </Accordion>
                </div>
            </article>
        </>
    )
}
