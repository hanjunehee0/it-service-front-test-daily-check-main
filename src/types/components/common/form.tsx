import { PropsWithChildren } from 'react'
import { DefaultValues, FieldValues, SubmitHandler } from 'react-hook-form'

import { ZodSchema } from 'zod'

export type FormProps<T extends FieldValues> = PropsWithChildren<{
    onSubmit: SubmitHandler<T>
    defaultValues: DefaultValues<T>
    schema: ZodSchema<T>
    className?: string
}>
