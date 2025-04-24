import { api } from '@/api/axios.ts'
import { OriginData } from '@/types/components/dashboard/dashboard.ts'
import { SearchSchemaType, searchSchema } from '@/utils/schema/schema.ts'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const API_URL = '/api/endpoint'

export const createApiParams = (params: Partial<SearchSchemaType>): SearchSchemaType => {
    return searchSchema.parse(params)
}

const fetchSearchQuery = async (params: SearchSchemaType): Promise<OriginData[]> => {
    const { data } = await api.get<OriginData[]>(`${API_URL}`, { params: createApiParams(params) })
    return data
}

export const useSearchQuery = (params: SearchSchemaType) => {
    return useQuery<OriginData[], Error>({
        queryKey: ['searchQuery'],
        queryFn: () => fetchSearchQuery(params),
        staleTime: 1000 * 60 * 5,
    })
}

export const useUpdateSearchQuery = () => {
    const queryClient = useQueryClient()

    return useMutation<OriginData[], Error, SearchSchemaType>({
        mutationFn: (params: SearchSchemaType) => fetchSearchQuery(params),
        onSuccess: (data, variables) => {
            queryClient.setQueryData(['searchQuery', variables], data)
        },
    })
}
