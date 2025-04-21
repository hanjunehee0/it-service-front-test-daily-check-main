import { NavLink } from 'react-router'

import { router } from '@/router.tsx'

export const HeaderNav = () => {
    const menus = router?.routes || []
    return (
        <nav className="mr-auto">
            <ul className="flex gap-[40px] flex-1 justify-start">
                {menus[0].children &&
                    menus[0].children.map((menu, idx) => (
                        <li key={`${menu.path + '-' + idx}`}>
                            <NavLink
                                to={menu.path ? menu.path : ''}
                                className={({ isActive, isPending }) => {
                                    return isActive && !isPending ? 'text-[#003cff]' : ''
                                }}
                            >
                                {menu.handle && menu.handle.title ? menu.handle.title : ''}
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}
