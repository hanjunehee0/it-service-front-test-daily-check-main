import { api } from '@/api/axios'
import { OriginData } from '@/types/components/dashboard/dashboard'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useDataQuery = () => {
    const queryClient = useQueryClient()

    // 데이터 조회
    const { data: dashboardData, isLoading } = useQuery({
        queryKey: ['dashboard'],
        queryFn: async () => {
            try {
                const { data } = await api.get('/api/search')
                return data || []
            } catch (error) {
                console.error('error: ', error)
                return []
            }
        },
    })

    // 데이터 저장
    const { mutate: saveData } = useMutation({
        mutationFn: async (newData: OriginData) => {
            const { data } = await api.post('/api/data', JSON.stringify(newData))
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['dashboard'] })
        },
        onError: (error) => {
            console.error('error: ', error)
        },
    })

    return {
        dashboardData,
        isLoading,
        saveData,
    }
}
