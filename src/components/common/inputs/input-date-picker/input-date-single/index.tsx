import { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useFormContext } from 'react-hook-form'

import {
    CustomInputProps,
    InputTimePickerProps,
} from '@/types/components/common/input-date-picker.ts'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

export const InputDateSingle = ({ name }: InputTimePickerProps) => {
    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
                const formatDate = (date: Date | null) => {
                    if (!date) return ''
                    return date instanceof Date
                        ? date.toISOString().split('T')[0]
                        : new Date(date).toISOString().split('T')[0]
                }

                const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
                    ({ onClick }, ref) => (
                        <div className="relative max-w-[200px]">
                            <input
                                ref={ref}
                                value={formatDate(value)}
                                onClick={onClick}
                                readOnly
                                className="w-full pl-[12px] py-[4px] pr-[32px] h-[32px] border border-[#cccccc] text-[#636363] bg-[#fff] rounded-[2px] text-[14px]"
                            />
                            <i className="absolute right-[12px] top-[50%] mt-[-2px] translate-y-[-50%] pointer-events-none text-[14px]">
                                <CalendarMonthIcon fontSize="inherit" />
                            </i>
                        </div>
                    )
                )

                return (
                    <>
                        <DatePicker
                            selected={value instanceof Date ? value : new Date(value || Date.now())}
                            onChange={(date) => onChange(date)}
                            customInput={<CustomInput />}
                            dateFormat="yyyy-MM-dd"
                        />
                        {error && <p className="text-red-700 text-xs mt-1">{error.message}</p>}
                    </>
                )
            }}
        />
    )
}
