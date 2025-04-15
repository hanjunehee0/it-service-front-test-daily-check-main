import { RouteObject, createBrowserRouter } from 'react-router'

import { MainLayout } from '@/layouts/main-layout.tsx'
import { DummyPage } from '@/pages/dummy-page/dummy-page.tsx'

const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                handle: { crumb: 'OperationalStatistical Page', title: 'Operational Statistical' },
                element: <DummyPage />,
            },
        ],
    },
]

export const router = createBrowserRouter(routes)
