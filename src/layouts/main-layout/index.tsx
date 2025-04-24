import { Outlet } from 'react-router'

import { HeaderComponent } from '@/layouts/header-component'

export const MainLayout = () => {
    return (
        <div className="h-[100%]">
            <HeaderComponent />
            <main className="bg-[rgba(0,0,0,0.05)] p-[20px] min-h-max h-full">
                <Outlet />
            </main>
        </div>
    )
}
