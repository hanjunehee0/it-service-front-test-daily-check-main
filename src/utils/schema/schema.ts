import { z } from 'zod'

export const writeValidation = z.object({
    demo1: z
        .string()
        .min(5, { message: '' })
        .max(12, { message: '' })
        .regex(/^[a-zA-Z0-9가-힣]*$/, { message: '' }),
    numberDemo: z
        .string()
        .regex(/^\d+$/, { message: '숫자만 입력 가능합니다.' }) // 숫자만
        .transform(Number) // 숫자로 변환
        .refine((val) => val >= 0 && val <= 500000, {
            message: '0 이상 500000 이하의 숫자여야 합니다.',
        }),
    type: z.enum(['chargePoint', 'blinkCharging'], { message: '유형을 선택해 주세요.' }).optional(),
})

export const searchFilter = z.object({
    filterSelect: z
        .enum(['chargePoint', 'blinkCharging'], { message: '유형을 선택해 주세요.' })
        .optional(),
})
export const displayDataSelectSchema = z.object({
    filterSelect: z.enum(['001', '002', '003'], {
        required_error: '필터를 선택해야 합니다.',
    }),
})
// const getItems = (p: 'evs' | 'na' | 'kct') => {
//     return searchOptions[p]?.map((option) => option.value) || []
// }
export const SearchSchema = z.object({
    dateRange: z.tuple([z.date().nullable(), z.date().nullable()]),
    timeFrom: z.date().nullable(),
    timeTo: z.date().nullable(),
    na: z.enum(['na', 'na2', 'na3']),
    kct: z.enum(['kct', 'kct2', 'kct3']),
})
export type SearchSchemaType = z.infer<typeof SearchSchema>

export type DisplayDataSelectSchemaType = z.infer<typeof displayDataSelectSchema>

export type WriteValidationType = z.infer<typeof writeValidation>
export type SearchFilterType = z.infer<typeof searchFilter>
