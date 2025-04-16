import type {
    FontType,
    IconBtnPosition,
    Level,
    StyleProps,
    Variant,
} from '@/types/components/common/button.ts'

export const handleButtonStyleProps = ({
    variant,
    font,
    rounded,
    styles = '',
}: StyleProps = {}): string => {
    const variantConstants: Record<Variant, string> = {
        primary: 'px-[12px] py-[4px] h-[32px]',
        secondary: 'p-[6px]',
        outline: 'border border-[#000] border-[1px]',
    }
    const fontConstants: Record<FontType, string> = {
        type1: 'bg-inherit text-[#00000099] text-[16px] font-[400] leading-[1.5]',
        type2: 'bg-[#003CFF] text-[#ffffff] text-[16px] font-[400] leading-[1.5]',
        noBack: 'text-[16px] font-[400] leading-[1.5]',
    }
    const roundedConstants: Record<Level, string> = {
        sm: 'rounded-[2px]',
        md: 'rounded-[6px]',
        lg: 'rounded-[12px]',
    }

    const varStyle = variant && !styles ? variantConstants[variant] : variantConstants.primary
    const fontStyle = font && !styles ? fontConstants[font] : fontConstants.type1
    const roundStyle = rounded && !styles ? roundedConstants[rounded] : ''

    return `${varStyle} ${fontStyle} ${roundStyle} ${styles}`
}

export const handleIconBtnPosition = (iconPosition: IconBtnPosition) => {
    const iconTypeconstants: Record<IconBtnPosition, string> = {
        left: 'abosolute left-[15px] top-[50%] translate-y-[-50%]',
        right: 'abosolute right-[15px] top-[50%] translate-y-[-50%]',
        full: 'block w-max h-auto',
    }
    return `${iconTypeconstants[iconPosition]}`
}
