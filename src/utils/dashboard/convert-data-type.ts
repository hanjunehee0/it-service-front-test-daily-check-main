import {
    BarData,
    CombinedData,
    OriginData,
    ReturnSumData,
    TableBodyRows,
} from '@/types/components/dashboard/dashboard.ts'

export const getCountCards = ({
    chargePointData,
    blinkChargingData,
}: {
    chargePointData: OriginData[]
    blinkChargingData: OriginData[]
}): ReturnSumData[] => {
    const sumData: CombinedData = {}
    const combined = [...chargePointData, ...blinkChargingData]

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
    return Object.entries(sumData)
        .sort(([dataA], [dataB]) => new Date(dataA).getTime() - new Date(dataB).getTime())
        .map(([regDate, values]) => ({
        regDate,
        success: values.stationSuccess + values.tariffSuccess,
        failed: values.stationFailed + values.tariffFailed,
    }))
}

export const getBarCharts = (data: OriginData[]) => {
    const transData: BarData[] = []
    data.forEach((item) => {
        const { regDate, station, tariff } = item

        transData.push({
            regDate,
            type: 'station',
            ...station,
        })
        transData.push({
            regDate,
            type: 'tariff',
            ...tariff,
        })
        // console.log(transData)
    })
    return transData
}

export const getTableData = (data: OriginData[]) => {
    const transData: TableBodyRows = []
    console.log('transData: ', transData)
    data.forEach((item) => {
        const { regDate, station, tariff } = item
        transData.push({
            regDate,
            sPut: station.put,
            sDelete: station.delete,
            sPatch: station.patch,
            tPut: tariff.put,
            tDelete: tariff.delete,
            failed: station.failed + tariff.failed,
        })
    })
    return transData
}
