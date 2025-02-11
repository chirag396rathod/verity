import axios from "axios";
import { API_BASE_URL, API_BASE_KEY, BASE_URL } from './config'

const api = axios.create({
    baseURL: API_BASE_URL
})

api.interceptors.request.use((config) => {
    config.headers["token"] = `${window.localStorage.getItem("token")}`
    config.headers["key"] = API_BASE_KEY
    return config
})

api.interceptors.response.use((response) => {
    const data = response?.data
    if (data.Result == "True" || data.Result == "true") {
        return data
    } else {
        if (data?.ResponseCode === 9 || data?.ResponseCode === 6) {
            localStorage.removeItem("token");
            window.location.href = BASE_URL
        } else {
            return Promise.reject(data)
        }
    }
}, (error) => {
    const data = error?.response?.data
    if (data?.ResponseCode === 9 || data?.ResponseCode === 6) {
        localStorage.removeItem("token");
        window.location.href = BASE_URL
    } else {
        return Promise.reject(data)
    }
})

export default api