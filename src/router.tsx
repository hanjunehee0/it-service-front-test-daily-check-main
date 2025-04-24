import { Navigate, RouteObject, createBrowserRouter } from 'react-router'

import { MainLayout } from '@/layouts/main-layout'
import { DataIntegrity } from '@/pages/data-integrity'
import { OperationalStatistical } from '@/pages/operational-statistical'
import { ResponseVisualization } from '@/pages/response-visualization'

const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/operational-stats" />,
            },
            {
                path: '/operational-stats',
                handle: { crumb: 'OperationalStatistical Page', title: 'Operational Statistical' },
                element: <OperationalStatistical />,
                children: [
                    {
                        path: ':id',
                    },
                ],
            },
            {
                path: '/data-integrity',
                handle: { crumb: 'DataIntegrity', title: 'Data Integrity' },
                element: <DataIntegrity />,
            },
            {
                path: '/response-visualization',
                handle: { crumb: 'ResponseVisualization Page', title: 'Response Visualization' },
                element: <ResponseVisualization />,
            },
        ],
    },
]

export const router = createBrowserRouter(routes)
