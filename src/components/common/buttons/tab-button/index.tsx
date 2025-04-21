import { StyleProps, TabButtonTag } from '@/types/components/common/button.ts'
import { handleButtonStyleProps } from '@/utils/button-props.ts'

export const TabButton = ({
    dataProps,
    styleProps,
    index,
}: {
    dataProps: TabButtonTag
    styleProps?: StyleProps
    index: number
}) => {
    const activeFilter = {
        ...styleProps,
        font: dataProps.isActive ? 'type2' : 'type1',
    } as StyleProps
    return (
        <button
            onClick={() => dataProps?.onClick?.(index)}
            type={dataProps?.type || 'button'}
            aria-label={dataProps?.isActive ? 'isActive' : 'none'}
            className={handleButtonStyleProps(activeFilter)}
        >
            {dataProps.label}
        </button>
    )
}
