import * as React from 'react'

export type Variant = 'primary' | 'secondary' | 'outline'
export type FontType = 'type1' | 'type2' | 'noBack'
export type Level = 'sm' | 'md' | 'lg'
export type ButtonType = 'button' | 'reset' | 'submit'
export type IconBtnPosition = 'left' | 'right' | 'full'
export interface AnchorTag {
    to: string
    label: string
}

export interface TabButtonTag {
    onClick?: (p: number) => void | undefined
    label: string | ''
    type?: ButtonType | ''
    isActive?: boolean
}

export interface StyleProps {
    variant?: Variant
    font?: FontType
    rounded?: Level
    styles?: string
}

export interface IconButtons {
    type?: ButtonType
    icon: React.ReactNode
    onClick?: () => void
    title?: string | ''
    titleStyle?: string | ''
    label?: string | ''
    style?: string
    iconPosition: IconBtnPosition | 'full'
}

export interface PrimaryButtonTag {
    onClick?: () => void
    type: ButtonType
    style: string
    label: string
}
