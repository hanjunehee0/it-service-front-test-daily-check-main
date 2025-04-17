import { useState } from 'react'

import { SearchParams } from '@/types/hooks/querys.ts'
import { useQuery } from '@tanstack/react-query'

export const useSearchQuery = (initialParams: SearchParams) => {
    // params를 useState로 관리
    const [params, setParams] = useState<SearchParams>(initialParams)

    const fetchData = async () => {
        const response = await fetch('/api/search', {
            method: 'POST',
            body: JSON.stringify(params),
        })
        return response.json()
    }

    const query = useQuery({
        queryKey: ['search', params],
        queryFn: fetchData,
        enabled: false, // 수동 refetch
    })

    return {
        ...query,
        setParams, // params 업데이트 함수 제공
    }
}
