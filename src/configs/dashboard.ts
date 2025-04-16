import { ButtonTag } from '@/types/components/common/button.ts'
import { Options } from '@/types/components/common/select.ts'

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
        value: '001',
        label: 'Charge Point, Blink Charging 요청 Put/Delete/Patch별 성공/실패 수 및 총 인입량',
    },
    {
        value: '002',
        label: 'Put/delete/patch 처리 스케줄러 성공/실패 수 및 총 인입량',
    },
    {
        value: '003',
        label: 'fetchAllStation 이후 moveStationDaily 성공 / 실패 여부 확인',
    },
    { value: '004', label: '시간별 tariff / station 수집 여부 확인' },
    { value: '005', label: ' 실패 에러 로그 확인' },
    { value: '006', label: '로그 확인' },
    { value: '007', label: 'CP사별 수집된 개수 확인' },
    {
        value: '008',
        label: '각 collection 별 개수 확인 (staion, charger, tariff)',
    },
    { value: '009', label: 'CP사 Converter 에러' },
]
