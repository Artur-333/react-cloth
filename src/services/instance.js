import axios from "axios";

export const exiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})