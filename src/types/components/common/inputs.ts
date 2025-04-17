import { FieldError, UseFormRegister } from 'react-hook-form'

export interface InputText {
    name: string
    placeHolder?: string | ''
    defaultValue?: string
    error?: FieldError | ''
    style?: string | ''
    label?: string | ''
    register?: ReturnType<UseFormRegister<never>>
}

export interface InputRadio {
    error?: FieldError | ''
    style?: string | ''
    name: string
    items: {
        value: string
        label: string
    }[]
    register?: ReturnType<UseFormRegister<never>>
}
