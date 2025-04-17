import { blinkCharging, chargePoint } from '@/api/mock/graph-api-data.ts'
import { DataCard } from '@/components/dashboard/count-card/count-card.tsx'
import { ReturnSumData } from '@/types/components/dashboard/dashboard.ts'
import { getCountCards } from '@/utils/dashboard/get-count-cards.ts'
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
            <article className="mt-[12px] bg-[#ffffff] p-[12px]"></article>
        </>
    )
}
