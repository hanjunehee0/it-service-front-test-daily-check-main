import { PrimaryButton } from '@/components/common/buttons/primary-button'
import { Form } from '@/components/common/form'
import { InputDateSingle } from '@/components/common/inputs/input-date-picker/input-date-single'
import { InputNumber } from '@/components/common/inputs/input-number'
import { InputRadioComp } from '@/components/common/inputs/input-radio'
import { options } from '@/configs/dashboard.ts'
import { useDataStore } from '@/stores/use-data-store.ts'
import { useTabStore } from '@/stores/use-tab-store.ts'
import { writeValidation } from '@/utils/schema/schema.ts'

export const WritePage = () => {
    const { saveData, resetStatus, setType, chargePointData, blinkChargingData, setDataType } =
        useDataStore()
    const { setActiveEl } = useTabStore()

    const defaultValues = {
        regDate: new Date(),
        station: {
            put: 0,
            patch: 0,
            delete: 0,
            getNPost: 0,
            failed: 0,
        },
        tariff: {
            put: 0,
            patch: 0,
            delete: 0,
            getNPost: 0,
            failed: 0,
        },
        setType: setType,
    }
    const handleSubmit = (data: any) => {
        setDataType(data.setType)

        const formattedData = {
            regDate: data.regDate.toISOString().split('T')[0],
            station: {
                put: Number(data.station.put),
                patch: Number(data.station.patch),
                delete: Number(data.station.delete),
                getNPost: Number(data.station.getNPost),
                failed: Number(data.station.failed),
            },
            tariff: {
                put: Number(data.tariff.put),
                patch: Number(data.tariff.patch),
                delete: Number(data.tariff.delete),
                getNPost: Number(data.tariff.getNPost),
                failed: Number(data.tariff.failed),
            },
            setType: data.setType,
        }

        saveData(formattedData)
        setActiveEl(1)
    }

    return (
        <article className="mt-[12px] bg-[#ffffff] p-[12px]">
            <div className="max-w-[1000px] mx-auto">
                <Form
                    schema={writeValidation}
                    defaultValues={defaultValues}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <h2 className="text-[16px] font-bold">데이터 입력</h2>
                    <div className="flex gap-[8px]">
                        <div className="flex flex-col flex-1 gap-[4px]">
                            데이터 종류
                            <InputRadioComp name={'setType'} options={options} />
                        </div>
                        <div className="flex flex-col flex-1 gap-[4px]">
                            등록일
                            <InputDateSingle name={'regDate'} />
                        </div>
                    </div>
                    <div className="flex gap-[8px] isolate">
                        <div className="flex gap-[8px] flex-col mt-[12px] w-[50%] relative z-2 px-[12px] py-[6px] rounded-[2px] border border-[#00000033] bg-[#DADADA]">
                            Station
                            <InputNumber name={'station.put'} label={'put'} />
                            <InputNumber name={'station.patch'} label={'patch'} />
                            <InputNumber name={'station.delete'} label={'delete'} />
                            <InputNumber name={'station.getNPost'} label={'get & Post'} />
                            <InputNumber name={'station.failed'} label={'failed'} />
                        </div>
                        <div className="flex gap-[8px] flex-col mt-[12px] w-[50%] relative z-2 px-[12px] py-[6px] rounded-[2px] border border-[#00000033] bg-[#DADADA]">
                            Tariff
                            <InputNumber name={'tariff.put'} label={'put'} />
                            <InputNumber name={'tariff.patch'} label={'patch'} />
                            <InputNumber name={'tariff.delete'} label={'delete'} />
                            <InputNumber name={'tariff.getNPost'} label={'get & Post'} />
                            <InputNumber name={'tariff.failed'} label={'failed'} />
                        </div>
                    </div>
                    <div className="justify-center flex gap-[16px] mt-[16px]">
                        <PrimaryButton
                            style={
                                'px-6 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300'
                            }
                            onClick={() => resetStatus()}
                            label={'취소'}
                            type={'reset'}
                        />
                        <PrimaryButton
                            style={
                                'px-6 py-2 text-white bg-blue-600 border border-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            }
                            label={'저장'}
                            type={'submit'}
                        />
                    </div>
                </Form>
            </div>
        </article>
    )
}
