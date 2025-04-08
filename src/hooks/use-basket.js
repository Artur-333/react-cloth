import useSWR from "swr";
import { fetcher } from "../helpers/fetcher";
import { exiosInstance } from "../services/instance";
import { ApiRoutes } from "../services/constans";


export const useBasket = () => {
    const { data: products, error, isLoading, mutate } = useSWR(ApiRoutes.CART, fetcher)
    const data = products?.length > 0 ? products : []
    if (!data || error) {
        return {
            data: [],
            totalPrice: 0,
            totalCount: 0,
            isSomeProduct: () => { },
            addProduct: () => { },
            removeProduct: () => { },
            clearCart: () => { },
            uptadeProduct: () => { },
            error,
            isLoading
        }
    }

    const isSomeProduct = (productId) => {
        return data.some(item => item.productId === productId)
    }

    const addProduct = async (product) => {
        if (isSomeProduct(product.productId)) {
            return
        }
        try {
            await exiosInstance.post(ApiRoutes.CART, { ...product, count: 1 })
            mutate([...data, product])

        } catch (error) {
            log(error);
        }
    }

    const removeProduct = async (id) => {
        try {
            await exiosInstance.delete(`${ApiRoutes.CART}/${id}`)
            mutate(data.filter(item => item.id !== id))
        } catch (error) {
            console.log(error);
        }
    }

    const clearCart =  () => {
        if (data.length === 0) return
        data.forEach(async (item) => {
            await removeProduct(item.id)
        })
    }

    const uptadeProduct = async (product) => {
        try {
            await exiosInstance.put(`${ApiRoutes.CART}/${product.id}`, product)
            mutate(data.filter(item => item.id === product.id ? product : item))
        } catch (error) {
            console.log(error);
        }
    }

    const totalPrice = data.reduce((acc, item) => acc + item.price * item.count, 0);
    const totalCount = data.reduce((acc, item) => acc + item.count, 0);

    return {
        data,
        totalPrice,
        isSomeProduct,
        addProduct,
        removeProduct,
        clearCart,
        uptadeProduct,
        totalCount,
        error,
        isLoading
    }
};