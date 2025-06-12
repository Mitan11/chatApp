import axios from 'axios'

export const axiosObject = axios.create({
    // baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
    baseURL: import.meta.env.VITE_PUBLIC_BACKEND_URL,
    withCredentials: true
}) 