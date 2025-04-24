import { NavLink } from 'react-router'

import { AnchorTag } from '@/types/components/common/button.ts'

export const Anchor = ({ to, style, label }: AnchorTag) => {
    return (
        <NavLink to={to} className={style ? style : ''}>
            {label}
        </NavLink>
    )
}
