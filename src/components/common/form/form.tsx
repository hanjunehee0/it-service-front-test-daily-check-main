import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form'

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
        defaultValues, // 초기값 세팅
        resolver: zodResolver(schema),
    })
    const { handleSubmit, reset } = methods
    const submit: SubmitHandler<T> = (data) => onSubmit(data)
    const handleReset = () => reset(defaultValues)
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submit)} onReset={handleReset} className={className}>
                {children}
            </form>
        </FormProvider>
    )
}
