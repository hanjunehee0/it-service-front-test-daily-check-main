import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useFormContext } from 'react-hook-form'

import QueryBuilder from '@mui/icons-material/QueryBuilder'

export const InputTimePicker = ({ name }: { name: string }) => {
    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange } }) => (
                <div className="relative h-max">
                    <DatePicker
                        selected={value}
                        onChange={onChange}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        dateFormat="h:mm aa"
                        className="w-[100px] pl-[12px] py-[4px] pr-[20px] h-[26px] border border-[#cccccc] text-[#636363] bg-[#fff] rounded-[2px] text-[12px]"
                    />
                    <i className="flex absolute right-[12px] top-[50%] translate-y-[-50%] pointer-events-none text-[14px]">
                        <QueryBuilder fontSize="inherit" />
                    </i>
                </div>
            )}
        />
    )
}
