import { blinkCharging, chargePoint } from '@/api/mock/graph-api-data.ts'
import { Accordion } from '@/components/dashboard/accordion/accordion.tsx'
import { DataCard } from '@/components/dashboard/count-card/count-card.tsx'
import { ReturnSumData } from '@/types/components/dashboard/dashboard.ts'
import { getCountCards } from '@/utils/dashboard/get-count-cards.ts'
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
            <article className="flex mt-[12px] bg-[#ffffff] p-[12px] min-h-[450px]">
                <div className="w-[50%] border-b-amber-950 min-h-[100px]">
                    <Accordion title={'Charge Point'} icon={<AssessmentOutlinedIcon />}>
                        <div>
                            e<br />t<br />
                            etd
                            <br />c<br />
                            deg <br />
                            ㅇㅇ
                            <br />
                            ㅇㄹ
                            <br /> ㅁㄹㅎ ㅁㅇㄹㅎ et
                        </div>
                    </Accordion>
                </div>
                <div className="w-[50%] border-b-amber-950 min-h-[100px]"></div>
            </article>
        </>
    )
}
