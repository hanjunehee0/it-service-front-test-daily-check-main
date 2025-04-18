import { ButtonTag } from '@/types/components/common/button.ts'
import { Options } from '@/types/components/common/select.ts'
import { TableBodyStyle, TableHeader } from '@/types/components/dashboard/dashboard.ts'

export const TabMenus: ButtonTag[] = [
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

export const topFilter: Options[] = [
    {
        value: 'CP_BC_STATS',
        label: 'Charge Point, Blink Charging 요청 Put/Delete/Patch별 성공/실패 수 및 총 인입량',
    },
    {
        value: 'PUT_DELETE_PATCH_SCHEDULER',
        label: 'Put/delete/patch 처리 스케줄러 성공/실패 수 및 총 인입량',
    },
    {
        value: 'FETCH_MOVE_DAILY',
        label: 'fetchAllStation 이후 moveStationDaily 성공 / 실패 여부 확인',
    },
    {
        value: 'TARIFF_STATION_HOURLY',
        label: '시간별 tariff / station 수집 여부 확인',
    },
    {
        value: 'ERROR_LOGS',
        label: ' 실패 에러 로그 확인',
    },
    {
        value: 'LOGS',
        label: '로그 확인',
    },
    {
        value: 'CP_COLLECTION_COUNTS',
        label: 'CP사별 수집된 개수 확인',
    },
    {
        value: 'COLLECTION_COUNTS',
        label: '각 collection 별 개수 확인 (staion, charger, tariff)',
    },
    {
        value: 'CP_CONVERTER_ERROR',
        label: 'CP사 Converter 에러',
    },
]

export const searchOptions = {
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

export const dataThead: TableHeader = {
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

export const tBodyStyle: TableBodyStyle = {
    tBodyStyle: '',
    tdStyle: 'px-[12px] py-[6px] border border-[#cccccc] text-[12px]',
}
