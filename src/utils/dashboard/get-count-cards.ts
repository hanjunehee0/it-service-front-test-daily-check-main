import { CombinedData, OriginData, ReturnSumData } from '@/types/components/dashboard/dashboard.ts'

export const getCountCards = ({
    chargePoint,
    blinkCharging,
}: {
    chargePoint: OriginData[]
    blinkCharging: OriginData[]
}): ReturnSumData[] => {
    const sumData: CombinedData = {}
    const combined = [...chargePoint, ...blinkCharging]

    combined.forEach((item) => {
        if (!sumData[item.regDate]) {
            sumData[item.regDate] = {
                stationSuccess: 0,
                stationFailed: 0,
                tariffSuccess: 0,
                tariffFailed: 0,
            }
        }

        const stationSuccess = Object.entries(item.station).reduce((sum, [key, value]) => {
            return key !== 'failed' && value ? sum + value : sum
        }, 0)

        sumData[item.regDate].stationSuccess += stationSuccess
        sumData[item.regDate].stationFailed += item.station.failed

        const tariffSuccess = Object.entries(item.tariff).reduce((sum, [key, value]) => {
            return key !== 'failed' && value ? sum + value : sum
        }, 0)

        sumData[item.regDate].tariffSuccess += tariffSuccess
        sumData[item.regDate].tariffFailed += item.tariff.failed
    })
    return Object.entries(sumData).map(([regDate, values]) => ({
        regDate,
        success: values.stationSuccess + values.tariffSuccess,
        failed: values.stationFailed + values.tariffFailed,
    }))
}
