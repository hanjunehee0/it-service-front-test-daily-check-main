import { RouteObject, createBrowserRouter } from 'react-router'

import { MainLayout } from '@/layouts/main-layout'
import { DataIntegrity } from '@/pages/data-integrity'
import { OperationalStatistical } from '@/pages/operational-statistical'
import { ResponseVisualization } from '@/pages/response-visualization'

const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: '/:id',
                handle: { crumb: 'OperationalStatistical Page', title: 'Operational Statistical' },
                element: <OperationalStatistical />,
            },
            {
                path: '/DI',
                handle: { crumb: 'DataIntegrity', title: 'Data Integrity' },
                element: <DataIntegrity />,
            },
            {
                path: '/RV',
                handle: { crumb: 'ResponseVisualization Page', title: 'Response Visualization' },
                element: <ResponseVisualization />,
            },
        ],
    },
]

export const router = createBrowserRouter(routes)
