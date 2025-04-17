import React from 'react'
import { DefaultValues, FieldValues } from 'react-hook-form'

import { z } from 'zod'

export interface FormProps<T extends FieldValues> {
    children: React.ReactNode
    onSubmit: (data: T) => void
    defaultValues: DefaultValues<T>
    schema: z.ZodType<T>
    className?: string
}
