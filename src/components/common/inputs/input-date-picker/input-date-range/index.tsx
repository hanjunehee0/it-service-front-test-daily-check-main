import { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useFormContext } from 'react-hook-form'

import { CustomInputProps } from '@/types/components/common/input-date-picker.ts'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

export const InputDateRange = () => {
    const { control } = useFormContext() // react-hook-form 컨텍스트 가져오기

    return (
        <Controller
            control={control}
            name="dateRange"
            render={({ field: { onChange, value } }) => {
                const [startDate, endDate] = value || [null, null]

                const formatDateRange = () => {
                    const format = (date: Date | null) => date?.toISOString().split('T')[0] ?? ''
                    return `${format(startDate)}${endDate ? ` ~ ${format(endDate)}` : ''}`
                }

                const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
                    ({ onClick }, ref) => (
                        <div className="relative">
                            <input
                                ref={ref}
                                value={formatDateRange()}
                                onClick={onClick}
                                readOnly
                                className="w-[200px] pl-[12px] py-[4px] pr-[20px] h-[26px] border border-[#cccccc] text-[#636363] bg-[#fff] rounded-[2px] text-[12px]"
                            />
                            <i className="absolute right-[12px] top-[50%] mt-[-2px] translate-y-[-50%] pointer-events-none text-[14px]">
                                <CalendarMonthIcon fontSize="inherit" />
                            </i>
                        </div>
                    )
                )

                return (
                    <DatePicker
                        selected={startDate}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(range) => {
                            if (range) onChange(range)
                        }}
                        customInput={<CustomInput />}
                        selectsRange
                        dateFormat="yyyy-MM-dd"
                    />
                )
            }}
        />
    )
}
