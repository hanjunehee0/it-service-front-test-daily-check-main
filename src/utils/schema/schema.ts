import { z } from 'zod'

export const writeValidation = z.object({
    regDate: z
        .date(),

    station: z
        .object({
            put: z
                .number()
                .min(0, { message: '최소 값은 0이어야 합니다.' })
                .max(200000, { message: '최대 값은 200,000 이하 이어야 합니다.' }),
            patch: z
                .number()
                .min(0, { message: '최소 값은 0이어야 합니다.' })
                .max(200000, { message: '최대 값은 200,000 이하 이어야 합니다.' }),
            delete: z
                .number()
                .min(0, { message: '최소 값은 0이어야 합니다.' })
                .max(200000, { message: '최대 값은 200,000 이하 이어야 합니다.' }),
            getNPost: z
                .number()
                .min(0, { message: '최소 값은 0이어야 합니다.' })
                .max(200000, { message: '최대 값은 200,000 이하 이어야 합니다.' }),
            failed: z
                .number()
                .min(0, { message: '최소 값은 0이어야 합니다.' })
                .max(200000, { message: '최대 값은 200,000 이하 이어야 합니다.' }),
        })
        .refine(
            (station) => {
                const total =
                    station.put + station.patch + station.delete + station.getNPost + station.failed
                return total <= 500000
            },
            { message: 'station 값의 합은 500,000을 초과할 수 없습니다.' }
        ),

    tariff: z
        .object({
            put: z
                .number()
                .min(0, { message: '최소 값은 0이어야 합니다.' })
                .max(200000, { message: '최대 값은 200,000 이하 이어야 합니다.' }),
            patch: z
                .number()
                .min(0, { message: '최소 값은 0이어야 합니다.' })
                .max(200000, { message: '최대 값은 200,000 이하 이어야 합니다.' }),
            delete: z
                .number()
                .min(0, { message: '최소 값은 0이어야 합니다.' })
                .max(200000, { message: '최대 값은 200,000 이하 이어야 합니다.' }),
            getNPost: z
                .number()
                .min(0, { message: '최소 값은 0이어야 합니다.' })
                .max(200000, { message: '최대 값은 200,000 이하 이어야 합니다.' }),
            failed: z
                .number()
                .min(0, { message: '최소 값은 0이어야 합니다.' })
                .max(200000, { message: '최대 값은 200,000 이하 이어야 합니다.' }),
        })
        .refine(
            (tariff) => {
                const total =
                    tariff.put + tariff.patch + tariff.delete + tariff.getNPost + tariff.failed
                return total <= 500000
            },
            { message: 'tariff 값의 합은 500,000을 초과할 수 없습니다.' }
        ),

    setType: z
        .enum(['chargePoint', 'blinkCharging'], { message: '유형을 선택해 주세요.' })
        .optional(),
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
