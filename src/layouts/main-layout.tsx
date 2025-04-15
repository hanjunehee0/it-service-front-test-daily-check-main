import { Outlet } from 'react-router'

export const MainLayout = () => {
    return (
        <div className="h-[100%]">
            {/*  Header  */}
            {/*  Main BG */}
            {/*  Main Contents  */}
            <main className="bg-[rgba(0,0,0,0.05)] p-[20px] h-[100%]">
                <Outlet />
            </main>
        </div>
    )
}
