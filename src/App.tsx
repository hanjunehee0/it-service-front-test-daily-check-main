import { RouterProvider } from 'react-router'

import '@/index.css'
import QueryClientBoundary from '@/query-client-boundary.tsx'
import { router } from '@/router.tsx'

function App() {
    return (
        <QueryClientBoundary>
            <RouterProvider router={router} />
        </QueryClientBoundary>
    )
}

export default App
