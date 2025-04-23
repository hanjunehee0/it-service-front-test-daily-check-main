import { dummys } from '@/api/mock/graph-api-data.ts'
import { OriginData } from '@/types/components/dashboard/dashboard.ts'
import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

let dummy = [...dummys] as OriginData[]

const apiAdapter = (config: InternalAxiosRequestConfig): Promise<AxiosResponse> => {
    const { method, url, data } = config

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (method === 'get' && url?.includes('/')) {
                resolve({
                    status: 200,
                    statusText: 'OK',
                    data: dummy,
                    headers: {},
                    config,
                })
            }
            if (method === 'post') {
                let newDummy = JSON.parse(data)
                if (Array.isArray(newDummy)) {
                    newDummy = newDummy[0]
                }
                dummy = [...dummys, newDummy] as OriginData[]
                resolve({
                    status: 201,
                    statusText: 'Created',
                    data: newDummy,
                    headers: {},
                    config,
                })
            } else {
                reject({
                    status: 400,
                    statusText: 'Bad Request',
                    data: { message: 'Invalid Request' },
                    headers: {},
                    config,
                })
            }
        }, 500)
    })
}

export const api = axios.create({
    baseURL: 'http://acro-test:9009',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json',
    },
    adapter: apiAdapter,
})
