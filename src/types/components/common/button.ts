// Style Types
import * as React from 'react'

export type Variant = 'primary' | 'secondary' | 'outline'
export type FontType = 'type1' | 'type2' | 'noBack'
export type Level = 'sm' | 'md' | 'lg'
export type ButtonType = 'button' | 'reset' | 'submit'
export type IconBtnPosition = 'left' | 'right' | 'full'
// NavLink(A태그의 역할)
export interface AnchorTag {
    to: string
    label: string
}
// Button
export interface ButtonTag {
    onClick?: (p: number) => void | undefined
    label: string | ''
    type?: ButtonType | ''
    isActive?: boolean
}
// Style Interface
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
