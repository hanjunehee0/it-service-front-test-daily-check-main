import { HeaderNav } from '@/layouts/header-component/header-items/header-nav.tsx'
import { HeaderTitle } from '@/layouts/header-component/header-items/header-title.tsx'
import { HeaderUtil } from '@/layouts/header-component/header-items/header-util.tsx'

export const HeaderComponent = () => {
    return (
        <header className="flex items-center gap-[32px] h-[50px] px-[20px] bg-[#ffffff] border-b-[1px] border-[#000000] justify-between font-bold text-[18px]">
            <HeaderTitle />
            <HeaderNav />
            <HeaderUtil />
        </header>
    )
}
