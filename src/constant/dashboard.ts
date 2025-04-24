import { TabButtonTag } from '@/types/components/common/button.ts'
import { RadioOption } from '@/types/components/common/inputs.ts'
import { Options } from '@/types/components/common/select.ts'
import { TableBodyStyle, TableHeader } from '@/types/components/dashboard/dashboard.ts'

export const TAB_MENUS: TabButtonTag[] = [
    {
        onClick: undefined,
        label: '입력부',
        type: 'button',
        isActive: false,
    },
    {
        onClick: undefined,
        label: '출력부',
        type: 'button',
        isActive: true,
    },
]

export const TOP_FILTER: Options[] = [
    {
        value: 'cp-bc-stats',
        label: 'Charge Point, Blink Charging 요청 Put/Delete/Patch별 성공/실패 수 및 총 인입량',
    },
    {
        value: 'put-delete-patch-scheduler',
        label: 'Put/delete/patch 처리 스케줄러 성공/실패 수 및 총 인입량',
    },
    {
        value: 'fetch-move-daily',
        label: 'fetchAllStation 이후 moveStationDaily 성공 / 실패 여부 확인',
    },
    {
        value: 'tariff-station-hourly',
        label: '시간별 tariff / station 수집 여부 확인',
    },
    {
        value: 'error-logs',
        label: ' 실패 에러 로그 확인',
    },
    {
        value: 'logs',
        label: '로그 확인',
    },
    {
        value: 'cp-collection-counts',
        label: 'CP사별 수집된 개수 확인',
    },
    {
        value: 'collection-counts',
        label: '각 collection 별 개수 확인 (staion, charger, tariff)',
    },
    {
        value: 'cp-converter-error',
        label: 'CP사 Converter 에러',
    },
]

export const SEARCH_OPTIONS = {
    na: [
        {
            value: 'na',
            label: 'NA',
        },
        {
            value: 'na2',
            label: 'NA2',
        },
        {
            value: 'na3',
            label: 'NA3',
        },
    ],
    kct: [
        {
            value: 'kct',
            label: 'KCT',
        },
        {
            value: 'kct2',
            label: 'KCT2',
        },
        {
            value: 'kct3',
            label: 'KCT3',
        },
    ],
}

export const THEAD_DATA: TableHeader = {
    tableStyle:
        'w-full table-fixed border-spacing-0 text-sm text-center border-t-[#000000] border-t-[2px]',
    rowStyle: '',
    colWidths: ['13.2353%', '14.7059%', '14.7059%', '14.7059%', '14.7059%', '14.7059%', '12.2352%'],
    thStyle:
        'px-[12px] py-[6px] bg-[#F2F2F2] align-top text-left text-[#0C0C0C] text-[14px] font-bold border border-[#C2C2C2]',
    rows: [
        [
            { th: 'Date', rSpan: 2 },
            { th: 'Station', cSpan: 3 },
            { th: 'Tariff', cSpan: 2 },
            { th: '실패', rSpan: 2 },
        ],
        [{ th: 'PUT' }, { th: 'DELETE' }, { th: 'PATCH' }, { th: 'PUT' }, { th: 'DELETE' }],
    ],
}

export const TBODY_STYLE: TableBodyStyle = {
    tBodyStyle: '',
    tdStyle: 'px-[12px] py-[6px] border border-[#cccccc] text-[12px]',
}

export const options: RadioOption[] = [
    { label: 'chargePoint', value: 'chargePoint' },
    { label: 'blinkCharging', value: 'blinkCharging' },
]
