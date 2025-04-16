import { forwardRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { CustomInputProps } from '@/types/components/input-date-picker.ts'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

export const InputDateRange = () => {
    // 현재일, 현재일 기준 -1주일 전 (placeholer 용 date)
    const dateNow = new Date()
    const beforeOneWeek = new Date()
    beforeOneWeek.setDate(dateNow.getDate() - 7)
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([beforeOneWeek, dateNow])
    const [startDate, endDate] = dateRange

    // 날짜 표시를 위한 함수
    const formatDateRange = () => {
        if (!startDate) return ''

        const formatDate = (date: Date | null) => {
            if (!date) return ''
            return date.toISOString().split('T')[0] // YYYY-MM-DD 형식
        }

        if (!endDate) return formatDate(startDate)
        return `${formatDate(startDate)} ~ ${formatDate(endDate)}`
    }

    // 커스텀 입력 컴포넌트
    const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
        ({ value: _value, onClick }, ref) => (
            <div className="relative">
                <input
                    ref={ref}
                    className="w-[200px] pl-[12px] py-[4px] pr-[20px] h-[26px] border border-[#636363] bg-[#fff] rounded-[2px] text-[12px]"
                    value={formatDateRange()}
                    onClick={onClick}
                    readOnly
                />
                <i className="absolute right-[12px] top-[50%] mt-[-2px] translate-y-[-50%] pointer-events-none text-[14px]">
                    <CalendarMonthIcon fontSize={'inherit'} />
                </i>
            </div>
        )
    )

    return (
        <div>
            <span className="sr-only">날짜를 선택해 주세요.</span>
            <DatePicker
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                onChange={(update: [Date | null, Date | null] | null) => {
                    if (update) setDateRange(update)
                }}
                customInput={<CustomInput />}
                selectsRange={true}
                dateFormat="yyyy-MM-dd"
            />
        </div>
    )
}
