import { IconButtons } from '@/types/components/common/button.ts'
import { handleIconBtnPosition } from '@/utils/button-props.ts'

export const IconButton = ({ type, icon, onClick, label, style, iconPosition }: IconButtons) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={style}
            style={iconPosition !== 'full' ? { position: 'relative' } : {}}
        >
            <i className={`${handleIconBtnPosition(iconPosition)}, flex`}>{icon}</i>
            <span className="sr-only">{label}</span>
        </button>
    )
}
