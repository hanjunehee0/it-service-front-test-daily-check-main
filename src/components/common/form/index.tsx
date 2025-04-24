import { DefaultValues, FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { FormProps } from '@/types/components/common/form'
import { zodResolver } from '@hookform/resolvers/zod'

export const Form = <T extends FieldValues>({
    children,
    onSubmit,
    defaultValues,
    schema,
    className = '',
}: FormProps<T>) => {
    const methods = useForm<T>({
        defaultValues: defaultValues as DefaultValues<T>,
        resolver: zodResolver(schema),
    })
    const { handleSubmit, reset } = methods
    const submit: SubmitHandler<T> = (data) => onSubmit(data)
    const handleReset = () => reset(defaultValues as DefaultValues<T>)
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submit)} onReset={handleReset} className={className}>
                {children}
            </form>
        </FormProvider>
    )
}
