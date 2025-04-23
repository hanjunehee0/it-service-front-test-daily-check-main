import { BarData } from '@/types/components/dashboard/dashboard.ts'
import {
    Bar,
    BarChart,
    CartesianGrid,
    DefaultLegendContentProps,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

const renderLegend = (props: DefaultLegendContentProps) => {
    const { payload } = props
    if (!payload) return null

    return (
        <ul
            style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                justifyContent: 'flex-end',
                fontSize: 10,
            }}
        >
            {payload.map((entry, index: number) => (
                <li
                    key={`item-${index}`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: 20,
                    }}
                >
                    <svg width="10" height="10" style={{ marginRight: 5 }}>
                        <circle cx="5" cy="5" r="5" fill={entry.color} />
                    </svg>
                    <span>{entry.value}</span>
                </li>
            ))}
        </ul>
    )
}

export const BarChartComp = ({ data }: { data: BarData[] }) => {
    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
            style={{
                marginTop: '12px',
            }}
        >
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                }}
                barCategoryGap="40px"
                barGap={4}
            >
                <CartesianGrid stroke="#ccc" strokeDasharray="0" />
                <XAxis
                    dataKey="type"
                    xAxisId="0"
                    style={{
                        fontSize: 10,
                        color: '#000',
                        fontWeight: 'bold',
                    }}
                    tickLine={false}
                    height={15}
                />
                <XAxis
                    xAxisId="1"
                    dataKey="regDate"
                    axisLine={false}
                    tickLine={false}
                    allowDuplicatedCategory={false}
                    style={{
                        fontSize: 10,
                        color: '#000',
                        fontWeight: 'bold',
                    }}
                    height={15}
                />

                <YAxis
                    domain={[0, 500000]}
                    tickCount={6}
                    tickFormatter={(value) => value.toLocaleString()}
                    style={{
                        fontSize: 10,
                        color: '#000',
                        fontWeight: 'bold',
                    }}
                />
                <Tooltip />
                <Legend
                    content={renderLegend}
                    layout="horizontal"
                    verticalAlign="top"
                    align="right"
                    wrapperStyle={{
                        paddingBottom: 10,
                        color: '#636363',
                        fontWeight: 'bold',
                    }}
                />
                <Line />
                <Bar barSize={6} dataKey="put" width={100} name="PUT" stackId="a" fill="#17AAE6" />
                <Bar barSize={6} dataKey="patch" name="PATCH" stackId="a" fill="#00CED1" />
                <Bar barSize={6} dataKey="delete" name="DELETE" stackId="a" fill="#FF0000" />
                <Bar barSize={6} dataKey="getNPost" name="GET/POST" stackId="a" fill="#800080" />
            </BarChart>
        </ResponsiveContainer>
    )
}
