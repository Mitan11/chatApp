import axios from 'axios'

export const axiosObject = axios.create({
    baseURL: import.meta.env.MODE === "development" ? import.meta.env.VITE_PUBLIC_BACKEND_URL : "/api",
    withCredentials: true
}) 