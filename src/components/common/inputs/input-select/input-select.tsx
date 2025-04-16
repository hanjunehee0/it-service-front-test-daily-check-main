import * as React from 'react'

import { SelectTag } from '@/types/components/common/select.ts'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const InputSelect = ({
    labelValue,
    options,
    styles,
    onChanges,
    name,
    labelStyles,
}: SelectTag) => {
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChanges(Number(e?.target?.value))
    }

    return (
        <label className={`${labelStyles}` + ' relative overflow-visible'}>
            {labelValue && <span>{labelValue}</span>}
            <select name={name} className={`${styles} z-10 block`} onChange={handleChangeSelect}>
                {options.map((item, i) => (
                    <option value={item.value} key={`${item.label}-${i}`}>
                        {item.label}
                    </option>
                ))}
            </select>
            <i className="flex absolute right-[12px] top-[50%] translate-y-[-50%] pointer-events-none text-[20px]">
                <KeyboardArrowDownIcon fontSize={'inherit'} />
            </i>
        </label>
    )
}
