import { HeaderNav } from '@/layouts/header-component/header-nav'
import { HeaderTitle } from '@/layouts/header-component/header-title'
import { HeaderUtil } from '@/layouts/header-component/header-util'

export const HeaderComponent = () => {
    return (
        <header className="flex items-center gap-[32px] h-[50px] px-[20px] bg-[#ffffff] border-b-[1px] border-[#000000] justify-between font-bold text-[18px]">
            <HeaderTitle />
            <HeaderNav />
            <HeaderUtil />
        </header>
    )
}
