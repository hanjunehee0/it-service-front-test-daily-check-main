export interface Options {
    value: string
    label: string
}
export interface SelectTag {
    labelValue?: string | undefined
    labelStyles?: string | ''
    options: Options[]
    styles?: string
    onChanges?: (value?: string) => void
    name?: string
}
