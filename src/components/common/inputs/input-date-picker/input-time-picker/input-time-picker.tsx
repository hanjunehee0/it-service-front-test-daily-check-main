import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import QueryBuilder from '@mui/icons-material/QueryBuilder'

export const InputTimePicker = () => {
    // Date | null 타입으로 선언 (초기값은 new Date()로 설정)
    const [startDate, setStartDate] = useState<Date | null>(new Date())

    return (
        <div className="relative">
            <DatePicker
                selected={startDate}
                className="w-[100px] pl-[12px] py-[4px] pr-[20px] h-[26px] border border-[#636363] bg-[#fff] rounded-[2px] text-[12px]"
                onChange={(date: Date | null) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                showTimeCaption={false}
            />
            <i className="flex absolute right-[12px] top-[50%] translate-y-[-50%] pointer-events-none text-[14px]">
                <QueryBuilder fontSize="inherit" />
            </i>
        </div>
    )
}
