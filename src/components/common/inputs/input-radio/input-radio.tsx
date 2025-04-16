import { InputRadio } from '@/types/components/common/inputs.ts'

export const InputRadioComp = ({ name, error, style, register, items }: InputRadio) => {
    return (
        <>
            <div className="flex flex-row gap-[0.5rem]">
                {items.map((item, i) => (
                    <label
                        key={`${item.label}-${i}`}
                        className={style ? 'flex flex-row items-center gap-[0.25rem]' : ''}
                    >
                        <input
                            type="radio"
                            {...register}
                            name={name}
                            value={item.value}
                            className={style ? 'sr-only peer' : ''}
                        />
                        {style && <span className={style}></span>}
                        {item.label}
                    </label>
                ))}
            </div>
            {error && <p className="text-red-700 font-bold">{error.message}</p>}
        </>
    )
}
