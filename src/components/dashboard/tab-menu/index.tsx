import { PrimaryButton } from '@/components/common/buttons/primary-button'
import { TabMenuItem } from '@/types/components/dashboard/dashboard.ts'

export const TabMenu = ({ tabs }: { tabs: TabMenuItem }) => {
    const tabStyle = tabs.TabStyle

    return (
        <ul className={tabStyle}>
            {tabs.dataProps.map((item, i) => (
                <li key={`${item}-${i}`}>
                    <PrimaryButton
                        dataProps={item}
                        index={i}
                        styleProps={tabs.styleProps ? tabs.styleProps : undefined}
                    />
                </li>
            ))}
        </ul>
    )
}
