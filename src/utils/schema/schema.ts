import { z } from 'zod'

export const writeValidation = z.object({
    regDate: z.date(),

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

export const searchSchema = z.object({
    dateRange: z
        .tuple([z.date().nullable().default(null), z.date().nullable().default(null)])
        .default([null, null]),
    timeFrom: z.date().nullable().default(null),
    timeTo: z.date().nullable().default(null),
    na: z.enum(['na', 'na2', 'na3']),
    kct: z.enum(['kct', 'kct2', 'kct3']),
})

export type SearchSchemaType = z.infer<typeof searchSchema>

export type WriteValidationType = z.infer<typeof writeValidation>
