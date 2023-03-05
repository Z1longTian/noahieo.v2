import axios from 'axios'
import urls from '@/assets/js/api/urls'
import { startLoading, endLoading} from '@/assets/js/utils'
// api key
const API_KEY = import.meta.env.VITE_API_KEY

// api url
const BASE_URL = import.meta.env.VITE_API_BASE_URL
// const BASE_URL = 'http://localhost:8000'

// axios instance
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
    }
})

const apiRequest = async (params) => {
    const { target, data, param, loadingMsg } = params
    let { method, url } = urls[target]
    url = url(param)
    return new Promise((resolve, reject) => {
        loadingMsg && startLoading(loadingMsg)
        api({
            method,
            url,
            data
        }).then(res => {
            resolve(res.data)
            loadingMsg && endLoading()
        }).catch(err => {
            reject(err.response.data)
        })
    })
}

// const configs = (await apiRequest('configs')).data

export {
    // configs,
    apiRequest
}