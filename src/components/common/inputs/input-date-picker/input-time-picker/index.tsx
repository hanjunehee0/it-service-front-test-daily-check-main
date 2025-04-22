import { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useFormContext } from 'react-hook-form'

import {
    CustomInputProps,
    InputTimePickerProps,
} from '@/types/components/common/input-date-picker.ts'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'

export const InputTimePicker = ({ name }: InputTimePickerProps) => {
    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange } }) => {
                const formatTime = (date: Date | null) => {
                    if (!date) return ''
                    const hours = date.getHours()
                    const minutes = date.getMinutes()
                    const ampm = hours >= 12 ? 'PM' : 'AM'
                    const displayHours = hours % 12 || 12
                    const displayMinutes = minutes.toString().padStart(2, '0')
                    return `${displayHours}:${displayMinutes} ${ampm}`
                }

                const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
                    ({ onClick }, ref) => (
                        <div className="relative">
                            <input
                                ref={ref}
                                onClick={onClick}
                                value={formatTime(value)}
                                readOnly
                                className="w-[100px] pl-[12px] py-[4px] pr-[20px] h-[26px] border border-[#cccccc] text-[#636363] bg-[#fff] rounded-[2px] text-[12px]"
                            />
                            <i className="absolute right-[12px] top-[50%] translate-y-[-50%] pointer-events-none text-[14px]">
                                <QueryBuilderIcon fontSize="inherit" />
                            </i>
                        </div>
                    )
                )

                CustomInput.displayName = 'CustomTimeInput'

                return (
                    <DatePicker
                        selected={value}
                        onChange={onChange}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        dateFormat="h:mm aa"
                        customInput={<CustomInput />}
                    />
                )
            }}
        />
    )
}
