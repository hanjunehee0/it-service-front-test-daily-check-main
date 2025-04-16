import { NavLink } from 'react-router'

import { AnchorTag, StyleProps } from '@/types/components/common/button.ts'
import { handleButtonStyleProps } from '@/utils/button-props.ts'

export const Anchor = ({
    dataProps,
    styleProps,
}: {
    dataProps: AnchorTag
    styleProps: StyleProps
}) => {
    return (
        <NavLink
            to={dataProps?.to}
            className={styleProps ? handleButtonStyleProps(styleProps) : ''}
        >
            {dataProps?.label}
        </NavLink>
    )
}
