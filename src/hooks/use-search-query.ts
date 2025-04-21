import { useState } from 'react'

import { api } from '@/api/axios.ts'
import { SearchParams } from '@/types/hooks/querys.ts'
import { useQuery } from '@tanstack/react-query'

export const useSearchQuery = (initialParams: SearchParams) => {
    const [params, setParams] = useState<SearchParams>(initialParams)

    const fetchData = async () => {
        const { data } = await api.get('/api/search')
        return data
    }

    const query = useQuery({
        queryKey: ['search', params],
        queryFn: fetchData,
    })

    return {
        ...query,
        setParams,
    }
}
