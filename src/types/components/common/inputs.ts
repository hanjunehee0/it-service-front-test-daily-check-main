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

export interface RadioOption {
    label: string
    value: string | number
}

export interface InputRadio {
    name: string
    label?: string
    options: RadioOption[]
    style?: string
}

export interface InputNumberProps {
    name: string
    label?: string
    placeholder?: string
    style?: string
}
