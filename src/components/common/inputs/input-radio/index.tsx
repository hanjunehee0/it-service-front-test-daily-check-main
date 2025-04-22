import { Controller, useFormContext } from 'react-hook-form'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import { InputRadio, RadioOption } from '@/types/components/common/inputs.ts'
export const InputRadioComp = ({ name, label, style = '', options }: InputRadio) => {
    const {
        control,
        formState: { errors },
    } = useFormContext()

    const errorMessage = errors[name]?.message as string | undefined

    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-[0.5rem]">
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <>
                            {label && (
                                <label className="text-[12px] py-[4px] text-[#333]">{label}</label>
                            )}
                            <div className="flex flex-row gap-[0.5rem]">
                                {options.map((item: RadioOption, i: number) => (
                                    <label
                                        key={`${item.label}-${i}`}
                                        className="flex flex-row items-center gap-[0.25rem] cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name={name}
                                            value={item.value}
                                            checked={field.value === item.value}
                                            onChange={() => field.onChange(item.value)}
                                            className="sr-only peer"
                                        />
                                        {field.value === item.value &&
                                            <RadioButtonCheckedIcon className="hidden peer-checked:block text-blue-600" />
                                        }
                                        {field.value !== item.value &&
                                            <RadioButtonUncheckedIcon className="peer-checked:hidden text-blue-600" />
                                        }
                                        <div className="relative">
                                        </div>
                                        <span className={style || ''}>{item.label}</span>
                                    </label>
                                ))}
                            </div>
                        </>
                    )}
                />
            </div>
            {errorMessage && <span className="text-[11px] text-red-500 mt-1">{errorMessage}</span>}
        </div>
    )
}
