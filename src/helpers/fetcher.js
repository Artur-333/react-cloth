import { exiosInstance } from "../services/instance";

export const fetcher = (url) => exiosInstance.get(url).then(res => res.data)