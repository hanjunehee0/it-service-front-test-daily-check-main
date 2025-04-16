import { InputText } from '@/types/components/common/inputs.ts'

export const InputTextComp = ({
    placeHolder,
    defaultValue,
    error,
    style,
    label,
    register,
}: InputText) => {
    return (
        <div className="flex flex-col">
            <label>
                {label && <span className="sr-only">{label}</span>}
                <input
                    type="text"
                    placeholder={placeHolder}
                    defaultValue={defaultValue}
                    className={style}
                    {...register}
                />
            </label>
            {error && <p className="text-red-700 font-bold">{error?.message}</p>}
        </div>
    )
}
