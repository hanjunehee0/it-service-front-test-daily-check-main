import { useState } from 'react'
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
    const [isHoverCol, setIsHoverCol] = useState<number | null>(null)
    const [isHoverRow, setIsHoverRow] = useState<number | null>(null)

    const handleMouseOver = ({ rowIdx, colIdx }: { rowIdx: number; colIdx: number }) => {
        setIsHoverCol(colIdx)
        setIsHoverRow(rowIdx)
    }
    const handleMouseLeave = () => {
        setIsHoverCol(null)
        setIsHoverRow(null)
    }

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
                    {tHeader.rows.map((row, rowIdx) => (
                        <tr
                            className={tHeader.rowStyle ? `${tHeader.rowStyle}` : ''}
                            key={`${row}'-'${rowIdx}`}
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
            <table className="w-full relative mt-[-1px] max-h-[145px] border-spacing-0">
                <Scrollbar
                    tagName="tbody"
                    maxHeight="145px"
                    options={{
                        suppressScrollY: `${tBody.length > 5}` ? false : true,
                    }}
                >
                    {tBody.map((row, rowIdx) => (
                        <tr
                            key={`row-${rowIdx}`}
                            className={`${rowIdx === isHoverRow ? 'hover-row' : ''} mt-[-1px]'`}
                        >
                            {Object.entries(row).map(([keys, item], colIdx) => (
                                <td
                                    className={`${bodyStyle.tdStyle ? bodyStyle.tdStyle : ''} ${keys === 'regDate' ? ' text-left ' : 'text-right'} ${keys === 'failed' ? 'bg-[#FFE6E6] text-[#FF0000] ' : ''} ${colIdx === isHoverCol ? 'hover-col' : ''}`}
                                    key={`td-${colIdx}`}
                                    style={{
                                        width: tHeader.colWidths ? tHeader.colWidths[colIdx] : '',
                                    }}
                                    onMouseEnter={() => {
                                        handleMouseOver({ rowIdx, colIdx })
                                    }}
                                    onMouseLeave={() => {
                                        handleMouseLeave()
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
