import useSWR from "swr";
import { fetcher } from "../helpers/fetcher";
import { exiosInstance } from "../services/instance";
import { ApiRoutes } from "../services/constans";
import { useBasket } from "./use-basket";



export const useOrder = () => {
    const { data: products, error, isLoading, mutate } = useSWR(ApiRoutes.ORDER, fetcher)
    const {clearCart} = useBasket()
    const data = products?.length > 0 ? products : []
    if (!data || error) {
        return {
            data: [],
            addOrder: () => { },
            error,
            isLoading
        }
    }

    const addOrder = async (product) => {
        try {
            await exiosInstance.post(ApiRoutes.ORDER, product)
            clearCart()
            mutate([...data, product])

        } catch (error) {
            log(error);
        }
    }

   

    return {
        data,
        addOrder,
        error,
        isLoading
    }
};