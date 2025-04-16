export interface TabStore {
    activeEl: number
    setActiveEl: (p: number) => void
    resetActiveEl: () => void
}
