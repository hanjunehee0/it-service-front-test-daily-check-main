import { Anchor } from '@/components/common/buttons/anchor/index.tsx'
import { router } from '@/router.tsx'

export const HeaderNav = () => {
    const menus = router?.routes || []
    return (
        <nav className="mr-auto">
            <ul className="flex gap-[40px] flex-1 justify-start">
                {menus[0].children &&
                    menus[0].children.map((menu, idx) => (
                        <li key={`${menu.path + '-' + idx}`}>
                            <Anchor
                                to={menu.path ? menu.path : ''}
                                style={({ isActive, isPending }) => {
                                    return isActive && !isPending ? 'text-[#003cff]' : ''
                                }}
                                label={menu.handle && menu.handle.title ? menu.handle.title : ''}
                            />
                        </li>
                    ))}
            </ul>
        </nav>
    )
}
