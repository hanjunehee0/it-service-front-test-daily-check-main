import Scrollbar from 'react-perfect-scrollbar-z'
import 'react-perfect-scrollbar-z/build/styles.css'

import {
    TableBodyRow,
    TableBodyStyle,
    TableHeader,
} from '@/types/components/dashboard/dashboard.ts'

export const TableComponent = ({
    tHeader,
    tBody,
    bodyStyle,
}: {
    tHeader: TableHeader
    tBody: TableBodyRow[]
    bodyStyle: TableBodyStyle
}) => {
    return (
        <div>
            <table className={tHeader.tableStyle}>
                <colgroup>
                    {tHeader.colWidths &&
                        tHeader.colWidths.map((value, idx) => (
                            <col key={`${value}-${idx}`} width={value} />
                        ))}
                </colgroup>
                <thead>
                    {tHeader.rows.map((row, idx) => (
                        <tr
                            className={tHeader.rowStyle ? `${tHeader.rowStyle}` : ''}
                            key={`${row}'-'${idx}`}
                        >
                            {row.map((th, idx) => (
                                <th
                                    key={`${th}-${idx}`}
                                    colSpan={th.cSpan ? th.cSpan : 1}
                                    rowSpan={th.rSpan ? th.rSpan : 1}
                                    className={tHeader.thStyle ? tHeader.thStyle : ''}
                                >
                                    {th.th}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className={bodyStyle.tBodyStyle ? bodyStyle.tBodyStyle : ''}>
                    <tr>
                        <td colSpan={tHeader.colWidths ? tHeader.colWidths.length : 1}>
                            <div></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="w-full relative mt-[-1px]">
                {/*<colgroup>*/}
                {/*    {tHeader.colWidths &&*/}
                {/*        tHeader.colWidths.map((value, idx) => (*/}
                {/*            <col key={`${value}-${idx}`} width={value} />*/}
                {/*        ))}*/}
                {/*</colgroup>*/}
                <Scrollbar
                    tagName="tbody"
                    maxHeight="204px"
                    options={{
                        suppressScrollY: `${tBody.length > 6}` ? false : true,
                    }}
                >
                    {tBody.map((row, idx) => (
                        <tr key={`row-${idx}`}>
                            {Object.entries(row).map(([keys, item], colIdx) => (
                                <td
                                    className={`${bodyStyle.tdStyle ? bodyStyle.tdStyle : ''} ${keys === 'regDate' ? ' text-left ' : 'text-right'} ${keys === 'failed' ? 'bg-[#FFE6E6] text-[#FF0000] ' : ''}

                                    `}
                                    key={`td-${colIdx}`}
                                    style={{
                                        width: tHeader.colWidths ? tHeader.colWidths[colIdx] : '',
                                    }}
                                >
                                    {item}
                                </td>
                            ))}
                        </tr>
                    ))}
                </Scrollbar>
            </table>
        </div>
    )
}
