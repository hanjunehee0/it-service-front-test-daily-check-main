import { RouteObject, createBrowserRouter } from 'react-router'

import { MainLayout } from '@/layouts/main-layout.tsx'
import { DataIntegrity } from '@/pages/data-integrity/data-integrity.tsx'
import { OperationalStatistical } from '@/pages/operational-statistical/optional-statistical.tsx'
import { ResponseVisualization } from '@/pages/response-visualization/response-visualization.tsx'

const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
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
