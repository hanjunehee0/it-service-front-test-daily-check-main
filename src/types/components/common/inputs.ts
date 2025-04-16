import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export interface InputText {
    placeHolder?: string | ''
    defaultValue?: string | ''
    error?: FieldError | ''
    style?: string | ''
    label?: string | ''
    register?: UseFormRegisterReturn<string>
}

export interface InputRadio {
    error?: FieldError | ''
    style?: string | ''
    name: string
    items: {
        value: string
        label: string
    }[]
    register?: UseFormRegisterReturn
}
