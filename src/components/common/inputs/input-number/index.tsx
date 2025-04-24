import { Controller, useFormContext } from 'react-hook-form'

import { InputNumberProps } from '@/types/components/common/inputs.ts'

export const InputNumber = ({ name, label, placeholder, style = '' }: InputNumberProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext()

    const getNestedError = (path: string, errors: any): string | undefined => {
        const paths = path.split('.')
        let current = errors

        for (const key of paths) {
            if (!current[key]) return undefined
            current = current[key]
        }

        return current.message
    }

    const errorMessage = getNestedError(name, errors)

    return (
        <div className="flex align-top gap-[4px]">
            <label className="text-[14px] py-[4px] text-[#333] content-end flex-auto max-w-[100px]">
                {label}
            </label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <input
                        {...field}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder={placeholder}
                        className={`${
                            style ||
                            'min-w-[100px] px-[12px] py-[6px] border border-[#ccc] bg-[#fff] rounded-[2px] text-[12px] text-right text-[#333]'
                        }`}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const value = e.target.value.replace(/[^0-9]/g, '')
                            e.target.value = value
                            field.onChange(value === '' ? 0 : Number(value))
                        }}
                        onKeyDown={(e) => {
                            const allowedKeys = [
                                'Backspace',
                                'Delete',
                                'ArrowLeft',
                                'ArrowRight',
                                'Tab',
                            ]
                            if (!allowedKeys.includes(e.key) && !/^[0-9]$/.test(e.key)) {
                                e.preventDefault()
                            }
                        }}
                    />
                )}
            />
            {errorMessage && <span className="text-[11px] text-red-500">{errorMessage}</span>}
        </div>
    )
}
