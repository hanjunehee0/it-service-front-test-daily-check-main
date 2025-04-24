import { CountCards } from '@/types/components/dashboard/dashboard.ts'
import CalendarMonth from '@mui/icons-material/CalendarMonth'

export const DataCard = ({ regDate, total, success, failed, styles }: CountCards) => {
    return (
        <article
            className={`${styles ? styles : 'data-cards block px-[10px] py-[6px] rounded-[2px] bg-[#f2f5ff] border border-[#c2c4cc]'} `}
        >
            <dl className="text-[#0C0C0D]">
                <dt className="flex gap-[4px] items-baseline pb-[4px] border-b border-[#c2c4cc]">
                    <i className="text-[18px] text-[#0C0C0D]">
                        <CalendarMonth fontSize={'inherit'} />
                    </i>
                    <time dateTime="2025-05-01" className="text-[14px]">
                        {regDate}
                    </time>
                </dt>
                <dd className="mt-[4px] flex gap-[12px] items-baseline justify-start py-[4px] text-[#000]">
                    <em className="inline-block text-[10px]">총계</em>
                    <strong className="inline-block font-[700] text-[16px]">{total}</strong>
                </dd>
                <dd>
                    <ul className="flex items-stretch text-[#000]">
                        <li className="w-[50%]">
                            <em className="block text-[10px]">성공</em>
                            <strong className="block mt-[5px] text-[16px] text-[#007100]">
                                {success}
                            </strong>
                        </li>
                        <li className="w-[50%]">
                            <em className="block text-[10px]">실패</em>
                            <strong className="block mt-[5px] text-[16px] text-[#f00]">
                                {failed}
                            </strong>
                        </li>
                    </ul>
                </dd>
            </dl>
        </article>
    )
}
