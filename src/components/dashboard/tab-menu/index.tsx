import { TabButton } from '@/components/common/buttons/tab-button/index.tsx'
import { TabMenuItem } from '@/types/components/dashboard/dashboard.ts'

export const TabMenu = ({ tabs }: { tabs: TabMenuItem }) => {
    const tabStyle = tabs.TabStyle

    return (
        <ul className={tabStyle}>
            {tabs.dataProps.map((item, i) => (
                <li key={`${item}-${i}`}>
                    <TabButton
                        dataProps={item}
                        index={i}
                        styleProps={tabs.styleProps ? tabs.styleProps : undefined}
                    />
                </li>
            ))}
        </ul>
    )
}
