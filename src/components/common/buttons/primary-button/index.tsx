import { PrimaryButtonTag } from '@/types/components/common/button.ts'

export const PrimaryButton = ({ onClick, type, style, label }: PrimaryButtonTag) => {
    return (
        <button onClick={onClick} type={type || 'button'} className={style}>
            {label}
        </button>
    )
}
