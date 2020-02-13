import axios, { AxiosResponse, Method } from 'axios'

export const createHeaders = () => {
    return {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/json',
    }
}

const URL = `https://${process.env.REACT_APP_API_URL}`


const request = (endpoint: string, method: Method, data?: any): Promise<AxiosResponse> => {
    const headers = createHeaders();
    const url = `${URL}${endpoint}`

    return axios({
        data,
        headers,
        method,
        baseURL: url,
        params: method === 'GET' ? data : {},
    })
}

const get = (endpoint: string, data?: any): Promise<AxiosResponse> => {
    return request(endpoint, 'GET', data)
}

export default {
    get,
}